export const codeExample = {
  "App.jsx": `
import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

const App = () => {
  const [code, setCode] = useState("");

  const handleCompletion = async () => {
    const suggestion = await CodeFlow.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor
        value={code}
        onChange={setCode}
        onAI={handleCompletion}
      />
    </div>
  );
};

export default App;
`,

  "Navbar.jsx": `
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">CodeFlow</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Docs</li>
      </ul>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
    </nav>
  );
};

export default Navbar;
`,

  "Hero.jsx": `
import { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="hero">
      <h1>Build Faster with CodeFlow AI</h1>
      <p>
        Generate, edit, and improve your code instantly using AI assistance.
      </p>

      <div className="hero-input">
        <input
          type="text"
          placeholder="Ask AI to generate code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => alert(search)}>
          Generate
        </button>
      </div>
    </section>
  );
};

export default Hero;
`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "🧠",
    title: "Smart Completion",
    content: "AI-powered code suggestion in real-time",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project",
  },
}

export const features = [
  {
    title: "AI Code Completion",
    description: "Intelligent code suggestions powered by advanced AI that learns from your patterns. Get real-time assistance with syntax, logic and best practice. ",
    image:"code-completion",
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description: "Generate comprehensive test suites automatically. Our AI analyzes your",
    image:"testing",
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description: "Identify and fix bugs before they reach production. AI-powered error",
    image:"debugging",
    imagePosition: "left"
  },
]