package com.example.demo.project.Controller;

import java.math.BigInteger;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.Exception.ResourceNotFound;
import com.example.demo.project.models.Customer;
import com.example.demo.project.repository.CustomerRepository;




@CrossOrigin("*")
@RestController
@RequestMapping("/sender")
public class CustomerController {
private final CustomerRepository customer_repo;
	
	@Autowired
	public CustomerController(CustomerRepository customer_repo){
		this.customer_repo=customer_repo;
	}
	@GetMapping
	public List<Customer> getAllSenderInfo(){
		return customer_repo.findAll();
	}
	
    @GetMapping("{id}")
    public Customer getSenderById(@PathVariable BigInteger id){
        Customer customer=customer_repo.findById(id)
        		.orElseThrow(()->new ResourceNotFound("Customer Doesn't Exists with given id:"+id));
        return customer;
    }
    
    @PutMapping("{customer_Id}")
    public boolean updateSenderDetails(@PathVariable BigInteger customer_Id, @RequestBody Customer customer1) {
    	Customer customer=customer_repo.findById(customer_Id)
    				.orElseThrow(()-> new ResourceNotFound("Customer not found with id: "+customer_Id));
    	customer.setClearBalance(customer1.getClearBalance());
    	customer_repo.save(customer);
    	return true;
    }
}
