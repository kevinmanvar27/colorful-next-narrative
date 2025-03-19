
import React from 'react';
import Section from '../Section';
import NodeIcon from '../NodeIcon';

const SupernodeRewards: React.FC = () => {
  const tiers = [
    {
      icon: <NodeIcon size="sm" />,
      title: "TIER 1 REWARDS",
      description: "Earn base rewards for running a standard node with minimum requirements"
    },
    {
      icon: <NodeIcon size="sm" />,
      title: "RESOURCE BONUSES",
      description: "Additional rewards for providing higher compute resources"
    },
    {
      icon: <NodeIcon size="sm" />,
      title: "UPTIME BONUSES",
      description: "Earn extra for maintaining high availability and reliability"
    },
    {
      icon: <NodeIcon size="sm" />,
      title: "PARTICIPATION BONUS",
      description: "Additional rewards for network participation and governance"
    },
    {
      icon: <NodeIcon size="sm" />,
      title: "LOYALTY PROGRAM",
      description: "Long-term node operators receive increased rewards over time"
    }
  ];

  return (
    <Section id="rewards" className="bg-black/30">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Supernode Reward Program</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Operate a supernode and earn enhanced rewards through our tiered program based on
          your contribution level and performance metrics.
        </p>
      </div>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        {tiers.map((tier, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            <div className="flex-shrink-0">
              {tier.icon}
            </div>
            <div>
              <h3 className="font-medium text-sm">{tier.title}</h3>
              <p className="text-xs text-gray-400">{tier.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SupernodeRewards;
