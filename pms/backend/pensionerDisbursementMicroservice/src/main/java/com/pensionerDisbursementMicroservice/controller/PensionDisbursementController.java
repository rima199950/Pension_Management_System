package com.pensionerDisbursementMicroservice.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pensionerDisbursementMicroservice.Exception.NotFoundException;
import com.pensionerDisbursementMicroservice.Model.ProcessPensionInput;
import com.pensionerDisbursementMicroservice.Model.ProcessPensionResponse;
import com.pensionerDisbursementMicroservice.client.PensionDetailsClient;
import com.pensionerDisbursementMicroservice.service.PensionDisbursmentService;

@RestController
@CrossOrigin("*")
public class PensionDisbursementController {

	@Autowired
	private PensionDetailsClient pdp;

	@Autowired
	private PensionDisbursmentService pds;

	@PostMapping("/disbursePension")
	public ProcessPensionResponse getcode(@RequestBody ProcessPensionInput processPensionInput)
			throws IOException, NotFoundException {
		ProcessPensionResponse p = pds.code(
				pdp.getPensionerDetailByAadhaar(processPensionInput.getAdhaar()).getBank(),
				processPensionInput.getServiceCharge());
		return p;
	}


}
