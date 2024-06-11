import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

const GuildsPage = () => {
    const [guilds, setGuilds] = useState([]);

    function fetchGuilds() {
        return fetch('/api/guild/all').then(res => res.json());
    }

    useEffect(() => {
        fetchGuilds().then(guilds => setGuilds(guilds));
    }, []);


    return (
        <div className={"w-full h-screen relative"}>
            <div>
                <ul>
                    {guilds.map((guild, index) => (
                        <li className={"w-[200px] h-[200px]"} key={index}>
                            <div>
                                <h1>{guild.guildName}</h1>
                                <img src={guild.guildBadge} alt={"guild badge"}/>
                                <p>{guild.missionStatement}</p>
                                <Link to={`/guilds/${guild.id}`}>
                                    <button>DETAILS</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default GuildsPage
