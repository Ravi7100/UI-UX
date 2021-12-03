package com.example.demo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.project.models.Bank;
@Repository
public interface BankRepository extends JpaRepository<Bank,String>{

}
