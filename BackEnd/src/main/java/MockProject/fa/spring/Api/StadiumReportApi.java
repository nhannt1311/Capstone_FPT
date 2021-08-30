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
import MockProject.fa.spring.Entity.StadiumReport;
import MockProject.fa.spring.Entity.Stadium;
import MockProject.fa.spring.Entity.Yard;
import MockProject.fa.spring.Repository.AccountReportRepository;
import MockProject.fa.spring.Repository.AccountRepository;
import MockProject.fa.spring.Repository.StadiumReportRepository;
import MockProject.fa.spring.Repository.StadiumRepository;
import MockProject.fa.spring.exception.ResourceNotFoundException;

@RestController
@RequestMapping("api/ReportStadiums")
@CrossOrigin(origins = "*", maxAge = 3600)
public class StadiumReportApi {

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private StadiumRepository StadiumRepository;

	@Autowired
	private StadiumReportRepository stadiumReportRepository;

	@GetMapping
	public Page<StadiumReport> getAllReport(Pageable pageable) {
		return stadiumReportRepository.findAll(pageable);
	}
	

	@GetMapping("{stadiumId}/reports")
	public Page<StadiumReport> getAllStadiumsByStadiumId(@PathVariable(value = "stadiumId") Long stadiumId,
			Pageable pageable) {
		return stadiumReportRepository.findByStadiumIdSta(stadiumId, pageable);
	}
	
	@GetMapping("/Status=No")
    public List<StadiumReport> getAllReportByStatus(@RequestParam(required = false, defaultValue = "No") String statusReport){
		return stadiumReportRepository.findByStatusReport(statusReport);
	}

	@PostMapping("/creStaReport/{accountId}/{stadiumId}")
	public StadiumReport createStadiumReport(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, 
			@Valid @RequestParam(required = false) String detail,
			@Valid @RequestParam(required = false, defaultValue = "No") String statusReport) {
		StadiumReport staReport = new StadiumReport();
		Optional<Account> acc = accountRepository.findById(accountId);
		Optional<Stadium> sta = StadiumRepository.findById(stadiumId);
		staReport.setAccount(acc.get());
		staReport.setStadium(sta.get());
		staReport.setDetail(detail);
		staReport.setStatusReport(statusReport);
		return stadiumReportRepository.save(staReport);

	}

	@PutMapping("updateStatus/{accountId}/{stadiumId}/{reportId}")
	public StadiumReport updateStatusReport(@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId, @PathVariable(value = "reportId") Long reportId,
			@Valid @RequestParam(required = false, defaultValue = "Done") String statusReport) {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("AccountId " + accountId + " not found");
		}
		if (!StadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("StadiumId " + stadiumId + " not found");
		}
		return stadiumReportRepository.findById(reportId).map(stadiumReport -> {
			Optional<Account> acc = accountRepository.findById(accountId);
			Optional<Stadium> sta = StadiumRepository.findById(stadiumId);
			stadiumReport.setAccount(acc.get());
			stadiumReport.setStadium(sta.get());
			stadiumReport.setStatusReport(statusReport);
			return stadiumReportRepository.save(stadiumReport);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + reportId + "not found"));

	}
	
	@PutMapping("updateStatus1/{accountId}/{stadiumId}/{reportId}")
	public StadiumReport updateStatusReport1(
			@PathVariable(value = "accountId") Long accountId,
			@PathVariable(value = "stadiumId") Long stadiumId,
			@PathVariable(value = "reportId") Long reportId,
			@Valid @RequestParam(required = false, defaultValue = "Wait") String statusReport) {
		if (!accountRepository.existsById(accountId)) {
			throw new ResourceNotFoundException("AccountId " + accountId + " not found");
		}
		if (!StadiumRepository.existsById(stadiumId)) {
			throw new ResourceNotFoundException("StadiumId " + stadiumId + " not found");
		}
		return stadiumReportRepository.findById(reportId).map(stadiumReport -> {
			Optional<Account> acc = accountRepository.findById(accountId);
			Optional<Stadium> sta = StadiumRepository.findById(stadiumId);
			stadiumReport.setAccount(acc.get());
			stadiumReport.setStadium(sta.get());
			stadiumReport.setStatusReport(statusReport);
			return stadiumReportRepository.save(stadiumReport);
		}).orElseThrow(() -> new ResourceNotFoundException("stadiumId " + reportId + "not found"));

	}

}
