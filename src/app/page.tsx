import Image from 'next/image'
import Link from "next/link";
import StartCard from "@/components/start-card";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-wrap gap-3 items-center p-24 justify-center">
          <StartCard
              customDesc='제가 얼마나 성장할지 너무 기대돼요'
              customColor="bg-iron"
              userName="아이언"
              githubLink="withbyeongk"
              startLink={'/users/iron/main'}
              userImage={'/user-iron-profile.png'}/>
          <StartCard
              customDesc={""}
              customColor="bg-jose"
              userName="호세"
              githubLink="kiyoung92"
              startLink={'/users/jose/main'}
              userImage={'/user-jose-profile.png'}/>
          <StartCard
              customDesc={""}
              customColor="bg-jhonny"
              userName="조니"
              githubLink="devssk"
              startLink={'/users/jhonny/main'}
              userImage={'/user-jhonny-profile.png'}/>
          <StartCard
              customDesc={""}
              customColor="bg-austin"
              userName="오스틴"
              githubLink="simuseokyun"
              startLink={'/users/austin/main'}
              userImage={'/user-normal-profile.png'}/>
          <StartCard
              customDesc={""}
              customColor="bg-eric"
              userName="에릭"
              githubLink="seokho7"
              startLink={'/users/eric/main'}
              userImage={'/user-eric-profile.png'}/>
          <StartCard
              customDesc={""}
              customColor="bg-theo"
              userName="테오"
              githubLink="mynameishomin"
              startLink={'/users/theo/main'}
              userImage={'/user-normal-profile.png'}/>
      </main>
  )
}
