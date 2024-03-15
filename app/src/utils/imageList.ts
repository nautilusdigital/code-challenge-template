import homeIcon from '../assets/svg/homeIcon.svg';
import contactsIcon from '../assets/svg/contactsIcon.svg';
import casesIcon from '../assets/svg/casesIcon.svg';
import closeIcon from '../assets/svg/closeIcon.svg';
import companyLogo from '../assets/images/cctech-logo-black.webp';

export const IMAGES = new Map();
export const ICONS = new Map();

// IMAGES
IMAGES.set('COMPANY_ICON', {
  SRC: companyLogo,
  ALT: 'company logo',
});

// ICONS
ICONS.set('HOME_ICON', {
  SRC: homeIcon,
  ALT: 'house icon',
});

ICONS.set('CONTACTS_ICON', {
  SRC: contactsIcon,
  ALT: 'contacts icon',
});

ICONS.set('CASES_ICON', {
  SRC: casesIcon,
  ALT: 'cases icon',
});

ICONS.set('CLOSE_ICON', {
  SRC: closeIcon,
  ALT: 'close icon',
});
