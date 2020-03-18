import React from 'react';
import Link from 'next/link';

interface Props {
  id: string;
}
export default ({id}: Props) => {
  return (
    <li>
      <Link href="/post/[id]" as={`/post/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  );
};
