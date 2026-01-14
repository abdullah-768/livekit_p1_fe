'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Changed to false since we don't persist auth

    // Don't check for existing authentication on mount since there's no backend
    // User should always start with login screen on page refresh

    const login = () => {
        setIsAuthenticated(true);
        // Don't persist to localStorage since there's no backend validation
    };

    const logout = () => {
        setIsAuthenticated(false);
        // Clear any existing localStorage just in case
        localStorage.removeItem('veritas-auth');
    };

    const value = {
        isAuthenticated,
        login,
        logout,
    };

    // No loading screen needed since we don't check persisted auth
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};