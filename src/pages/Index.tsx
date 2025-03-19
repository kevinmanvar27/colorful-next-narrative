
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import RunNode from '@/components/sections/RunNode';
import SupernodeRewards from '@/components/sections/SupernodeRewards';
import LeaseNode from '@/components/sections/LeaseNode';
import TestAgents from '@/components/sections/TestAgents';
import ContributeBeta from '@/components/sections/ContributeBeta';
import PublishAgents from '@/components/sections/PublishAgents';
import CommunityEvents from '@/components/sections/CommunityEvents';
import StartEarning from '@/components/sections/StartEarning';

const Index = () => {
  useEffect(() => {
    // Initialize animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all sections with animation
    document.querySelectorAll('.section-transition').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section-transition').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <RunNode />
        <SupernodeRewards />
        <LeaseNode />
        <TestAgents />
        <ContributeBeta />
        <PublishAgents />
        <CommunityEvents />
        <StartEarning />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
