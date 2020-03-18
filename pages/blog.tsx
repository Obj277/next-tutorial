import React from 'react';
import {NextPage} from 'next';
import Layout from '@components/Layout';
import PostLink from "@components/PostLink";

const Blog: NextPage = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink id="Hello!"/>
        <PostLink id="Seconds!!"/>
        <PostLink id="Third!!!"/>
      </ul>
    </Layout>
  );
};

export default Blog;
