package MockProject.fa.spring.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import MockProject.fa.spring.Entity.ERole;
import MockProject.fa.spring.Entity.Role;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
