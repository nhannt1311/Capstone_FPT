package MockProject.fa.spring.Entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idOrd;
//
//	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//	private List<RevenueStadiumEntity> revenuestadium = new ArrayList<>();

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id")
	private Account account;

	@ManyToOne(optional = false)
	@JoinColumn(name = "yard_id")
	private Yard yard;

	@ManyToOne(optional = false)
	@JoinColumn(name = "coupon_id")
	private Coupon coupon;

	private String day; // đây ngày tới lấy sân

	@CreationTimestamp
	@Column(name = "dateOrder")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateOrder; // ngày đặt sân

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(optional = false)
	@JoinColumn(name = "time_id")
	private Time time;
	
	
	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	private Float cost;

	public Long getIdOrd() {
		return idOrd;
	}

	public void setIdOrd(Long idOrd) {
		this.idOrd = idOrd;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Yard getYard() {
		return yard;
	}

	public void setYard(Yard yard) {
		this.yard = yard;
	}


	public Coupon getCoupon() {
		return coupon;
	}

	public void setCoupon(Coupon coupon) {
		this.coupon = coupon;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public Date getDateOrder() {
		return dateOrder;
	}

	public void setDateOrder(Date dateOrder) {
		this.dateOrder = dateOrder;
	}

	public Float getCost() {
		return cost;
	}

	public void setCost(Float cost) {
		this.cost = cost;
	}



	
}
