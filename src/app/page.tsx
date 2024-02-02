import Image from 'next/image'
import Link from "next/link";
import StartCard from "@/components/start-card";
export default function Home() {
  return (
      <main>
          <section className={`px-8 min-h-screen flex justify-center`}>
              <div className="min-h-screen w-full flex flex-col items-center justify-center">
                  <ul className={`flex flex-wrap justify-center gap-5 max-w-5xl`}>
                      <li>
                          <StartCard
                              customDesc='제가 얼마나 성장할지 너무 기대돼요'
                              customColor="bg-iron"
                              userName="아이언"
                              githubLink="withbyeongk"
                              startLink={'/users/iron/main'}
                              userImage={'/user-iron-profile.png'}/>
                      </li>
                      <li>
                          <StartCard
                              customDesc={"직접 만드는 블로그"}
                              customColor="bg-jose"
                              userName="호세"
                              githubLink="kiyoung92"
                              startLink={'https://www.joselog.com/'}
                              userImage={'/user-jose-profile.png'}/>
                      </li>
                      <li>
                          <StartCard
                              customDesc={""}
                              customColor="bg-jhonny"
                              userName="조니"
                              githubLink="devssk"
                              startLink={'/users/jhonny/main'}
                              userImage={'/user-jhonny-profile.png'}/>
                      </li>
                      <li>
                          <StartCard
                              customDesc={""}
                              customColor="bg-austin"
                              userName="오스틴"
                              githubLink="simuseokyun"
                              startLink={'/users/austin/main'}
                              userImage={'/user-normal-profile.png'}/>
                      </li>
                      <li>
                          <StartCard
                              customDesc={"작업물 모음집"}
                              customColor="bg-eric"
                              userName="에릭"
                              githubLink="seokho7"
                              startLink={'https://www.seokhoweb.com/'}
                              userImage={'/user-eric-profile.png'}/>
                      </li>
                      <li>
                          <StartCard
                              customDesc={"미니 게임 모음집"}
                              customColor="bg-theo"
                              userName="테오"
                              githubLink="mynameishomin"
                              startLink={'https://playground.mynameishomin.com/'}
                              userImage={'/user-normal-profile.png'}/>
                      </li>
                      <li>
                          <StartCard
                              customDesc={""}
                              customColor="bg-green"
                              userName="그린"
                              githubLink="minheeya"
                              startLink={'/users/green/main'}
                              userImage={'/user-green-profile.png'}/>
                      </li>
                  </ul>
              </div>
          </section>
      </main>
  )
}
