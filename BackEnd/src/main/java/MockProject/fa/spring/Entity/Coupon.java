package MockProject.fa.spring.Entity;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "Coupons")
public class Coupon {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCp;

//	@OneToMany(mappedBy = "coupon", cascade = CascadeType.ALL)
//	private List<OrderEntity> order = new ArrayList<>();

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String titleCoupon;

	private String codeCoupon;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String shortDescription;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String content;

	@CreationTimestamp
	@Column(name = "created_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date timeCreate;

	@UpdateTimestamp
	@Column(name = "updated_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt = new Date();

	private Date timeEnd;

	private Integer percentDiscount;

	public Integer getPercentDiscount() {
		return percentDiscount;
	}

	public void setPercentDiscount(Integer percentDiscount) {
		this.percentDiscount = percentDiscount;
	}

	@Column
	private Integer pointCoupon;

	@Column
	private String imgCoupon;

	public Coupon() {

	}

	public String getTitleCoupon() {
		return titleCoupon;
	}

	public void setTitleCoupon(String titleCoupon) {
		this.titleCoupon = titleCoupon;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Long getIdCp() {
		return idCp;
	}

	public void setIdCp(Long idCp) {
		this.idCp = idCp;
	}

	public String getCodeCoupon() {
		return codeCoupon;
	}

	public void setCodeCoupon(String codeCoupon) {
		this.codeCoupon = codeCoupon;
	}

	public Date getTimeCreate() {
		return timeCreate;
	}

	public void setTimeCreate(Date timeCreate) {
		this.timeCreate = timeCreate;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Date getTimeEnd() {
		return timeEnd;
	}

	public void setTimeEnd(Date timeEnd) {
		this.timeEnd = timeEnd;
	}

	public Integer getPointCoupon() {
		return pointCoupon;
	}

	public void setPointCoupon(Integer pointCoupon) {
		this.pointCoupon = pointCoupon;
	}

	public String getImgCoupon() {
		return imgCoupon;
	}

	public void setImgCoupon(String imgCoupon) {
		this.imgCoupon = imgCoupon;
	}

}
