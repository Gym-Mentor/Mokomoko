import React,{useEffect} from 'react';

const Logout = () => {
    useEffect(() => {
        console.log("Test");
        console.log(localStorage.getItem("accessToken"));
        localStorage.removeItem("accessToken");
        console.log(localStorage.getItem("accessToken"));
        location.replace("http://localhost:3000/")
        return () => {
            
        }
    }, [])
    return (
        <div>
            로그아웃
        </div>
    );
};

export default Logout;