package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.Favorite;

public interface FavoriteRepository extends JpaRepository<Favorite, Long>{
	

	Page<Favorite> findByAccountIdAcc(Long accountIdAcc, Pageable pageable);

	Optional<Favorite> findByIdFavAndAccountIdAccAndStadiumIdSta(Long idFav, Long accountIdAcc, Long stadiumIdSta);

}
