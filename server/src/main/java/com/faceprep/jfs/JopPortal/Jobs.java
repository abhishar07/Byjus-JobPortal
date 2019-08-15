package com.faceprep.jfs.JopPortal;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="job_data")
public class Jobs {
  private String name;
  private String experience;
  private String location;
  private String skill;
  private String jd;
  
public Jobs(String name, String experience, String location, String skill, String jd) {
	super();
	this.name = name;
	this.experience = experience;
	this.location = location;
	this.skill = skill;
	this.jd = jd;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getExperience() {
	return experience;
}
public void setExperience(String experience) {
	this.experience = experience;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getSkill() {
	return skill;
}
public void setSkill(String skill) {
	this.skill = skill;
}
public String getJd() {
	return jd;
}
public void setJd(String jd) {
	this.jd = jd;
}
  
}
