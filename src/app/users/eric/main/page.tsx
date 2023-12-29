import Link from "next/link";
import Footer from "@/components/footer";
import React from "react";
import Header from "@/components/header";
export default function Main() {
    return(
        <main>
            <Header/>
            <section className={`px-8 lg:px-72 pt-8 min-h-screen flex justify-center`}>
                <span className="loading loading-dots loading-lg bg-eric"></span>
            </section>
            <Footer/>
        </main>
    )
}