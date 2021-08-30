package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


import MockProject.fa.spring.Entity.Stadium;

public interface StadiumRepository extends JpaRepository<Stadium, Long>, JpaSpecificationExecutor<Stadium>{

	Page<Stadium> findByAccountIdAcc(Long accountIdAcc, Pageable pageable);
    Optional<Stadium> findByIdStaAndAccountIdAcc(Long idSta, Long accountIdAcc);
    Page<Stadium> findBySports(String sports, Pageable pageable);
}
