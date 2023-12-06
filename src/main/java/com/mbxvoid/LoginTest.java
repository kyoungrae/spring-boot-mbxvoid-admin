package com.mbxvoid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/test")
public class LoginTest {
    @GetMapping("/test")
    public String loginTest(){
        return "main";
    }
}
