"use client";
import React from 'react';
import { GitHubCalendar as ReactGitHubCalendar } from 'react-github-calendar';

const GitHubCalendar = () => {
  return (
    <div className="border-[0.5px] hover:scale-105 transition-transform duration-500 rounded-lg p-6 my-10 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        Public Repositories
      </h2>
      <ReactGitHubCalendar
        username="thoriqkhoir"
        year="last"
        colorScheme="dark"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        style={{
          color: '#ffffff'
        }}
      />
    </div>
  );
};

export default GitHubCalendar;