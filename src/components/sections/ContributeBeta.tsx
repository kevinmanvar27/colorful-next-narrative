
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import NodeIcon from '../NodeIcon';
import Button from '../Button';

const ContributeBeta: React.FC = () => {
  const contributions = [
    {
      title: "Submit Agent",
      description: "Create and submit your own AI agent to the network to serve users and earn rewards.",
    },
    {
      title: "Host Model",
      description: "Provide computational resources to host AI models on the network and earn passive income.",
    },
    {
      title: "Optimize Use Cases",
      description: "Help optimize existing AI use cases and create new ones to expand the ecosystem.",
    },
  ];

  return (
    <Section id="contribute">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contribute Beta</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Join our growing community of developers and AI specialists contributing
          to the PAI3 ecosystem during our beta phase.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contributions.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            showNodeIcon={true}
          />
        ))}
      </div>
      
      <div className="text-center mt-10">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto mb-6">
          All early contributors are eligible for special rewards and recognition in our
          contributor program to acknowledge your valuable input.
        </p>
        <Button variant="outline" size="sm">
          Apply to Contribute
        </Button>
      </div>
    </Section>
  );
};

export default ContributeBeta;
