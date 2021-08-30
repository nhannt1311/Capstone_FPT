package MockProject.fa.spring.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Yards")
public class Yard {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idYa;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(optional = false)
	@JoinColumn(name = "stadium_id")
	private Stadium stadium;

	private Integer price;

	private Integer capacity;

	private String statusYard;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String nameYard;

	public Long getIdYa() {
		return idYa;
	}

	public void setIdYa(Long idYa) {
		this.idYa = idYa;
	}

	public Stadium getStadium() {
		return stadium;
	}

	public void setStadium(Stadium stadium) {
		this.stadium = stadium;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getCapacity() {
		return capacity;
	}

	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}



	public String getStatusYard() {
		return statusYard;
	}

	public void setStatusYard(String statusYard) {
		this.statusYard = statusYard;
	}

	public String getNameYard() {
		return nameYard;
	}

	public void setNameYard(String nameYard) {
		this.nameYard = nameYard;
	}

	public Yard() {

	}


}
