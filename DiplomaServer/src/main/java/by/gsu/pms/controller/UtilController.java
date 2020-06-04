package by.gsu.pms.controller;

import by.gsu.pms.domain.Contact;
import by.gsu.pms.domain.Cv;
import by.gsu.pms.domain.Skill;
import by.gsu.pms.domain.User;
import by.gsu.pms.payload.response.MessageResponse;
import by.gsu.pms.repo.*;
import by.gsu.pms.service.MailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://35.228.149.66:80")
@RestController
@RequestMapping("util")
public class UtilController {

    @Autowired
    private SkillRepo skillRepo;
    @Autowired
    private CompanyRepo companyRepo;
    @Autowired
    private MailSender mailSender;
    @Autowired
    private ContactRepo contactRepo;
    @Autowired
    private CvRepo cvRepo;
    @Autowired
    private UserRepo userRepo;

    @GetMapping("autocomplete/search")
    public List<String> getAutocompleteSearchDictionary () {
        List<String> result = new ArrayList<>();

        skillRepo.findAll().forEach(skill -> result.add(skill.getName()));
        companyRepo.findAll().forEach(company -> result.add(company.getName()));
        Collections.sort(result);

        return result;
    }

    @GetMapping("autocomplete/skills")
    public List<String> getAutocompleteSkillsDictionary () {
        return skillRepo.findAllByOrderByName().stream()
                .map(Skill::getName)
                .collect(Collectors.toList());

    }

    @GetMapping("search-builds/job")
    public Map<String, String> getSearchBuildsForJob() {
        return new HashMap<String, String>() {{
            put("#Angular Front-end Developer", "JavaScript Git Angular HTML CSS SASS");
            put("#React Front-end Developer", "JavaScript Git React HTML CSS SASS");
            put("#Java Back-end Developer", "Java JavaEE Spring Git XML");
            put("JavaScript Back-end Developer", "NodeJS JavaScript Git Express");
            put("Python Developer", "Python Git Machine Learning");
            put("Data Analytic", "Data Analytics MySQL Python");
            put("DevOps", "Docker");
            put("for test #Angular Front-end Developer", "JavaScript Git Angular HTML CSS SASS");
            put("for test #React Front-end Developer", "JavaScript Git React HTML CSS SASS");
            put("for test #Java Back-end Developer", "Java JavaEE Spring Git XML");
            put("for test JavaScript Back-end Developer", "NodeJS JavaScript Git Express");
            put("for test Python Developer", "Python Git Machine Learning");
            put("for test Data Analytic", "Data Analytics MySQL Python");
            put("for test DevOps", "Docker");
        }};
    }

    @GetMapping("search-builds/cv")
    public Map<String, String> getSearchBuildsForCv() {
        return new HashMap<>();
    }

    @PostMapping("sendJobRespond")
    public ResponseEntity<?> sendCvToContact(
            @RequestParam("contactId") String contactId,
            @RequestParam("jobTitle") String jobTitle,
            @RequestParam("cvId") String cvId,
            @RequestParam("userId") String userId,
            @RequestParam("comment") String comment
    ) {
        Contact contact = contactRepo.getOne(Long.parseLong(contactId));
        Cv cv = cvRepo.getOne(Long.parseLong(cvId));
        User user = userRepo.getOne(Long.parseLong(userId));

        StringBuilder message = new StringBuilder();
        message
                .append("Hello, ")
                .append(contact.getFirstName())
                .append(" you have a new respond to ")
                .append(jobTitle)
                .append("\n\nHere is cv of a candidate:")
                .append("\n\tMain skills:");
        cv.getCvSkillSet().forEach(skill -> message.append(" ").append(skill.getName()).append(" "));
        message
                .append("\n\tComment from writer:\n\t\t")
                .append(comment)
                .append("\n\tLink to download full cv: http://localhost:8080/cv/download/")
                .append(cv.getCvId())
                .append("\n\n You can contact with writer by contacts bellow:")
                .append("\n\tEmail:")
                .append(user.getEmail())
                .append("\n\tPhone:")
                .append(user.getPhone())
                .append("\n\nThank you for using our service.");

        mailSender.send(contact.getEmail(), "You have new response for posted Job", message.toString());
        return ResponseEntity.ok(new MessageResponse("Message has sent"));
    }
}
