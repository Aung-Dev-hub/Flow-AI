const Logo = ({size = 30}) => {
  return (
    
      <div className="flex items-center space-x-2 cursor-pointer select-none">
      {/* Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="#3B82F6"
          strokeWidth="4"
        />

        {/* Flow Shape */}
        <path
          d="M18 38C24 20 40 20 46 38"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M22 42C27 30 37 30 42 42"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>

      
  );
};

export default Logo;
