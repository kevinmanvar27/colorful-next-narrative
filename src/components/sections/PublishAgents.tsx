
import React from 'react';
import Section from '../Section';
import NodeIcon from '../NodeIcon';

const PublishAgents: React.FC = () => {
  const agentTypes = [
    {
      icon: <NodeIcon size="sm" />,
      title: "AI Image Generation",
      description: "Create and deploy image generation agents"
    },
    {
      icon: <NodeIcon size="sm" />,
      title: "Large Language Models",
      description: "Deploy conversational and text processing AI models"
    },
    {
      icon: <NodeIcon size="sm" />,
      title: "Specialized AI Models",
      description: "Publish domain-specific models for specialized use cases"
    }
  ];

  return (
    <Section id="publish" className="bg-black/30">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Publish AI Agents</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Create and publish your own AI agents to the network, set your own pricing,
          and earn revenue from users accessing your services.
        </p>
      </div>
      
      <div className="space-y-6 max-w-3xl mx-auto">
        <h3 className="font-medium text-sm mb-4">Types of AI Available for Building:</h3>
        
        <div className="space-y-4">
          {agentTypes.map((type, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
              <div className="flex-shrink-0">
                {type.icon}
              </div>
              <div>
                <h3 className="font-medium text-sm">{type.title}</h3>
                <p className="text-xs text-gray-400">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xs text-gray-400 mt-8 text-center">
          No central approval process necessary - deploy your agents directly to our
          decentralized marketplace with fair revenue sharing.
        </p>
      </div>
    </Section>
  );
};

export default PublishAgents;
