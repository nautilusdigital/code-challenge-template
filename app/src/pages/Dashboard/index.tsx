import React from 'react';
import { Button, ToastList } from 'awesome-gcl';
import { AppWrapper } from '../../components';
import { useDashboard } from './logic';
import { formatDateString } from '../../utils';

export const Dashboard = () => {
  const hook = useDashboard();

  return (
    <AppWrapper>
      <header className="w-full flex items-center justify-between mt-3 mb-[60px]">
        <h1 className="text-[32px] font-bold">My STR Applications</h1>
        {/* {hook.hookCacheContextState.user.userType === 'applicant' && (
          <Button
            size="large"
            type="button"
            theme="primary"
            handleClick={() => hook.navigate('str/create', { replace: true })}
          >
            New Application MEwo
          </Button>
        )} */}
      </header>
      <div className="w-full flex items-start justify-between gap-8">

      </div>
    </AppWrapper>
  );
};
