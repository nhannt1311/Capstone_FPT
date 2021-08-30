package MockProject.fa.spring.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "RevenueAdmin")
public class RevenueAdmin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idReAd;

	@ManyToOne(optional = false)
	@JoinColumn(name = "revenuestadium_id")
	private RevenueStadium revenuestadium;

	public Long getIdReAd() {
		return idReAd;
	}

	public void setIdReAd(Long idReAd) {
		this.idReAd = idReAd;
	}

	public RevenueStadium getRevenuestadium() {
		return revenuestadium;
	}

	public void setRevenuestadium(RevenueStadium revenuestadium) {
		this.revenuestadium = revenuestadium;
	}

}
