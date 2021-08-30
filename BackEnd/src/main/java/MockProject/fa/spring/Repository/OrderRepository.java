package MockProject.fa.spring.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

//	Boolean existsByDay(Date day);
	Order findByDay(String day);

	boolean existsByYardIdYa(Long yardIdYa);

	boolean existsByTimeIdTim(Long timeIdTim);

	boolean existsByDay(String day);

	boolean existsByCost(Float cost);

	Page<Order> findByYardIdYa(Long yardIdYa, Pageable pageable);
	Page<Order> findByAccountIdAcc(Long accountIdAcc, Pageable pageable);

	List<Order> findByDay(Date day);;

}
