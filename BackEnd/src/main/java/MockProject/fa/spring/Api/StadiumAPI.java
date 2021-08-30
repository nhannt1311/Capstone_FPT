package MockProject.fa.spring.Api;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import MockProject.fa.spring.Entity.Yard;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.OrderRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.Repository.YardRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@RequestMapping(path = "api/stadiums")
@CrossOrigin(origins = "*", maxAge = 3600)
public class StadiumAPI {

	private final StadiumRepository stadiumRepository;

	private final AccountRepository accountRepository;

	private final YardRepository yardRepository;

	@Autowired
	public StadiumAPI(StadiumRepository stadiumRepository, AccountRepository accountResponsitory,
			YardRepository yardRepository ) {
		this.stadiumRepository = stadiumRepository;
		this.accountRepository = accountResponsitory;
		this.yardRepository = yardRepository;
		
	}

	// cho host de hien thi yard cua stadiums
	@GetMapping("{stadiumId}/yards")
	public Page<Yard> getAllYardsByStadiumId(@PathVariable(value = "stadiumId") Long stadiumId, Pageable pageable) {
		return yardRepository.findByStadiumIdSta(stadiumId, pageable);
	}
	
	@GetMapping("/sportFilter")
	public Page<Stadium> getAllStadiumBySport(@RequestParam String sports, Pageable pageable) {
		return stadiumRepository.findBySports(sports, pageable);
	}



	// cho admin de hien thi tat ca san
	@GetMapping()
	public Page<Stadium> getAllStadiums(Pageable pageable) {
		return stadiumRepository.findAll(pageable);
	}

	// cho admin de hien thi san theo id
	@GetMapping("{stadiumId}")
	public ResponseEntity<Stadium> getStadiumtById(@PathVariable("stadiumId") long id) {
		Optional<Stadium> stadiumData = stadiumRepository.findById(id);

		if (stadiumData.isPresent()) {
			return new ResponseEntity<>(stadiumData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

//   	@GetMapping("/stadiums/s")
//   	public ResponseEntity<List<Stadium>> searchForNew(@SearchSpec Specification<Stadium> specs) {
//   		return new ResponseEntity<>(stadiumRepository.findAll(Specification.where(specs)), HttpStatus.OK);
//   	}

	// cho host de tao san
	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));

	@PostMapping("{accountId}/cre-stadiums")
	public Stadium createStadium(@PathVariable(value = "accountId") Long accountId,
			@Valid @RequestParam(required = false) String nameOwner,
			@Valid @RequestParam(required = false) String nameStadium,
			@Valid @RequestParam(required = false) String sports ,
			@Valid @RequestParam(required = false) Integer priceMin,
			@Valid @RequestParam(required = false) Integer priceMax,
			@Valid @RequestParam(required = false) String address,
			@Valid @RequestParam(required = false) String description,
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
		Stadium stadium = new Stadium();
		stadium.setNameOwner(nameOwner);
		stadium.setNameStadium(nameStadium);
		stadium.setSports(sports);
		stadium.setPriceMin(priceMin);
		stadium.setPriceMax(priceMax);
		stadium.setAddress(address);
		stadium.setDescription(description);
		stadium.setImgSta(imagePath.resolve(image.getOriginalFilename()).toString());
		Optional<Account> acc = accountRepository.findById(accountId);
		stadium.setAccount(acc.get());
		return stadiumRepository.save(stadium);
	}

	// cho host de sua san (admin ko co quyen nay)
	@PutMapping("{accountId}/{stadiumId}")
	public Stadium updateStadium(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId,
			@Valid @RequestParam(required = false) String nameStadium,
			@Valid @RequestParam(required = false) String sports,
			@Valid @RequestParam(required = false) Integer priceMin,
			@Valid @RequestParam(required = false) Integer priceMax,
			@Valid @RequestParam(required = false) String address,
			@Valid @RequestParam(required = false) String description,
			@RequestParam(required = false) MultipartFile image) throws IOException {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("accountId " + accountId + " not found");
		}
		Path staticPath = Paths.get("static");
		Path imagePath = Paths.get("images");
		if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
			Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
		}
		Path file = CURRENT_FOLDER.resolve(staticPath).resolve(imagePath).resolve(image.getOriginalFilename());
		try (OutputStream os = Files.newOutputStream(file)) {
			os.write(image.getBytes());
		}
		return stadiumRepository.findById(stadiumId).map(stadium -> {
			stadium.setImgSta(imagePath.resolve(image.getOriginalFilename()).toString());
			stadium.setAddress(address);
			stadium.setDescription(description);
			stadium.setPriceMax(priceMax);
			stadium.setPriceMin(priceMin);
			stadium.setSports(sports);
			stadium.setNameStadium(nameStadium);
			stadium.setSports(sports);
			return stadiumRepository.save(stadium);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + stadiumId + "not found"));
	}

	// cho host,admin de xoa san
	@DeleteMapping("{accountId}/{stadiumId}")
	public ResponseEntity<?> deleteComment(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId) {
		return stadiumRepository.findByIdStaAndAccountIdAcc(stadiumId, accountId).map(stadium -> {
			stadiumRepository.delete(stadium);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException(
				"Stadium not found with id " + stadiumId + " and idAccount " + accountId));
	}

	@GetMapping("/searchStadium")
	public ResponseEntity<List<Stadium>> searchForNew(@SearchSpec Specification<Stadium> specs) {
		return new ResponseEntity<>(stadiumRepository.findAll(Specification.where(specs)), HttpStatus.OK);
	} 

//	@DeleteMapping(path = "{idStadium}"	)
//	public void deleteNew(@PathVariable("idStadium") Long idStadium) {
//		stadiumService.deleteNew(idStadium);
//	}
//
////	@PutMapping(path = "account/{idAccount}/stadium/{idStadium}")
////	public void updateAccount(@PathVariable("idStadium") Long idStadium,
////			@RequestParam(required = false) String nameStadium, 
////			@RequestParam(required = false) String address, 
////			@RequestParam(required = false) CategoryEntity category,
////			@RequestParam(required = false) String description) {
////		stadiumService.updateStadium(idStadium, nameStadium,address,category,description);
////	}
////
////	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));
//
////	@PostMapping(path="account/{idAccount}/newStadium")
//	@PostMapping
//	@ResponseStatus(HttpStatus.CREATED)
//	public ResponseEntity<Stadium> create(@Valid Stadium stadiumEntity) {
//		Optional<Account> optionalAccount = accountResponsitory.findById(stadiumEntity.getAccountEntity().getID());
//        if (!optionalAccount.isPresent()) {
//            return ResponseEntity.unprocessableEntity().build();
//        }
//
//        stadiumEntity.setAccountEntity(optionalAccount.get());
//
//        Stadium savedStadium = stadiumRepository.save(stadiumEntity);
//        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{idaccount}")
//            .buildAndExpand(savedStadium.getId()).toUri();
//
//        return ResponseEntity.created(location).body(savedStadium);
//    }
//	@GetMapping("/{id}")
//	public ResponseEntity<Stadium> getById(@PathVariable("id") Long idStadium) {  
//	    Optional<Stadium> optionalStadium = stadiumRepository.findById(idStadium);
//	    if (!optionalStadium.isPresent()) {
//	        return ResponseEntity.unprocessableEntity().build();
//	    }
//
//	    return ResponseEntity.ok(optionalStadium.get());
//	}
//	   
//	@PutMapping("/{id}")
//	    public ResponseEntity<StadiumEntity> update(@RequestBody @Valid StadiumEntity stadium, @PathVariable Long idStadium) {
//	        Optional<AccountEntity> optionalAccount = accountResponsitory.findById(stadium.getAccountEntity().getIdAccount());
//	        if (!optionalAccount.isPresent()) {
//	            return ResponseEntity.unprocessableEntity().build();
//	        }
//
//	        Optional<StadiumEntity> optionalStadium = stadiumRepository.findById(idStadium);
//	        if (!optionalStadium.isPresent()) {
//	            return ResponseEntity.unprocessableEntity().build();
//	        }
//
//	        stadium.setAccountEntity(optionalAccount.get());
//	        stadium.setIdStadium(optionalStadium.get().getIdStadium());
//	        stadiumRepository.save(stadium);
//
//	        return ResponseEntity.noContent().build();
//	    }
//	   
//		Path staticPath = Paths.get("static");
//		Path imagePath = Paths.get("images");
//		if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
//			Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
//		}
//		Path file = CURRENT_FOLDER.resolve(staticPath).resolve(imagePath).resolve(image.getOriginalFilename());
//		try (OutputStream os = Files.newOutputStream(file)) {
//			os.write(image.getBytes());
//		}
//
//		StadiumEntity _stadium = new StadiumEntity();
//		_stadium.setCategory(category);
//		_stadium.setNameStadium(nameStadium);
//		_stadium.setAddress(address);
//		_stadium.setDescription(description);
//		_stadium.setImgStadium(imagePath.resolve(image.getOriginalFilename()).toString());
//		return stadiumRepository.save(_stadium);
//	}

//	// hàm search
//	@GetMapping("/s")
//	public ResponseEntity<List<StadiumEntity>> searchForNew(@SearchSpec Specification<StadiumEntity> specs) {
//		return new ResponseEntity<>(stadiumRepository.findAll(Specification.where(specs)), HttpStatus.OK);
//	}
//
}
