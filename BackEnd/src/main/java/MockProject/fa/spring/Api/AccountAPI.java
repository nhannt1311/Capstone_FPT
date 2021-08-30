package MockProject.fa.spring.Api;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sipios.springsearch.anotation.SearchSpec;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.OrderRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;
import MockProject.fa.spring.service.CustomPasswordEncoder;

@RestController
@RequestMapping(path = "api/accounts")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AccountAPI {

	private AccountRepository accountRepository;
	private StadiumRepository stadiumRepository;
	private CustomPasswordEncoder customPasswordEncoder;

	@Autowired
	public AccountAPI(AccountRepository accountRepository, StadiumRepository stadiumRepository,
			@Lazy CustomPasswordEncoder customPasswordEncoder) {
		this.accountRepository = accountRepository;
		this.stadiumRepository = stadiumRepository;
		this.customPasswordEncoder = customPasswordEncoder;

	}
	
	@Autowired
	PasswordEncoder encoder;

	@GetMapping()
	public Page<Account> getAllAccount(Pageable pageable) {
		return accountRepository.findAll(pageable);
	}

	@GetMapping("/lock")
	public List<Account> getAllAccountBylock(@RequestParam(required = false, defaultValue = "1") Integer lock) {
		return accountRepository.findByLock(lock);
	}

	@GetMapping("/{accountId}")
	public ResponseEntity<Account> getAccountById(@PathVariable("accountId") long id) {
		Optional<Account> accountData = accountRepository.findById(id);

		if (accountData.isPresent()) {
			return new ResponseEntity<>(accountData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// cho host de hien thi stadium theo user
	@GetMapping("{accountId}/stadiums")
	public Page<Stadium> getAllStadiumsByAccountId(@PathVariable(value = "accountId") Long accountId,
			Pageable pageable) {
		return stadiumRepository.findByAccountIdAcc(accountId, pageable);
	}

	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));

	// update
	@PutMapping("{accountId}")
	public Account updateAccount(@PathVariable Long accountId,
			@RequestParam(required = false) String email, 
			@RequestParam(required = false) String phone,
			@RequestParam(required = false) String dob,
			@RequestParam(required = false) Boolean gender, 
			@RequestParam(required = false) String nameAcc,
			@RequestParam(required = false) MultipartFile image) throws IOException {
		Path staticPath = Paths.get("static");
		Path imagePath = Paths.get("images");
		if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
			Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
		}
		Path file = CURRENT_FOLDER.resolve(staticPath).resolve(imagePath).resolve(image.getOriginalFilename());
		try (OutputStream os = Files.newOutputStream(file)) {
			os.write(image.getBytes());
		}
		return accountRepository.findById(accountId).map(account -> {
			account.setEmail(email);
			account.setPhone(phone);
			account.setDob(dob);
			account.setGender(gender);
			account.setNameAcc(nameAcc);
			account.setImgAcc(imagePath.resolve(image.getOriginalFilename()).toString());
			return accountRepository.save(account);
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));
	}
	
	@PutMapping("appImage/{accountId}")
	public Account updateAccountApp(@PathVariable Long accountId,
			@RequestParam(required = false) MultipartFile image) throws IOException {
		Path staticPath = Paths.get("static");
		Path imagePath = Paths.get("images");
		if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
			Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
		}
		Path file = CURRENT_FOLDER.resolve(staticPath).resolve(imagePath).resolve(image.getOriginalFilename());
		try (OutputStream os = Files.newOutputStream(file)) {
			os.write(image.getBytes());
		}
		return accountRepository.findById(accountId).map(account -> {
			account.setImgAcc(imagePath.resolve(image.getOriginalFilename()).toString());
			return accountRepository.save(account);
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));
	}
	
	@PutMapping("appInfor/{accountId}")
	public Account updateAccountApp(@PathVariable Long accountId,
			@RequestParam(required = false) String email, @RequestParam(required = false) String phone,
			@RequestParam(required = false) String dob,
			@RequestParam(required = false) Boolean gender, @RequestParam(required = false) String nameAcc
			) {
		return accountRepository.findById(accountId).map(account -> {
			account.setEmail(email);
			account.setPhone(phone);
			account.setDob(dob);
			account.setGender(gender);
			account.setNameAcc(nameAcc);
			return accountRepository.save(account);
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));
	}
	
	@DeleteMapping("{accountId}")
	public ResponseEntity<?> deleteAccount(@PathVariable Long accountId) {
		return accountRepository.findById(accountId).map(post -> {
			accountRepository.delete(post);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));
	}

	@PutMapping("{accountId}/lock")
	public Account lockAccount(@PathVariable Long accountId,
			@Valid @RequestParam(required = false, defaultValue = "1") Integer lock) {
		return accountRepository.findById(accountId).map(account -> {
			account.setLock(lock);
			return accountRepository.save(account);
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));
	}
	
	@PutMapping("{accountId}/unlock")
	public Account unlockAccount(@PathVariable Long accountId,
			@Valid @RequestParam(required = false, defaultValue = "0") Integer lock) {
		return accountRepository.findById(accountId).map(account -> {
			account.setLock(lock);
			return accountRepository.save(account);
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));
	}

	@GetMapping("/searchAccount")
	public ResponseEntity<List<Account>> searchForNew(@SearchSpec Specification<Account> specs) {
		return new ResponseEntity<>(accountRepository.findAll(Specification.where(specs)), HttpStatus.OK);
	}
	@PostMapping("{accountId}/changePassword")
	public Account ChangePassword(@PathVariable("accountId") Long accountId,
			@RequestParam(required = false) String password) {
		return accountRepository.findById(accountId).map(account -> {
			account.setPassword(encoder.encode(password));
			return accountRepository.save(account);
		}).orElseThrow(() -> new ResourceNotFoundException("AccountId " + accountId + " not found"));

	}

//	@GetMapping
//	public List<AccountEntity> getNew() {
//		return accountService.getNew();
//	}
//
//	@GetMapping(path = "{idaccount}")
//	public ResponseEntity<ServiceResult> findById(@PathVariable("idaccount") Long id) {
//		return new ResponseEntity<ServiceResult>(accountService.findById(id), HttpStatus.OK);
//	}
////	@PostMapping
////	public void addNew(@RequestBody NewEntity newEntity) {
////		newService.addNew(newEntity);
////	}
//
//	@DeleteMapping(path = "{idAccount}")
//	public void deleteNew(@PathVariable("idAccount") Long idAccount) {
//		accountService.deleteNew(idAccount);
//	}
//
//	@PutMapping(path = "{idAccount}")
////	public void updateAccount(@PathVariable("idAccount") Long idAccount, @RequestParam(required = false) String nameAcc,
////			@RequestParam(required = false) String email, @RequestParam(required = false) String username,
////			@RequestParam(required = false) String passwword, @RequestParam(required = false) Integer phone,
////			@RequestParam(required = false) Date dob, @RequestParam(required = false) Boolean gender,
////			@RequestParam(required = false) Integer statusAcc) {
////		accountService.updateAccount(idAccount, nameAcc, email, username, passwword, phone, dob, gender, statusAcc);
////	}
////
////	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));
//
//	  public ResponseEntity<AccountEntity> update(@PathVariable Long idAccount, @Valid @RequestBody AccountEntity account) {
//        Optional<AccountEntity> optionalLibrary = AccountRepository.findById(idAccount);
//        if (!optionalLibrary.isPresent()) {
//            return ResponseEntity.unprocessableEntity().build();
//        }
//
//        account.setIdAccount(optionalLibrary.get().getIdAccount());
//        AccountRepository.save(account);
//
//        return ResponseEntity.noContent().build();
//    }
//	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));
//
//	@PostMapping
//	@ResponseStatus(HttpStatus.CREATED)
//	public Account create(@RequestParam(required = false) String nameAcc, @RequestParam(required = false) String email,
//			@RequestParam(required = false) String username, @RequestParam(required = false) String passwword,
//			@RequestParam(required = false) int phone, @RequestParam(required = false) Date dob,
//			@RequestParam(required = false) Boolean gender, @RequestParam(required = false) MultipartFile image)
//			throws IOException {
//		Path staticPath = Paths.get("static");
//		Path imagePath = Paths.get("images");
//		  if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
//	            Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
//	        }
//	        Path file = CURRENT_FOLDER.resolve(staticPath)
//	                .resolve(imagePath).resolve(image.getOriginalFilename());
//	        try (OutputStream os = Files.newOutputStream(file)) {
//	            os.write(image.getBytes());
//	        }
//
//		Account _account = new Account();
//		_account.setNameAcc(nameAcc);
//		_account.setEmail(email);
//		_account.setUserName(username);
//		_account.setPassword(passwword);
//		_account.setPhone(phone);
//		_account.setDob(dob);
//		_account.setGender(gender);
//		_account.setImgAcc(imagePath.resolve(image.getOriginalFilename()).toString());
//		return accountRepository.save(_account);
//	}
//	@PostMapping
//	public ResponseEntity<AccountEntity> create(@Valid @RequestBody AccountEntity account) {
//		AccountEntity savedAccount = AccountRepository.save(account);
//		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
//				.buildAndExpand(savedAccount.getIdAccount()).toUri();
//
//		return ResponseEntity.created(location).body(savedAccount);
//	}
//
//	// hàm search
//	@GetMapping("/s")
//	public ResponseEntity<List<AccountEntity>> searchForNew(@SearchSpec Specification<AccountEntity> specs) {
//		return new ResponseEntity<>(AccountRepository.findAll(Specification.where(specs)), HttpStatus.OK);
//	}
////	  @DeleteMapping("/{id}")
////	    public ResponseEntity<StadiumEntity> delete(@PathVariable Long id) {
////	        Optional<Long> optionalBook = bookRepository.findById(id);
////	        if (!optionalBook.isPresent()) {
////	            return ResponseEntity.unprocessableEntity().build();
////	        }
////
////	        bookRepository.delete(optionalBook.get());
////
////	        return ResponseEntity.noContent().build();
////	    }
////
}
