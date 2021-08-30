package MockProject.fa.spring.response;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long idAcc;
	private String nameAcc;
	private String username;
	private String email;
	private String phone;
//	private Integer phone;
	private List<String> roles;
	private int lock;

	public JwtResponse() {

	}

	public JwtResponse(String accessToken, Long idAcc, String nameAcc, String username, String email, String phone, int lock,
			List<String> roles) {
		this.token = accessToken;
		this.idAcc = idAcc;
		this.nameAcc = nameAcc;
		this.username = username;
		this.email = email;
		this.phone = phone;
		this.lock = lock;
		this.roles = roles;
	}

	public int getLock() {
		return lock;
	}

	public void setLock(int lock) {
		this.lock = lock;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
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

//	
//	public Integer getPhone() {
//		return phone;
//	}
//
//	public void setPhone(Integer phone) {
//		this.phone = phone;
//	}

	public void setUsername(String username) {
		this.username = username;
	}

	public List<String> getRoles() {
		return roles;
	}
}
