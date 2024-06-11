import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import LoginBackground from "../assets/loginbgbig.jpg"
import LoginBackground2 from "../assets/loginbg2.jpg"
import LoginBackground3 from "../assets/loginbg3.jpg"
import LoginBackground4 from "../assets/loginbg4.jpg"
import ErrorComponent from "../component/ErrorComponent.jsx";

const LoginPage = () => {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("/api/user/login", {
            username,
            password
        }).then((response) => {
            if (response.status === 200 && response.data !== undefined) {
                localStorage.setItem('token', response.data.jwt);
                localStorage.setItem('isAdmin', !!response.data.roles.includes("ROLE_ADMIN"));
                console.log(response.data)
                navigate("/")
            }
            return <ErrorComponent message={"Login Failed"}/>
        })
    }

    return (
        <div className="w-full h-screen relative">
            <div className="carousel w-full h-full absolute object-cover z-0">
                <div id="item1" className="carousel-item w-full">
                    <img src={LoginBackground} className="w-full"/>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={LoginBackground2} className="w-full"/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={LoginBackground3} className="w-full"/>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={LoginBackground4} className="w-full"/>
                </div>
            </div>
            <div className="fixed bottom-4 w-full flex justify-center gap-2 z-50 mb-5">
                <a href="#item1" className="btn btn-sm text-yellow-300 bg-black">1</a>
                <a href="#item2" className="btn btn-sm text-yellow-300 bg-black">2</a>
                <a href="#item3" className="btn btn-sm text-yellow-300 bg-black">3</a>
                <a href="#item4" className="btn btn-sm text-yellow-300 bg-black">4</a>
            </div>
            <div className="fixed w-full px-4 pt-24 z-50 items-center">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold pb-8">Sign In</h1>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col">
                            <p>
                                <label
                                    className="block uppercase tracking-wide text-sm font-bold mb-2"
                                    htmlFor="userName"
                                >
                                    Username
                                </label>
                            </p>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                className="p-3 my-2 bg-gray-700 rounded"
                                value={username}
                                type="text"
                                placeholder="username"
                            />
                            <p>
                                <label
                                    className="block uppercase tracking-wide text-sm font-bold mb-2 mt-5"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-3 my-2 bg-gray-700 rounded"
                                type="password"
                                value={password}
                                placeholder="password"
                                autoComplete="current-password"
                            />
                            <button
                                className="bg-yellow-500 hover:bg-[#FFD700] py-3 my-6 rounded font-bold ease-in duration-200"
                            >
                                Sign In
                            </button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input className="mr-2 accent-amber-400" type="checkbox"/>
                                    Remember me
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage
