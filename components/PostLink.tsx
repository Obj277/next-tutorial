import React from 'react';
import Link from 'next/link';

interface Props {
  title: string;
}
export default ({title}: Props) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};
