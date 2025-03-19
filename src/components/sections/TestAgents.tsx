
import React from 'react';
import Section from '../Section';
import Button from '../Button';

const TestAgents: React.FC = () => {
  const agents = ['GPT', 'DALL-E', 'Claude', 'Llama', 'Stable'];

  return (
    <Section id="ai-agents" className="bg-black/30">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Test AI Agents</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Try out various AI agents running on our decentralized infrastructure and compare
          performance with traditional centralized solutions.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {agents.map((agent, index) => (
          <button
            key={index}
            className={`text-xs px-4 py-2 rounded-full border ${
              index === 1 ? 'bg-white text-black border-white' : 'border-white/20 hover:bg-white/5'
            } transition-colors`}
          >
            {agent}
          </button>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto p-4 md:p-6 border border-white/10 rounded-lg mb-10 min-h-[200px] bg-black/20">
        <p className="text-sm text-center text-gray-400">
          Sample agent output would appear here, showing AI-generated content running on decentralized infrastructure.
        </p>
      </div>
      
      <div className="text-center">
        <Button variant="outline" size="sm">
          Try More Agents
        </Button>
      </div>
    </Section>
  );
};

export default TestAgents;
