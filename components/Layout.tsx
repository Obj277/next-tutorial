import React from 'react';
import Header from '@components/Header';

export default ({children}: JSX.IntrinsicElements['div']) => {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          padding: 8px;
          border: 1px solid #ededed;
        }
      `}</style>
      <Header/>
      {children}
    </div>
  );
};
