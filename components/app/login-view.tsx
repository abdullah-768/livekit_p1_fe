'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LoadingIcon } from '@/components/livekit/icons';

interface LoginViewProps {
  onLogin: (userData: { name: string; email: string; password: string }) => void;
}

export function LoginView({ onLogin }: LoginViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(null);
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      onLogin({ name: name.trim(), email: email.trim(), password: password.trim() });
    }, 500);
  };

  return (
    <div className="fixed inset-0 h-full w-full bg-[url('/welcome-bg-4.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold text-white text-center">Veritas Learning</h1>
          <p className="text-center text-slate-200 mt-2">Sign in to meet your Study Buddy</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-200">Full Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-200">Password</label>
              <input
                type="password"
                required
                className="w-full rounded-lg border border-white/20 bg-black/20 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {error && <div className="text-red-200 text-sm">{error}</div>}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold shadow-lg disabled:opacity-70"
            >
              {isLoading ? <LoadingIcon className="animate-spin inline-block" /> : 'Start Learning'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
