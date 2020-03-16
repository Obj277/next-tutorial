import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';

const Home: NextPage<{userAgent: string}> = ({userAgent}) => {
  return (
    <div>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <Link href="/about">
        <a title="About">To About</a>
      </Link>
    </div>
  );
};

Home.getInitialProps = async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return {
    userAgent
  };
};

export default Home;
