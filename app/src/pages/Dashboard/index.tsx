import React from 'react';
import { AppWrapper, Link } from '../../components';
import { useDashboard } from './logic';
import { DASHBOARD } from './const';

export const Dashboard = () => {
  // const hook = useDashboard();
  console.log('log');
  return (
    <AppWrapper>
      <header className="w-full flex items-center justify-between mt-3 mb-[60px]">
        <h1 className="text-[32px] font-bold">{DASHBOARD.TITLE}</h1>
      </header>
      <div className="w-full flex items-start justify-between gap-8">
        <Link href='example' size='large' theme='primary'>Line</Link>
        <Link href='example2' size='large' theme='primary'>Line 2</Link>
      </div>
    </AppWrapper>
  );
};
