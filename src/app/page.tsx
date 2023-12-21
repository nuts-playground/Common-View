import Image from 'next/image'
import mainBanner from '../../public/main-banner.png'
import Link from "next/link";
import GihubIcon from "../../public/github-mark.png";
import StartCard from "@/components/start-card";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24">
          <div className={`flex flex-wrap gap-3`}>
              <StartCard name="아이언" link="withbyeongk" color="accent"/>
              <StartCard name="호세" link="kiyoung92" color="accent"/>
              <StartCard name="조니" link="devssk" color="accent"/>
              <StartCard name="오스틴" link="simuseokyun" color="accent"/>
              <StartCard name="에릭" link="seokho7" color="accent"/>
          </div>
      </main>
  )
}
