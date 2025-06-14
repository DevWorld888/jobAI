import DropdownMenu from "./Dropmenu";
import { House } from 'lucide-react';
const Header: React.FC = () => (
    <header
        className="w-full flex items-center justify-between px-4 py-3 bg-white"
    >
        <span className="font-bold text-lg text-gray-900hidden sm:inline">
            JOBAI
        </span>
        <nav className="flex-1 flex justify-center">
            <ul className="flex gap-6">
                <li>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        <House className="inline-block mr-1 h-4 w-4" />
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-700  hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                        About us
                    </a>
                </li>
            </ul>
        </nav>
        
        <div>
            <DropdownMenu />
        </div>
    </header>
);

export default Header;