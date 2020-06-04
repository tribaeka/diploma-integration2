package by.gsu.pms.payload.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long userId;
    private String username;
    private String email;
    private List<String> roles;
    private String imageName;

    public JwtResponse(String token, Long id, String username, String email, List<String> roles, String imageName) {
        this.token = token;
        this.userId = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.imageName = imageName;
    }
}
