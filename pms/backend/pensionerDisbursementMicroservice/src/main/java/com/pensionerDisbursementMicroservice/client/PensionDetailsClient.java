package com.pensionerDisbursementMicroservice.client;

import java.io.IOException;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.pensionerDisbursementMicroservice.Exception.NotFoundException;
import com.pensionerDisbursementMicroservice.Model.PensionerDetail;

@FeignClient("PensionerDetailsService")
public interface PensionDetailsClient {
	@PostMapping("/pensionerDetailByAadhaar/{aadhaarNumber}")
	public PensionerDetail getPensionerDetailByAadhaar(@PathVariable("aadhaarNumber") long aadhaarNumber)
			throws IOException, NotFoundException;
	

}