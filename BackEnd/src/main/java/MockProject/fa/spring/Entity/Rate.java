package MockProject.fa.spring.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Rates")
public class Rate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idRat;

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id")
	private Account account;

	@ManyToOne(optional = false)
	@JoinColumn(name = "stadium_id")
	private Stadium stadium;

	@Column
	private Integer star;

	public Long getIdRat() {
		return idRat;
	}

	public void setIdRat(Long idRat) {
		this.idRat = idRat;
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

	public Integer getStar() {
		return star;
	}

	public void setStar(Integer star) {
		this.star = star;
	}

}
