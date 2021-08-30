package MockProject.fa.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Repository.AccountRepository;


@Service
public class AccountDetailsServiceImpl implements UserDetailsService {
	@Autowired
	AccountRepository accountRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account user = accountRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return AccountDetailsImpl.build(user);
	}

}