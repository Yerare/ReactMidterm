import React, { useState } from 'react';

const ProfilePage = () => {
    // Use state to manage user profile data
    const [profile, setProfile] = useState({
        name: 'Yerzhigit',
        surname: 'Zhakhan',
        birthday: '22.12.2002',
        email: 'yerjigitzhakhan@gmail.com',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Surname:</label>
                    <input
                        type="text"
                        name="surname"
                        value={profile.surname}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Birthday:</label>
                    <input
                        type="date"
                        name="birthday"
                        value={profile.birthday}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;
