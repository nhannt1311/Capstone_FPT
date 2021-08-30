package MockProject.fa.spring.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "Comments")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCom;

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id")
	private Account account;

	@ManyToOne(optional = false)
	@JoinColumn(name = "stadium_id")
	private Stadium stadium;

	@CreationTimestamp
	@Column(name = "created_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date timeCmt;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String cmt;

	public Long getIdCom() {
		return idCom;
	}

	public void setIdCom(Long idCom) {
		this.idCom = idCom;
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

	public Date getTimeCmt() {
		return timeCmt;
	}

	public void setTimeCmt(Date timeCmt) {
		this.timeCmt = timeCmt;
	}

	public String getCmt() {
		return cmt;
	}

	public void setCmt(String cmt) {
		this.cmt = cmt;
	}


}
