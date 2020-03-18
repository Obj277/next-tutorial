import React from 'react';
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
}
export default ({id, name}: Props) => {
  return (
    <li>
      <Link href="/post/[id]" as={`/post/${id}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
};
