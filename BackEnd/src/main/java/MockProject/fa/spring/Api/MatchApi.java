package MockProject.fa.spring.Api;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Comment;
import MockProject.fa.spring.Entity.Match;
import MockProject.fa.spring.Entity.MatchConfirm;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.MatchConfirmRepository;
import MockProject.fa.spring.Repository.MatchRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/matchs")
public class MatchApi {

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private MatchRepository matchRepository;
	

	@Autowired
	private MatchConfirmRepository matchConfirmRepository;

	@GetMapping()
	public Page<Match> getAllMatch(Pageable pageable) {
		return matchRepository.findAll(pageable);
	}
	
	@PostMapping("/creMatch/{accountId}")
	public Match createMatch(@PathVariable(value = "accountId") Long accountId,
			@Valid @RequestParam(required = false) String sport, 
			@Valid @RequestParam(required = false) Integer number,
			@Valid @RequestParam(required = false) String datetime,
			@Valid @RequestParam(required = false) String titleMatch) {
		Match match = new Match();
		Optional<Account> acc = accountRepository.findById(accountId);
		match.setAccount(acc.get());
		match.setNumberMember(number);
		match.setSport(sport);
		match.setDateTime(datetime);
		match.setTitleMatch(titleMatch);
		return matchRepository.save(match);

	}
	
	@PutMapping("/editMatch/{accountId}")
	public Match editMatch(@PathVariable(value = "accountId") Long accountId,
			@Valid @RequestParam(required = false) String sport, 
			@Valid @RequestParam(required = false) Integer number,
			@Valid @RequestParam(required = false) String datetime,
			@Valid @RequestParam(required = false) String titleMatch) {
		Match match = new Match();
		Optional<Account> acc = accountRepository.findById(accountId);
		match.setAccount(acc.get());
		match.setNumberMember(number);
		match.setSport(sport);
		match.setDateTime(datetime);
		match.setTitleMatch(titleMatch);
		return matchRepository.save(match);

	}

	@PutMapping("/{accountId}/{matchId}/confirmMatch")
	public Match confirmMatch(@PathVariable(value = "matchId") Long matchId,@PathVariable(value = "accountId") Long accountId,
			@RequestParam(required = false, defaultValue = "Confirm") String statusMatch) {

		return matchRepository.findById(matchId).map(match -> {
			match.setStatusMatch(statusMatch);
			return matchRepository.save(match);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + matchId + "not found"));
	}
	
	@PutMapping("/{accountId}/{matchId}/noConfirmMatch")
	public Match noConfirmMatch(@PathVariable(value = "matchId") Long matchId,@PathVariable(value = "accountId") Long accountId,
			@RequestParam(required = false, defaultValue = "noConfirm") String statusMatch) {

		return matchRepository.findById(matchId).map(match -> {
			match.setStatusMatch(statusMatch);
			return matchRepository.save(match);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + matchId + "not found"));
	}

	@GetMapping("/showMatch")
	public Page<Match> getAllNoComfirmMatch(
			@RequestParam(required = false, defaultValue = "noConfirm") String statusMatch, Pageable pageable) {
		return matchRepository.findByStatusMatch(statusMatch, pageable);
	}
	
	@GetMapping("viewAllMatchConfirm")
	public List<MatchConfirm> getAllMatchComfirm() {
		return matchConfirmRepository.findAll();
	}

	@GetMapping("{accountId}/controlMatch/noConfirmMatch")
	public Page<Match> getAllNoComfirmMatchByIdAccount(
			@RequestParam(required = false, defaultValue = "noConfirm") String statusMatch, Pageable pageable) {
		return matchRepository.findByStatusMatch(statusMatch, pageable);
	}
	
	@GetMapping("{accountId}/controlMatch/ConfirmMatch")
	public Page<Match> getAllComfirmMatchByIdAccount(
			@RequestParam(required = false, defaultValue = "Confirm") String statusMatch, Pageable pageable) {
		return matchRepository.findByStatusMatch(statusMatch, pageable);
	}
	@DeleteMapping("{matchId}")
	public ResponseEntity<?> deleteMatch(@PathVariable Long matchId) {
		return matchRepository.findById(matchId).map(match -> {
			matchRepository.delete(match);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("matchId " + matchId + " not found"));
	}
	@PostMapping("/{accountId}/{matchId}")
	public MatchConfirm conmatch(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "matchId") Long matchId) {
		MatchConfirm matchConfirm = new MatchConfirm();
		Optional<Account> acc = accountRepository.findById(accountId);
		matchConfirm.setAccount(acc.get());
		Optional<Match> match = matchRepository.findById(matchId);
		matchConfirm.setMatch(match.get());

		return matchConfirmRepository.save(matchConfirm);
	}
	@GetMapping("viewConfirmId/{matchId}")
	public List<MatchConfirm> findMatchById(@PathVariable("matchId") Long matchId) {
		return matchConfirmRepository.findByMatchIdMat(matchId);
	}
}
