package by.gsu.pms.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class FileService {
    public String saveFileToFolder(MultipartFile file, String folderPath) throws IOException {
        File uploadDir = new File(folderPath);
        if (!uploadDir.exists()){
            uploadDir.mkdir();
        }

        String uuidFile = UUID.randomUUID().toString();
        String resultFileName = uuidFile + "!" + file.getOriginalFilename();
        file.transferTo(new File(folderPath + resultFileName ));

        return resultFileName;
    }
}
