import Link from "next/link";
import React from "react";
import Image from "next/image";
// @ts-ignore
import GihubIcon from "../../public/github-mark.png";
interface StartCardProps {
    name: string;
    link: string;
    color: string;
    userImage: string;
}
const StartCard: React.FC<{ userName: string, link: string, color: string, userImage: string }> = ({ userName, link, color, userImage }) => {
    return (
        <div className="card w-80 bg-white text-neutral-content border-2">
            <div className="card-body items-center text-center gap-5">
                <h2 className="card-title text-gray-500 font-bold">
                    <div className={`flex gap-1 items-center`}>
                        <Image className={`rounded-5`} src={userImage} width={40} height={40} alt={'깃허브 링크'}></Image>
                        <p>{userName} 사이트</p>
                    </div>
                </h2>
                <Link className={`text-gray-500`} href={`https://github.com/${link}`}>
                    <div className={`flex gap-1 items-center`}>
                        <Image src={GihubIcon} width={25} height={25} alt={'깃허브 링크'}></Image>
                        <p className={'underline font-bold'}>Github</p>
                    </div>
                </Link>
                <p className={`text-gray-500`}>해당 사이트의 설명...</p>
                <div >
                    <button className={`btn btn-${color} w-28 text-white`}>시작</button>
                </div>
            </div>
        </div>
    )
}

export default StartCard;
