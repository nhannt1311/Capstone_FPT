package MockProject.fa.spring.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.Match;

public interface MatchRepository extends JpaRepository<Match, Long> {

	Page<Match> findByStatusMatch(String statusMatch, Pageable pagesable);
	
	Page<Match> findByAccountIdAcc(Long accountIdAcc, Pageable pageable);
}
