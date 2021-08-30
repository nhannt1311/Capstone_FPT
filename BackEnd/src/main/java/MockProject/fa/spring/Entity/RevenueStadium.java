package MockProject.fa.spring.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "RevenueStadium")
public class RevenueStadium {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idReSta;

	@ManyToOne(optional = false)
	@JoinColumn(name = "order_id")
	private Order order;

	public Long getIdReSta() {
		return idReSta;
	}

	public void setIdReSta(Long idReSta) {
		this.idReSta = idReSta;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

}
