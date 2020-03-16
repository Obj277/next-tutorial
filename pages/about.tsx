import React from 'react';
import {NextPage} from 'next';
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>To Home</a>
      </Link>
    </div>
  );
};

export default About;
