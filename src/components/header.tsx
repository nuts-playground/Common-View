'use client'
import React from "react";
import Link from "next/link";
import GOOGLE_ICON from '../../public/icon/google-icon.svg';
import GITHUB_ICON from '../../public/icon/github-icon.svg';
import NAVER_ICON from '../../public/icon/naver-icon.svg';
import KAKAO_ICON from '../../public/icon/kakao-icon.svg';

const loginModalOpen = () => {
    const loginModal = document.getElementById('my_modal_2') as HTMLDialogElement;
    loginModal.showModal();
}

const startOAuthLogin = async () => {
    try {
        // 백엔드 서버의 엔드포인트로 OAuth 로그인을 시작하는 요청을 보냄
        const response = await fetch(`http://localhost:3781/main`, {
            method: 'GET',
            credentials: 'include', // 쿠키를 전송하기 위해 credentials 옵션을 사용
        });

        // 백엔드 서버에서 생성한 OAuth 로그인 링크를 받아옴
        const { key } = await response.json();

        // OAuth 로그인 페이지로 리디렉션
        window.location.href = key;
    } catch (error) {

    }
};

const Header: React.FC<any> = () => {
    return (
        <nav className="navbar px-8 border-b-05 border-gray-300 flex justify-center">
            <div className={`max-w-6xl w-full`}>
                <div className="flex-1">
                    <Link href={'/'}>팀 이름</Link>
                </div>
                <div className="flex-none">
                    <ul className="px-1">
                        <li>
                            <button
                                className="btn btn-sm pr-5 pl-5 bg-eric text-white"
                                onClick={loginModalOpen}
                            >로그인
                            </button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box flex justify-center bg-white w-72 py-16">
                                    <div className="card flex-shrink-0  gap-4">
                                        <div onClick={startOAuthLogin}>
                                            <p>test</p>
                                        </div>
                                        <Link href={"http://localhost:3781/auth/to-google"} className='btn btn-custom btn-google bg-white hover:btn-google'>
                                            <GOOGLE_ICON/>
                                            <p>구글 계정으로 로그인</p>
                                        </Link>

                                        <Link href={"http://localhost:3781/auth/to-github"} className='btn btn-custom bg-github text-white hover:bg-github'>
                                            <GITHUB_ICON/>
                                            <p>깃허브 계정으로 로그인</p>
                                        </Link>

                                        <Link href={"http://localhost:3781/auth/to-kakao"} className='btn btn-custom bg-kakao hover:bg-kakao'>
                                            <KAKAO_ICON/>
                                            <p>카카오 계정으로 로그인</p>
                                        </Link>

                                        <Link href={"http://localhost:3781/auth/to-naver"} className='btn btn-custom bg-naver text-white hover:bg-naver'>
                                            <NAVER_ICON/>
                                            <p>네이버 계정으로 로그인</p>
                                        </Link>
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

export default Header;
