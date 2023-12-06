package com.mbxvoid.user;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public List<UserDto> searchUserService() throws Exception;
    public Optional<UserDto> findByUserIdService(UserDto param) throws Exception;
}
