import FeatureCode from "./FeatureCode";
import FeatureContent from "./FeatureContent";

const FeatureCard = ({ feature }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
        feature.imagePosition === "right"
          ? "lg:flex-row-reverse"
          : ""
      }`}
    >
      <FeatureCode feature={feature} />
      <FeatureContent feature={feature} />
    </div>
  );
};

export default FeatureCard;