import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header/Header";
import Aside from "./Aside/Aside";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import MyPagePage from "./pages/MyPagePage";
import PlayListPage from "./pages/PlayListPage";
import AllPage from "./pages/AllPage";
import MyPage from "./pages/MyPage";
import HelpPage from "./pages/HelpPage";
import KipPage from "./pages/KipPage";
import RankPage from "./pages/RankPage";

import AChPage from "./pages/AChPage";
import AChOtPage from "./pages/AChOtPage";

import AChQusPage from "./pages/AChQusPage";
import AChIntroPage from "./pages/AChIntroPage";

import MypageInforPage from "./pages/MypageInforPage";
import MypageMemoPage from "./pages/MypageMemoPage";
import MypageGoPage from "./pages/MypageGoPage";
import JoinChangePage from "./pages/JoinChangePage";

import MyAChPage from "./pages/MyAChPage";
import MyAChVideoPage from "./pages/MyAChVideoPage";

import GuidePage from "./pages/GuidePage";

import styled from "styled-components";

const StyledAppDiv = styled.div`
  width: 86vw;
  height: 150vw;
  padding: 2vw 2vw 0 3vw;
  float: right;
  /* background-color: aqua; */
`;

const App = () => {
  return (
    <div>
      <Header />
      <Route path='/' exact={true} component={MainPage} />
      <StyledAppDiv>
        <Route path='/login' exact={true} component={LoginPage} />
        <Route path='/join' exact={true} component={JoinPage} />
        <Route path='/mypage' exact={true} component={MyPagePage} />
        <Route path='/playlist' exact={true} component={PlayListPage} />
        <Route path='/all' exact={true} component={AllPage} />
        <Route path='/my' exact={true} component={MyPage} />
        <Route path='/help' exact={true} component={HelpPage} />
        <Route path='/kip' exact={true} component={KipPage} />
        <Route path='/rank' exact={true} component={RankPage} />

        <Route path='/A_ch_qus' exact={true} component={AChQusPage} />
        <Route path='/A_ch_intro' exact={true} component={AChIntroPage} />
        <Route path='/A_ch' exact={true} component={AChPage} />
        <Route path='/A_ch_ot' exact={true} component={AChOtPage} />

        <Route path='/Mypage_infor' exact={true} component={MypageInforPage} />
        <Route path='/Mypage_memo' exact={true} component={MypageMemoPage} />
        <Route path='/Mypage_go' exact={true} component={MypageGoPage} />
        <Route path='/Join_change' exact={true} component={JoinChangePage} />

        <Route path='/MyA_ch' exact={true} component={MyAChPage} />
        <Route path='/MyA_ch_video' exact={true} component={MyAChVideoPage} />

        <Route path='/guide' exact={true} component={GuidePage} />
      </StyledAppDiv>
      <Aside />
    </div> /*메뉴바 + A채널 바로가기, 소개, 문의 + 마이페이지 개인정보수정, 메모장, 바로가기설정*/
  );
};

export default App;
