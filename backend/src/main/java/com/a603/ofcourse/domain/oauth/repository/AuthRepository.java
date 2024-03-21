package com.a603.ofcourse.domain.oauth.repository;

import com.a603.ofcourse.domain.oauth.dto.response.RefreshTokenResponse;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.data.repository.CrudRepository;

@EnableRedisRepositories
public interface AuthRepository extends CrudRepository<RefreshTokenResponse, String> {
}
