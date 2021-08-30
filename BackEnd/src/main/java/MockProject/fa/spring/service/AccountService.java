package MockProject.fa.spring.service;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MockProject.fa.spring.Entity.Account;

import MockProject.fa.spring.Repository.AccountRepository;


@Service
public class AccountService {

	@Autowired
	private AccountRepository accountRepository;

	public AccountService(AccountRepository accountRepository) {
		this.accountRepository = accountRepository;
	}

	public List<Account> getNew() {
		return accountRepository.findAll();
	}

//	public void addNew(NewEntity newEntity) {
//	    Optional<NewEntity> newByTitle = newRepository.findByTitleNew(newEntity.getTitleNew());
//		if (newByTitle.isPresent()) {
//			throw new IllegalStateException("Title taken");
//		}
//		newRepository.save(newEntity);
//	}

	public void deleteNew(Long newId) {
		boolean exists = accountRepository.existsById(newId);
		if (!exists) {
			throw new IllegalStateException("New with ID " + newId + "does not exists");
		}
		accountRepository.deleteById(newId);
	}


	public ServiceResult findById(Long id) {
		ServiceResult result = new ServiceResult();
		Account _new = accountRepository.findById(id).orElse(null);
		result.setData(_new);
		return result;
	}
}
