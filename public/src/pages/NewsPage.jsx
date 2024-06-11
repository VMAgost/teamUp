import React, {useEffect, useState} from 'react';
import NewsItem from '../component/NewsItem.jsx';
import NewsBg from '../assets/newsbg2.jpg';

const NewsPage = () => {
    const [dispatches, setDispatches] = useState([]);

    function fetchUsers() {
        return fetch('/api/dispatches').then(res => res.json());
    }

    useEffect(() => {
        fetchUsers().then(dispatches => setDispatches(dispatches));
    }, []);

    return (
        <div className="relative w-full h-screen">
            <img
                src={NewsBg}
                alt="newsbg"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 w-full h-full overflow-y-auto bg-black bg-opacity-50">
                <h1 className={"text-yellow-300 font-palanquin font-bold text-6xl text-center mt-10"}>
                    NEWS
                </h1>
                {dispatches.map((dispatch, index) => (
                    <div key={index} className="flex flex-col py-10">
                        <NewsItem message={dispatch.message} date={dispatch.published}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
