import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GuildDetailsPage = () => {
    const { id } = useParams();
    const [guild, setGuild] = useState(null);

    useEffect(() => {
        fetch(`/api/guild/${id}`)
            .then(res => res.json())
            .then(data => setGuild(data))
            .catch(error => console.error('Error fetching guild:', error));
    }, [id]);

    if (!guild) {
        return <div>Loading...</div>;
    }

    return (
        <div className="guild-details">
            <h1>{guild.guildName}</h1>
            <img src={guild.guildBadge} alt="guild badge" />
            <p>{guild.missionStatement}</p>
            <h2>Chieftain</h2>
            <p>Username: {guild.chieftain.username}</p>
            <p>Email: {guild.chieftain.email}</p>
            <h2>Members</h2>
            <ul>
                {guild.members.map(member => (
                    <li key={member.id}>
                        <p>Username: {member.username}</p>
                        <p>Email: {member.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GuildDetailsPage;
