package by.gsu.pms.repo;

import by.gsu.pms.domain.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<Contact, Long> {
}
