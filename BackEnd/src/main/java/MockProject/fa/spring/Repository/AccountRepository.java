package MockProject.fa.spring.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import MockProject.fa.spring.Entity.Account;




public interface AccountRepository extends JpaRepository<Account, Long>, JpaSpecificationExecutor<Account>{
	  
Optional<Account> findById(Long accountIdAcc);
	
	Optional<Account> findByUsername(String username);
	
	Optional<Account> findByEmail(String email);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	List<Account> findAll();
	List<Account> findByLock(Integer lock);
}
