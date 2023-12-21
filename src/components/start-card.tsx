import Link from "next/link";
import React from "react";
import Image from "next/image";
import GihubIcon from "../../public/github-mark.png";
import UserIcon from "../../public/user-image.png";
const StartCard: React.FC<{ name: string, link: string, color: string }> = ({ name, link, color }) => {
    return (
        <div className="card w-96 bg-white text-neutral-content border-2">
            <div className="card-body items-center text-center gap-5">
                <h2 className="card-title text-gray-500 font-bold">
                    <div className={`flex gap-1 items-center`}>
                        <Image className={`rounded-5`} src={UserIcon} width={25} height={25} alt={'깃허브 링크'}></Image>
                        <p>{name} 사이트</p>
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
