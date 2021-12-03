package com.example.demo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.project.models.Message;
@Repository
public interface MessageRepository extends JpaRepository<Message,String>{

}
