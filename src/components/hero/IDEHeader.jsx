import { ChevronDown } from "lucide-react";

const IDEHeader = () => {
  return (
    <div className="flex item-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
        </div>

        <span className="text-xs sm:text-sm text-gray-300">
          Flow AI
        </span>
      </div>

      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
    </div>
  );
};

export default IDEHeader;