import Image from "next/image";
import ChatIcon from '../../public/icon/chat.png';
import EyesIcon from '../../public/icon/eyes.png';
import NestJsIcon from '../../public/icon/nestjs.png';
export default function ContentCard() {
    return(
        <div className={`content-card w-64 h-80 
        flex flex-col  items-center 
        border-2 border-gray-300 rounded-xl 
        px-5 py-6 transition hover:scale-105
        duration-300
        `}>
            <div className={`skill-area w-full h-10`}>
                <ul>
                    <li>
                        <Image src={NestJsIcon} width={30} alt={'Nestjs icon'}/>
                    </li>
                </ul>
            </div>
            <div className={`body-area w-full h-full  p-1`}>
                <div className={`title-area mb-4`}>
                    <p>title ...</p>
                </div>
                <div className={`description-area`}>
                    <p>description ...</p>
                </div>
            </div>
            <div className={`footer-area w-full h-6 flex gap-4 justify-end`}>
                    <div className={`flex gap-1.5`}>
                        <p>
                            <Image width={20} src={EyesIcon} alt={'조회 수 겸 눈 아이콘'}/>
                        </p>
                        <p className={`text-gray-500 text-sm`}>0</p>
                    </div>
                    <div className={`flex gap-1.5`}>
                        <p>
                            <Image src={ChatIcon} width={20} alt={'댓글 겸 채팅 아이콘'}/>
                        </p>
                        <p className={`text-gray-500 text-sm`}>0</p>
                    </div>
            </div>
        </div>
    )
}