import Image from "next/image";
import ChatIcon from '../../public/icon/chat.png';
import EyesIcon from '../../public/icon/eyes.png';
export default function ContentCard() {
    return(
        <div className={`content-card w-64 h-80 
        flex flex-col  items-center 
        border-2 border-gray-300 rounded-xl 
        px-5 py-6 transition hover:scale-105
        duration-300
        `}>
            <div className={`title-area w-full h-6`}>
                <h3>title</h3>
            </div>
            <div className={`body-area w-full h-full`}>
                <div className={`intro-area`}>

                </div>
                <div className={`skill-area`}>

                </div>
            </div>
            <div className={`footer-area w-full h-6 flex gap-4 justify-end`}>
                    <div className={`flex gap-1.5`}>
                        <p>
                            <Image width={23} src={EyesIcon} alt={'조회 수 겸 눈 아이콘'}/>
                        </p>
                        <p className={`text-gray-500`}>0</p>
                    </div>
                    <div className={`flex gap-1.5`}>
                        <p>
                            <Image src={ChatIcon} width={23} alt={'댓글 겸 채팅 아이콘'}/>
                        </p>
                        <p className={`text-gray-500`}>0</p>
                    </div>
            </div>
        </div>
    )
}