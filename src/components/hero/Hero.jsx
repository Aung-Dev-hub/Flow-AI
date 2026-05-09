import { ChevronDown } from "lucide-react";
import useMousePosition from "./useMousePosition";
import { useState } from "react";

import BackgroundGlow from "./BackgroundGlow";
import FileTabs from "./FileTabs";
import CodeViewer from "./CodeViewer";
import { codeExample } from "../../data/codeExample";

const Hero = () => {
  const mousePosition = useMousePosition();
  const [activeTab, setActiveTab] = useState("App.jsx");

  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">

      <BackgroundGlow x={mousePosition.x} y={mousePosition.y} />

      {/* IDE */}
      <div className="relative w-full max-w-5xl">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/10">

          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <span className="text-sm text-gray-300">Flow AI</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          <div className="p-3 sm:p-4">
            <FileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <CodeViewer activeTab={activeTab} code={codeExample[activeTab]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;