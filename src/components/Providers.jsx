// src/components/Providers.jsx
"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import ToastProvider from '@/components/shared/ToastProvider';


export function Providers({ children }) {
  const GOOGLE_CLIENT_ID = "137734019377-nnq12325retn9n23nfnis326j008u2pm.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ToastProvider />


      <div className="bg-white text-gray-900 min-h-screen">
        {children}
      </div>

    </GoogleOAuthProvider>
  );
}