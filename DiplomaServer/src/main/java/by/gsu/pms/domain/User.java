package by.gsu.pms.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String username;
    private String email;
    private String phone;
    private boolean active;
    private String password;
    private String imageName;
    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private Set<Cv> cvSet = new HashSet<>();
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "user_roles",
            joinColumns = @JoinColumn(name = "userId"),
            inverseJoinColumns = @JoinColumn(name = "roleId"))
    private Set<Role> roles = new HashSet<>();
    @JsonIgnore
    @OneToMany(mappedBy="historyUser")
    private Set<JobOpenHistory> userHistorySet = new HashSet<>();

    @Transient
    @Value("${user.default.image}")
    public String userDefaultImage;

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.imageName = userDefaultImage;
    }
}
