package com.mbxvoid.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDto,String>{

    @Query("SELECT s FROM UserDto s WHERE s.user_id = ?1")
    Optional<UserDto> findUserByUserId(String user_id);
}
