import React from 'react';
import {NextPage} from 'next';
import Layout from '@components/Layout';
import PostContent from '@components/PostContent';

const Post: NextPage = () => {
  return (
    <Layout>
      <PostContent/>
    </Layout>
  );
};

export default Post;
