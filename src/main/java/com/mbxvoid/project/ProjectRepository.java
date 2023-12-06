package com.mbxvoid.project;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectDto ,String>{
    
    @Query("SELECT s FROM ProjectDto s")
    Optional<ProjectDto> findProject();
}
