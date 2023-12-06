package com.mbxvoid.user;

import jakarta.persistence.*;


@Entity
@Table(name = "com_user_m")
public class UserDto {
    @Id
    private String user_id;
    private String user_nm;
    private String user_pw;
    private String user_en_nm;
    
    public UserDto(){

    }
    public UserDto(String user_id , String user_nm, String user_pw, String user_en_nm){
        this.user_id = user_id;
        this.user_nm = user_nm;
        this.user_pw = user_pw;
        this.user_en_nm = user_en_nm;
    }
    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_nm() {
        return user_nm;
    }

    public void setUser_nm(String user_nm) {
        this.user_nm = user_nm;
    }

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getUser_en_nm() {
        return user_en_nm;
    }

    public void setUser_en_nm(String user_en_nm) {
        this.user_en_nm = user_en_nm;
    }
    
}

