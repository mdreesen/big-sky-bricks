export function LegoIconBlue({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="brick-gradient" x1="0" y1="0" x2="0" y2="40">
                    <stop offset="0%" stopColor="#0061d1" />
                    <stop offset="100%" stopColor="#0055bf" />
                </linearGradient>
                <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                    <feOffset dx="1" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <rect width="80" height="40" rx="4" fill="url(#brick-gradient)" filter="url(#drop-shadow)" />
            <circle cx="20" cy="20" r="8" fill="#0055bf" stroke="#0061d1" strokeWidth="1" />
            <circle cx="60" cy="20" r="8" fill="#0055bf" stroke="#0061d1" strokeWidth="1" />
        </svg>
    );
};

export function LegoIconYellow2x2({ className }: { className?: string }) {

    return (
        <svg
            className={className}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="brick-yellow-gradient" x1="0" y1="0" x2="0" y2="60">
                    <stop offset="0%" stopColor="#f5d300" />
                    <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <radialGradient id="stud-highlight" cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#f2cd00" />
                </radialGradient>
                <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.15" />
                </filter>
            </defs>

            {/* Main brick body */}
            <rect width="60" height="60" rx="6" fill="url(#brick-yellow-gradient)" filter="url(#soft-shadow)" />

            {/* Studs */}
            <circle cx="20" cy="20" r="10" fill="url(#stud-highlight)" />
            <circle cx="40" cy="20" r="10" fill="url(#stud-highlight)" />
            <circle cx="20" cy="40" r="10" fill="url(#stud-highlight)" />
            <circle cx="40" cy="40" r="10" fill="url(#stud-highlight)" />
        </svg>
    );
};

export function LegoIconYellow1x2({ className }: { className?: string }) {

    return (
        <svg
            className={className}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="brick-yellow-gradient" x1="0" y1="0" x2="0" y2="60">
                    <stop offset="0%" stopColor="#f5d300" />
                    <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <radialGradient id="stud-highlight" cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#f2cd00" />
                </radialGradient>
                <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.15" />
                </filter>
            </defs>

            {/* Main brick body */}
            <rect width="30" height="60" rx="6" fill="url(#brick-yellow-gradient)" filter="url(#soft-shadow)" />

            {/* Studs */}
            <circle cx="15" cy="20" r="10" fill="url(#stud-highlight)" />
            <circle cx="15" cy="45" r="10" fill="url(#stud-highlight)" />
        </svg>
    );
};

export function LegoIconThreeStacked({ className }: { className?: string }) {

    return (
        <svg
            className={className}
            viewBox="0 40 60 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* Yellow Brick Gradients */}
                <linearGradient id="brick-yellow-gradient" x1="0" y1="0" x2="0" y2="60">
                    <stop offset="0%" stopColor="#f5d300" />
                    <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
                <radialGradient id="stud-yellow-highlight" cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#fde047" />
                    <stop offset="100%" stopColor="#f2cd00" />
                </radialGradient>

                {/* Red Brick Gradients */}
                <linearGradient id="brick-red-gradient" x1="0" y1="0" x2="0" y2="60">
                    <stop offset="0%" stopColor="#e53e3e" />
                    <stop offset="100%" stopColor="#c53030" />
                </linearGradient>
                <radialGradient id="stud-red-highlight" cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#fc8181" />
                    <stop offset="100%" stopColor="#f56565" />
                </radialGradient>

                {/* Blue Brick Gradients */}
                <linearGradient id="brick-blue-gradient" x1="0" y1="0" x2="0" y2="60">
                    <stop offset="0%" stopColor="#4299e1" />
                    <stop offset="100%" stopColor="#3182ce" />
                </linearGradient>
                <radialGradient id="stud-blue-highlight" cx="0.3" cy="0.3" r="0.7">
                    <stop offset="0%" stopColor="#63b3ed" />
                    <stop offset="100%" stopColor="#4299e1" />
                </radialGradient>

                <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.15" />
                </filter>
            </defs>

            <g filter="url(#soft-shadow)">
                {/* Yellow Brick */}
                <rect y="0" width="60" height="30" rx="6" fill="url(#brick-yellow-gradient)" />
                <circle cx="20" cy="15" r="10" fill="url(#stud-yellow-highlight)" />
                <circle cx="40" cy="15" r="10" fill="url(#stud-yellow-highlight)" />

                {/* Red Brick */}
                <rect y="35" width="60" height="30" rx="6" fill="url(#brick-red-gradient)" />
                <circle cx="20" cy="50" r="10" fill="url(#stud-red-highlight)" />
                <circle cx="40" cy="50" r="10" fill="url(#stud-red-highlight)" />

                {/* Blue Brick */}
                <rect y="70" width="60" height="30" rx="6" fill="url(#brick-blue-gradient)" />
                <circle cx="20" cy="85" r="10" fill="url(#stud-blue-highlight)" />
                <circle cx="40" cy="85" r="10" fill="url(#stud-blue-highlight)" />
            </g>
        </svg>
    );
};

export function LegoIconX({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="brick-red-gradient" x1="0" y1="0" x2="0" y2="24">
                    <stop offset="0%" stopColor="#e53e3e" />
                    <stop offset="100%" stopColor="#c53030" />
                </linearGradient>
                <linearGradient id="brick-blue-gradient" x1="0" y1="0" x2="0" y2="24">
                    <stop offset="0%" stopColor="#4299e1" />
                    <stop offset="100%" stopColor="#3182ce" />
                </linearGradient>
                <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="2" stdDeviation="3.5" floodColor="#000" floodOpacity="0.2" />
                </filter>
            </defs>

            <g filter="url(#soft-shadow)" transform="translate(0, 5)">
                {/* Top-left to bottom-right arm */}
                <g transform="rotate(45 50 50)">
                    <rect x="2" y="38" width="96" height="24" rx="4" fill="url(#brick-blue-gradient)" />
                    <circle cx="18" cy="50" r="6" fill="#3182ce" />
                    <circle cx="34" cy="50" r="6" fill="#3182ce" />
                    <circle cx="50" cy="50" r="6" fill="#3182ce" />
                    <circle cx="66" cy="50" r="6" fill="#3182ce" />
                    <circle cx="82" cy="50" r="6" fill="#3182ce" />
                </g>
                {/* Bottom-left to top-right arm */}
                <g transform="rotate(-45 50 50)">
                    <rect x="2" y="38" width="96" height="24" rx="4" fill="url(#brick-red-gradient)" />
                    <circle cx="18" cy="50" r="6" fill="#c53030" />
                    <circle cx="34" cy="50" r="6" fill="#c53030" />
                    <circle cx="50" cy="50" r="6" fill="#c53030" />
                    <circle cx="66" cy="50" r="6" fill="#c53030" />
                    <circle cx="82" cy="50" r="6" fill="#c53030" />
                </g>
            </g>
        </svg>
    );
};

export function LegoI({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 20 70" // Adjusted viewBox for the dot
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="i-brick-red" x1="0" y1="0" x2="0" y2="20">
                    <stop offset="0%" stopColor="#e53e3e" />
                    <stop offset="100%" stopColor="#c53030" />
                </linearGradient>
                <linearGradient id="i-brick-blue" x1="0" y1="0" x2="0" y2="20">
                    <stop offset="0%" stopColor="#4299e1" />
                    <stop offset="100%" stopColor="#3182ce" />
                </linearGradient>
                <linearGradient id="i-brick-green" x1="0" y1="0" x2="0" y2="20">
                    <stop offset="0%" stopColor="#48bb78" />
                    <stop offset="100%" stopColor="#38a169" />
                </linearGradient>
                 <filter id="i-soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="1" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.2" />
                </filter>
            </defs>
    
            <g filter="url(#i-soft-shadow)">
                {/* The dot of the "i" */}
                <circle cx="10" cy="18" r="8" fill="#f5d300" />
    
                {/* The stem of the "i" */}
                <rect y="30" width="20" height="10" rx="2" fill="url(#i-brick-blue)" />
                <rect y="40" width="20" height="10" rx="2" fill="url(#i-brick-red)" />
                <rect y="50" width="20" height="10" rx="2" fill="url(#i-brick-green)" />

            </g>
        </svg>
    );
}