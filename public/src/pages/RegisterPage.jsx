import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Titles} from "../data/Titles.js";

const RegisterPage = () => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [title, setTitle] = useState(Titles[0].name);
    const [level, setLevel] = useState(0);
    const [image, setImage] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password,
            email,
            birthDate,
            title,
            level,
            image,
        };
        setUser(user);

        try {
            const response = await fetch("/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                console.log("Registration successful");
                 navigate("/");
            } else {
                console.error("Registration failed");
            }
        } catch (err) {
            console.error("Error during registration", err);
        }
    }

    return (
        <div className="min-h-screen py-40 bg-gradient-to-r from-yellow-500 to-black">
            <div className="container mx-auto">
                <div
                    className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-cover bg-center"
                        style={{backgroundImage: "url('src/assets/registersmallbg.jpg')"}}
                    >
                        <h1 className="text-white font-bold text-3xl mb-3">Welcome</h1>
                        <p className="text-white font-semibold">
                            Blablabla we are the best. Finom volt a gyros ma is...
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 py-16 px-12">
                        <h2 className="text-3xl mb-4 font-bold">Sign Up</h2>
                        <p className="mb-4">Create your account. It's free and only takes a minute.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="mt-5">
                                    <label htmlFor="userName" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">User name</label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="birthDate" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Birthdate</label>
                                    <input
                                        type="date"
                                        value={birthDate}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="title" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Title</label>
                                    <select
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    >
                                        {Titles.map((title, index) => (
                                            <option key={index} value={title.name}>
                                                {title.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="level" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Level</label>
                                    <input
                                        type="number"
                                        value={level}
                                        min={1}
                                        max={150}
                                        onChange={(e) => setLevel(Number(e.target.value))}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="profilePicture" className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">Profile Picture</label>
                                    <input
                                        type="text"
                                        placeholder="Profile picture URL"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-200"
                                    />
                                </div>
                                <div className="mt-5 col-span-2">
                                    <input
                                        type="checkbox"
                                        checked={acceptTerms}
                                        onChange={() => setAcceptTerms(!acceptTerms)}
                                        className="mr-2"
                                    />
                                    <span>
                                        I accept the{" "}
                                        <a href="#" className="text-purple-500 font-semibold">
                                            Terms of Use
                                        </a>{" "}
                                        &{" "}
                                        <a href="#" className="text-purple-500 font-semibold">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className={"mt-5"}>
                                <button
                                    type="submit"
                                    className="w-full text-center bg-yellow-500 hover:bg-[#FFD700] text-white font-bold py-2 px-4 rounded mt-5 cursor-pointer"
                                    disabled={!acceptTerms}
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
