import React from 'react';
import { AppWrapper, Link } from '../../components';
import { useContacts } from './useLogic';
import { PATH } from '../../utils';

export const Contacts = () => {
  const hook = useContacts();

  return (
    <AppWrapper>
      <header className="w-full flex items-center justify-between mt-3 mb-[60px]">
        <h1 className="text-[32px] font-bold">
          {PATH.get('CONTACT').TITLE}
        </h1>
      </header>
      <div className="w-full flex items-start justify-between gap-8">
        <Link href='example' size='large' theme='primary'>Line</Link>
      </div>
    </AppWrapper>
  );
};
