// src/components/Providers.jsx
"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ToastProvider from '@/components/shared/ToastProvider';


export function Providers({ children }) {
  const GOOGLE_CLIENT_ID = "137734019377-nnq12325retn9n23nfnis326j008u2pm.apps.googleusercontent.com";

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ToastProvider />
        
        
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-300">
          {children}
        </div>
        
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}