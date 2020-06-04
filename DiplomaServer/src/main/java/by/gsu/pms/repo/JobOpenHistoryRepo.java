package by.gsu.pms.repo;

import by.gsu.pms.domain.JobOpenHistory;
import by.gsu.pms.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobOpenHistoryRepo extends JpaRepository<JobOpenHistory, Long> {
    List<JobOpenHistory> getAllByHistoryUser(User user);
}
