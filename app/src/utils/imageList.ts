const homeButton = require('../assets/svg/homeIcon.svg') as string;
const logOutButton = require('../assets/svg/logOutIcon.svg') as string;

const imageList = {
  icons: {
    homeButton: {
      src: homeButton,
      alt: 'home Button Icon on side menu',
    },
    logoutButton: {
      src: logOutButton,
      alt: 'Icon for log out button on side menu',
    },
  },
};

export default imageList;
