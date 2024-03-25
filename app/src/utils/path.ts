import { ICONS } from './imageList';

interface PathItem {
  URL: string;
  TITLE: string;
  ALT_TITLE?: string
  ICON: string;
  HIDDEN: boolean;
}

export const PATH = new Map<string, PathItem>([]);

PATH.set('DASHBOARD', {
  URL: '/',
  TITLE: 'User Dashboard',
  ALT_TITLE: 'Admin Dashboard',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});

PATH.set('LOGIN', {
  URL: '/login',
  TITLE: 'Log In',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});

PATH.set('SIGN_UP', {
  URL: '/signup',
  TITLE: 'Sign Up',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});

PATH.set('EXAMPLE', {
  URL: '/example',
  TITLE: 'Example',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});
