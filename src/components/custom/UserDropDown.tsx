"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { Settings, HelpCircle, Moon, LogOut, ChevronDown } from 'lucide-react';
import ButtonSkeleton from './ButtonSkeleton';

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked`);
    // Add your action handlers here
  };

  if (status === "loading") {
    return (
      <ButtonSkeleton />
    )
  }

  return (
    <div >
      <div className="relative">
        {/* Trigger Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Image
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=1024x1024&w=is&k=20&c=y4FFqpMLolCvEqoxlr4oypQqhAL1ta0ojXUnOofQXHk="
            alt="Jane Smith"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">Jane Smith</span>
          <ChevronDown
            size={16}
            className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
              }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {/* User Profile Section */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <Image
                  src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=1024x1024&w=is&k=20&c=y4FFqpMLolCvEqoxlr4oypQqhAL1ta0ojXUnOofQXHk="
                  alt="Jane Smith"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">Jane Smith</div>
                  <button
                    onClick={() => handleMenuClick('View Profile')}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              {/* Settings */}
              <button
                onClick={() => handleMenuClick('Settings')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-blue-50 transition-colors group"
              >
                <Settings
                  size={20}
                  className="text-gray-400 group-hover:text-blue-600 transition-colors"
                />
                <span className="text-gray-700 group-hover:text-blue-700 transition-colors">
                  Settings
                </span>
              </button>

              {/* Help */}
              <button
                onClick={() => handleMenuClick('Help')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-green-50 transition-colors group"
              >
                <HelpCircle
                  size={20}
                  className="text-gray-400 group-hover:text-green-600 transition-colors"
                />
                <span className="text-gray-700 group-hover:text-green-700 transition-colors">
                  Help
                </span>
              </button>

              {/* Accessibility */}
              <button
                onClick={() => handleMenuClick('Accessibility')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-purple-50 transition-colors group"
              >
                <Moon
                  size={20}
                  className="text-gray-400 group-hover:text-purple-600 transition-colors"
                />
                <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
                  Accessibility
                </span>
              </button>
              <button
                onClick={() => handleMenuClick('Accessibility')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-purple-50 transition-colors group"
              >
                <Moon
                  size={20}
                  className="text-gray-400 group-hover:text-purple-600 transition-colors"
                />
                <span className="text-gray-700 group-hover:text-purple-700 transition-colors">
                  Tools
                </span>
              </button>
            </div>

            {/* Sign Out Section */}
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => handleMenuClick('Sign Out')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 transition-colors group"
              >
                <LogOut
                  size={20}
                  className="text-gray-400 group-hover:text-red-500 transition-colors"
                />
                <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                  Sign Out
                </span>
              </button>
            </div>

            {/* Dropdown Arrow */}
            <div className="absolute -top-1 right-6 w-2 h-2 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
          </div>
        )}

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfileDropdown;