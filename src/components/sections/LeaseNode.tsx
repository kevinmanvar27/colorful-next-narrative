
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import NodeIcon from '../NodeIcon';
import Button from '../Button';

const LeaseNode: React.FC = () => {
  const options = [
    {
      title: "Dedicated Node",
      description: "Lease a dedicated node with full control and customization options for your specific needs.",
    },
    {
      title: "Shared Node",
      description: "Cost-effective option to share node resources with other users while still earning rewards.",
    },
    {
      title: "Managed Node",
      description: "Full-service solution with setup, maintenance, and optimization handled for you.",
    },
  ];

  return (
    <Section id="lease">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Lease a Node</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Don't want to run your own hardware? Lease a node from our network partners
          and still earn rewards without the technical overhead.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <Card
            key={index}
            title={option.title}
            description={option.description}
            showNodeIcon={true}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-xs text-gray-400 mb-6">
          Leasing options start from as low as $10/month with flexible terms and scaling options.
        </p>
        <Button variant="outline" size="sm">
          Explore Leasing Options
        </Button>
      </div>
    </Section>
  );
};

export default LeaseNode;
