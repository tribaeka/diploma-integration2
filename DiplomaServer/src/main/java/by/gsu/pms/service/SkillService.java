package by.gsu.pms.service;

import by.gsu.pms.domain.Skill;
import by.gsu.pms.repo.SkillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class SkillService {
    @Autowired
    private SkillRepo skillRepo;

    public Set<Skill> restoreSkillListFromString(String skills) {
        return Stream.of(skills.split(" "))
                .sorted()
                .map(skillName -> skillRepo.findByName(skillName)
                        .orElseGet(() -> skillRepo.save(new Skill(skillName))))
                .collect(Collectors.toSet());
    }
}
