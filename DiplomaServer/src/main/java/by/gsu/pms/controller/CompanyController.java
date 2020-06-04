package by.gsu.pms.controller;

import by.gsu.pms.domain.Company;
import by.gsu.pms.domain.Contact;
import by.gsu.pms.domain.User;
import by.gsu.pms.payload.response.MessageResponse;
import by.gsu.pms.repo.CompanyRepo;
import by.gsu.pms.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin(origins = "http://35.228.149.66:80")
@RestController
@RequestMapping("company")
public class CompanyController {

    @Autowired
    private FileService fileService;

    @Autowired
    private CompanyRepo companyRepo;

    @Value("${company.images.path}")
    private String companyImagesPath;

    @PostMapping("uploadImage")
    public ResponseEntity<?> addLogoToCompany(@RequestBody MultipartFile file) throws IOException {
        String fileName = fileService.saveFileToFolder(file, companyImagesPath);

        return ResponseEntity.ok(new MessageResponse("/img/company/" + fileName));
    }

    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return companyRepo.save(company);
    }

    @PostMapping("addContact/{companyId}")
    public Company addContact(
            @RequestBody Contact contact,
            @PathVariable("companyId") String companyId
    ) {
        Company company = companyRepo.getOne(Long.parseLong(companyId));
        company.setContact(contact);

        return companyRepo.save(company);
    }
}
