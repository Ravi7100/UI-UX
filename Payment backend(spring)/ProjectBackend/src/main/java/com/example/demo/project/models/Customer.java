package com.example.demo.project.models;

import java.math.BigInteger;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customer_info")

public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private BigInteger cust_id;

	@Column(name = "name")
	private String name;

	@Column(name = "clear_balance")
	private int clearBalance;

	@Column(name = "overdraft")
	private String overdraft;

	@Column(name = "BIC")
	private String bic;

	public BigInteger getCust_id() {
		return cust_id;
	}

	public String getName() {
		return name;
	}

	public int getClearBalance() {
		return clearBalance;
	}

	public String getOverdraft() {
		return overdraft;
	}

	public String getBic() {
		return bic;
	}

	public void setCust_id(BigInteger cust_id) {
		this.cust_id = cust_id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setClearBalance(int clearBalance) {
		this.clearBalance = clearBalance;
	}

	public void setOverdraft(String overdraft) {
		this.overdraft = overdraft;
	}

	public void setBic(String bic) {
		this.bic = bic;
	}

	@Override
	public String toString() {
		return "Customer [cust_id=" + cust_id + ", name=" + name + ", clearBalance=" + clearBalance + ", overdraft="
				+ overdraft + ", bic=" + bic + "]";
	}

}
