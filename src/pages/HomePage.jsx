import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";
import Header from "../components/Header";
import HomeTab from "../components/HomeTab";
import Layout from "../components/Layout";

const PostCard = styled.li`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
`;

const PostCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1;
  flex-direction: column;
`;

const PostCardFooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--border4);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;

function HomePage() {
  return (
    <>
      <Header></Header>
      <HomeTab></HomeTab>
      <Layout>
        <ul>
          <PostCard>
          </PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </ul>
      </Layout>
      <Link to="detail/1">1번 페이지</Link>
      <Link to="detail/2">2번 페이지</Link>
      <Link to="detail/3">3번 페이지</Link>
    </>
  );
}

export default HomePage;
