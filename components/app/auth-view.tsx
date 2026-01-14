'use client';

import { useState } from 'react';
import { Button } from '@/components/livekit/button';

interface AuthViewProps {
    onLoginSuccess: () => void;
}

export const AuthView = ({ onLoginSuccess, ref }: React.ComponentProps<'div'> & AuthViewProps) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!username.trim() || !password.trim()) {
            alert('Please enter both username and password');
            return;
        }

        setIsLoading(true);

        // Simulate login process (since no backend APIs)
        setTimeout(() => {
            setIsLoading(false);
            onLoginSuccess();
        }, 1000);
    };

    return (
        <div
            ref={ref}
            className="fixed inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/welcome-bg-4.jpg')" }}
        >
            {/* Semi-transparent overlay for better form readability */}
            <div className="absolute inset-0 bg-black/40" />

            <section className="relative z-10 flex h-full flex-col items-center justify-center px-4">
                <div className="w-full max-w-md">
                    {/* Login Card */}
                    <div className="rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm dark:bg-slate-800/95">
                        {/* Header */}
                        <div className="mb-8 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                                <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-white"
                                >
                                    <path
                                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Welcome Back
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                Sign in to continue to Veritas Learning Circle
                            </p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Enter your name"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Enter your username"
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                    placeholder="Enter your password"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {/* Outer ring/border */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"></div>

                                {/* Inner button */}
                                <div className="relative m-[2px] transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 transition-transform duration-200 group-hover:scale-[1.02] group-active:scale-[0.98] disabled:transform-none">
                                    <span className="flex items-center justify-center text-white font-semibold">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Signing In...
                                            </>
                                        ) : (
                                            'Login'
                                        )}
                                    </span>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Bottom footer */}
            <div className="fixed bottom-4 left-0 z-10 flex w-full items-center justify-center px-4">
                <div className="rounded-full bg-white/80 px-5 py-2.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/80">
                    <p className="text-xs font-medium text-slate-600 md:text-sm dark:text-slate-300">
                        🔐 Secure Login • Veritas Learning Circle
                    </p>
                </div>
            </div>
        </div>
    );
};