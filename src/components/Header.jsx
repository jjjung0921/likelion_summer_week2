import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import velog from "../assets/velog.svg";
import bell from "../assets/bell.svg";
import glass from "../assets/glass.svg";

const InnerBlock = styled.div`
  display: flex;
  width: 1024px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 21px;
  font-family: Fira Mono, monospace;
  height: 100%;
  line-height: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
`;

const ABox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const HeaderNotification = styled.a`
  margin-right: 4px;
`;

const HeaderSearth = styled.a``;

const Roundbutton = styled.button`
  margin-left: 8px;
  background: #212529;
  color: #fff;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
`;

function Header(){
  return (
    <Layout>
      <InnerBlock>
        <HeaderLogo>
          <img src={velog} alt="Velog Logo" />
        </HeaderLogo>
        <HeaderRight>
          <ABox>
            <HeaderNotification>
              <img src={bell} alt="Velog bell" />
            </HeaderNotification>
          </ABox>
          <ABox>
            <HeaderSearth>
              <img src={glass} alt="Velog glass" />
            </HeaderSearth>
          </ABox>
          <Roundbutton>로그인</Roundbutton>
        </HeaderRight>
      </InnerBlock>
    </Layout>
  );
};

export default Header;
