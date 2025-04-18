const Logo = () => {
  return (
    <div className="flex items-center h-16">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 80"
          className="h-14 w-auto"
        >
          <defs>
            <linearGradient
              id="darkTextGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00A6ED" />
              <stop offset="100%" stopColor="#E0E7FF" />
            </linearGradient>
          </defs>
          <g transform="translate(20, 15)">
            <rect
              x="0"
              y="0"
              width="50"
              height="50"
              rx="10"
              ry="10"
              fill="#00A6ED"
            />
            <polygon points="15,12 40,25 15,38" fill="white" />
            <text
              x="65"
              y="35"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="800"
              fill="url(#darkTextGradient)"
            >
              PLAYO
            </text>
            <rect
              x="65"
              y="43"
              width="140"
              height="3"
              rx="1.5"
              ry="1.5"
              fill="#00A6ED"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Logo;
