package by.gsu.pms.payload.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;


@Getter
@Setter
@ToString
public class ChainCompanyRequest {
    @NotBlank
    private Long userId;

    @NotBlank
    private String companyName;

    @NotBlank
    private String siteUrl;
}
