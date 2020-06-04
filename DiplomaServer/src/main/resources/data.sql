INSERT INTO diploma.company (company_id, logo_path, name, site_url, contact_id) VALUES (1, '/img/company/robot-morning-logo.png', 'Robot Morning', 'https://www.robotmorning.com/', 1);
INSERT INTO diploma.company (company_id, logo_path, name, site_url, contact_id) VALUES (2, '/img/company/impossible-foods-logo.jpg', 'Impossible Foods', 'http://impossiblefoods.com/', 2);
INSERT INTO diploma.company (company_id, logo_path, name, site_url, contact_id) VALUES (3, '/img/company/tempest-logo.png', 'Tempest', 'https://www.jointempest.com/', 3);
INSERT INTO diploma.company (company_id, logo_path, name, site_url, contact_id) VALUES (4, '/img/company/het-cak-logo.jpg', 'Het CAK', 'https://werkenbijhetcat.nl', 4);
INSERT INTO diploma.company (company_id, logo_path, name, site_url, contact_id) VALUES (5, '/img/company/ascension-logo.png', 'Ascension', 'https://jobs.ascension.org/', 5);
INSERT INTO diploma.company (company_id, logo_path, name, site_url, contact_id) VALUES (6, null, ' Gomel Cloud', 'google.com', 6);

INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (1, 'bawita9563@ximtyl.com', 'Lacy', 'Conroy', '123647899');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (2, 'Ellesse_Redman@gmail.com', 'Ellesse', 'Redman', '321445566');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (3, 'Darcie_Drew@gmail.com', 'Darcie', 'Drew', '879808343');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (4, 'Lianne_Hicks@gmail.com', 'Lianne', 'Hicks', '436827345');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (5, 'Mylo_Mata@gmail.com', 'Mylo', 'Mata', '374823746');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (6, 'Darren_Wyatt@gmail.com', 'Darren', 'Wyatt', '378429187');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (7, 'Kien_Mcfarland@gmail.com', 'Kien', 'Mcfarland', '237846237');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (8, 'Ayyub_Amin@gmail.com', 'Ayyub', 'Amin', '897209203');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (9, 'Bryan_Sheehan@gmail.com', 'Bryan', 'Sheehan', '381764324');
INSERT INTO diploma.contact (contact_id, email, first_name, last_name, phone) VALUES (10, 'Kaylen_Drake@gmail.com', 'Kaylen', 'Drake', '082138344');


INSERT INTO diploma.role(name) VALUES('ROLE_USER');
INSERT INTO diploma.role(name) VALUES('ROLE_COMPANY_OWNER');
INSERT INTO diploma.role(name) VALUES('ROLE_ADMIN');


INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (1, true, 'Darcie_Wagner@gmail.com', null, 'dw1234', '234548865', 'Darcie.Wagner');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (2, true, 'Cassidy_Howe@gmail.com', null, 'ch1234', '350234504', 'Cassidy.Howe');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (3, true, 'Ansh_Corona', null, 'ac1234', '324265065', 'Ansh.Corona');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (4, true, 'Elen_Smart@gmail.com', null, 'es1234', '234324523', 'Elen.Smart');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (5, true, 'Thalia_Ballard@gmail.com', null, 'tb1234', '234234534', 'Thalia.Ballard');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (6, false, 'Morwenna_King@gmail.com', null, 'mk1234', '123141242', 'Morwenna.King');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (7, false, 'Roshan_Frey@gmail.com', null, 'rf1234', '235086341', 'Roshan.Frey');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (8, false, 'Roberta_Schaefer@gmail.com', null, 'rs1234', '234523467', 'Roberta.Schaefer');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (9, false, 'Shelley_Harding', null, 'sh1234', '456485894', 'Shelley.Harding');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (10, false, 'Taybah_House@gmail.com', null, 'th1234', '083474234', 'Taybah.House');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (11, false, 'user@gmail.com', null, '$2a$14$MR848aowHq/xbmedJESEoOBUnncnG7XEscm66enVVj5b36GfU17vu', null, 'user');
INSERT INTO diploma.user (user_id, active, email, image_name, password, phone, username) VALUES (12, false, 'owner@mail.com', null, '$2a$14$MSkl8tjFQ0NFXXtJrlIh7OEXG.2FHpNuY8v6JvBjdNlWvWWUM4xo.', null, 'owner');

INSERT INTO diploma.user_roles (user_id, role_id) VALUES (1, 1);
INSERT INTO diploma.user_roles (user_id, role_id) VALUES (2, 2);
INSERT INTO diploma.user_roles (user_id, role_id) VALUES (3, 3);
INSERT INTO diploma.user_roles (user_id, role_id) VALUES (4, 1);
INSERT INTO diploma.user_roles (user_id, role_id) VALUES (11, 1);
INSERT INTO diploma.user_roles (user_id, role_id) VALUES (12, 2);


INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (1, '', 'Junior Java Developer', 1);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (2, '', 'Front-end Developer', 2);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (3, '', 'ML Engineer', 3);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (4, 'resume.docx', 'Senior Back-end Developer', 11);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (5, '', 'JavaScript Developer', 11);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (6, '', 'Full-stack Developer', 11);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (7, '', 'Unity Developer', 11);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (8, '', 'Python Developer', 11);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (9, '', 'Network Architect', 11);
INSERT INTO diploma.cv (cv_id, file_name, title, users_cv) VALUES (10, '', 'DevOps', 11);


INSERT INTO diploma.skill (skill_id, name) VALUES (1, 'Java');
INSERT INTO diploma.skill (skill_id, name) VALUES (2, 'JavaEE');
INSERT INTO diploma.skill (skill_id, name) VALUES (3, 'Spring');
INSERT INTO diploma.skill (skill_id, name) VALUES (4, 'HibernateORM');
INSERT INTO diploma.skill (skill_id, name) VALUES (5, 'UnitTesting');
INSERT INTO diploma.skill (skill_id, name) VALUES (6, 'JavaScript');
INSERT INTO diploma.skill (skill_id, name) VALUES (7, 'HTML');
INSERT INTO diploma.skill (skill_id, name) VALUES (8, 'CSS');
INSERT INTO diploma.skill (skill_id, name) VALUES (9, 'Git');
INSERT INTO diploma.skill (skill_id, name) VALUES (10, 'XML');
INSERT INTO diploma.skill (skill_id, name) VALUES (11, 'MySQL');
INSERT INTO diploma.skill (skill_id, name) VALUES (12, 'Docker');
INSERT INTO diploma.skill (skill_id, name) VALUES (13, 'SASS');
INSERT INTO diploma.skill (skill_id, name) VALUES (14, 'Angular');
INSERT INTO diploma.skill (skill_id, name) VALUES (15, 'Reactjs');
INSERT INTO diploma.skill (skill_id, name) VALUES (16, 'ReactNative');
INSERT INTO diploma.skill (skill_id, name) VALUES (17, 'Angularjs');
INSERT INTO diploma.skill (skill_id, name) VALUES (18, 'Nodejs');
INSERT INTO diploma.skill (skill_id, name) VALUES (19, 'Express');
INSERT INTO diploma.skill (skill_id, name) VALUES (20, 'Python');
INSERT INTO diploma.skill (skill_id, name) VALUES (21, 'MachineLearning');
INSERT INTO diploma.skill (skill_id, name) VALUES (22, 'DataAnalytics');


INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (1, 1);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (1, 2);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (1, 3);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (1, 4);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (1, 5);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (1, 9);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (2, 6);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (2, 7);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (2, 8);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (2, 9);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (3, 20);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (3, 21);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (3, 10);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (2, 17);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (2, 14);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 6);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 7);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 8);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 9);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 15);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 16);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 18);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 19);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (4, 11);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 6);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 7);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 8);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 9);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 13);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 14);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 15);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 16);
INSERT INTO diploma.skills_for_cv (cv_id, skill_id) VALUES (5, 17);


INSERT INTO diploma.job (job_id, description, post_date, title, companies_job, location, salary, experience) VALUES (1, '<p>We’re looking for great engineers with diverse backgrounds. We need people that can fill hybrid roles with different emphases on the wide context of product development. We don’t have predefined positions: instead, we invite you to come talk to us about your skills, experience, ambitions, and dream role. We hope to find exceptional people to do exceptional work with us, and we believe it’s important that we define your role and path to our mutual growth together.</p>
      <p>Reaktor is a hybrid partner for all things future. We reimagine businesses, and we design and build tomorrow’s digital products. Our full range of consultancy and agency services include expertise from high-level business consulting, to hands-on service and product design and development, to branding and marketing.</p>
      <p>We believe in technology-agnostic product thinking, defined only by finding meaningful solutions to challenging problems. Your passion should be the same as ours: unmatched execution of those solutions. We structure, create, iterate, and reinvent, delivering tangible value faster than anyone in the world.</p>
      <p>What we can offer you:</p>
      <ul>
        <li>Hybrid, completely autonomous teams, filled with experts in everything from design, to data science, to business consulting, to content.</li>
        <li>A community of amazing people who you will learn from and will learn from you.</li>
        <li>Experimentation and continuous improvement of our skills and ways of working.</li>
        <li>A dedication to constant evolution (and the occasional revolution).</li>
        <li>A world without rigid hierarchy—big ideas can come from anyone and anywhere.</li>
        <li>Endless fun!</li>
      </ul>
      <p>What you’ll bring:</p>
      <ul>
        <li>Exceptional technological competence.</li>
        <li>Ability to make things, and to make things happen.</li>
        <li>Compassion for people—both those around you, and those who will use what we build.</li>
        <li>Drive to work on complex problems at any part of the project, from type system nuances to organizational dynamics.</li>
        <li>A vision and commitment to the future of work: being truly lean and agile and human-centered, and leaving yesterday’s pointless rituals behind.</li>
        <li>Readiness to be responsible for your work, development, and career path. Don’t worry: we’ll have your back in whatever you want to achieve, but the end goal is yours to define.</li>
        <li>5+ years of real-world experience in building digital products and services.</li>
        <li>Authorization to work in the United States.</li>
      </ul>
      <p>We invite you to share details of any open source projects, your GitHub profile, and most importantly, your personality. Be original, not official.</p>', '2020-01-20', 'Middle Java Developer', 1, 'Remote', 800, 2);
INSERT INTO diploma.job (job_id, description, post_date, title, companies_job, location, salary, experience) VALUES (2, 'description for Front-end Developer', '2020-01-15', 'Front-end Developer', 2, 'USA', 750, 2);
INSERT INTO diploma.job (job_id, description, post_date, title, companies_job, location, salary, experience) VALUES (3, 'description for Python Developer', '2020-01-10', 'Python Developer', 3, 'Berlin', 900, 2);
INSERT INTO diploma.job (job_id, description, post_date, title, companies_job, location, salary, experience) VALUES (4, 'description for Senior Front-end Developer', '2020-01-25', 'Senior Front-end Developer', 4, 'Moscow', 1300, 3);
INSERT INTO diploma.job (job_id, description, post_date, title, companies_job, location, salary, experience) VALUES (5, 'description for Juniour Java Developer', '2020-01-05', 'Junior Java Developer', 5, 'HY', 550, 1);


INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (1, 1);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (2, 1);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (1, 2);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (3, 2);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (2, 3);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (4, 3);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (2, 4);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (3, 5);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (3, 6);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (4, 7);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (4, 8);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (5, 9);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (5, 10);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (1, 11);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (2, 12);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (3, 13);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (4, 14);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (5, 15);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (1, 16);
INSERT INTO diploma.skills_for_job (job_id, skill_id) VALUES (2, 17);
