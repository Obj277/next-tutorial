import React from 'react';
import {NextPage, GetServerSideProps} from 'next';
import axios from 'axios';
import Layout from '@components/Layout';

interface Props {
  show: any;
}
const Post: NextPage<Props> = ({show}) => {

  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {show.image && <img src={show.image.medium} alt={`${show.name}_image`}/>}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.query;
  const {data: show} = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return {
    props: {
      show
    }
  };
};

export default Post;
