import Link from "next/link";
export default function Main() {
    return(
        <main>
            <nav className="navbar px-8 lg:px-64 border-b-2">
                <div className="flex-1">
                    <Link href={'/'}>메인 타이틀</Link>
                </div>
                <div className="flex-none">
                    <ul className="px-1">
                        <li>
                            <button className="btn pr-5 pl-5 pt-2 pb-2 bg-eric text-white">로그인</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className={`px-8 lg:px-72 pt-8 min-h-screen`}>
                <p>본문입니다</p>
            </section>
        </main>
    )
}