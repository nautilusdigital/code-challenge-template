import { ICONS } from './imageList';

export const PATH = new Map();

PATH.set('CONTACT', {
  URL: '/contacts',
  TITLE: 'Contacts',
  ICON: ICONS.get('CONTACTS_ICON').SRC,
  HIDDEN: false,
});

PATH.set('CREATE_CONTACT', {
  URL: '/contacts/create',
  TITLE: 'Create Contact',
  HIDDEN: true,
});

PATH.set('CASES', {
  URL: '/cases',
  TITLE: 'Cases',
  ICON: ICONS.get('CASES_ICON').SRC,
  HIDDEN: false,
});

PATH.set('CREATE_CASE', {
  URL: '/cases/create',
  TITLE: 'Create Case',
  HIDDEN: true,
});
