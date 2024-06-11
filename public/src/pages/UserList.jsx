import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then((users) => setUsers(users))
    }, []);

    return (
        users.length === 0 ? "Loading..." :
            <div className="flex flex-col p-24 justify-center items-center space-y-2">
                {users.map((user) => (
                    <div>
                        <Link to={`/profile/${user.id}`} key={user.id}>
                            <p className="text-2xl">{user.username}</p>
                        </Link>
                    </div>
                ))}
            </div>
    )
}

function fetchUsers() {
    return fetch("/api/user/users").then(res => res.json())
}
