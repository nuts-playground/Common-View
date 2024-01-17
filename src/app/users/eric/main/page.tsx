'use client'
// @ts-ignore
import * as Icons from '/public/icon/index.ts';
import Footer from "@/components/footer";
import React, {useEffect, useState} from "react";
import Header from "@/components/header";
import ContentCard from "@/components/content-card";
import Loading from "@/components/loading";



export default function Main() {
    const [actionState, setActionState] = useState(false);
    useEffect(() => {
        setActionState(true)
    },[])
    return(
        <main className={`h-full flex flex-col justify-between `}>
            <Header />
            {
                !actionState ? <Loading/> :
                    <section className={`px-8 py-8 flex justify-center bmhtairttf`}>
                        <div className=" max-w-6xl w-full flex flex-col items-center justify-center">
                            <div className="hero-content text-center mb-3 p-0">
                                <div className="max-w-md">
                                    <h1 className="text-4xl font-bold bmhttf">Hi there 👋</h1>
                                    <p className={`pt-3 pb-6`}>저는 이런 걸 만들 예정입니다!</p>
                                </div>
                            </div>
                            <div className={`w-full`}>
                                <ul className={`w-full flex flex-wrap justify-center gap-3`}>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts, Icons.NextJs]}
                                            title="Nuts-playgroud"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts, Icons.NestJs, Icons.Mysql]}
                                            title="[예정] 내 마음대로 블로그"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts,]}
                                            title="[예정] 홈택스 - 개인용 데이터"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts,]}
                                            title="[예정] 국민 건강보험 - 개인용 데이터"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts,]}
                                            title="[예정] 국토교통부 - 공시지가, 공시가격"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts,]}
                                            title="[예정] 대용량 크롤링 봇 - 도메인 미정"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[Icons.Ts,]}
                                            title="[예정] 스크래핑 회피 기법 안내 솔루션"
                                            description="냐옹"
                                        />
                                    </li>
                                    <li>
                                        <ContentCard
                                            skillIcons={[]}
                                            title="[예정] Jetbrains용 테스트 코드 프리셋 플러그인 - 개인용"
                                            description="냐옹"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
            }
            <Footer/>
        </main>
    )
}
