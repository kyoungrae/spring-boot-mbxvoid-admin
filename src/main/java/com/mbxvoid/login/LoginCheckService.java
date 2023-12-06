package com.mbxvoid.login;

import com.mbxvoid.user.UserDto;

public interface LoginCheckService {
    public String LoginCheck(UserDto param) throws Exception;
}
