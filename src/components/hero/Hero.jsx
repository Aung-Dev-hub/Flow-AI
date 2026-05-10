import useMousePosition from "./useMousePosition";
import { useState } from "react";

import GlowBackground from "./GlowBackground";
import IDEHeader from "./IDEHeader";
import FileTabs from "./FileTabs";
import CodeWindow from "./CodeWindow";
import FloatingCards from "./FloatingCards";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const mousePosition = useMousePosition();
  const [activeTab, setActiveTab] = useState("App.jsx");

  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-25 pb-12">
      <GlowBackground mousePosition={mousePosition} />

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
        {/* Hero Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs sm:text-sm text-blue-200">
                Introducing FlowAI
              </span>
            </div>

            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-light">
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Code Faster
              </span>
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Build Better
              </span>
              <span className="bg-linear-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                With FlowAI
              </span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 leading-relaxed">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300 ">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Start Coding Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white"/>
                </div>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

        {/*FlowAI IDE */}
          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-70 sm:h-87.5 lg:h-112.5 border border-white/5">
                <IDEHeader />

                <div className="p-3 sm:p-4 relative h-full">
                  <FileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                  <CodeWindow activeTab={activeTab} />
                </div>
              </div>
              <FloatingCards activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
