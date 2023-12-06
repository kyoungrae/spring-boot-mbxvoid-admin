package com.mbxvoid.project;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="com_prj_m")
public class ProjectDto {
    
    @Id
    private String prj_no;
    private String prj_nm;
    private String company;
    private String member;
    private String status;
    private String completion;
    private String file_nm;
    private String file_path;
    private String contribution;
    private String skill;
    private String assigned_task;
    private String cont;
    private String period_from;
    private String period_to;
    
    public ProjectDto(){

    };
    public ProjectDto(  String prj_no,
                        String prj_nm,
                        String company,
                        String member,
                        String status,
                        String completion,
                        String file_nm,
                        String file_path,
                        String contribution,
                        String skill,
                        String assigned_task,
                        String cont,
                        String period_from,
                        String period_to
                        )
    {   
        this.prj_no =prj_no;
        this.prj_nm =prj_nm;
        this.company =company;
        this.member =member;
        this.status =status;
        this.completion =completion;
        this.file_nm =file_nm;
        this.file_path =file_path;
        this.contribution =contribution;
        this.skill =skill;
        this.assigned_task =assigned_task;
        this.cont = cont;
    }
    public String getPrj_no() {
        return prj_no;
    }

    public void setPrj_no(String prj_no) {
        this.prj_no = prj_no;
    }

    public String getPrj_nm() {
        return prj_nm;
    }

    public void setPrj_nm(String prj_nm) {
        this.prj_nm = prj_nm;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getMember() {
        return member;
    }

    public void setMember(String member) {
        this.member = member;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCompletion() {
        return completion;
    }

    public void setCompletion(String completion) {
        this.completion = completion;
    }

    public String getFile_nm() {
        return file_nm;
    }

    public void setFile_nm(String file_nm) {
        this.file_nm = file_nm;
    }

    public String getFile_path() {
        return file_path;
    }

    public void setFile_path(String file_path) {
        this.file_path = file_path;
    }

    public String getContribution() {
        return contribution;
    }

    public void setContribution(String contribution) {
        this.contribution = contribution;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getAssigned_task() {
        return assigned_task;
    }

    public void setAssigned_task(String assigned_task) {
        this.assigned_task = assigned_task;
    }

    public String getCont() {
        return cont;
    }

    public void setCont(String cont) {
        this.cont = cont;
    }
    public String getPeriod_from() {
        return period_from;
    }
    public void setPeriod_from(String period_from) {
        this.period_from = period_from;
    }
    public String getPeriod_to() {
        return period_to;
    }
    public void setPeriod_to(String period_to) {
        this.period_to = period_to;
    }

}