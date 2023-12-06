package com.mbxvoid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {
    @GetMapping("/")
    public String rootPage(){
        return "login";
    }
    
    @GetMapping("/main")
    public String mainPage(){
        return "main";
    }
}
