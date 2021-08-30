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
@Table(name = "Matchs")
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idMat;

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id")
	private Account account;
	

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String sport;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String titleMatch;

	// Message trong tương lai nếu hoàn thành TODO

	private String dateTime;

	private Integer numberMember;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String statusMatch = "noConfirm";

	public Long getIdMat() {
		return idMat;
	}

	public void setIdMat(Long idMat) {
		this.idMat = idMat;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public String getSport() {
		return sport;
	}

	public void setSport(String sport) {
		this.sport = sport;
	}

	public String getTitleMatch() {
		return titleMatch;
	}

	public void setTitleMatch(String titleMatch) {
		this.titleMatch = titleMatch;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public Integer getNumberMember() {
		return numberMember;
	}

	public void setNumberMember(Integer numberMember) {
		this.numberMember = numberMember;
	}

	public String getStatusMatch() {
		return statusMatch;
	}

	public void setStatusMatch(String statusMatch) {
		this.statusMatch = statusMatch;
	}

}
