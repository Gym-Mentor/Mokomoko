import React from 'react';
import {AiOutlineUser} from  'react-icons/ai'
import {FiLogOut} from 'react-icons/fi';
import {FaConnectdevelop} from 'react-icons/fa';
import {BiCut} from 'react-icons/bi';

export const ProfileSideBarData = [
    {
        title: '회원정보수정',
        path: '/account/userInfo/modify',
        icons: <AiOutlineUser/>,
        cName: 'nav-text'
    },
    {
        title: '차단된 계정',
        path: '/login',
        icons: <BiCut/>,
        cName: 'nav-text'
    },
    {
        title: '개발자 정보',
        path: '/developers/info',
        icons: <FaConnectdevelop/>,
        cName: 'nav-text'
    },
    {
        title: '로그아웃',
        path: '/account/login',
        icons: <FiLogOut/>,
        cName: 'nav-text'
    }
];