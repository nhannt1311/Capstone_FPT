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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "StadiumReport")
public class StadiumReport {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idRep;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id")
	private Account account;

	@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
	@ManyToOne(optional = false)
	@JoinColumn(name = "stadium_id")
	private Stadium stadium;

	@CreationTimestamp
	@Column(name = "created_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateTime;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String detail;
	
	private String statusReport;

	public String getStatusReport() {
		return statusReport;
	}

	public void setStatusReport(String statusReport) {
		this.statusReport = statusReport;
	}

	public Long getIdRep() {
		return idRep;
	}

	public void setIdRep(Long idRep) {
		this.idRep = idRep;
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

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

}
