import React from 'react';
import { AppWrapper, Link } from '../../components';
import { DASHBOARD } from './const';
import { useDashboard } from './useLogic';
import { PATH } from '../../utils/Path';

export const Dashboard = () => {
  const hook = useDashboard();

  return (
    <AppWrapper>
      <header className="w-full flex items-center justify-between mt-3 mb-[60px]">
        <h1 className="text-[32px] font-bold">
          {hook.hookAuthContextState.user.userType === 'admin' ? PATH.get('DASHBOARD')?.ALT_TITLE : PATH.get('DASHBOARD')?.TITLE}
        </h1>
      </header>
      <div className="w-full flex items-start justify-between gap-8">
        <Link href='example' size='large' theme='primary'>Line</Link>
      </div>
    </AppWrapper>
  );
};
