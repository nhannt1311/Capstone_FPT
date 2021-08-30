package MockProject.fa.spring.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import MockProject.fa.spring.Entity.StadiumReport;

public interface StadiumReportRepository extends JpaRepository<StadiumReport,Long >{

	Page<StadiumReport> findByStadiumIdSta(Long stadiumIdSta, Pageable pageable);

	List<StadiumReport> findByStatusReport(String statusReport);
}
