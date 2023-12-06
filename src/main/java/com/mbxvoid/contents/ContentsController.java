package com.mbxvoid.contents;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path ="contents")
public class ContentsController {
    
    @Autowired
    private final ContentsService contentsService;

    public ContentsController(ContentsService contentsService){
        this.contentsService = contentsService;
    }
    @PostMapping("/searchContents")
    public List<ContentsDto> searchContents() throws Exception{
        return contentsService.searchContents();
    }

}
