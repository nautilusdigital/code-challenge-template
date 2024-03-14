import React from 'react';
import {
  Figure,
  User,
} from 'awesome-gcl';
import { useSideMenu } from './useLogic';
import { PATH } from '../../utils';

export const SideMenu = () => {
  const hook = useSideMenu();

  return (
    <div
      className="flex flex-col h-screen w-[300px] border-e border-solid border-grayscale-10 px-3 py-4"
    >
      <div className="flex justify-between w-full mb-[120px]">
        <h1 className='text-primary-40 text-sm font-bold p-4'>Case Management System</h1>
      </div>

      <div className="w-full min-h-3/4 max-h-3/4 h-full scrollhide pb-8 overflow-auto mb-10">
        {Array.from(PATH.values()).map((page, index) => (
          <a
            href={page.URL}
            key={index}
            className={`flex items-center justify-start gap-3 rounded-md py-3 px-4 font-semibold text-sm text-grayscale-100 ${window.location.pathname === page.URL ? 'bg-grayscale-0' : 'bg-transparent'}`}
          >
            <Figure
              src={page.ICON}
              alt={page.TITLE}
              additionalClasses={{
                figure: ['w-[24px] h-[24px]'],
              }}
            />
            {page.TITLE}
          </a>
        ))}
      </div>

      <div className='flex flex-col justify-end max-h-1/4 gap-8 '>
        <User
          size="large"
          firstName='Jane'
          lastName='Cooper'
          description='janec@gmail.com'
          additionalClasses={{
            wrapper: ['py-2'],
          }}
        />
      </div>
    </div>
  );
};
