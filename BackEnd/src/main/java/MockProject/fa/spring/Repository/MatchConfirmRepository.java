package MockProject.fa.spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.MatchConfirm;

public interface MatchConfirmRepository extends JpaRepository<MatchConfirm, Long>{

	List<MatchConfirm> findByMatchIdMat(Long matchIdMat);
}
