package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import MockProject.fa.spring.Entity.Coupon;


@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long>{
	Optional<Coupon> findById(Long idCou);
	
	Optional<Coupon> findByTitleCoupon(String titleCoupon);
}
