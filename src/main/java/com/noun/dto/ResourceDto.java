/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;
import java.util.Objects;

/**
 *
 * @author azibit
 */
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ResourceDto {
//    @JsonIgnore
    private Integer id;
    private String name;
//    @JsonIgnore
    private String url;
    private String course;
//    @JsonIgnore
    private Date dateUploaded;
    private String department;
    private String faculty;

    public ResourceDto() {
    }

    public ResourceDto(Integer id, String name, String url, String course, Date dateUploaded, String department, String faculty) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.course = course;
        this.dateUploaded = dateUploaded;
        this.department = department;
        this.faculty = faculty;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public Date getDateUploaded() {
        return dateUploaded;
    }

    public void setDateUploaded(Date dateUploaded) {
        this.dateUploaded = dateUploaded;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    @Override
    public String toString() {
        return "ResourceDto{" + "id=" + id + ", name=" + name + ", url=" + url + ", course=" + course + ", dateUploaded=" + dateUploaded + ", department=" + department + ", faculty=" + faculty + '}';
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + Objects.hashCode(this.id);
        hash = 67 * hash + Objects.hashCode(this.name);
        hash = 67 * hash + Objects.hashCode(this.url);
        hash = 67 * hash + Objects.hashCode(this.course);
        hash = 67 * hash + Objects.hashCode(this.dateUploaded);
        hash = 67 * hash + Objects.hashCode(this.department);
        hash = 67 * hash + Objects.hashCode(this.faculty);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final ResourceDto other = (ResourceDto) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.name, other.name)) {
            return false;
        }
        if (!Objects.equals(this.url, other.url)) {
            return false;
        }
        if (!Objects.equals(this.course, other.course)) {
            return false;
        }
        if (!Objects.equals(this.dateUploaded, other.dateUploaded)) {
            return false;
        }
        if (!Objects.equals(this.department, other.department)) {
            return false;
        }
        if (!Objects.equals(this.faculty, other.faculty)) {
            return false;
        }
        return true;
    }
    
    
    
}
