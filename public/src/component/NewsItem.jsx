import React, {useEffect, useState} from 'react';

const processMessage = (message) => {
    const regex = /<i=1>(.*?)<\/i>/g;
    const matches = [...message.matchAll(regex)];

    let title = "ALERT!";
    let content = message;

    if (matches.length > 0) {
        title = matches[0][1].toUpperCase();
        content = message.replace(matches[0][0], "");

        matches.slice(1).forEach(match => {
            const highlightedText = `<a class="text-yellow-500">${match[1]}</a>`;
            content = content.replace(match[0], highlightedText);
        });
    }

    return {title, content};
};

const NewsItem = ({message, date}) => {
    const [title, setTitle] = useState("");
    const [truncatedMessage, setTruncatedMessage] = useState("");

    useEffect(() => {
        const {title, content} = processMessage(message);
        setTitle(title);
        setTruncatedMessage(content);
    }, [message]);


    return (
        <div className="flex justify-between items-center w-full rounded-[20px] shadow-2xl px-5 py-8 gap-10">
            <div className={"flex flex-1 flex-col min-w-[280px] w-full h-full px-5 py-8 rounded-xl bg-black"}>
                <h2 className={"mt-5 font-palanquin text-3xl text-yellow-300 leading-normal font-bold text-center"}>{title}</h2>
                <h3 className={"mt-5 font-palanquin text-lg text-yellow-300 leading-normal font-bold text-center"}>{date}</h3>
            </div>
            <div className={"rounded-xl bg-gray-300 h-auto py-8 px-8"}>
                <p className={"mt-3 break-words font-montserrat text-2xl leading-normal text-slate-gray"} dangerouslySetInnerHTML={{__html: truncatedMessage}}/>
            </div>
        </div>
    );
};

export default NewsItem;
