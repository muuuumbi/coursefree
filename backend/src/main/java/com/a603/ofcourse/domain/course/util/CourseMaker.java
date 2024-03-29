package com.a603.ofcourse.domain.course.util;

import com.a603.ofcourse.domain.course.dto.request.AddCourseRequestDto;
import com.a603.ofcourse.domain.place.dto.PlaceDto;
import com.a603.ofcourse.domain.place.service.PlaceService;
import com.a603.ofcourse.global.domain.Points;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Scope("prototype")
@Component
@RequiredArgsConstructor
public class CourseMaker {
    private final PlaceService placeService;

    private int size;
    private double minDist;
    private List<String> categoryList;
    private List<Integer> secondCourse;
    private Map<String, boolean[]> visMap;
    Map<String, List<PlaceDto>> categoryType;


    public AddCourseRequestDto makeFirstCourse(List<String> categoryList, Map<String, List<PlaceDto>> categoryType) {
        Map<String, Integer> index = new HashMap<>();
        for (String category : categoryType.keySet()) {
            index.put(category, 0);
        }
        List<Integer> placeIdList = new ArrayList<>();
        for (String category : categoryList) {
            placeIdList.add(categoryType.get(category).get(index.get(category)).getId());
            index.put(category, index.get(category) + 1);
        }
        return new AddCourseRequestDto("추천 코스", placeIdList);
    }

    public AddCourseRequestDto makeSecondCourse(List<String> categoryList, Map<String, List<PlaceDto>> categoryType) {
        init(categoryList, categoryType);
        for (String category : categoryType.keySet()) {
            visMap.put(category, new boolean[5]);
        }
        DFS(0, new int[size]);
        return new AddCourseRequestDto("추천 코스", secondCourse);
    }

    private void DFS(int L, int[] placeArr) {
        if (L == size) {
            updateMinDist(placeArr);
            return;
        }
        for (int i = 0; i < size; i++) {
            if (visMap.get(categoryList.get(L))[i]) continue;

            visMap.get(categoryList.get(L))[i] = true;
            placeArr[L] = categoryType.get(categoryList.get(L)).get(i).getId();
            DFS(L + 1, placeArr);
            visMap.get(categoryList.get(L))[i] = false;
        }
    }

    private void init(List<String> categoryList, Map<String, List<PlaceDto>> categoryType) {
        visMap = new HashMap<>();
        size = categoryList.size();
        minDist = Double.MAX_VALUE;

        this.categoryList = categoryList;
        this.categoryType = categoryType;

        secondCourse = new ArrayList<>();
    }

    private void updateMinDist(int[] placeArr) {
        double totalDist = 0;
        for (int i = 1; i < size; i++) {
            Points points1 = placeService.findById(placeArr[i - 1]).getPoints();
            Points points2 = placeService.findById(placeArr[i]).getPoints();
            totalDist += Points.getDistance(points1, points2);
        }
        if (totalDist < minDist) {
            minDist = totalDist;
            updateSecondCourse(placeArr);
        }
    }

    private void updateSecondCourse(int[] placeArr) {
        secondCourse = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            secondCourse.add(placeArr[i]);
        }
    }
}
