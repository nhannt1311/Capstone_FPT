package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import MockProject.fa.spring.Entity.New;



@Repository
public interface NewRepository extends JpaRepository<New, Long>, JpaSpecificationExecutor<New>{
	Optional<New> findById(Long idNe);
	
	Optional<New> findByTitleNew(String titleNew);
	
}
