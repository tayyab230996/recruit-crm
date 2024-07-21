import React, { useState } from 'react';
import './MainContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faStar,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import EditProfileForm from './EditProfileForm';

const MainContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    currentOrganization: 'World Bank Group',
    skills: 'HTML, CSS, Javascript',
    availableFrom: 'Jul, 14, 2023',
    currentSalary: '$6000',
    noticePeriod: '90 Days',
    fullAddress: '9400 Ashton Rd, Philadelphia...',
    summary: 'Current Organization',
    currentEmploymentStatus: 'Employed',
    dateOfBirth: '15 June 1993',
    relevantExperience: '7 Years',
    salaryExpectation: '$9000',
    status: 'Submitted to Client',
    languageSkills: 'English (Elementary proficiency)',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = (updatedProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="main-content">
      <div className="breadcrumb">
        <a href="#">Candidates</a> / Robert Hardy / ID - 231
      </div>
      <div className="candidate-details">
        <div className="header">
          <div>
            <h1>William Sample</h1>
            <p>Senior Product Manager</p>
          </div>
          <div className="header-actions">
            <button className="btn contact-linked">Contact Linked</button>
            <button className="btn" onClick={handleEditClick}>
              Edit
            </button>
            <button className="btn">✭</button>
            <button className="btn">⋮</button>
          </div>
        </div>

        {isEditing ? (
          <EditProfileForm profile={profile} onSubmit={handleFormSubmit} />
        ) : (
          <>
            <div className="details">
              <div className="info">
                <div className="info-item">
                  <span>Current Organization</span>
                  <span>{profile.currentOrganization}</span>
                </div>
                <div className="info-item">
                  <span>Skills</span>
                  <span>{profile.skills}</span>
                </div>
                <div className="info-item">
                  <span>Available From</span>
                  <span>{profile.availableFrom}</span>
                </div>
                <div className="info-item">
                  <span>Current Salary</span>
                  <span>{profile.currentSalary}</span>
                </div>
                <div className="info-item">
                  <span>Notice Period</span>
                  <span>{profile.noticePeriod}</span>
                </div>
                <div className="info-item">
                  <span>Full Address</span>
                  <span>{profile.fullAddress}</span>
                </div>
              </div>
              <div className="info">
                <div className="info-item">
                  <span>Summary</span>
                  <span>{profile.summary}</span>
                </div>
                <div className="info-item">
                  <span>Current Employment Status</span>
                  <span>{profile.currentEmploymentStatus}</span>
                </div>
                <div className="info-item">
                  <span>Date of Birth</span>
                  <span>{profile.dateOfBirth}</span>
                </div>
                <div className="info-item">
                  <span>Relevant Experience</span>
                  <span>{profile.relevantExperience}</span>
                </div>
                <div className="info-item">
                  <span>Salary Expectation</span>
                  <span>{profile.salaryExpectation}</span>
                </div>
                <div className="info-item">
                  <span>Status</span>
                  <span>{profile.status}</span>
                </div>
                <div className="info-item">
                  <span>Language Skills</span>
                  <span>{profile.languageSkills}</span>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="tabs">
          <div className="tab active">All Details</div>
          <div className="tab">Assigned Jobs</div>
          <div className="tab">Related Emails</div>
          <div className="tab">Candidate Questions</div>
          <div className="tab">Hotlists</div>
          <div className="tab">Related Deals</div>
          <div className="tab">Contact(s) Pitched</div>
        </div>
        <div className="assigned-jobs">
          <div className="job-item">
            <div className="job-info">
              <h3>Senior Product Manager</h3>
              <p>Recruit CRM | Jul 10, 2023</p>
            </div>
            <button className="btn view-files">View Files</button>
          </div>
          <div className="job-item">
            <div className="job-info">
              <h3>Senior Product Manager</h3>
              <p>Recruit CRM | Jul 10, 2023</p>
            </div>
            <button className="btn view-files">View Files</button>
          </div>
          <div className="job-item">
            <div className="job-info">
              <h3>Senior Product Manager</h3>
              <p>Recruit CRM | Jul 10, 2023</p>
            </div>
            <button className="btn view-files">View Files</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
