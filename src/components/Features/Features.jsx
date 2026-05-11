import { features } from "../../data/CodeExample";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Development
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              WorkFlow
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-12">
          {features.map((feature, key) => (
            <FeatureCard key={key} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;