package com.a603.ofcourse.domain.schedule.repository;

import com.a603.ofcourse.domain.schedule.domain.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
    List<Schedule> findSchedulesByCoupleIdAndAndScheduleDate_Month(int coupleId, int month);
}
