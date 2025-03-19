
import React from 'react';
import Section from '../Section';
import NodeIcon from '../NodeIcon';
import Card from '../Card';
import Button from '../Button';

const RunNode: React.FC = () => {
  const nodeTypes = [
    {
      title: "Validator",
      description: "Participate in consensus and earn rewards by validating transactions and securing the network.",
    },
    {
      title: "Agent Provider",
      description: "Run specialized AI agents and models to serve the network requests and earn PAI tokens.",
    },
    {
      title: "Storage Node",
      description: "Provide storage resources for the network data and models to earn passive income.",
    },
    {
      title: "RPC Node",
      description: "Support the network infrastructure by providing API endpoints for developers and applications.",
    },
  ];

  return (
    <Section id="run-a-node">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Run a Node</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Participate in the PAI3 network by running nodes that support the infrastructure
          and provide essential services while earning rewards.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nodeTypes.map((node, index) => (
          <Card
            key={index}
            title={node.title}
            description={node.description}
            showNodeIcon={true}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xs text-gray-400 mb-6">
          Node runners earn rewards proportional to their contribution and service quality to the network.
        </p>
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </div>
    </Section>
  );
};

export default RunNode;
