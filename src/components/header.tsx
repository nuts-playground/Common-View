'use client'
import React, {useEffect, useState} from "react";
import Link from "next/link";
import GOOGLE_ICON from '../../public/icon/google-icon.svg';
import GITHUB_ICON from '../../public/icon/github-icon.svg';
import NAVER_ICON from '../../public/icon/naver-icon.svg';
import KAKAO_ICON from '../../public/icon/kakao-icon.svg';
import * as Icons from '../../public/icon/index';
import * as process from "process";
import axios from "axios";


export default function Header() {
    const [loginState, setLoginState] = useState(false)
    const getUserReq = async() => {
        const userInfoUrl = process.env.NEXT_PUBLIC_USER_INFO_URL as string;
        const res = await fetch(userInfoUrl,{
            method: 'GET',
            credentials: "include"
        })
        const resJson = await res.json();
        const data = await resJson.data
        const isLogin = Boolean(data.name && data.provider)

        isLogin? setLoginState(true) : setLoginState(false)
    }
    getUserReq()

    const oauthLogin = async (e: React.MouseEvent<HTMLButtonElement>, param: string) => {
        const oauthUrl = process.env.NEXT_PUBLIC_OAUTH_START_LOGIN_URL as string;
        await axios.post(oauthUrl, {method: param}, {
            withCredentials: true
        })
            .then(res => res.data)
            .then(data => {
                const redirectUrl = data.data;
                if(typeof redirectUrl !== 'string') {
                    console.log('실패')
                }else {
                    location.href = redirectUrl;
                }
            })

    }
    const loginBtn = () => {
        return (
            <button
                className="btn btn-sm pr-5 pl-5 bg-eric text-white"
                onClick={loginModalOpen}
            >로그인
            </button>
        )
    }
    const loginModalOpen = () => {
        const loginModal = document.getElementById('my_modal_2') as HTMLDialogElement;
        loginModal.showModal();
    }
    const userProfile = () => {
        return (
            <div className={`flex items-center gap-1 border-base-400`}>
                <button className="btn btn-ghost btn-circle ">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle ">
                    <Icons.UserIcon/>
                </button>
            </div>
        )
    }

    return (
        <nav className="navbar px-8 border-b-05 border-gray-300 flex justify-center">
            <div className={`max-w-6xl w-full`}>
                <div className="flex-1">
                    <Link href={'/'}>팀 이름</Link>
                </div>
                <div className="flex-none">
                    <ul className="px-1">
                        <li>
                            {
                                loginState ?  userProfile() : loginBtn()
                            }

                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box flex justify-center bg-white w-72 py-16">
                                    <div className="card flex-shrink-0  gap-4">
                                        <button onClick={
                                            (e) => {oauthLogin(e, 'google')}
                                        } className='btn btn-custom btn-google bg-white hover:btn-google'>
                                            <GOOGLE_ICON/>
                                            <p>구글 계정으로 로그인</p>
                                        </button>

                                        <button onClick={
                                            (e) => {oauthLogin(e, 'github')}
                                        } className='btn btn-custom bg-github text-white hover:bg-github'>
                                            <GITHUB_ICON/>
                                            <p>깃허브 계정으로 로그인</p>
                                        </button>

                                        <button onClick={
                                            (e) => {oauthLogin(e, 'kakao')}
                                        } className='btn btn-custom bg-kakao hover:bg-kakao'>
                                            <KAKAO_ICON/>
                                            <p>카카오 계정으로 로그인</p>
                                        </button>

                                        <button onClick={
                                            (e) => {oauthLogin(e, 'naver')}
                                        } className='btn btn-custom bg-naver text-white hover:bg-naver'>
                                            <NAVER_ICON/>
                                            <p>네이버 계정으로 로그인</p>
                                        </button>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



