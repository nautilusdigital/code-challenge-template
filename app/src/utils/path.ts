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
