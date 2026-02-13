import { useState } from 'react';
import { User, Mail, Lock, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
import { api } from '../../axios';

export const StudentSignup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        studentId: '',
        password: '',
    });
    const redirect = useNavigate()

    const handleNavigate = () => {
        redirect("/login")
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(`/auth/signup`, formData);
            const token = response.data.token;
            document.cookie = `MSKEY=${token};`
            return toast.success("Account created successfully");
        } catch (err) {
            return toast.error(err.response?.data.message);
        }
    };

    return <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

            {/* Left Side: Branding/Illustration */}
            <div className="md:w-1/2 bg-indigo-600 p-12 text-white flex flex-col justify-center">
                <GraduationCap size={48} className="mb-6" />
                <h2 className="text-4xl font-bold mb-4">Join our Academic Community</h2>
                <p className="text-indigo-100 text-lg">
                    Access your courses, track your progress, and connect with peers worldwide.
                </p>
                <div className="mt-8 pt-8 border-t border-indigo-500/50">
                    <p className="text-sm italic">"Education is the most powerful weapon which you can use to change the world."</p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2 p-8 md:p-12">
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800">Create Account</h3>
                    <p className="text-gray-500 mt-2">Enter your details to register as a student.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                name="fullName"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                placeholder="John Doe"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                name="email"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                                placeholder="email@university.edu"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                            <input
                                type="text"
                                name="studentId"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="ST-12345"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                name="password"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="••••••••"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors group"
                    >
                        Sign Up
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-8 text-sm">
                    Already have an account? <span onClick={handleNavigate} className="text-indigo-600 font-semibold cursor-pointer hover:underline">Log in</span>
                </p>
            </div>
        </div>
    </div>
};
