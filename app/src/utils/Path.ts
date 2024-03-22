import { ICONS } from './imageList';

interface PathItem {
  URL: string;
  TITLE: string;
  ICON: string;
  HIDDEN: boolean;
}

export const PATH = new Map<string, PathItem>([]);

PATH.set('DASHBOARD', {
  URL: '/',
  TITLE: 'User Dashboard',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});

PATH.set('LOGIN', {
  URL: '/',
  TITLE: 'User Dashboard',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});

PATH.set('SIGN_UP', {
  URL: '/signup',
  TITLE: 'User Dashboard',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});

PATH.set('EXAMPLE', {
  URL: '/example',
  TITLE: '',
  ICON: ICONS.get('HOME_ICON').SRC,
  HIDDEN: false,
});
