package com.mbxvoid.contents;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentsRepository extends JpaRepository<ContentsDto ,String>{
    
    @Query("SELECT s FROM ContentsDto s")
    Optional<ContentsDto> findContents();
}
