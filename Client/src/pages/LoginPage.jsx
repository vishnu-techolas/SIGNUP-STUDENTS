import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export const StudentLogin = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const redirect = useNavigate()

    const handleNavigate = () => {
        redirect("/signup")
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginData({
            ...loginData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Attempt:", loginData);
    };

    return <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse">

            {/* Left Side: Branding/Welcome Back */}
            <div className="md:w-1/2 bg-indigo-600 p-12 text-white flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                <p className="text-indigo-100 text-lg mb-6">
                    Pick up right where you left off. Your dashboard and courses are waiting.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 bg-indigo-500/30 p-3 rounded-lg border border-indigo-400/30">
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-sm">3 New assignments posted today</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="md:w-1/2 p-8 md:p-12">
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-gray-800">Login</h3>
                    <p className="text-gray-500 mt-2">Access your student portal.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                name="email"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                placeholder="name@university.edu"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                name="password"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                placeholder="••••••••"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="remember"
                            name="rememberMe"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            onChange={handleChange}
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                            Keep me logged in
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                        <LogIn size={18} />
                        Sign In
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        New here? <span onClick={handleNavigate} className="text-indigo-600 font-semibold cursor-pointer hover:underline">Create an account</span>
                    </p>
                    <button onClick={() => redirect("/")} on className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                        <ArrowLeft size={14} /> Back to homepage
                    </button>
                </div>
            </div>
        </div>
    </div>
};
