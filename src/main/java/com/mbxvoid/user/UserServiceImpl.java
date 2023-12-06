package com.mbxvoid.user;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public List<UserDto> searchUserService() throws Exception {
        List<UserDto> list = null;
        try {
             list = userRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
       return list;
    }


    @Override
    public Optional<UserDto> findByUserIdService(UserDto param) throws Exception {
        Optional<UserDto> list = null;
        UserDto dob_param = param;
        try {
            if(userRepository.findUserByUserId(dob_param.getUser_id()).get() != null){
                list = userRepository.findUserByUserId(dob_param.getUser_id());
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new UnsupportedOperationException("Unimplemented method 'findByUserIdService'");
        }
        return list;
    }
}
