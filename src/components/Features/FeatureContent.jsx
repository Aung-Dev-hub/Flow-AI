const FeatureContent = ({ feature }) => {
  return (
    <div className="flex-1 w-full">
      <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
        <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
          {feature.title}
        </h3>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureContent;