"use client";

import { useEffect } from 'react';

export default function ScrollAnimationHandler() {
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
      );
    };

    // Check if element is fully above the fold (initial viewport)
    const isAboveFold = (element: Element) => {
      const rect = element.getBoundingClientRect();
      // More aggressive threshold to ensure full viewport rendering
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 1.5
      );
    };

    // Function to handle scroll animations
    const handleScroll = () => {
      // Animate sections as they come into view
      const sections = document.querySelectorAll('section, main > div');
      sections.forEach((section) => {
        if (isInViewport(section)) {
          section.classList.add('visible');
        }
      });
      
      // Animate elements with reveal class
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        if (isInViewport(reveal)) {
          reveal.classList.add('active');
        }
      });
    };

    // Initial setup - immediately show elements above the fold
    const setupInitialVisibility = () => {
      // Make sections that are above the fold visible immediately
      const sections = document.querySelectorAll('section, main > div');
      sections.forEach((section) => {
        if (isAboveFold(section)) {
          // Add visible class without animation transition for initial view
          section.classList.add('visible', 'no-transition');
        }
      });
      
      // Similarly for reveal elements
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        if (isAboveFold(reveal)) {
          reveal.classList.add('active', 'no-transition');
        }
      });
      
      // Force additional initial content to be visible
      const heroSection = document.querySelector('main > div:first-child');
      const gridSection = document.querySelector('#about');
      
      if (heroSection) {
        heroSection.classList.add('visible', 'no-transition');
      }
      
      if (gridSection) {
        gridSection.classList.add('visible', 'no-transition');
      }
      
      // Remove the no-transition class after a brief delay to enable animations for scrolling
      setTimeout(() => {
        document.querySelectorAll('.no-transition').forEach((element) => {
          element.classList.remove('no-transition');
        });
      }, 100);
    };

    // Add a slight delay to ensure DOM is fully loaded
    setTimeout(() => {
      // Run initial setup
      setupInitialVisibility();
      
      // Also run normal scroll handler for elements partially in view
      handleScroll();
      
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
    }, 50);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // This component doesn't render anything
}