package MockProject.fa.spring.Entity;

import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "News")
public class New {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idNe;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String titleNew;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String shortDescription;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String content;

	private String imgNew;

	@CreationTimestamp
	@Column(name = "created_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date timeNewCreate = new Date();

	@UpdateTimestamp
	@Column(name = "updated_at")
	@Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt = new Date();

	public New() {
	}

	public Long getIdNe() {
		return idNe;
	}

	public void setIdNe(Long idNe) {
		this.idNe = idNe;
	}

	public String getTitleNew() {
		return titleNew;
	}

	public void setTitleNew(String titleNew) {
		this.titleNew = titleNew;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getImgNew() {
		return imgNew;
	}

	public void setImgNew(String imgNew) {
		this.imgNew = imgNew;
	}

	public Date getTimeNewCreate() {
		return timeNewCreate;
	}

	public void setTimeNewCreate(Date timeNewCreate) {
		this.timeNewCreate = timeNewCreate;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

}
