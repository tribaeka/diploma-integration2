package by.gsu.pms.repo;

import by.gsu.pms.domain.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepo extends JpaRepository<Job, Long> {
}
