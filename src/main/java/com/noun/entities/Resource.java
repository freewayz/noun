/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.noun.entities;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author peter
 */
@Entity
@Table(name = "Resource")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Resource.findAll", query = "SELECT r FROM Resource r"),
    @NamedQuery(name = "Resource.findById", query = "SELECT r FROM Resource r WHERE r.id = :id"),
    @NamedQuery(name = "Resource.findByName", query = "SELECT r FROM Resource r WHERE r.name = :name"),
    @NamedQuery(name = "Resource.findByUrl", query = "SELECT r FROM Resource r WHERE r.url = :url"),
    @NamedQuery(name = "Resource.findByCourse", query = "SELECT r FROM Resource r WHERE r.course = :course"),
    @NamedQuery(name = "Resource.findByDateUploaded", query = "SELECT r FROM Resource r WHERE r.dateUploaded = :dateUploaded"),
    @NamedQuery(name = "Resource.findByDept", query = "SELECT r FROM Resource r WHERE r.dept = :dept"),
    @NamedQuery(name = "Resource.findByFaculty", query = "SELECT r FROM Resource r WHERE r.faculty = :faculty")})
public class Resource implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "id")
    private Integer id;
    @Size(max = 128)
    @Column(name = "name")
    private String name;
    @Size(max = 256)
    @Column(name = "url")
    private String url;
    @Size(max = 64)
    @Column(name = "course")
    private String course;
    @Column(name = "date_uploaded")
    @Temporal(TemporalType.DATE)
    private Date dateUploaded;
    @Size(max = 64)
    @Column(name = "dept")
    private String dept;
    @Size(max = 64)
    @Column(name = "faculty")
    private String faculty;

    public Resource() {
    }

    public Resource(Integer id) {
        this.id = id;
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

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Resource)) {
            return false;
        }
        Resource other = (Resource) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "tempStore.Resource[ id=" + id + " ]";
    }
    
}
