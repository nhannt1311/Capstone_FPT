package MockProject.fa.spring.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MatchConfirm")
public class MatchConfirm {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idMatCon;

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id")
	private Account account;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "match_id")
	private Match match;

	public Long getIdMatCon() {
		return idMatCon;
	}

	public void setIdMatCon(Long idMatCon) {
		this.idMatCon = idMatCon;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Match getMatch() {
		return match;
	}

	public void setMatch(Match match) {
		this.match = match;
	}
	
	

}