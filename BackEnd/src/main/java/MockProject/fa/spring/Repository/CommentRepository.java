package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

	Page<Comment> findByAccountIdAcc(Long accountIdAcc, Pageable pageable);

	Page<Comment> findByStadiumIdSta(Long stadiumIdSta, Pageable pageable);

	Optional<Comment> findByIdComAndAccountIdAccAndStadiumIdSta(Long idCom, Long accountIdAcc, Long stadiumIdSta);
}
