package com.a603.ofcourse.domain.oauth.exception;

import com.a603.ofcourse.domain.global.exception.ErrorCode;
import com.a603.ofcourse.domain.global.exception.GlobalException;

public class OauthException extends GlobalException {

    public OauthException(ErrorCode errorCode) {
        super(errorCode);
    }
}
