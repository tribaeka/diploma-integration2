package by.gsu.pms.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.Type;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobId;
    private String title;
    @Type(type="text")
    private String description;
    private String location;
    @ManyToMany(cascade = { CascadeType.ALL }, fetch = FetchType.LAZY)
    @JoinTable(
            name = "skillsForJob",
            joinColumns = { @JoinColumn(name = "jobId") },
            inverseJoinColumns = { @JoinColumn(name = "skillId") }
    )
    private Set<Skill> jobSkillSet = new HashSet<>();
    @CreatedDate
    private LocalDate postDate;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "companiesJob")
    private Company companiesJob;
    private int salary;
    private int experience;
    @JsonIgnore
    @OneToMany(mappedBy="historyJob")
    private Set<JobOpenHistory> jobHistorySet = new HashSet<>();
}
