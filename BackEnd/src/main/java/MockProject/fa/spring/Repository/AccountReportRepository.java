package MockProject.fa.spring.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.AccountReport;

public interface AccountReportRepository extends JpaRepository<AccountReport, Long>{

	List<AccountReport> findByStatusReport(String statusReport);
}
