import React from 'react';
import { User } from 'awesome-gcl';
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
        {Array.from(PATH.values()).map((page, index) => !page.HIDDEN && (
          <a
            href={page.URL}
            key={index}
            className={`flex items-center justify-start gap-3 rounded-md py-3 px-4 font-semibold text-sm text-grayscale-100 ${window.location.href.includes(page.URL) ? 'bg-grayscale-0' : 'bg-transparent'}`}
          >
            <figure>
              <img
                src={page.ICON}
                alt={page.TITLE}
              />
            </figure>
            {page.TITLE}
          </a>
        ))}
      </div>

      <div className='flex flex-col justify-end max-h-1/4 gap-8 '>
        <User
          size="large"
          firstName={hook.hookCacheContextState.user.name.split(' ')[0] || ''}
          lastName={hook.hookCacheContextState.user.name.split(' ')[1] || ''}
          description={hook.hookCacheContextState.user.email}
          additionalClasses={{
            wrapper: ['py-2'],
          }}
        />
      </div>
    </div>
  );
};
