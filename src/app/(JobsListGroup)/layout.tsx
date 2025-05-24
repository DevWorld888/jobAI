import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Header: React.FC = () => (
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        background: "#f5f5f5",
        borderBottom: "1px solid #e0e0e0"
    }}>
        <div>
            <strong>JobAI</strong>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>🔔 Notifications</span>
            <span>💬 Messages</span>
            <span>👤 Login</span>
        </div>
    </header>
);

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <Header />
        <main style={{ padding: "2rem" }}>
            {children}
        </main>
    </div>
);

export default Layout;