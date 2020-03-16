import React from 'react';
import {NextPage} from 'next';
import Layout from '@components/Layout';
import PostLink from "@components/PostLink";

const Blog: NextPage = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink title="Hello!"/>
        <PostLink title="Seconds!!"/>
        <PostLink title="Third!!!"/>
      </ul>
    </Layout>
  );
};

export default Blog;
