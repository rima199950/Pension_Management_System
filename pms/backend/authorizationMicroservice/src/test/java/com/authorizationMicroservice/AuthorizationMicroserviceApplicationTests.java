package com.authorizationMicroservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class AuthorizationMicroserviceApplicationTests {
	@Test
	void contextLoads() {
	}


	/*MockMvc mockMvc;
	
	@Autowired
	WebApplicationContext context;
	
	@Mock
	JWTUtil jwtUtil;
	
	@Mock
	CustomUserDetailsService customUserDetailsService;
	
	ObjectMapper objectMapper;	
	
	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		jwtUtil.setSecret("pensionSecret");
		mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}
	
	@Test
	public void testGenerateTokenController() throws Exception {
		User user = new User(1, "admin", "admin");
		
		mockMvc.perform(post("/authenticate").content(asJsonString(user))
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk()).andReturn();
		//String responseString = result.getResponse().getContentAsString();
		//ResponseEntity<?> response = objectMapper.readValue(responseString, ResponseEntity<JWTResponse.class>);
		
		//assertNotNull(responseString);
		assertTrue(true);
		
	}
	
	public static String asJsonString(final Object obj) {
		try {
			final ObjectMapper mapper = new ObjectMapper();
			final String jsonContent = mapper.writeValueAsString(obj);
			return jsonContent;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
*/
}
