import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

// const Header: React.FC = () => (
//     <header style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "1rem",
//         background: "#f5f5f5",
//         borderBottom: "1px solid #e0e0e0"
//     }}>
//         <div>
//             <strong>JobAI</strong>
//         </div>
//         <div style={{ display: "flex", gap: "1.5rem" }}>
//             <span>🔔 Notifications</span>
//             <span>💬 Messages</span>
//             <span>👤 Login</span>
//         </div>
//     </header>
// );
const Header: React.FC = () => (
    <header
        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
    >
        <span className="font-bold text-lg text-gray-900 dark:text-white hidden sm:inline">
            JOBAI
        </span>
        <nav className="flex-1 flex justify-center">
            <ul className="flex gap-6">
                <li>
                    <a
                        href="#"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        About us
                    </a>
                </li>
            </ul>
        </nav>

        <div>
            <a
                href="/login"
                className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-sm"
            >
                Login
            </a>
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