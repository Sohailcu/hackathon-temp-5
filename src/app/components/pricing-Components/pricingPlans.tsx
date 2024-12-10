import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingPlans = () => {
  // State to control which pricing card is hovered
  const [hovered, setHovered] = useState<number | null>(null);

  // Features for each pricing plan
  const freeFeatures = [
    "Unlimited product updates",
    "Email and community support",
    "1GB Cloud storage"
  ];

  const standardFeatures = [
    "Unlimited product updates",
    "Email and community support",
    "3GB Cloud storage",
    "Priority support"
  ];

  const premiumFeatures = [
    "Unlimited product updates",
    "Premium support",
    "Unlimited Cloud storage",
    "Dedicated account manager"
  ];

  const PricingCard = ({
    title,
    price,
    features,
    textColor,
    borderColor,
    buttonText,
    highlight,
    index,
    bgColor,
    featuresTextColor,
  }: {
    title: string;
    price: string;
    features: string[];
    textColor: string;
    borderColor: string;
    buttonText: string;
    highlight?: boolean;
    index: number;
    bgColor: string;
    featuresTextColor: string;
  }) => {
    return (
      <div
        className={`relative group flex flex-col -mx-4 items-center p-6 gap-10 w-[327px] h-[full] ${bgColor} border rounded-[10px] cursor-pointer ${hovered === index ? 'scale-105 shadow-lg' : ''}`}
        style={{ borderColor }}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Card Content */}
        <h3 className={`text-2xl font-semibold ${textColor}`}>{title}</h3>
        <h5 className="text-[16px] text-[#737373] font-bold text-center capitalize">Organize across all apps <br /> by hand</h5>
        
        <div className="text-center">
          <span className="text-5xl font-bold text-[#23A6F0] ">{price}</span>
          <span className="text-lg text-[#23A6F0] top-1 "> $</span>
          <p className="text-sm text-[#8EC2F2]">Per Month</p>
        </div>

        {/* Features */}
        <ul className={`text-sm space-y-3 ${featuresTextColor}`}> {/* Custom text color for features */}
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className={`mt-auto w-full py-2 ${highlight ? 'bg-blue-500' : 'bg-gray-500'} text-white rounded-md hover:bg-blue-600`}>
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="flex justify-center gap-8 p-8 bg-gray-100 flex-wrap">
      <PricingCard 
        title="FREE" 
        price="0" 
        features={freeFeatures} 
        textColor="#252B42" 
        borderColor="#23A6F0" 
        buttonText="Try for Free"
        index={0}
        bgColor="bg-white"
        featuresTextColor="#252B42"
      />
      
      <PricingCard 
        title="STANDARD" 
        price="9.99" 
        features={standardFeatures} 
        textColor="text-white" 
        borderColor="#23A6F0" 
        buttonText="Start Now"
        highlight={true}
        index={1}
        bgColor="bg-[#252B42]"
        featuresTextColor="text-white" // Apply white color for features in STANDARD card
      />

      <PricingCard 
        title="PREMIUM" 
        price="19.99" 
        features={premiumFeatures} 
        textColor="#252B42" 
        borderColor="#23A6F0" 
        buttonText="Upgrade Now"
        index={2}
        bgColor="bg-white"
        featuresTextColor="#252B42"
      />
    </div>
  );
};

export default PricingPlans;
