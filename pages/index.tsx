import React from 'react';
import axios from 'axios';
import {NextPage} from 'next';
import Layout from '@components/Layout';
import PostLink from "@components/PostLink";

interface Props {
  shows: any[];
}
const Home: NextPage<Props> = ({shows}) => {
  return (
    <Layout>
      <h1>Home</h1>
      <ul>
        {shows.map(({id, name}) => {
          return (
            <PostLink key={id} id={id} name={name}/>
          );
        })}
      </ul>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const {data} = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
  return {
    props: {
      shows: data.map((entry: any) => entry.show)
    }
  };
};

export default Home;
