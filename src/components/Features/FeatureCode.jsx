import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const FeatureCode = ({ feature }) => {
  return (
    <div className="flex-1 w-full">
      <div className="relative group">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500"></div>

        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:-p-6 overflow-hidden group-hover:border group-hover:border-blue-600/50 transition-all duration-300">
          {/* IDE Interface */}
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
            <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>

              <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                {feature.title}
              </span>
            </div>

            <div>
              <SyntaxHighlighter
                language="javascript"
                style={nightOwl}
                customStyle={{
                  margin: 0,
                  background: "transparent",
                  borderRadius: "8px",
                  fontSize: "0.75rem",
                  lineHeight: "1.4",
                  height: "100%",
                  border: "1px solid #3c3c3c",
                }}
                wrapLines={true}
              >
                {feature.codeSnippet}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCode;