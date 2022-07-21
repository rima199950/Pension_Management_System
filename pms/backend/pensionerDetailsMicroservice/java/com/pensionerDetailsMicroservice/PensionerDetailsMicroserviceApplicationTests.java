package com.pensionerDetailsMicroservice;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.pensionerDetailsMicroservice.Exception.NotFoundException;

import freemarker.core.ParseException;

@SpringBootTest
class PensionerDetailsMicroserviceApplicationTests {
	@Test
	void contextLoads() {
	}
	
	
	@Test
	void testMainMethod() throws NumberFormatException, IOException, NotFoundException, ParseException, java.text.ParseException {
		PensionerDetailsMicroserviceApplication.main(new String [] {});
	}

}
