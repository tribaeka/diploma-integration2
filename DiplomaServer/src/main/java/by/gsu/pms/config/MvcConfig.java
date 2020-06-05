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
    private String folder = new File("").getAbsolutePath();
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/img/**")
                .addResourceLocations("file://" + folder + staticImagePath + "img/");
        registry.addResourceHandler("/img/flags/**")
                .addResourceLocations("file://" + folder + staticImagePath + "img/location-flags/");
        registry.addResourceHandler("/img/company/**")
                .addResourceLocations("file://" + folder + companyImagesPath);
        registry.addResourceHandler("/img/user/**")
                .addResourceLocations("file://" + folder + userImagesPath);
    }
}
