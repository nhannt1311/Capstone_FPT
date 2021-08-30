package MockProject.fa.spring.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Stadiums")
public class Stadium {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSta;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id_account")
//	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Account account;

//	@ManyToOne(optional = false)
//	@JoinColumn(name = "id_category")
//	private CategoryEntity category;

//	@OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
//	private List<Comment> comment = new ArrayList<>();
//
//	@OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
//	private List<Match> match = new ArrayList<>();
//
//	@OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
//	private List<Order> order = new ArrayList<>();
//
//	@OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
//	private List<Report> report = new ArrayList<>();
//
//	@OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
//	private List<YardEntity> yard = new ArrayList<>();
//
//	@OneToMany(mappedBy = "stadium", cascade = CascadeType.ALL)
//	private List<RateEntity> rate = new ArrayList<>();
	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String nameStadium;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String address;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String description;
	
	@Column(columnDefinition = "NVARCHAR(MAX)")	
	private String sports;

	private Integer priceMin;

	private Integer priceMax;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String nameOwner;

	private String imgSta;

	public String getImgSta() {
		return imgSta;
	}

	public void setImgSta(String string) {
		this.imgSta = string;
	}

	public Long getIdSta() {
		return idSta;
	}

	public void setIdSta(Long idSta) {
		this.idSta = idSta;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

//	public CategoryEntity getCategory() {
//		return category;
//	}
//
//	public void setCategory(CategoryEntity category) {
//		this.category = category;
//	}

	public String getNameStadium() {
		return nameStadium;
	}

	public void setNameStadium(String nameStadium) {
		this.nameStadium = nameStadium;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSports() {
		return sports;
	}

	public void setSports(String sports) {
		this.sports = sports;
	}

	public Integer getPriceMin() {
		return priceMin;
	}

	public void setPriceMin(Integer priceMin) {
		this.priceMin = priceMin;
	}

	public Integer getPriceMax() {
		return priceMax;
	}

	public void setPriceMax(Integer priceMax) {
		this.priceMax = priceMax;
	}

	public String getNameOwner() {
		return nameOwner;
	}

	public void setNameOwner(String nameOwner) {
		this.nameOwner = nameOwner;
	}

	public Stadium() {
	}

	public Stadium(String nameStadium, String address, String description, String sports, Integer priceMin,
			Integer priceMax, String nameOwner) {
		super();
		this.nameStadium = nameStadium;
		this.address = address;
		this.description = description;
		this.sports = sports;
		this.priceMin = priceMin;
		this.priceMax = priceMax;
		this.nameOwner = nameOwner;
	}

	public Stadium(String nameStadium, String address, String description, String sports, Integer priceMin,
			Integer priceMax, String nameOwner, String imgSta) {
		this.nameStadium = nameStadium;
		this.address = address;
		this.description = description;
		this.sports = sports;
		this.priceMin = priceMin;
		this.priceMax = priceMax;
		this.nameOwner = nameOwner;
		this.imgSta = imgSta;
	}

}
