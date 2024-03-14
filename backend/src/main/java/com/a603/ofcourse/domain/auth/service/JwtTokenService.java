package com.a603.ofcourse.domain.auth.service;

import com.a603.ofcourse.domain.exception.CustomException;
import com.a603.ofcourse.domain.exception.ErrorCode;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.Random;

/*
JWT 토큰 생성, 조회 관련 서비스
 */
@Service
public class JwtTokenService implements InitializingBean {
    private long accessTokenExpirationInSeconds;
    private long refreshTokenExpirationInSeconds;
    private final String secretKey;
    private static Key key;

    public JwtTokenService(
            @Value("${jwt.access.token.expiration.seconds}") long accessTokenExpirationInSeconds,
            @Value("${jwt.refresh.token.expiration.seconds}") long refreshTokenExpirationInSeconds,
            @Value("${jwt.token.secret-key}") String secretKey
    ){
        this.accessTokenExpirationInSeconds = accessTokenExpirationInSeconds * 1000;
        this.refreshTokenExpirationInSeconds = refreshTokenExpirationInSeconds * 1000;
        this.secretKey = secretKey;
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 빈 주입받은 후 실행되는 메서드. 빈이 초기화 될 때 secretKey를 이용하여 실제 키를 생성
     */
    @Override
    public void afterPropertiesSet(){
        //secretKey를 Base64로 인코딩한 후, 해당 인코딩된 키를 다시 디코딩하여 실제 키를 얻는다.
        this.key = getKeyFromBase64EncodedKey(encodeBase64SecretKey(secretKey));
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 액세스토큰 생성
     */
    public String createAccessToken(String payload){
        //페이로드를 포함한 액세스 토큰을 생성
        return createToken(payload, accessTokenExpirationInSeconds);
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 리프레시토큰 생성
     */
    public String createRefreshToken(){
        //1. 길이가 7인 바이트 배열 생성.(랜덤한 바이트 값으로 초기화됨 -> 보안성 증대)
        byte[] array = new byte[7];
        //2. 새로운 Random 객체를 생성하여 랜덤한 바이트 값을 채움
        new Random().nextBytes(array);
        //3. 바이트 배열을 UTF-8 문자열로 변환
        String generatedString = new String(array, StandardCharsets.UTF_8);
        //4. 새로운 리프레시 토큰 생성
        return createToken(generatedString, refreshTokenExpirationInSeconds);
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 주어진 페이로드를 포함한 토큰을 생성
     */
    public String createToken(String payload, long expireLength) {
        //1. 페이로드를 포함한 클레임 객체 생성
        Claims claims = Jwts.claims().setSubject(payload);
        //2. 현재 시간 나타내는 Date 객체 생성 (토큰의 발급 시간)
        Date now = new Date();
        //3. 현재시간에 만료기간을 더해 토큰의 유효기간 객체 생성
        Date validity = new Date(now.getTime() + expireLength);
        //4. 토큰을 build (페이로드 클레임, 발급 시간, 만료 시간)
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                //설정한 정보로 토큰을 서명.(key 사용, 서명 알고리즘 선택)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 주어진 토큰에서 페이로드를 추출하여 서브젝트를 반환
     */
    public String getPayload(String token){
        try{
            //1. 토큰을 파싱하여 토큰의 페이로드에서 서브젝트(사용자 식별 정보)를 추출
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
            //2. 토큰이 만료되었을 경우
        }catch (ExpiredJwtException e){
            // 만료된 토큰의 서브젝트를 반환 (만료되었더라도 만료 전에 설정한 서브젝트를 반환하기 위함 -> 정보를 최대한 활용하기 위함으로 만료된 토큰에서 사용자의 아이디나 권한 등을 가져와서 작업 수행이 가능함)
            return e.getClaims().getSubject();
        }catch(JwtException e){
            //예외 방생 시 예외 알리기
            throw new CustomException(ErrorCode.UNAUTHORIZED);
        }
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 토큰이 유효한지를 검증하고 유효한 경우에는 만료 여부를 확인하여 결과를 반환
     */
    public boolean validateToken(String token){
        try{
            //1. 토큰을 파싱하여 클레임을 가져옴 (서명이 올바를 경우 클레임 추출)
            Jws<Claims> claimsJws = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token);
            //2. 현재 시간이 토큰의 만료 시간 이전이면 true 반환하고 아니면 false 반환
            return !claimsJws.getBody().getExpiration().before(new Date());
        }catch (JwtException | IllegalArgumentException exception){
            return false;
        }
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 주어진 키를 Base64로 인코딩
     */
    private String encodeBase64SecretKey(String secretKey){
        //UTF-8로 인코딩한 후 바이트 배열로 전환된 것을 Base64로 인코딩
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 인코딩된 문자열에서 키 추출
     */
    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey){
        //1. Base64로 인코딩된 문자열을 바이트 배열로 디코딩
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        //2. 디코딩된 바이트 배열로 HMAC SHA 키 생성
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;
    }

    /*
    작성자 : 김은비
    작성일자  : 2024-03-13
    작성내용 : 클라이언트 쿠키에 리프레시토튼 저장
     */
    public void addRefreshTokenToCookie(String refreshToken, HttpServletResponse response){
        Long age = refreshTokenExpirationInSeconds;
        Cookie cookie = new Cookie("refresh_token", refreshToken);
        cookie.setPath("/");
        cookie.setMaxAge(age.intValue());
        cookie.setHttpOnly(true);
        response.addCookie(cookie);
    }
}
