const tabs = ["App.jsx", "Hero.jsx", "Navbar.jsx"];

const FileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
            activeTab === tab
              ? "bg-blue-500/30 text-white border-blue-400/20"
              : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
          } transition-all duration-200 whitespace-nowrap`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FileTabs;