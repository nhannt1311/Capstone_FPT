package MockProject.fa.spring.Api;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import MockProject.fa.spring.Entity.Coupon;
//import MockProject.fa.spring.Repository.CouponRepository;
import MockProject.fa.spring.Entity.New;
import MockProject.fa.spring.Repository.CouponRepository;
import MockProject.fa.spring.service.CouponService;
import MockProject.fa.spring.service.ServiceResult;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "api/coupon")

public class CouponApi {


	@Autowired
	private CouponService couponService;
	@Autowired
	private CouponRepository couponRepository;

//	@Autowired
//	private CouponRepository couponRepository;

	@GetMapping
	public List<Coupon> getNew() {
		return couponService.getNew();
	}

	@GetMapping(path = "/coupon/{id}")
	public ResponseEntity<ServiceResult> findById(@PathVariable Long id) {
		return new ResponseEntity<ServiceResult>(couponService.findById(id), HttpStatus.OK);
	}

	@DeleteMapping(path = "{couponId}")
	public void deleteNew(@PathVariable("couponId") Long couponId) {
		couponService.deleteCoupon(couponId);
	}
	
	private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir"));
	@PostMapping(path = "/addCoupon")
    @ResponseStatus(HttpStatus.CREATED)
    public Coupon create(@RequestParam(required = false) String titleCoupon, 
    		@RequestParam(required = false) String codeCoupon,
			@RequestParam(required = false) String shortDescription,
			@RequestParam(required = false) String content,
			@RequestParam("timeEnd") 
		      @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date timeEnd,
			  @Valid @RequestParam(required = false) Integer percentDiscount,
			@RequestParam(required = false) MultipartFile image
                       ) throws IOException {
		Path staticPath = Paths.get("static");
		Path imagePath = Paths.get("images");
        if (!Files.exists(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath))) {
            Files.createDirectories(CURRENT_FOLDER.resolve(staticPath).resolve(imagePath));
        }
        Path file = CURRENT_FOLDER.resolve(staticPath)
                .resolve(imagePath).resolve(image.getOriginalFilename());
        try (OutputStream os = Files.newOutputStream(file)) {
            os.write(image.getBytes());
        }

        Coupon coupon = new Coupon();
        coupon.setTitleCoupon(titleCoupon);
        coupon.setCodeCoupon(codeCoupon);
        coupon.setShortDescription(shortDescription);
        coupon.setContent(content);
        coupon.setTimeEnd(timeEnd);
        coupon.setPercentDiscount(percentDiscount);
        coupon.setImgCoupon(imagePath.resolve(image.getOriginalFilename()).toString());
     
        return couponRepository.save(coupon);
    }


	@PutMapping(path = "{couponId}")
	public void updateNew(@PathVariable("couponId") Long couponId, @RequestParam(required = false) String titleCoupon,
			@RequestParam(required = false) String codeCoupon, @RequestParam(required = false) String shortDescription,
			@RequestParam(required = false) String content, @RequestParam int percentDiscount,
			@RequestParam int pointCoupon) {
		couponService.updateCoupon(couponId, titleCoupon, codeCoupon, shortDescription, content, percentDiscount,
				pointCoupon);
	}

	}
