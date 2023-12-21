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
const StartCard: React.FC<{
    userName: string,
    link: string, color: string,
    userImage: string,
    customColor: string
    customDesc: string
}>
    = ({ userName, link, color, userImage, customColor, customDesc}) => {
    return (
        <div className="card w-80 bg-white text-neutral-content border-2">
            <div className="card-body items-center justify-center text-center gap-5">
                <h2 className="card-title text-gray-500 font-bold">
                    <div className={`flex gap-2 items-center`}>
                        <Image className={`rounded-5`} src={userImage} width={40} height={40} alt={'깃허브 링크'}></Image>
                        <p>{userName} 사이트</p>
                    </div>
                </h2>
                <Link className={`text-gray-500`} href={`https://github.com/${link}`}>
                    <div className={`flex gap-1 items-center`}>
                        <Image src={GihubIcon} width={20} height={25} alt={'깃허브 링크'}></Image>
                        <p className={'underline font-bold'}>Github</p>
                    </div>
                </Link>
                <div className={`flex gap-2 items-center `}>
                    <p className={`badge badge-xs ${customColor}`}></p>
                    <p className={`text-gray-500 text-sm`}>{customDesc ? customDesc : '해당 사이트의 설명...'}</p>
                </div>
                <div>
                    <button className={`btn ${color} w-28 text-white ${customColor} border-0`}>시작</button>
                </div>
            </div>
        </div>
    )
}

export default StartCard;
