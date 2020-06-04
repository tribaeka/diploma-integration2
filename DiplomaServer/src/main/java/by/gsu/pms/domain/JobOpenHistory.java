package by.gsu.pms.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobOpenHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobOpenHistoryId;
    @ManyToOne
    @JoinColumn(name="historyJob", nullable=false)
    private Job historyJob;
    @ManyToOne
    @JoinColumn(name="historyUser", nullable=false)
    private User historyUser;
    private LocalDateTime accessDate;
}
