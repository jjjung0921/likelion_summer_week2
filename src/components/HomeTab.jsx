import React from "react";
import styled from "styled-components";
import header from "./Header";
import Layout from "./Layout";
import stroke from "../assets/stroke.svg";
import clock from "../assets/clock.svg";
import wifi from "../assets/wifi.svg";
import arrow from "../assets/arrow.svg";
import threedots from "../assets/threedots.svg";

const HomeTabLeft = styled.nav`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  user-select: none;
`;

const HomeTabTab = styled.div`
  display: flex;
  position: relative;
`;

const HomeTabActive = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  margin-right: 8px;
`;

const HomeActiveRight = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  margin-left: 20px;
`;

const HomeActiveSpan = styled.span`
  margin-left: 8px;
`;

const HomeTabRight = styled.div`
  position: relative;
  display: flex;
`;

const HomeTabSelector = styled.div`
    background: var(--bg-element1);
    height: 32px;
    width: 100px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 8px;
    padding-right: 8px;
    margin-right: 10px;
    font-weight: 600;
    color: var(--text2);
    font-size: 14px;
    box-shadow: 0 0 4px rgba(0, 0, 0, .05);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    cursor: pointer;
`

function HomeTab() {
  return (
    <Layout>
      <HomeTabLeft>
        <HomeTabTab>
          <HomeTabActive>
            <img src={stroke} alt="stroke" />
            <HomeActiveSpan>트렌딩</HomeActiveSpan>
          </HomeTabActive>
          <HomeActiveRight>
            <img src={clock} alt="clock" />
            <HomeActiveSpan>최신</HomeActiveSpan>
          </HomeActiveRight>
          <HomeActiveRight>
            <img src={wifi} alt="wifi" />
            <HomeActiveSpan>피드</HomeActiveSpan>
          </HomeActiveRight>
        </HomeTabTab>
      </HomeTabLeft>
      <HomeTabRight>
        <HomeTabSelector>이번 주 <img src={arrow} alt="arrow" /></HomeTabSelector>
        <img src={threedots} alt="threedots"/>
      </HomeTabRight>
    </Layout>
  );
}

export default HomeTab;
