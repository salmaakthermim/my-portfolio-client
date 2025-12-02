import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Footer = () => {
    const [formData, setFormData] = useState({ phone: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "phone" ? BigInt(value) || "" : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/userClient", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Message sent successfully!"
                });
                setFormData({ phone: "", message: "" });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: data.message || "Failed to send message. Please try again later."
                });
            }
        } catch (error) {
            // console.error("Error sending message:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to send message. Please try again later."
            });
        }
    };


    return (
        <div className="bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-900 to-90% py-5">
            <footer className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16">
                <nav>
                    <p className="text-4xl italic text-sky-600 font-bold">Salma Akther Mim</p>
                  
                    <div className="flex gap-4 mt-4">
                        <Link to="mailto:salmaakthermim112@gmail.com"><img className="rounded-xl" src="https://img.icons8.com/?size=24&id=tnnUFgHrPmR0&format=gif" alt="Email icon!" /></Link>
                        {/* <Link to="https://www.linkedin.com/in/tahminatanjida/"><img className="rounded-md" src="https://img.icons8.com/?size=24&id=TpMqKvVFD9pP&format=gif" alt="LinkedIn icon!" /></Link> */}
                        <Link to="https://github.com/salmaakthermim"><img className="rounded-full" src="https://img.icons8.com/?size=24&id=akG4VRhAoSii&format=gif" alt="Github icon!" /></Link>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Connected with Me!</h6>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="number"
                                name="phone"
                                className="grow"
                                placeholder="Phone No"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <textarea
                            name="message"
                            className="textarea w-full textarea-bordered"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" className="w-18 h-16 inline-flex text-white rounded-xl items-center gap-2">
                            Submit <span className="mt-1 w-5 h-5 bg-teal-600 inline-flex rounded-full text-white justify-center items-center">
                            <IoIosArrowDroprightCircle />
                        </span>
                        </button>
                    </form>
                </nav>
            </footer>
            <div className="text-center pt-4">
                <p className="text-sm text-gray-600">© {new Date().getFullYear()} Tahmina Tanjida - All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
