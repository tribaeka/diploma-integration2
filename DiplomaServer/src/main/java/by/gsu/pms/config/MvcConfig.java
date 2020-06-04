package by.gsu.pms.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Value("${user.images.path}")
    private String userImagesPath;
    @Value("${company.images.path}")
    private String companyImagesPath;
    @Value("${static.image.path}")
    private String staticImagePath;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/img/**")
                .addResourceLocations("file://" + staticImagePath + "img/");
        registry.addResourceHandler("/img/flags/**")
                .addResourceLocations("file://" + staticImagePath + "img/location-flags/");
        registry.addResourceHandler("/img/company/**")
                .addResourceLocations("file://" + companyImagesPath);
        registry.addResourceHandler("/img/user/**")
                .addResourceLocations("file://" + userImagesPath);
    }
}
