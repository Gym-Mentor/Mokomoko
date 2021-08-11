import React from 'react';

import MainNav from './MainNav';

import Feed from '../main/Feed';
import Post from '../main/Post';
import NicknameSetting from '../user/NicknameSetting';
import Compass from '../main/Compass';
import Profile from '../main/profile/Profile';
import Detail from '../main/profile/Detail';
import Select from '../main/write/Select';
import Food from '../main/write/Food';
import FoodImageText from './write/FoodImageText';
import FoodRecipeText from './write/FoodRecipeText';
import FoodRecipeSubmit from './write/FoodRecipeSubmit';
import Recipe from './write/Recipe';
import RecipeText from './write/RecipeText';
import DetailPresenter from './DetailPresenter';
import DeveloperInfo from '../header/profileSidebar/DeveloperInfo';
import UserInfoModify from '../header/profileSidebar/UserInfoModify';
import UserBlock from '../header/profileSidebar/UserBlock';
import Logout from '../header/profileSidebar/Logout';
import {Route} from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <div className="mainSection">
                    <Route path="/main/feed" component={Feed}/>
                    <Route path="/main/post" component={Post}/>
                    <Route path="/main/settingNick" component={NicknameSetting}/>
                    <Route path="/main/compass" component={Compass}/>
                    <Route path="/main/profile" component={Profile}/>
                    <Route path="/main/detail/:index" component={Detail}/>
                    <Route path="/main/select" component={Select}/>
                    <Route path="/main/writeFood" component={Food}/>
                    <Route path="/main/writeFoodImageText" component={FoodImageText}/>
                    <Route path="/main/writeFoodRecipeText" component={FoodRecipeText}/>
                    <Route path="/main/writeFoodRecipeSubmit" component={FoodRecipeSubmit}/>
                    <Route path="/main/writeRecipe" component={Recipe}/>
                    <Route path="/main/writeRecipeText" component={RecipeText}/>
                    <Route path="/p/comment" component={Comment}/>
                    <Route path="/main/testt/:index" component={DetailPresenter}/> 
                    {/*profile side bar */}
                    <Route path="/main/developers/info" component={DeveloperInfo}></Route>
                    <Route path="/main/account/userInfo/modify" component={UserInfoModify}></Route>
                    <Route path="/main/account/userInfo/block" component={UserBlock}></Route>
                    <Route path="/main/logout" component={Logout}/>

                <MainNav/>
            </div>

        </div>
    );
};

export default Main;