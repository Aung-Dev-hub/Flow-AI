import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeViewer = ({ activeTab, code }) => {
  return (
    <div className="relative overflow-hidden grow">
      <SyntaxHighlighter
        key={activeTab}
        language="javascript"
        style={nightOwl}
        customStyle={{
          margin: 0,
          borderRadius: "8px",
          fontSize: "11px",
          lineHeight: "1.4",
          height: "100%",
          border: "1px solid #3c3c3c",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;