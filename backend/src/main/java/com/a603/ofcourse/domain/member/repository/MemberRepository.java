package com.a603.ofcourse.domain.member.repository;

import com.a603.ofcourse.domain.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
}
