import React from 'react';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className = '' }: MainProps) {
  return (
    <main className={'flex-1 flex flex-col p-4 sm:p-8 ' + className}>
      {children}
    </main>
  );
}
