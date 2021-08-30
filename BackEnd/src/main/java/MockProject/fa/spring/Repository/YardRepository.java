package MockProject.fa.spring.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import MockProject.fa.spring.Entity.Yard;

public interface YardRepository extends JpaRepository<Yard, Long>, JpaSpecificationExecutor<Yard> {

	Page<Yard> findByStadiumIdSta(Long stadiumIdSta, Pageable pageable);

	Optional<Yard> findByIdYaAndStadiumIdSta(Long idYa, Long staidumIdSta);

	List<Yard> findByStatusYard(String statusYard);

}
