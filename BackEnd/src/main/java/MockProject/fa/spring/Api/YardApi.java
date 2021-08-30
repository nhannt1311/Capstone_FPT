package MockProject.fa.spring.Api;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.sipios.springsearch.anotation.SearchSpec;

import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Entity.Yard;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.Repository.YardRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@RequestMapping("api/yards")
@CrossOrigin(origins = "*", maxAge = 3600)
public class YardApi {
	private final StadiumRepository stadiumRepository;

	private final YardRepository yardRepository;

	@Autowired
	public YardApi(StadiumRepository stadiumRepository, YardRepository yardRepository) {
		this.stadiumRepository = stadiumRepository;
		this.yardRepository = yardRepository;
	}
	@GetMapping("/statusYard")
	public List<Yard> getAllYardByStatus(@RequestParam(required = false) String statusYard){
		return yardRepository.findByStatusYard(statusYard);
	}

	// cho host de tao yard theo stadium
	@PostMapping("{stadiumId}/cre-yards")
	public Yard createYard(@PathVariable(value = "stadiumId") Long stadiumId,
			@RequestParam(required = false) String nameYard,
			@RequestParam(required = false) String statusYard,
			@Valid @RequestParam(required = false) Integer price,
			@Valid @RequestParam(required = false) Integer capcity) {
		Yard yard = new Yard();
		yard.setNameYard(nameYard);
		yard.setStatusYard(statusYard);
		yard.setPrice(price);
		yard.setCapacity(capcity);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		yard.setStadium(sta.get());
		return yardRepository.save(yard);

	}

	// cho host de sua yard theo stadium (admin ko co quyen nay)
	@PutMapping("{stadiumId}/{yardId}")
	public Yard updateYard(@PathVariable(value = "stadiumId") Long stadiumId,
			@PathVariable(value = "yardId") Long yardId, @RequestParam(required = false) String nameYard,
			@RequestParam(required = false) String statusYard, @Valid @RequestParam(required = false) Integer price,
			@Valid @RequestParam(required = false) Integer capcity) {
		if (!stadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("stadiumId " + stadiumId + " not found");
		}

		return yardRepository.findById(yardId).map(yard -> {
			yard.setNameYard(nameYard);
			yard.setStatusYard(statusYard);
			yard.setPrice(price);
			yard.setCapacity(capcity);
			return yardRepository.save(yard);
		}).orElseThrow(() -> new ResourceNotFoundException("yardId " + yardId + "not found"));
	}

	// cho host de xoa yard
	@DeleteMapping("{stadiumId}/{yardId}")
	public ResponseEntity<?> deleteComment(@PathVariable(value = "stadiumId") Long stadiumId,
			@PathVariable(value = "yardId") Long yardId) {
		return yardRepository.findByIdYaAndStadiumIdSta(yardId, stadiumId).map(yard -> {
			yardRepository.delete(yard);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException(
				"Yards not found with id " + yardId + " and idAccount " + stadiumId));
	}

	@GetMapping("/searchYard")
	public ResponseEntity<List<Yard>> searchForNew(@SearchSpec Specification<Yard> specs) {
		return new ResponseEntity<>(yardRepository.findAll(Specification.where(specs)), HttpStatus.OK);
	}
}
