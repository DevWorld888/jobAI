
import Header from "@/components/custom/Header";
import React, { ReactNode, Suspense } from "react";

type LayoutProps = {
    children: ReactNode;
};


const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <main style={{ padding: "2rem" }}>
                {children}
            </main>
        </Suspense>
    </div>
);

export default Layout;