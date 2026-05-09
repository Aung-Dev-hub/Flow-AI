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