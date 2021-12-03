package com.example.demo.project.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="msg_info")
public class Message {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String message;
	
	@Column(name="description")
	private String description;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
