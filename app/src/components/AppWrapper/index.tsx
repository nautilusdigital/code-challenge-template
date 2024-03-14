import React from 'react';
import { AppWrapperPropTypes } from './types';
import { SideMenu } from '../SideMenu';

export const AppWrapper = ({ children }: AppWrapperPropTypes) => (
    <main className="w-full h-screen flex">
      <SideMenu />
      <div className="w-full p-8 relative">
        {children}
      </div>
    </main>
);
