package com.a603.ofcourse.domain.course.service;

import com.a603.ofcourse.domain.course.domain.Course;
import com.a603.ofcourse.domain.course.domain.CoursePlace;
import com.a603.ofcourse.domain.course.dto.request.AddCourseRequestDto;
import com.a603.ofcourse.domain.course.repository.CoursePlaceRepository;
import com.a603.ofcourse.domain.place.domain.Place;
import com.a603.ofcourse.domain.place.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CourseService {
    private final PlaceService placeService;
    private final CoursePlaceRepository coursePlaceRepository;

    /**
     * @author 손현조
     * @date 2024-03-20
     * @description 코스를 생성
     **/
    public void addCourse(AddCourseRequestDto requestDto) {
        Course newCourse = Course.builder()
                .title(requestDto.getCourseTitle())
                .hashKey("")
                .build();
        String hashKey = addPlaceInCourse(newCourse, requestDto.getPlaceIdList());
        newCourse.updateHashKey(hashKey);
    }

    /**
     * @author 손현조
     * @date 2024-03-20
     * @description 장소들을 코스에 추가 후 hashKey 생성
     **/
    private String addPlaceInCourse(Course course, List<Integer> placeIdList) {
        StringBuilder hashKeyBuilder = new StringBuilder(course.getHashKey());

        for (Integer placeId : placeIdList) {
            Place place = placeService.findById(placeId);

            CoursePlace coursePlace = new CoursePlace(course, place);
            coursePlaceRepository.save(coursePlace);

            hashKeyBuilder.append(":").append(placeId);
        }
        return hashKeyBuilder.toString();
    }
}
