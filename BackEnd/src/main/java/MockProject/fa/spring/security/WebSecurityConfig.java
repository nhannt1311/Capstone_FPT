package MockProject.fa.spring.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import MockProject.fa.spring.jwt.AuthEntryPointJwt;
import MockProject.fa.spring.jwt.AuthTokenFilter;
import MockProject.fa.spring.service.AccountDetailsServiceImpl;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	AccountDetailsServiceImpl accountDetailsService;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		return new AuthTokenFilter();
	}

	@Override
	public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
		authenticationManagerBuilder.userDetailsService(accountDetailsService).passwordEncoder(passwordEncoder());
	}

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
	    return super.authenticationManagerBean();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.authorizeRequests().antMatchers("/api/v1/**").permitAll()
			.antMatchers("/api/test/**").permitAll()
			.antMatchers("/api/new/**").permitAll()
			.antMatchers("/api/coupon/**").permitAll()
			.antMatchers("/api/accounts/**").permitAll()
			.antMatchers("/api/stadiums/**").permitAll()
			.antMatchers("/api/yards/**").permitAll()
			.antMatchers("/api/orders/**").permitAll()
			.antMatchers("/images/**").permitAll()
			.antMatchers("/api/favorites/**").permitAll()
			.antMatchers("/api/comments/**").permitAll()
			.antMatchers("/api/accountReports/**").permitAll()
			.antMatchers("/api/ReportStadiums/**").permitAll()
			.antMatchers("/api/matchs/**").permitAll()
			.anyRequest().authenticated();

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
	}
}
