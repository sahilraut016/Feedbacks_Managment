package com.feedbacks.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class User {
	
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE)
 private Integer id;
private String name;
@Column(unique = true)
 private String mail;
 private String pass;
 private String role;
 
 
public User() {
	super();
}
public User(Integer id, String name,String mail, String pass,String role) {
	super();
	this.id = id;
	this.name = name;
	this.mail = mail;
	this.pass = pass;
	this.role = role;
}
/**
 * @return the id
 */
public Integer getId() {
	return id;
}

public void setId(Integer id) {
	this.id = id;
}

/**
 * @return the name
 */
public String getName() {
	return name;
}
/**
 * @param name the name to set
 */
public void setName(String name) {
	this.name = name;
}
/**
 * @return the mail
 */
public String getMail() {
	return mail;
}
/**
 * @param mail the mail to set
 */
public void setMail(String mail) {
	this.mail = mail;
}
/**
 * @return the pass
 */
public String getPass() {
	return pass;
}
/**
 * @param pass the pass to set
 */
public void setPass(String pass) {
	this.pass = pass;
}


/**
 * @return the role
 */
public String getRole() {
	return role;
}
/**
 * @param role the role to set
 */
public void setRole(String role) {
	this.role = role;
}
@Override
public String toString() {
	return "User [id=" + id + ", mail=" + mail + ", pass=" + pass + "]";
}


 
 
}
