import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";
import Header from "../components/Header";
import HomeTab from "../components/HomeTab";
import Layout from "../components/Layout";

const PostCard = styled.li`
  flex: 1 1 calc(33.33% - 32px);
  display: flex;
  flex-flow: column nowrap;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  margin: 0 16px 32px;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;

const PostCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  p,
  span {
    font-size: 0.875em;
  }
`;

const PostCardFooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--border4);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
`;

const PostCardSum = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: -16px;
  list-style: none;
`;

const PostCardComponent = ({ post }) => (
  <PostCard key={post.postID}>
    <Link to={`detail/${post.postID}`}>
      <PostCardContent>
        <img src={post.thumbnail} alt={post.title} />
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <span>{post.createdAt}</span>
      </PostCardContent>
    </Link>
    <PostCardFooter></PostCardFooter>
  </PostCard>
);

function HomePage() {
  return (
    <>
      <Header></Header>
      <HomeTab></HomeTab>
      <Layout>
        <PostCardSum>
          {dummy_data.map((post) => (
            <PostCardComponent key={post.postID} post={post} />
          ))}
        </PostCardSum>
      </Layout>
    </>
  );
}

export default HomePage;
