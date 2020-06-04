package by.gsu.pms.controller;

import by.gsu.pms.domain.Job;
import by.gsu.pms.domain.Skill;
import by.gsu.pms.repo.CompanyRepo;
import by.gsu.pms.repo.JobRepo;
import by.gsu.pms.service.JobSearchService;
import by.gsu.pms.service.SkillService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.function.Predicate;

@CrossOrigin(origins = "http://35.228.149.66:80")
@RestController
@RequestMapping("job")
public class JobController {
    private ObjectMapper mapper = new ObjectMapper();
    @Autowired
    private JobRepo jobRepo;
    @Autowired
    private JobSearchService jobSearch;
    @Autowired
    private SkillService skillService;
    @Autowired
    private CompanyRepo companyRepo;
    private Predicate<String> isFullSearch = (query -> query.isEmpty() || query.equals("*"));

    @GetMapping("search")
    public List<Job> executeSearch(@RequestParam(name = "query") String query) {
        return isFullSearch.test(query) ?
                jobRepo.findAll() :
                jobSearch.search(query);
    }

    @GetMapping
    public List<Job> list(){
        return jobRepo.findAll();
    }

    @GetMapping("{id}")
    public Job getOne(@PathVariable("id") Job job){
        return job;
    }

    @PostMapping
    public Job create(
            @RequestBody Job job
    )
    {
        job.setPostDate(LocalDate.now());
        return jobRepo.save(job);
    }

    @PutMapping("{id}")
    public Job update(@PathVariable("id") Job jobFromDb,
                       @RequestBody String jsonJob
    ){
        Job job = null;
        try {
            job = mapper.readValue(jsonJob, Job.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        BeanUtils.copyProperties(job, jobFromDb, "jobId");

        return jobRepo.save(jobFromDb);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Job job){
        jobRepo.delete(job);
    }

    @PostMapping("addSkills")
    public Job linkJobWithSkillsSet(@RequestParam("skills") String skills, @RequestParam("jobId") String jobId) {
        Job job = this.jobRepo.getOne(Long.parseLong(jobId));
        job.setJobSkillSet(skillService.restoreSkillListFromString(skills));

        return jobRepo.save(job);
    }

    @PostMapping("addCompany")
    public Job linkJobWithCompany(@RequestParam("companyId") String companyId, @RequestParam("jobId") String jobId) {
        Job job = this.jobRepo.getOne(Long.parseLong(jobId));
        job.setCompaniesJob(companyRepo.getOne(Long.parseLong(companyId)));

        return jobRepo.save(job);
    }
}
