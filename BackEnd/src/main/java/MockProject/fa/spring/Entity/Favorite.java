package MockProject.fa.spring.Entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Favorite")
public class Favorite {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idFav;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id_account")
	private Account account;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "id_stadium")
	private Stadium stadium;

	private Integer love;

	public Integer getLove() {
		return love;
	}

	public void setLove(Integer love) {
		this.love = love;
	}

	public Long getIdFav() {
		return idFav;
	}

	public void setIdFav(Long idFav) {
		this.idFav = idFav;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Stadium getStadium() {
		return stadium;
	}

	public void setStadium(Stadium stadium) {
		this.stadium = stadium;
	}

}
