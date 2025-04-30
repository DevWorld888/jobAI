"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

// Define the shape of the SidebarContext
type SidebarContextType = {
    isExpanded: boolean; // Tracks whether the sidebar is expanded or collapsed
    isMobileOpen: boolean; // Tracks whether the sidebar is open on mobile
    isHovered: boolean; // Tracks whether the sidebar is being hovered
    activeItem: string | null; // Tracks the currently active navigation item
    openSubmenu: string | null; // Tracks the currently open submenu
    toggleSidebar: () => void; // Function to toggle the sidebar's expanded state
    toggleMobileSidebar: () => void; // Function to toggle the sidebar on mobile
    setIsHovered: (isHovered: boolean) => void; // Function to set hover state
    setActiveItem: (item: string | null) => void; // Function to set the active item
    toggleSubmenu: (item: string) => void; // Function to toggle a submenu
}

// Create the SidebarContext with an undefined default value
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Custom hook to use the SidebarContext
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

// SidebarProvider component to manage and provide the sidebar state
export const Sidebarprovider: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    // State to manage whether the sidebar is expanded or collapsed
    const [isExpanded, setIsExpanded] = useState(true);
    // State to manage whether the sidebar is open on mobile
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    // State to track if the user is on a mobile device
    const [isMobile, setIsMobile] = useState(false);
    // State to track whether the sidebar is being hovered
    const [isHovered, setIsHovered] = useState(false);
    // State to track the currently active navigation item
    const [activeItem, setActiveItem] = useState<string | null>(null);
    // State to track the currently open submenu
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);


    useEffect(() => {
        const handleResize = () => {
          const mobile = window.innerWidth < 768;
          setIsMobile(mobile);
          if (!mobile) {
            setIsMobileOpen(false);
          }
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    const toggleMobileSidebar = () => {
        setIsMobileOpen((prev) => !prev);
    };

    const toggleSubmenu = (item: string) => {
        setOpenSubmenu((prev) => (prev === item ? null : item));
    };


    // Provide the context value to children
    return (
        <SidebarContext.Provider
            value={{
                isExpanded: isMobile ? false : isExpanded, // Set expanded state based on mobile detection
                isMobileOpen,
                isHovered,
                activeItem,
                openSubmenu,
                setIsHovered, // Set hover state
                setActiveItem, // Set active item
                toggleSidebar,
                toggleMobileSidebar,
                toggleSubmenu,

            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};