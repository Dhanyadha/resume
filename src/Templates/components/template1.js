import React, { useEffect, useState } from "react";
import templateStyles from "../styles/template1.module.scss";
import { useSelector } from "react-redux";

const Template1 = () => {
  const studentDetails = useSelector((state) => state);
  const basicDetails = studentDetails?.basicDetails?.basicDetails || {};
  const accomplishments = studentDetails?.accomplishmentDetails?.accDetails || [];
  const certificates = studentDetails?.certificateDetails?.certificates || [];
  const educations = studentDetails?.educationDetails?.educationLevels || [];
  const experiences = studentDetails?.experienceDetails?.experiences || [];
  const internships = studentDetails?.internshipsDetails?.internships || [];
  const projects = studentDetails?.projectDetails?.projects || [];
  const researches = studentDetails?.researchDetails?.researches || [];
  const volunteerings = studentDetails?.volunteeringDetails?.volunteerings || [];
  const links = studentDetails?.linkDetails?.links || [];
  const skills = studentDetails?.skillsDetails?.skills || [];
  const hobbies = studentDetails?.hobbiesDetails?.hobbies || [];
  const languages = studentDetails?.languagesDetails?.languages || [];
  const extraActivities = studentDetails?.extraDetails?.activities || [];
  
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (basicDetails?.profile instanceof File) {
      const imageReader = new FileReader();
      imageReader.onloadend = () => {
        setProfile(imageReader.result);
      };
      imageReader.readAsDataURL(basicDetails.profile);
    }
  }, [basicDetails?.profile]);

  const formatDateRange = (startDate, endDate) => {
    if (!startDate && !endDate) return null;
    return `${startDate || ''}${startDate && endDate ? ' - ' : ''}${endDate || ''}`;
  };

  return (
    <div className={templateStyles.container}>
      {/* Basic Details Section */}
      <section className={templateStyles.basicInfo}>
        <div className={templateStyles.profileSection}>
          {profile && (
            <img 
              src={profile} 
              alt="Profile" 
              className={templateStyles.profileImage} 
              onError={() => setProfile("")} 
            />
          )}
          <div className={templateStyles.name}>
            <h1>
              {[basicDetails?.firstName, basicDetails?.middleName, basicDetails?.lastName]
                .filter(Boolean)
                .join(" ")}
            </h1>
            {basicDetails?.proffesionalSummary && (
              <p>{basicDetails.proffesionalSummary}</p>
            )}
          </div>
        </div>

        {(basicDetails?.email || basicDetails?.phone || basicDetails?.dob) && (
          <div className={templateStyles.contactInfo}>
            {basicDetails?.email && (
              <div>
                <strong>Email:</strong> {basicDetails.email}
              </div>
            )}
            {basicDetails?.phone && (
              <div>
                <strong>Phone:</strong> {basicDetails.phone}
              </div>
            )}
            {basicDetails?.dob && (
              <div>
                <strong>Date of Birth:</strong> {basicDetails.dob}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Skills</h2>
          <div className={templateStyles.skillsList}>
            {skills.map((skill, index) => (
              <div key={index} className={templateStyles.skillItem}>
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages Section */}
      {languages.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Languages</h2>
          <div className={templateStyles.languagesList}>
            {languages.map((language, index) => (
              <div key={index} className={templateStyles.languageItem}>
                {language}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {educations.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Education</h2>
          <div className={templateStyles.educationList}>
            {educations.map((edu, index) => (
              <div key={`${edu.id || index}`} className={templateStyles.educationItem}>
                <div className={templateStyles.educationHeader}>
                  <h3>
                    {edu.institution}
                    {edu.type && `, ${edu.type}`}
                  </h3>
                  {formatDateRange(edu.startDate, edu.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(edu.startDate, edu.endDate)}
                    </span>
                  )}
                </div>
                {edu.stream && (
                  <div className={templateStyles.fieldOfStudy}>
                    <i className="fas fa-book"></i> {edu.stream}
                  </div>
                )}
                {edu.grade && (
                  <div className={templateStyles.grade}>
                    <strong>Grade:</strong> {edu.grade}
                  </div>
                )}
                {edu.description && (
                  <div className={templateStyles.description}>
                    {edu.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experiences.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Work Experience</h2>
          <div className={templateStyles.experienceList}>
            {experiences.map((exp, index) => (
              <div key={`${exp.id || index}`} className={templateStyles.experienceItem}>
                <div className={templateStyles.experienceHeader}>
                  <h3>
                    {exp.company}
                    {exp.role && `, ${exp.role}`}
                  </h3>
                  {formatDateRange(exp.startDate, exp.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </span>
                  )}
                </div>
                {exp.city && (
                  <div className={templateStyles.location}>
                    <i className="fas fa-map-marker-alt"></i> {exp.city}
                  </div>
                )}
                {exp.description && (
                  <div className={templateStyles.description}>
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internship Section */}
      {internships.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Internships</h2>
          <div className={templateStyles.internshipList}>
            {internships.map((intern, index) => (
              <div key={`${intern.id || index}`} className={templateStyles.internshipItem}>
                <div className={templateStyles.internshipHeader}>
                  <h3>
                    {intern.company}
                    {intern.role && `, ${intern.role}`}
                  </h3>
                  {formatDateRange(intern.startDate, intern.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(intern.startDate, intern.endDate)}
                    </span>
                  )}
                </div>
                {intern.city && (
                  <div className={templateStyles.location}>
                    <i className="fas fa-map-marker-alt"></i> {intern.city}
                  </div>
                )}
                {intern.description && (
                  <div className={templateStyles.description}>
                    {intern.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Projects</h2>
          <div className={templateStyles.projectList}>
            {projects.map((proj, index) => (
              <div key={`${proj.id || index}`} className={templateStyles.projectItem}>
                <div className={templateStyles.projectHeader}>
                  <h3>{proj.project}</h3>
                  {formatDateRange(proj.startDate, proj.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(proj.startDate, proj.endDate)}
                    </span>
                  )}
                </div>
                {proj.company && (
                  <div className={templateStyles.organization}>
                    <i className="fas fa-building"></i> {proj.company}
                  </div>
                )}
                {proj.description && (
                  <div className={templateStyles.description}>
                    {proj.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Research Section */}
      {researches.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Research</h2>
          <div className={templateStyles.researchList}>
            {researches.map((res, index) => (
              <div key={`${res.id || index}`} className={templateStyles.researchItem}>
                <div className={templateStyles.researchHeader}>
                  <h3>{res.title}</h3>
                  {formatDateRange(res.startDate, res.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(res.startDate, res.endDate)}
                    </span>
                  )}
                </div>
                {res.organization && (
                  <div className={templateStyles.organization}>
                    <i className="fas fa-university"></i> {res.organization}
                  </div>
                )}
                {res.description && (
                  <div className={templateStyles.description}>
                    {res.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Volunteering Section */}
      {volunteerings.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Volunteering</h2>
          <div className={templateStyles.volunteeringList}>
            {volunteerings.map((vol, index) => (
              <div key={`${vol.id || index}`} className={templateStyles.volunteeringItem}>
                <div className={templateStyles.volunteeringHeader}>
                  <h3>
                    {vol.organization}
                    {vol.role && `, ${vol.role}`}
                  </h3>
                  {formatDateRange(vol.startDate, vol.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(vol.startDate, vol.endDate)}
                    </span>
                  )}
                </div>
                {vol.city && (
                  <div className={templateStyles.location}>
                    <i className="fas fa-map-marker-alt"></i> {vol.city}
                  </div>
                )}
                {vol.description && (
                  <div className={templateStyles.description}>
                    {vol.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {certificates.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Certifications</h2>
          <div className={templateStyles.certificatesList}>
            {certificates.map((cert, index) => (
              <div key={`${cert.id || index}`} className={templateStyles.certificateItem}>
                <div className={templateStyles.certificateHeader}>
                  <h3>
                    {cert.title}
                  </h3>
                  {formatDateRange(cert.startDate, cert.endDate) && (
                    <span className={templateStyles.date}>
                      {formatDateRange(cert.startDate, cert.endDate)}
                    </span>
                  )}
                </div>
                {cert.organization && (
                  <div className={templateStyles.organization}>
                    <i className="fas fa-certificate"></i> {cert.organization}
                  </div>
                )}
                {cert.description && (
                  <div className={templateStyles.description}>
                    {cert.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Accomplishments Section */}
      {accomplishments.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Accomplishments</h2>
          <div className={templateStyles.accomplishmentsList}>
            {accomplishments.map((acc, index) => (
              <div key={`${acc.id || index}`} className={templateStyles.accomplishmentItem}>
                <h3>{acc.title}</h3>
                {acc.description && (
                  <div className={templateStyles.description}>
                    {acc.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Links Section */}
      {links.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Links</h2>
          <div className={templateStyles.linksList}>
            {links.map((link, index) => (
              <div key={`${link.id || index}`} className={templateStyles.linkItem}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title || link.url}
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hobbies Section */}
      {hobbies.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Hobbies</h2>
          <div className={templateStyles.hobbiesList}>
            {hobbies.map((hobby, index) => (
              <div key={index} className={templateStyles.hobbyItem}>
                {hobby}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extra Activities Section */}
      {extraActivities.length > 0 && (
        <section className={templateStyles.section}>
          <h2 className={templateStyles.sectionTitle}>Extra Activities</h2>
          <div className={templateStyles.extraActivitiesList}>
            {extraActivities.map((activity, index) => (
              <div key={index} className={templateStyles.activityItem}>
                {activity}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Template1;