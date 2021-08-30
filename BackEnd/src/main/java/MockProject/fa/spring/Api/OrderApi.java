package MockProject.fa.spring.Api;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Coupon;
import MockProject.fa.spring.Entity.Order;
import MockProject.fa.spring.Entity.Role;
import MockProject.fa.spring.Entity.Time;
import MockProject.fa.spring.Entity.Yard;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.CouponRepository;
import MockProject.fa.spring.Repository.OrderRepository;
import MockProject.fa.spring.Repository.TimeRepository;
import MockProject.fa.spring.Repository.YardRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;
import MockProject.fa.spring.response.MessageResponse;

@RestController
@RequestMapping("api/orders")
public class OrderApi {

	private final OrderRepository orderRepository;
	private final CouponRepository couponRepository;
	private final AccountRepository accountRepository;
	private final YardRepository yardRepository;
	private final TimeRepository timeRepository;

	@Autowired
	public OrderApi(OrderRepository orderRepository, CouponRepository couponRepository,
			AccountRepository accountResponsitory, YardRepository yardRepository, TimeRepository timeRepository) {
		this.couponRepository = couponRepository;
		this.accountRepository = accountResponsitory;
		this.orderRepository = orderRepository;
		this.yardRepository = yardRepository;
		this.timeRepository = timeRepository;
	}

	// cho admin de hien thi tat ca san
	@GetMapping()
	public Page<Order> getAllStadiums(Pageable pageable) {
		return orderRepository.findAll(pageable);
	}

	@GetMapping("accounts/{accountId}/orders")
	public Page<Order> getAllOrderByAccountId(@PathVariable(value = "accountId") Long accountId, Pageable pageable) {
		return orderRepository.findByAccountIdAcc(accountId, pageable);
	}

//	hiển thị order theo tưng yarrd
	@GetMapping("/yards/{yardId}/orders")
	public Page<Order> getAllOrderByYardId(@PathVariable(value = "yardId") Long yardId, Pageable pageable) {
		return orderRepository.findByYardIdYa(yardId, pageable);
	}
	//hiển thị order theo ngay
	@GetMapping("/{yardId}/date/orders")
	public List<Order> getAllOrderByDate(@PathVariable(value = "yardId") Long yardId, @RequestParam(required = false) Date day){
		if (!yardRepository.existsById(yardId)) {
			throw new ResourceNotFoundException("accountId " + yardId + " not found");
		}
		return  orderRepository.findByDay(day);
	}

	
//	@PostMapping("addOrder/{accountId}/{yardId}/{couponId}/{timeId}/Order")
//	public ResponseEntity<?> AddOrder(@PathVariable(value = "accountId") Long accountId,
//			@PathVariable(value = "yardId") Long yardId, @PathVariable(value = "couponId") Long couponId,
//			@PathVariable(value = "timeId") Long timeId, @RequestParam(required = false) Float cost,
//			@RequestParam(required = false) String day) {
//		if (orderRepository.existsByDay(day)&& orderRepository.existsByTimeIdTim(timeId) && orderRepository.existsByYardIdYa(yardId)  ) {
//					return ResponseEntity.badRequest().body(new MessageResponse("Error: This time is already taken!"));
//		}
//		Order order = new Order();
//		Optional<Account> acc = accountRepository.findById(accountId);
//		Optional<Yard> yard = yardRepository.findById(yardId);
//		Optional<Coupon> coupon = couponRepository.findById(couponId);
//		Optional<Time> time = timeRepository.findById(timeId);
//		order.setAccount(acc.get());
//		order.setCoupon(coupon.get());
//		order.setYard(yard.get());
//		order.setTime(time.get());
//		order.setCost(cost);
//		order.setDay(day);
//		orderRepository.save(order);
//		return ResponseEntity.ok(new MessageResponse("Order successfully!"));
//		
//	}
	
	@PostMapping("addOrder/{accountId}/{yardId}/{couponId}/{timeId}/Order")
	public ResponseEntity<?> AddOrder(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "yardId") Long yardId, @PathVariable(value = "couponId") Long couponId,
			@PathVariable(value = "timeId") Long timeId, @RequestParam(required = false) Float cost,
			@RequestParam(required = false) String day) {
		if (orderRepository.existsByDay(day)&& orderRepository.existsByTimeIdTim(timeId) && orderRepository.existsByYardIdYa(yardId)  ) {
					return ResponseEntity.badRequest().body(new MessageResponse("Error: This time is already taken!"));
		}
		Order order = new Order();
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Yard> yard = yardRepository.findById(yardId);
		Optional<Coupon> coupon = couponRepository.findById(couponId);
		Optional<Time> time = timeRepository.findById(timeId);
		order.setAccount(acc.get());
		order.setCoupon(coupon.get());
		order.setYard(yard.get());
		order.setTime(time.get());
		order.setCost(cost);
		order.setDay(day);
		orderRepository.save(order);
		return ResponseEntity.ok(new MessageResponse("Order successfully!"));
		
	}
	
	

	// cho admin de hien thi san theo id
//	@GetMapping("{stadiumId}")
//	public ResponseEntity<Stadium> getStadiumtById(@PathVariable("stadiumId") long id) {
//		Optional<Stadium> stadiumData = stadiumRepository.findById(id);
//
//		if (stadiumData.isPresent()) {
//			return new ResponseEntity<>(stadiumData.get(), HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//
////   	@GetMapping("/stadiums/s")
////   	public ResponseEntity<List<Stadium>> searchForNew(@SearchSpec Specification<Stadium> specs) {
////   		return new ResponseEntity<>(stadiumRepository.findAll(Specification.where(specs)), HttpStatus.OK);
////   	}
//
	// cho host de tao san
//	@PostMapping("/addOrder/{accountId}/{yardId}/{couponId}/Order")
//	public Order createOrder(@PathVariable(value = "accountId") Long accountId,
//			@PathVariable(value = "yardId") Long yardId, @PathVariable(value = "couponId") Long couponId,
//			@RequestParam(required = false) Long cost,@Valid @RequestParam(required = false) Set<Time> times) {
//		return accountRepository.findById(accountId).map(account -> {
//			comment.setAccount(account);
//			return commentRepository.save(comment);
//		});
//		return stadiumRepository.findById(stadiumId).map(stadium -> {
//			comment.setStadium(stadium);
//			return commentRepository.save(comment);
//		});
//		if (orderRepository.existsByDay(order.getDay())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new ("Error: Username is already taken!"));
//		}
//		Order order = new Order();
//		Optional<Account> acc = accountRepository.findById(accountId);
//		Optional<Yard> yard = yardRepository.findById(yardId);
//		Optional<Coupon> coupon = couponRepository.findById(couponId);
//		order.setAccount(acc.get());
//		order.setYard(yard.get());
//		order.setCoupon(coupon.get());
//		order.setCost(cost);
//		Set<String> strRoles = signUpRequest.getRole();
//		Set<Role> roles = new HashSet<>();
//		return orderRepository.save(order);
//
//	}
//
//	// cho host de sua san (admin ko co quyen nay)
//	@PutMapping("{accountId}/{stadiumId}")
//	public Stadium updateStadium(@PathVariable(value = "accountId") Long accountId,
//			@PathVariable(value = "stadiumId") Long stadiumId, @Valid @RequestBody Stadium stadiumRequest) {
//		if (!accountRepository.existsById(accountId)) {
//			throw new ResourceNotFoundException("accountId " + accountId + " not found");
//		}
//
//		return stadiumRepository.findById(stadiumId).map(stadium -> {
//			stadium.setAddress(stadiumRequest.getAddress());
//			return stadiumRepository.save(stadium);
//		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + stadiumId + "not found"));
//	}
//
//	// cho host,admin de xoa san
//	@DeleteMapping("{accountId}/{stadiumId}")
//	public ResponseEntity<?> deleteComment(@PathVariable(value = "accountId") Long accountId,
//			@PathVariable(value = "stadiumId") Long stadiumId) {
//		return stadiumRepository.findByIdAndAccountId(stadiumId, accountId).map(stadium -> {
//			stadiumRepository.delete(stadium);
//			return ResponseEntity.ok().build();
//		}).orElseThrow(() -> new ResourceNotFoundException(
//				"Stadium not found with id " + stadiumId + " and idAccount " + accountId));
//	}
//
//	@GetMapping("/searchStadium")
//	public ResponseEntity<List<Stadium>> searchForNew(@SearchSpec Specification<Stadium> specs) {
//		return new ResponseEntity<>(stadiumRepository.findAll(Specification.where(specs)), HttpStatus.OK);
//	}
}
