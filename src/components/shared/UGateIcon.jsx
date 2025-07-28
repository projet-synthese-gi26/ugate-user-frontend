// src/components/shared/UGateIcon.jsx
"use client";

export default function UGateIcon({ className = "h-8 w-8", showText = false, size = 8 }) {
    const iconSize = `${size * 5}`;
    
    return (
        <div className={`flex items-center space-x-2 ${showText ? '' : 'justify-center'}`}>
            <svg 
                className={className} 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="ugate-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E40AF" />
                        <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                </defs>
                <rect width="40" height="40" rx="8" fill="url(#ugate-gradient)" />
                <path d="M8 12h24v16H8z" fill="#ffffff" fillOpacity="0.1" />
                <path d="M12 8v8h4V8h4v8h4V8h4v24H8V8h4z" fill="#ffffff" fillOpacity="0.9" />
                <path d="M16 20h8v8h-8z" fill="#1E40AF" />
                <circle cx="20" cy="24" r="2" fill="#ffffff" />
                <path d="M10 30h20v2H10z" fill="#ffffff" />
                <text x="20" y="36" textAnchor="middle" fontSize="6" fill="#ffffff" fontWeight="bold">U</text>
            </svg>
            {showText && (
                <span className="text-2xl font-bold text-blue-600">U-Gate</span>
            )}
        </div>
    );
}