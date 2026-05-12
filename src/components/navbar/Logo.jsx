const Logo = () => {
  return (
    <div className="flex items-center space-x-1 group cursor-pointer">
      <div>
        <img src="/logo.png" alt="FlowAI" className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      <span className="text-lg sm:text-xl md:text-2xl font-medium">
        <span className="text-white">Flow</span>
        <span className="text-blue-400">AI</span>
      </span>
    </div>
  );
};

export default Logo;
