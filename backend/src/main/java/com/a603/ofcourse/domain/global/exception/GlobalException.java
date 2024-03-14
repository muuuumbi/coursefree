package com.a603.ofcourse.domain.global.exception;

import lombok.Getter;

@Getter
public class GlobalException extends RuntimeException {
    private final int satausCode;
    private final String errorCode;
    private final String message;

    public GlobalException(ErrorCode errorCode){
        this.satausCode = errorCode.getStatusCode();
        this.errorCode = errorCode.getErrorCode();
        this.message = errorCode.getMessage();
    }
}
