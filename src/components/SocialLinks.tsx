import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="mt-4 flex sm:flex-row justify-center items-center gap-6"> 
      <Button className="h-12 bg-yellow-400 text-black rounded-full px-6 py-2 text-base font-medium hover:bg-yellow-500 transition duration-300 ease-in-out  hover:scale-105 asChild">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-2">Resume <ExternalLink className="w-4 h-4" strokeWidth={2.5} /></a>
      </Button>
      
      <div className="flex space-x-6 text-2xl">
          <a href="https://github.com/MeetParmar2302" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-blue-200/60 hover:text-[#FFFFFF] transition-colors scale-125" />
          </a>

          <a href="https://leetcode.com/u/meet_parmar2302/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <SiLeetcode className="text-blue-200/60 hover:text-yellow-400 transition-colors scale-125" />
          </a>

          <a href="https://www.linkedin.com/in/meetparmar-iiitsurat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-blue-200/60 hover:text-[#0366C3] transition-colors scale-125" />
          </a>
      </div>
    </div>
  )
}

export default SocialLinks