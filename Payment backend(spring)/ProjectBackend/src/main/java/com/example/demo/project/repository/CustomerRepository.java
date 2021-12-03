package com.example.demo.project.repository;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.project.models.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer,BigInteger>{

}
