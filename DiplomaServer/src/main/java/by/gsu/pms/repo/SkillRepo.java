package by.gsu.pms.repo;

import by.gsu.pms.domain.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SkillRepo extends JpaRepository<Skill, Long> {
    Optional<Skill> findByName(String name);

    List<Skill> findAllByOrderByName();
}
