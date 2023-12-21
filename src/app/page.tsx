import Image from 'next/image'
import Link from "next/link";
import StartCard from "@/components/start-card";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24 justify-center">
          <div className={`flex flex-wrap gap-3`}>
              <StartCard userName="아이언" link="withbyeongk" color="accent" userImage={'/user-iron-profile.png'}/>
              <StartCard userName="호세" link="kiyoung92" color="accent" userImage={'/user-jose-profile.png'}/>
              <StartCard userName="조니" link="devssk" color="accent" userImage={'/user-jhonny-profile.png'}/>
              <StartCard userName="오스틴" link="simuseokyun" color="accent" userImage={'/user-normal-profile.png'}/>
              <StartCard userName="에릭" link="seokho7" color="accent" userImage={'/user-eric-profile.png'}/>
          </div>
      </main>
  )
}
