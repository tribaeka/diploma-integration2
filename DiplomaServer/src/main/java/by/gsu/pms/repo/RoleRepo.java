package by.gsu.pms.repo;

import by.gsu.pms.domain.ERole;
import by.gsu.pms.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
