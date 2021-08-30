package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.Comment;
import MockProject.fa.spring.Entity.Rate;

public interface RateRepository extends JpaRepository<Rate, Long>{


	Page<Rate> findByAccountIdAcc(Long accountIdAcc, Pageable pageable);

	Page<Rate> findByStadiumIdSta(Long stadiumIdSta, Pageable pageable);

	Optional<Rate> findByIdRatAndAccountIdAccAndStadiumIdSta(Long idRat, Long accountIdAcc, Long stadiumIdSta);
}
