"use client";

import AppHeader from "@/app/layout/AppHeader";
import AppSidebar from "@/app/layout/AppSidebar";
import { useSidebar } from "@/context/SidebarContext";
import { ReactNode } from "react";

// DashboardLayout component provides the layout structure for the admin dashboard.
// It includes a sidebar, a header, and a dynamic content area.
export default function DashboardLayout({ children }: { children: ReactNode }) {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";
    return (
        // Main container with a flexible layout for sidebar and content
        <div className="min-h-screen flex xl:flex bg-gray-100">
            {/* Sidebar component for navigation */}
            <AppSidebar />
            {/* Main content area */}
            <main className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
                {/* Header component */}
                <AppHeader />
                {/* Dynamic content passed as children */}
                <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
            </main>
        </div>
    );
}
