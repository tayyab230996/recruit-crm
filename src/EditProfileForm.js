import React, { useState } from 'react';
import './EditProfileForm.css';

const EditProfileForm = ({ profile, onSubmit }) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <div className="form-group">
        <label>Current Organization</label>
        <input
          type="text"
          name="currentOrganization"
          value={formData.currentOrganization}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Available From</label>
        <input
          type="text"
          name="availableFrom"
          value={formData.availableFrom}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Current Salary</label>
        <input
          type="text"
          name="currentSalary"
          value={formData.currentSalary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Notice Period</label>
        <input
          type="text"
          name="noticePeriod"
          value={formData.noticePeriod}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Full Address</label>
        <input
          type="text"
          name="fullAddress"
          value={formData.fullAddress}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Summary</label>
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Current Employment Status</label>
        <input
          type="text"
          name="currentEmploymentStatus"
          value={formData.currentEmploymentStatus}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="text"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Relevant Experience</label>
        <input
          type="text"
          name="relevantExperience"
          value={formData.relevantExperience}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Salary Expectation</label>
        <input
          type="text"
          name="salaryExpectation"
          value={formData.salaryExpectation}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Language Skills</label>
        <input
          type="text"
          name="languageSkills"
          value={formData.languageSkills}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn save">Save</button>
    </form>
  );
};

export default EditProfileForm;
