package com.mbxvoid.project;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService{

   private final ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }
    @Override
    public List<ProjectDto> searchProject() throws Exception {
        List<ProjectDto> list = null;
        try {
            list = projectRepository.findAll();
            System.out.println(list.get(0).getPrj_nm());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
    
}
