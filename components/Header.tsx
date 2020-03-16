import React from 'react';
import Link from "next/link";

export default () => {
  return (
    <div className="header">
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          height: 32px;
          border-bottom: 1px solid #ededed;
        }
        .header a {
          margin: 0 16px 0 0;
        }
      `}</style>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
};
