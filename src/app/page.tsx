import Image from 'next/image'
import mainBanner from '../../public/main-banner.png'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <div className="hero">
            <div className="hero-content text-center">
                <div className="flex flex-col max-w-md items-center">
                    <Image src={mainBanner} width={1465 / 5} height={987 / 5} alt={'우리의 메인 배너'} className={`mb-5`}></Image>
                    <div className="py-6 flex flex-col gap-3">
                        <Link href={`https://github.com/withbyeongk`}>
                            <p className={`flex items-center gap-2`}>
                                <span className="badge badge-primary badge-xs"></span>
                                <span>아이언</span>
                            </p>
                        </Link>
                        <Link href={`https://github.com/kiyoung92`}>
                            <p className={`flex items-center gap-2`}>
                                <span className="badge badge-secondary badge-xs"></span>
                                <span>호세</span>
                            </p>
                        </Link>
                        <Link href={`https://github.com/devssk`}>
                            <p className={`flex items-center gap-2`}>
                                <span className="badge badge-accent badge-xs"></span>
                                <span>조니</span>
                            </p>
                        </Link>
                        <Link href={`https://github.com/simuseokyun`}>
                            <p className={`flex items-center gap-2`}>
                                <span className="badge badge-neutral badge-xs"></span>
                                <span>오스틴</span>
                            </p>
                        </Link>
                        <Link href={`https://github.com/seokho7`}>
                            <p className={`flex items-center gap-2`}>
                                <span className="badge badge-info badge-xs"></span>
                                <span>에릭</span>
                            </p>
                        </Link>
                    </div>
                    <Link href={'/main'} className={`btn btn-outline btn-success w-32`}>시작하기</Link>
                </div>
            </div>
        </div>
    </main>
  )
}
