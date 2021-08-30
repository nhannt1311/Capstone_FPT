package MockProject.fa.spring.request;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {

	@NotBlank
	@Size(max = 50)
	private String nameAcc;

	@NotBlank
	@Size(min = 3, max = 20)
	private String username;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 12)
	private String phone;

//    @NotBlank
//    @Size(max = 12)
//    private Integer phone;

	private Set<String> role;

	@NotBlank
	@Size(min = 6, max = 40)
	private String password;

//    @NotBlank
//    @Size(min = 6, max = 40)
//    private String repassword;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNameAcc() {
		return nameAcc;
	}

	public void setNameAcc(String nameAcc) {
		this.nameAcc = nameAcc;
	}

//	public Integer getPhone() {
//		return phone;
//	}
//
//	public void setPhone(Integer phone) {
//		this.phone = phone;
//	}

	public Set<String> getRole() {
		return role;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

//	public String getRepassword() {
//		return repassword;
//	}
//
//	public void setRepassword(String repassword) {
//		this.repassword = repassword;
//	}
//    

}
