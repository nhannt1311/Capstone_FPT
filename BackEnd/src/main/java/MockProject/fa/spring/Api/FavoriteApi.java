package MockProject.fa.spring.Api;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Favorite;
import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.FavoriteRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@RequestMapping("api/favorites")
@CrossOrigin(origins = "*", maxAge = 3600)
public class FavoriteApi {

	@Autowired
	private FavoriteRepository favoriteRepository;

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private StadiumRepository stadiumRepository;

	@GetMapping("/accounts/{accountId}/favorites")
	public Page<Favorite> getAllFavoritesByAccountId(@PathVariable(value = "accountId") Long accountId,
			Pageable pageable) {
		return favoriteRepository.findByAccountIdAcc(accountId, pageable);
	}

	@PostMapping("/addFavotite/{accountId}/{stadiumId}")
	public Favorite createFavorite(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @Valid @RequestParam(required = false, defaultValue = "1") Integer love) {
		Favorite favorite = new Favorite();
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		favorite.setAccount(acc.get());
		favorite.setStadium(sta.get());
		favorite.setLove(love);
		return favoriteRepository.save(favorite);

	}

	@PutMapping("/changeUnFavotite/{accountId}/{stadiumId}/{favoriteId}")
	public Favorite changetoUnFavorite(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "favoriteId") Long favoriteId,
			@Valid @RequestParam(required = false, defaultValue = "0") Integer love) {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("AccountId " + accountId + " not found");
		}
		if (!stadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("StadiumId " + stadiumId + " not found");
		}
		if (!favoriteRepository.existsById(favoriteId)) {
			throw new ResourceNotFoundException("favoriteId " + favoriteId + " not found");
		}
		return favoriteRepository.findById(favoriteId).map(favorite -> {
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		favorite.setAccount(acc.get());
		favorite.setStadium(sta.get());
		favorite.setLove(love);
		return favoriteRepository.save(favorite);
		}).orElseThrow(() -> new ResourceNotFoundException("favoriteId " + favoriteId + "not found"));
	}
	
	@PutMapping("/changeFavotite/{accountId}/{stadiumId}/{favoriteId}")
	public Favorite changetoFavorite(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "favoriteId") Long favoriteId,
			@Valid @RequestParam(required = false, defaultValue = "1") Integer love) {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("AccountId " + accountId + " not found");
		}
		if (!stadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("StadiumId " + stadiumId + " not found");
		}
		if (!favoriteRepository.existsById(favoriteId)) {
			throw new ResourceNotFoundException("favoriteId " + favoriteId + " not found");
		}
		return favoriteRepository.findById(favoriteId).map(favorite -> {
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = stadiumRepository.findById(stadiumId);
		favorite.setAccount(acc.get());
		favorite.setStadium(sta.get());
		favorite.setLove(love);
		return favoriteRepository.save(favorite);
		}).orElseThrow(() -> new ResourceNotFoundException("favoriteId " + favoriteId + "not found"));

	}
	
	

}
