package by.gsu.pms.repo;

import by.gsu.pms.domain.Cv;
import by.gsu.pms.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CvRepo extends JpaRepository<Cv, Long> {
    List<Cv> findAllByUser(User user);
}

