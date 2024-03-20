
import React, { useState } from 'react';

import './Profile.css';

function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    age: 30,
    city: 'New York',
    country: 'USA',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfileData, setUpdatedProfileData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    setIsEditing(true);
    setUpdatedProfileData(profileData);
  };

  const handleUpdateProfile = () => {
    setProfileData(updatedProfileData);
    setIsEditing(false);
  };

  return (
    <div className="prof" style={{ display: 'flex' }}>
      
      <div className="profile-container" style={{ flex: 1, padding: '20px' }}>
        {profileData && (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="profile-image"
            />
            <h5>{profileData.fullName}</h5>
            <div className="profile-fields">
              {Object.entries(profileData).map(([key, value]) => (
                <div className="profile-field" key={key}>
                  <label>{key.toUpperCase()}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={updatedProfileData[key] || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div>{value}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="profile-actions">
              {isEditing ? (
                <button className="update-btn" onClick={handleUpdateProfile}>
                  Update
                </button>
              ) : (
                <button className="edit-btn" onClick={handleEditProfile}>
                  Edit
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;