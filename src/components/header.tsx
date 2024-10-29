import { FC } from "react";

const Header: FC = () => {
    return (
        <header className="bg-blue-900 shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-blue-500">Header</h1>
            </div>
        </header>
    );
};

export default Header;