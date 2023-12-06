package com.mbxvoid.contents;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="com_mbx_contents")
public class ContentsDto {
    
    @Id
    private String content_no;
    private String menu_id;
    private String content_title;
    private String content_sub_title;
    private String content_parts_1;
    private String content_sub_parts_1;
    private String content_parts_2;
    private String content_sub_parts_2;
    private String content_parts_3;
    private String content_sub_parts_3;
    private String content_parts_4;
    private String content_sub_parts_4;
    private String content_1;
    private String content_2;
    private String sys_cr_user_id;
    private String sys_ud_user_id;
    private String content_type;
    
    public ContentsDto(){
    }

    public ContentsDto(String content_no
                        ,String menu_id
                        ,String content_title
                        ,String content_sub_title
                        ,String content_parts_1
                        ,String content_sub_parts_1
                        ,String content_parts_2
                        ,String content_sub_parts_2
                        ,String content_parts_3
                        ,String content_sub_parts_3
                        ,String content_parts_4
                        ,String content_sub_parts_4
                        ,String content_1
                        ,String content_2
                        ,String sys_cr_user_id
                        ,String sys_ud_user_id
                        ,String content_type
    ){
        this.content_no = content_no;
        this.menu_id=menu_id;
        this.content_title=content_title;
        this.content_sub_title=content_sub_title;
        this.content_parts_1=content_parts_1;
        this.content_sub_parts_1=content_sub_parts_1;
        this.content_parts_2=content_parts_2;
        this.content_sub_parts_2=content_sub_parts_2;
        this.content_parts_3=content_parts_3;
        this.content_sub_parts_3=content_sub_parts_3;
        this.content_parts_4=content_parts_4;
        this.content_sub_parts_4=content_sub_parts_4;
        this.content_1=content_1;
        this.content_2=content_2;
        this.sys_cr_user_id=sys_cr_user_id;
        this.sys_ud_user_id=sys_ud_user_id;
        this.content_type=content_type;
    }

    public String getContent_no() {
        return content_no;
    }
    public void setContent_no(String content_no) {
        this.content_no = content_no;
    }
    public String getMenu_id() {
        return menu_id;
    }
    public void setMenu_id(String menu_id) {
        this.menu_id = menu_id;
    }
    public String getContent_title() {
        return content_title;
    }
    public void setContent_title(String content_title) {
        this.content_title = content_title;
    }
    public String getContent_sub_title() {
        return content_sub_title;
    }
    public void setContent_sub_title(String content_sub_title) {
        this.content_sub_title = content_sub_title;
    }
    public String getContent_parts_1() {
        return content_parts_1;
    }
    public void setContent_parts_1(String content_parts_1) {
        this.content_parts_1 = content_parts_1;
    }
    public String getContent_sub_parts_1() {
        return content_sub_parts_1;
    }
    public void setContent_sub_parts_1(String content_sub_parts_1) {
        this.content_sub_parts_1 = content_sub_parts_1;
    }
    public String getContent_parts_2() {
        return content_parts_2;
    }
    public void setContent_parts_2(String content_parts_2) {
        this.content_parts_2 = content_parts_2;
    }
    public String getContent_sub_parts_2() {
        return content_sub_parts_2;
    }
    public void setContent_sub_parts_2(String content_sub_parts_2) {
        this.content_sub_parts_2 = content_sub_parts_2;
    }
    public String getContent_parts_3() {
        return content_parts_3;
    }
    public void setContent_parts_3(String content_parts_3) {
        this.content_parts_3 = content_parts_3;
    }
    public String getContent_sub_parts_3() {
        return content_sub_parts_3;
    }
    public void setContent_sub_parts_3(String content_sub_parts_3) {
        this.content_sub_parts_3 = content_sub_parts_3;
    }
    public String getContent_parts_4() {
        return content_parts_4;
    }
    public void setContent_parts_4(String content_parts_4) {
        this.content_parts_4 = content_parts_4;
    }
    public String getContent_sub_parts_4() {
        return content_sub_parts_4;
    }
    public void setContent_sub_parts_4(String content_sub_parts_4) {
        this.content_sub_parts_4 = content_sub_parts_4;
    }
    public String getContent_1() {
        return content_1;
    }
    public void setContent_1(String content_1) {
        this.content_1 = content_1;
    }
    public String getContent_2() {
        return content_2;
    }
    public void setContent_2(String content_2) {
        this.content_2 = content_2;
    }
    public String getSys_cr_user_id() {
        return sys_cr_user_id;
    }
    public void setSys_cr_user_id(String sys_cr_user_id) {
        this.sys_cr_user_id = sys_cr_user_id;
    }
    public String getSys_ud_user_id() {
        return sys_ud_user_id;
    }
    public void setSys_ud_user_id(String sys_ud_user_id) {
        this.sys_ud_user_id = sys_ud_user_id;
    }
    public String getContent_type() {
        return content_type;
    }
    public void setContent_type(String content_type) {
        this.content_type = content_type;
    }

    
}