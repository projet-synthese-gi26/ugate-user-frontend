
"use client";

export default function PasswordStrengthIndicator({ password = '' }) {
    const getStrength = (pwd) => {
        let strength = 0;
        if (pwd.length >= 8) strength++;
        if (/[A-Z]/.test(pwd)) strength++;
        if (/[0-9]/.test(pwd)) strength++;
        if (/[^A-Za-z0-9]/.test(pwd)) strength++;
        return strength;
    };

    const strength = getStrength(password);
    const width = `${(strength / 4) * 100}%`;

    const getColor = () => {
        if (strength <= 1) return 'bg-red-500';
        if (strength === 2) return 'bg-yellow-500';
        if (strength === 3) return 'bg-blue-900';
        return 'bg-green-500';
    };

    return (
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
                className={`h-full rounded-full transition-all duration-300 ${getColor()}`}
                style={{ width }}
            />
        </div>
    );
}