FROM openjdk:17-jdk-alpine AS builder

# .env
ENV USE_PROFILE USE_PROFILE

# necessary files copy
COPY backend/gradlew .
COPY backend/build.gradle .
COPY backend/settings.gradle .
COPY backend/gradle gradle
COPY backend/src src

# 권한 변경
RUN chmod +x ./gradlew

# 백엔드 빌드
RUN ./gradlew clean bootJar

FROM openjdk:17-jdk

# 빌드 파일 복사
COPY --from=builder build/libs/*.jar app.jar

# 포트 8081 공개
EXPOSE 8081

# 환경변수 적용 및 실행
ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=${USE_PROFILE}", "/app.jar"]
