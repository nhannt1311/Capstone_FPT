package MockProject.fa.spring.Entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "Times")
public class Time {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTim;

//	@OneToMany(mappedBy = "time", cascade = CascadeType.ALL)
//	private List<Order> order = new ArrayList<>();

	
	private String period;

	public Long getIdTim() {
		return idTim;
	}

	public void setIdTim(Long idTim) {
		this.idTim = idTim;
	}

	public String getPeriod() {
		return period;
	}

	public void setPeriod(String period) {
		this.period = period;
	}

}
