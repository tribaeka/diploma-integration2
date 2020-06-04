package by.gsu.pms.controller;

import by.gsu.pms.domain.JobOpenHistory;
import by.gsu.pms.repo.JobOpenHistoryRepo;
import by.gsu.pms.repo.JobRepo;
import by.gsu.pms.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://35.228.149.66:80")
@RestController
@RequestMapping("history")
public class HistoryController {
    @Autowired
    private JobOpenHistoryRepo historyRepo;
    @Autowired
    private JobRepo jobRepo;
    @Autowired
    private UserRepo userRepo;

    @GetMapping("{userId}")
    public List<JobOpenHistory> getUsersHistory(@PathVariable("userId") Long userId) {
        return historyRepo.getAllByHistoryUser(userRepo.getOne(userId));
    }

    @PostMapping("{userId}")
    public void addToHistory(@PathVariable("userId") Long userId, @RequestBody Long jobId) {
        JobOpenHistory historyItem = new JobOpenHistory();
        historyItem.setHistoryJob(jobRepo.getOne(jobId));
        historyItem.setHistoryUser(userRepo.getOne(userId));
        historyItem.setAccessDate(LocalDateTime.now());
        historyRepo.save(historyItem);
    }
}
