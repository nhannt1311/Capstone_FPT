package MockProject.fa.spring.Entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name = "role")
public class Role implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
	@Column
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long idRole;
    
    @Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ERole name;
    
    @JsonBackReference
    @ManyToMany(mappedBy = "roles")
    private Set<Account> account;

    
    public Role() {
    }


    public Role(ERole name) {
		this.name = name;
	}
    
	public Long getIdRole() {
		return idRole;
	}

	public void setIdRole(Long idRole) {
		this.idRole = idRole;
	}

	public ERole getName() {
		return name;
	}


	public void setName(ERole name) {
		this.name = name;
	}


	public Set<Account> getAccount() {
		return account;
	}


	public void setAccount(Set<Account> account) {
		this.account = account;
	}
}
