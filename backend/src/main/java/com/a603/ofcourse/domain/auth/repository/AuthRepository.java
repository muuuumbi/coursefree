package com.a603.ofcourse.domain.auth.repository;

import com.a603.ofcourse.domain.auth.dto.response.RefreshTokenResponse;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.data.repository.CrudRepository;

@EnableRedisRepositories
public interface AuthRepository extends CrudRepository<RefreshTokenResponse, String> {
}
