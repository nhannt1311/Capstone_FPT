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
@Table(name = "AccountReports")
public class AccountReport {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAccRep;

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id1")
	private Account account1;

	@ManyToOne(optional = false)
	@JoinColumn(name = "account_id2")
	private Account account2;

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

	public Long getIdAccRep() {
		return idAccRep;
	}

	public void setIdAccRep(Long idAccRep) {
		this.idAccRep = idAccRep;
	}

	public Account getAccount1() {
		return account1;
	}

	public void setAccount1(Account account1) {
		this.account1 = account1;
	}

	public Account getAccount2() {
		return account2;
	}

	public void setAccount2(Account account2) {
		this.account2 = account2;
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
