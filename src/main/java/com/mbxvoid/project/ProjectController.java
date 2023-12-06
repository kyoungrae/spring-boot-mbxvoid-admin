package com.mbxvoid.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path ="project")
public class ProjectController {
    
    @Autowired
    private final ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }
    @PostMapping("/searchProject")
    public List<ProjectDto> searchProject() throws Exception{
        return projectService.searchProject();
    }

}
