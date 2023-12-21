import Image from 'next/image'
import Link from "next/link";
import StartCard from "@/components/start-card";
export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center p-24 justify-center">
          <div className={`flex flex-wrap gap-3 justify-center`}>
              <StartCard
                  customDesc='제가 얼마나 성장할지 너무 기대돼요'
                  customColor="bg-iron"
                  userName="아이언"
                  link="withbyeongk"
                  color="btn-info"
                  userImage={'/user-iron-profile.png'}/>
              <StartCard
                  customDesc={""}
                  customColor="bg-jose"
                  userName="호세"
                  link="kiyoung92"
                  color="btn-info"
                  userImage={'/user-jose-profile.png'}/>
              <StartCard
                  customDesc={""}
                  customColor=""
                  userName="조니"
                  link="devssk"
                  color="btn-info"
                  userImage={'/user-jhonny-profile.png'}/>
              <StartCard
                  customDesc={""}
                  customColor="bg-austin"
                  userName="오스틴"
                  link="simuseokyun"
                  color="btn-info"
                  userImage={'/user-normal-profile.png'}/>
              <StartCard
                  customDesc={""}
                  customColor="bg-eric"
                  userName="에릭"
                  link="seokho7"
                  color="btn-info"
                  userImage={'/user-eric-profile.png'}/>
          </div>
      </main>
  )
}
