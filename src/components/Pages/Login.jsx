import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Login submitted', { email, password, rememberMe });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>
                        tellet
                    </h1>
                </div>

                <div>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-teal-600 hover:text-teal-700">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Cloudflare Widget */}
                    <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Success!</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-orange-500 font-bold text-xs">CLOUDFLARE</span>
                            <div className="text-xs text-gray-500">
                                <a href="#" className="hover:underline">Privacy</a>
                                {' • '}
                                <a href="#" className="hover:underline">Terms</a>
                            </div>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 rounded-lg transition duration-200"
                    >
                        Sign in
                    </button>
                </div>

                {/* Create Account Link */}
                <div className="text-center mt-6 text-sm text-gray-600">
                    Not a member yet?{' '}
                    <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">
                        Create an Account
                    </a>
                    .
                </div>
            </div>
        </div>
    );
}
export default Login