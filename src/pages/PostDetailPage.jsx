import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";
import bookmark from "../assets/bookmark.png";
import arrow from "../assets/arrow.svg";
import stroke_right from "../assets/stroke_right.svg";
import stroke_left from "../assets/stroke_left.svg";
import heart from "../assets/heart.png";
import share from "../assets/share.png";

const HeadWrapper = styled.div`
  width: 768px;
  margin-top: 5.5rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-bottom: 2rem;
  }
`;

const HWBottom = styled.div`
  font-size: 1rem;
  color: #495057;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const HWButton = styled.div`
  width: 96px;
  height: 32px;
  font-size: 16px;
  button {
    color: #12b886;
    border: 1px solid #12b886;
    display: flex;
    box-shadow: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: #ffffff;
    cursor: pointer;
    border-radius: 16px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    outline: none;
    font-size: 16px;
  }
`;

function Title({ post }) {
  return (
    <HeadWrapper>
      <h1>{post.title}</h1>
      <HWBottom>
        이현우 {post.createdAt}
        <HWButton>
          <button>팔로우</button>
        </HWButton>
      </HWBottom>
    </HeadWrapper>
  );
}

const HashTag = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
  a {
    margin-bottom: 0.875rem;
    background: #f8f9fa;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 1rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.875rem;
    color: #12b886;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
  }
`;

const SmallTItle = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 2rem 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  position: relative;

  #bookmark {
    position: absolute;
    right: 1.5rem;
    top: 0px;
    width: 48px;
    height: 48px; 
  }
`;

const SubThings = styled.div`
  margin-top: 3rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 0.25em;
  }
  .buttonBox {
    margin-left: 1.125rem;
  }
  .buttonBox button {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    outline: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 1.25rem;
    color: #12b886;
    background: #ffffff;
    border: 1px solid #f1f3f5;
    padding: 0px;
    cursor: pointer;
  }
`;

const RightSubThings = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 0.875rem;
`;

const LeftSideBar = styled.div`
  width: 4rem;
  background: #f8f9fa;
  border: 1px solid var(--border4);
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  left: -7rem;

  .count {
    margin-top: 0.5rem;
    color: var(--text2);
    line-height: 1;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

const Heart = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 1.5rem;
  color: #868e96;
  cursor: pointer;
  z-index: 5;

  img{
    width: 24px;
    height: 24px;
  }
`;

//이미지가 등장하지 않는 부분
const LeftSideBarAll = () => {
  return (
    <div style={{ width: "768px", margin: "0 auto", position: "relative" }}>
      <LeftSideBar>
        <Heart>
          <img src={heart} />
        </Heart>
        <div className="count">114</div>
        <Heart>
          <img src={share} />
        </Heart>
      </LeftSideBar>
    </div>
  );
};

const RightBar = styled.div`
  margin-left: 3rem;
  width: 240px;
  border-left: 2px solid #f1f3f5;
  padding: 0.25rem 0.75rem;
  color: var(--text3);
  line-height: 1.5;
  font-size: 0.875rem;
  max-height: calc(-128px + 100vh);
  overflow: hidden auto;
`;

const RightBarAll = () => {
  return (
    <div style={{ position: "absolute", left: "80%" }}>
      <RightBar>서류를 쓰자</RightBar>
    </div>
  );
};

function PostDetailPage() {
  const { postID } = useParams();
  const post = dummy_data[postID - 1];

  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <Title post={post} />
      <HashTag>
        <a>android</a>
      </HashTag>
      <LeftSideBarAll></LeftSideBarAll>
      <RightBarAll></RightBarAll>
      <SmallTItle>
        <img src={bookmark} id="bookmark" />
        <div>
          <h2>Retrospect: 돌아보기</h2>
          <SubThings>
            <div>
              <img src={arrow} /> 목록보기{" "}
            </div>
            <div>
              <RightSubThings>2/2</RightSubThings>
              <div className="buttonBox">
                <button>
                  <img src={stroke_left} />
                </button>
                <button>
                  <img src={stroke_right} />
                </button>
              </div>
            </div>
          </SubThings>
        </div>
      </SmallTItle>
      <p style={{ margin: "5rem auto", textAlign: "center" }}>
        <img
          src="https://velog.velcdn.com/images/l2hyunwoo/post/78f5fde2-6107-4e59-81ed-289a99bdd999/image.png"
          style={{ width: "768px" }}
        />
      </p>
    </>
  );
}

export default PostDetailPage;
