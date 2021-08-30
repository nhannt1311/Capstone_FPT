package MockProject.fa.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MockProject.fa.spring.Entity.Coupon;
import MockProject.fa.spring.Repository.CouponRepository;


@Service
public class CouponService {
	
	@Autowired
	private CouponRepository couponRepository;
	
	public List<Coupon> getNew(){
		return couponRepository.findAll();
	}
	
//	public void addNew(NewEntity newEntity) {
//	    Optional<NewEntity> newByTitle = newRepository.findByTitleNew(newEntity.getTitleNew());
//		if (newByTitle.isPresent()) {
//			throw new IllegalStateException("Title taken");
//		}
//		newRepository.save(newEntity);
//	}
	
	

	public void deleteCoupon(Long couponId) {
			boolean exists = couponRepository.existsById(couponId);
			if (!exists) {
				throw new IllegalStateException("Coupon with ID " + couponId + "does not exists");
			}
			couponRepository.deleteById(couponId);
	}

	@Transactional
	public void updateCoupon(Long couponId, String titleCoupon, String codeCoupon, String shortDescription, String content,Integer percentDiscount,
			Integer pointCoupon) {
		Coupon couponEntity = couponRepository.findById(couponId).orElseThrow(() -> new IllegalStateException(
				"student with id " + couponId + "does not exist"));
		
		if (titleCoupon != null && titleCoupon.length() > 0 ) {
			couponEntity.setTitleCoupon(titleCoupon);
		}
		
		if (codeCoupon != null && codeCoupon.length() > 0 ) {
			couponEntity.setCodeCoupon(codeCoupon);
		}
		
		if (shortDescription != null && shortDescription.length() > 0 ) {
			couponEntity.setShortDescription(shortDescription);
		}
		
		if (content != null && content.length() > 0 ) {
			couponEntity.setContent(content);
		}
		
		if (percentDiscount  > 0 ) {
			couponEntity.setPercentDiscount(percentDiscount);;
		}
		if (pointCoupon  > 0 ) {
			couponEntity.setPointCoupon(pointCoupon);
		}
	}
	
	
	public ServiceResult findById(Long id) {
	    ServiceResult result = new ServiceResult();
	    Coupon _coupon = couponRepository.findById(id).orElse(null);
	    result.setData(_coupon);
	    return result;
	  }
}
