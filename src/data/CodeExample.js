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
    codeSnippet: `function handleSubmit() {
      // AI suggests next line
      const data = await fetch("/api/submit")
      // Auto-completed by AI
    }`,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description: "Generate comprehensive test suites automatically. Our AI analyzes your",
    codeSnippet: `function handleSubmit() {
      // AI suggests next line
      const data = await fetch("/api/submit")
      // Auto-completed by AI
    }`,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description: "Identify and fix bugs before they reach production. AI-powered error",
    codeSnippet: `function handleSubmit() {
      // AI suggests next line
      const data = await fetch("/api/submit")
      // Auto-completed by AI
    }`,
    imagePosition: "left"
  },
]

export const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members ",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing business",
    features: [
      "Up to 25 team members ",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integration",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members ",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integration",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
]

export const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};
