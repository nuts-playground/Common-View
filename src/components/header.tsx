import React from "react";
import Link from "next/link";

const Header: React.FC<any> = () => {
    return (
        <nav className="navbar px-8 lg:px-64 border-b border-gray-300">
            <div className="flex-1">
                <Link href={'/'}>팀 이름</Link>
            </div>
            <div className="flex-none">
                <ul className="px-1">
                    <li>
                        <button className="btn btn-sm pr-5 pl-5 bg-eric text-white">로그인</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;