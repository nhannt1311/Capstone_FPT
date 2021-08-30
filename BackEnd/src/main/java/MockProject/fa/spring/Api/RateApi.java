package MockProject.fa.spring.Api;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Comment;
import MockProject.fa.spring.Entity.Rate;
import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.CommentRepository;
import MockProject.fa.spring.Repository.RateRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

public class RateApi {
	@Autowired
	private RateRepository rateRepository;
	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private StadiumRepository stadiumRepository;

	@GetMapping("{accountId}/rate")
	public Page<Rate> getAllRatesByAccountId(@PathVariable(value = "accountId") Long accountId, Pageable pageable) {
		return rateRepository.findByAccountIdAcc(accountId, pageable);
	}

	@GetMapping("/stadiums/{stadiumId}/rate")
	public Page<Rate> getAllRatesByStadiumId(@PathVariable(value = "stadiumId") Long stadiumId, Pageable pageable) {
		return rateRepository.findByStadiumIdSta(stadiumId, pageable);
	}

	@PostMapping("/creRate/{accountId}/{stadiumId}")
	public Rate createRate(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId,
			@Valid @RequestParam(required = false, defaultValue = "0") Integer star) {
		Rate rate = new Rate();
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		rate.setAccount(acc.get());
		rate.setStadium(sta.get());
		rate.setStar(star);
		return rateRepository.save(rate);

	}

	@PutMapping("/editRates/{accountId}/{stadiumId}/{rateId}")
	public Rate updateRate(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "commentId") Long rateId,
			@Valid @RequestParam(required = false) Integer star) {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("AccountId " + accountId + " not found");
		}
		if (!stadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("StadiumId " + stadiumId + " not found");
		}
		return rateRepository.findById(rateId).map(rate -> {
			Optional<Account> acc = accountRepository.findById(accountId);
			Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
			rate.setAccount(acc.get());
			rate.setStadium(sta.get());
			rate.setStar(star);
			return rateRepository.save(rate);
		}).orElseThrow(() -> new ResourceNotFoundException("rateId " + rateId + "not found"));

	}

//	@DeleteMapping("/deleteRate/{accountId}/{stadiumId}/{commentId}")
//	public ResponseEntity<?> deleteRate(@PathVariable(value = "accountId") Long accountId,
//			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "commentId") Long rateId) {
//		return rateRepository.findByIdRatAndAccountIdAccAndStadiumIdSta(rateId, accountId, stadiumId).map(rate -> {
//			rateRepository.delete(rate);
//			return ResponseEntity.ok().build();
//		}).orElseThrow(() -> new ResourceNotFoundException(
//				"Comment not found with id " + rateId + " and accountId " + accountId + "and stadiumId" + stadiumId));
//	}

}
