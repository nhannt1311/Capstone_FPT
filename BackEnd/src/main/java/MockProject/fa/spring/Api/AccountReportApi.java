package MockProject.fa.spring.Api;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import MockProject.fa.spring.Entity.Account;
import MockProject.fa.spring.Entity.AccountReport;
import MockProject.fa.spring.Entity.Comment;
import MockProject.fa.spring.Entity.StadiumReport;
import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Repository.AccountReportRepository;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@RequestMapping(path = "api/accountReports")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AccountReportApi {
	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private AccountReportRepository accountReportRepository;

	@GetMapping
	public Page<AccountReport> getAllReport(Pageable pageable) {
		return accountReportRepository.findAll(pageable);
	}

	@GetMapping("/Status=No")
     public List<AccountReport> getAllReportByStatus(@RequestParam(required = false, defaultValue = "No") String statusReport){
		return accountReportRepository.findByStatusReport(statusReport);
	}

	@PostMapping("/creAccReports/{accountId1}/{accountId2}")
	public AccountReport createAccountReport(@PathVariable(value = "accountId1") Long accountId1,
			@PathVariable(value = "accountId2") Long accountId2, @Valid @RequestParam(required = false) String detail,
			@Valid @RequestParam(required = false, defaultValue = "No") String statusReport) {
		AccountReport accountReport = new AccountReport();
		Optional<Account> acc1 = accountRepository.findById(accountId1);
		Optional<Account> acc2 = accountRepository.findById(accountId2);
		accountReport.setAccount1(acc1.get());
		accountReport.setAccount2(acc2.get());
		accountReport.setDetail(detail);
		accountReport.setStatusReport(statusReport);
		return accountReportRepository.save(accountReport);

	}

	@PutMapping("updateStatus/{accountId1}/{accountId2}/{reportId}")
	public AccountReport updateStatusReport(@PathVariable(value = "accountId1") Long accountId1,
			@PathVariable(value = "accountId2") Long accountId2, @PathVariable(value = "reportId") Long reportId,
			@Valid @RequestParam(required = false, defaultValue = "Done") String statusReport) {
		if (!accountRepository.existsById(accountId1)) {
			throw new ResourceNotFoundException("AccountId " + accountId1 + " not found");
		}
		if (!accountRepository.existsById(accountId2)) {
			throw new ResourceNotFoundException("StadiumId " + accountId2 + " not found");
		}
		return accountReportRepository.findById(reportId).map(accountReport -> {
			Optional<Account> acc1 = accountRepository.findById(accountId1);
			Optional<Account> acc2 = accountRepository.findById(accountId2);
			accountReport.setAccount1(acc1.get());
			accountReport.setAccount2(acc2.get());
			accountReport.setStatusReport(statusReport);
			return accountReportRepository.save(accountReport);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + reportId + "not found"));

	}
	
	@PutMapping("updateStatus1/{accountId1}/{accountId2}/{reportId}")
	public AccountReport updateStatusReport1(@PathVariable(value = "accountId1") Long accountId1,
			@PathVariable(value = "accountId2") Long accountId2, @PathVariable(value = "reportId") Long reportId,
			@Valid @RequestParam(required = false, defaultValue = "Wait") String statusReport) {
		if (!accountRepository.existsById(accountId1)) {
			throw new ResourceNotFoundException("AccountId " + accountId1 + " not found");
		}
		if (!accountRepository.existsById(accountId2)) {
			throw new ResourceNotFoundException("StadiumId " + accountId2 + " not found");
		}
		return accountReportRepository.findById(reportId).map(accountReport -> {
			Optional<Account> acc1 = accountRepository.findById(accountId1);
			Optional<Account> acc2 = accountRepository.findById(accountId2);
			accountReport.setAccount1(acc1.get());
			accountReport.setAccount2(acc2.get());
			accountReport.setStatusReport(statusReport);
			return accountReportRepository.save(accountReport);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + reportId + "not found"));

	}

}
