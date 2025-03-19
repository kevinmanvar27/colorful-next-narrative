
import React from 'react';
import Section from '../Section';
import NodeIcon from '../NodeIcon';
import Button from '../Button';

const CommunityEvents: React.FC = () => {
  return (
    <Section id="community">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Community Events & Rewards</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Join our vibrant community of node operators, developers, and AI enthusiasts to
          participate in events and earn exclusive rewards.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        <div className="p-6 border border-white/10 rounded-lg bg-black/20">
          <div className="flex justify-end">
            <NodeIcon size="sm" />
          </div>
          <h3 className="font-medium text-sm mb-2">Hackathon Programs</h3>
          <p className="text-xs text-gray-400">
            Regular hackathons where you can build innovative solutions on top of our platform and win substantial prizes.
          </p>
        </div>
        
        <div className="p-6 border border-white/10 rounded-lg bg-black/20">
          <div className="flex justify-end">
            <NodeIcon size="sm" />
          </div>
          <h3 className="font-medium text-sm mb-2">Community Calls</h3>
          <p className="text-xs text-gray-400">
            Weekly community calls to discuss updates, share knowledge, and provide direct feedback to the core team.
          </p>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-400 mb-6">
          Active community participants earn reputation points that can be exchanged for exclusive benefits and token rewards.
        </p>
        <Button variant="outline" size="sm">
          Join Our Community
        </Button>
      </div>
    </Section>
  );
};

export default CommunityEvents;
