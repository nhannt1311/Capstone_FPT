package MockProject.fa.spring.Entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "Accounts")
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAcc;

	@Column(columnDefinition = "NVARCHAR(MAX)")
	private String nameAcc;

	@Column(nullable = false)
	private String email;

	@JsonManagedReference
	@ManyToMany
	@JoinTable(name = "account_roles", joinColumns = @JoinColumn(name = "id_account"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	private String username;

	private String password;

	private String phone;

	private String dob;

	private Boolean gender;

	private int lock = 0;

	private String imgAcc ="No Image";

	public String getImgAcc() {
		return imgAcc;
	}

	public void setImgAcc(String imgAcc) {
		this.imgAcc = imgAcc;
	}

	public Account() {
	}

	public Long getIdAcc() {
		return idAcc;
	}

	public void setIdAcc(Long idAcc) {
		this.idAcc = idAcc;
	}

	public String getNameAcc() {
		return nameAcc;
	}

	public void setNameAcc(String nameAcc) {
		this.nameAcc = nameAcc;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setLock(int lock) {
		this.lock = lock;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Boolean getGender() {
		return gender;
	}

	public void setGender(Boolean gender) {
		this.gender = gender;
	}

//	public Set<StadiumEntity> getStadium() {
//		return stadium;
//	}
//
//
//
//	public void setStadium(Set<StadiumEntity> stadium) {
//		this.stadium = stadium;
//		
//		for(StadiumEntity S: stadium) {
//			S.setAccountEntity(this);
//		}
//	}

	public Integer getLock() {
		return lock;
	}

	public void setLock(Integer lock) {
		this.lock = lock;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Account(String nameAcc, String password) {
		super();
		this.nameAcc = nameAcc;
		this.password = password;
	}

	public Account(String nameAcc, String username, String email,String phone, String password) {

		this.nameAcc = nameAcc;
		this.username = username;
		this.email = email;
		this.phone=phone;
		this.password = password;
	}

	public Account(String nameAcc, String email, Set<Role> roles, String username, String password) {
		super();
		this.nameAcc = nameAcc;
		this.email = email;
		this.roles = roles;
		this.username = username;
		this.password = password;
	}

	public Account(String password) {
		this.password = password;
	}

}
