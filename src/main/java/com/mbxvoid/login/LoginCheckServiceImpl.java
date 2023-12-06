package com.mbxvoid.login;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbxvoid.user.UserDto;
import com.mbxvoid.user.UserServiceImpl;

@Service
public class LoginCheckServiceImpl implements LoginCheckService{

    @Autowired
    UserServiceImpl userServiceImpl;

    @Override
    public String LoginCheck(UserDto param) throws Exception {
        Optional<UserDto> userList = null;
        String path = "";
        String dob_user_id = "";
        String pram_user_id = "";
        boolean flag = false;
        try {
            //user 정보 조회 
            userList = userServiceImpl.findByUserIdService(param);
            // dob_user_id = userList.get(1).getUser_id();
            dob_user_id = userList.get().getUser_id();
            pram_user_id = param.getUser_id();

            if(dob_user_id.equals(pram_user_id)){
                flag = true;
            }

            if(flag){
                path = "main";
            }else{
                path = "loginFail";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(path);
        return path;
    }
    
}
