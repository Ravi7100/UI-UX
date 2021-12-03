package com.example.demo.project.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFound  extends RuntimeException{
	public ResourceNotFound(String error) {
		super(error);
	}

}
