package com.mbxvoid.login;



import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mbxvoid.user.UserDto;

@RestController
@RequestMapping("/login")
public class LoginCheckController {

    @Autowired
    LoginCheckService service;

    @PostMapping("/loginCheck")
    public List<Object> LoginChec(@RequestBody UserDto param){
        List<Object> list = new ArrayList<>();
        String path = "";
        try {
             path = service.LoginCheck(param);
             list.add(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
}
