import React from 'react';
import * as BsIcons from 'react-icons/bs';
import {AiOutlineUser} from  'react-icons/ai'
import {FiLogOut} from 'react-icons/fi';
import {FaConnectdevelop} from 'react-icons/fa';
import {BiCut} from 'react-icons/bi';

export const ProfileSideBarData = [
    {
        title: '회원정보수정',
        path: '/login',
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
        path: '/login',
        icons: <FaConnectdevelop/>,
        cName: 'nav-text'
    },
    {
        title: '로그아웃',
        path: '/login',
        icons: <FiLogOut/>,
        cName: 'nav-text'
    }
];