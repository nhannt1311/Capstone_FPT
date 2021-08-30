package MockProject.fa.spring.Api;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.ERole;
import MockProject.fa.spring.Entity.Role;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.RoleRepository;
import MockProject.fa.spring.jwt.JwtUtils;
import MockProject.fa.spring.request.LoginRequest;
import MockProject.fa.spring.request.SignupRequest;
import MockProject.fa.spring.response.JwtResponse;
import MockProject.fa.spring.response.MessageResponse;
import MockProject.fa.spring.service.AccountDetailsImpl;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
public class AuthApi {
	
	 @Autowired
	 private AuthenticationManager authenticationManager;

	@Autowired
	AccountRepository accountRepository;

	@Autowired
	RoleRepository roleRepository;
	
//	@Autowired
//	private NewService newService;
//	
//	@Autowired
//	private NewRepository newRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	
    

//	@PutMapping("{accountId}/updatePassword")
//	public Account updateAccountPassword(@PathVariable Long accountId, @RequestParam String password) {
//		Optional<Account> _account = accountRepository.findById(accountId);
//			_account.set;
//			return accountRepository.save(_account);
//		
//		}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		AccountDetailsImpl userDetails = (AccountDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getNameAcc(),
												 userDetails.getUsername(), 
												 userDetails.getEmail(),
												 userDetails.getPhone(),
												 userDetails.getLock(),
												 roles));
	}

	
	// ham dang ki
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (accountRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (accountRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}
		
//		if (accountRepository.existsByPhone(signUpRequest.getPhone())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("Error: Phone is already in use!"));
//		}

		
		// Create new user's account
		Account user = new Account(signUpRequest.getNameAcc(),
				 signUpRequest.getUsername(), 
				 signUpRequest.getEmail(),
				 signUpRequest.getPhone(),
				 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "host":
					Role modRole = roleRepository.findByName(ERole.ROLE_HOST)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(modRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		
		user.setRoles(roles);
		accountRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
