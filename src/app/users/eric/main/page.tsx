import Link from "next/link";
import Footer from "@/components/footer";
import React from "react";
import Header from "@/components/header";
import Loading from "@/components/loading";
import ContentCard from "@/components/content-card";
export default function Main() {
    return(
        <main>
            <Header/>
            <section className={`px-8 py-8 flex justify-center`}>
                <div className=" max-w-6xl w-full flex flex-col items-center justify-center ">
                    <div className="hero-content text-center mb-3">
                        <div className="max-w-md">
                            <h1 className="text-4xl font-bold">Hi there 😁</h1>
                            <p className={`py-6`}>저는 개발을 시작하고 이런 걸 만들었어요.</p>
                        </div>
                    </div>
                    <div className={`w-full`}>
                        <ul className={`w-full flex flex-wrap justify-center gap-3`}>
                            <li>
                                <ContentCard/>
                            </li>
                            <li>
                                <ContentCard/>
                            </li>
                            <li>
                                <ContentCard/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}