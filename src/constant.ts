export const MONTH_NAMES: string[] = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const USER_UNKNOWN_PHOTO_URL = `https://firebasestorage.googleapis.com/v0/b/web-chat-1b38f.appspot.com/o/images%2Fuser-unknown-logo%2Fuser-unknown-logo.svg?alt=media&token=c1ddaf10-5e6c-499a-9d51-43892834d130`;

export const ScrollToChatList: { MIN: number; MAX: number } = {
  MIN: 0,
  MAX: 999999999,
};

interface SliderOptionsInterface {
  title: string;
  text: string;
  color: string;
  colorText: string;
  icon: string;
}

export const sliderOptions: SliderOptionsInterface[] = [
  {
    title: `заводи друзей`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem quis iusto quas eum aliquam fugiat sint, cumque neque veniam, aut amet`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fas fa-handshake`,
  },

  {
    title: `общайся`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque obcaecati cumque eius sed sequi architecto iste recusandae, facilis est`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fas fa-comment-alt`,
  },

  {
    title: `создавай группы`,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nam nesciunt soluta quidem eaque id vitae`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fas fa-users`,
  },
];

interface PageTypeinterface {
  MAIN: string;
  LOGIN: string;
}

export const PageType: PageTypeinterface = {
  MAIN: `home-type`,
  LOGIN: `login-type`,
};

interface SignMenuBtnInterface {
  name: string;
  link: string;
}

interface SignMenuInterface {
  notAuth: SignMenuBtnInterface[];
  auth: SignMenuBtnInterface[];
}


export const SignMenu: SignMenuInterface = {
  notAuth: [
    {
      name: `Sign In`,
      link: `/login/sign-in`,
    },

    {
      name: `Sign Up`,
      link: `/login/sign-up`,
    },
  ],

  auth: [
    {
      name: `Sign Out`,
      link: `/main/wellcome`,
    },
  ],
};

interface SideBarNameBlockInterface {
  nameText: string; blockClass: string; textClass: string; spanClass: string;
}

interface TypeSideBarNameBlockInterface {
  FRIENDS: SideBarNameBlockInterface;
  CHANNELS: SideBarNameBlockInterface;
}


export const TypeSideBarNameBlock: TypeSideBarNameBlockInterface = {
  FRIENDS: {
    nameText: `users`,
    blockClass: `friends-header`,
    textClass: `friends-header__text`,
    spanClass: `friends-header__count`,
  },

  CHANNELS: {
    nameText: `channels`,
    blockClass: `channels-header`,
    textClass: `channels-header__text`,
    spanClass: `channels-header__count`,
  },
};

export const AppRoute = {
  MAIN: `/main/:id?`,

  MAIN_ID: {
    WELLCOME: "/main/wellcome",
    USER_DESKTOP: "/main/user-desktop/:id?",

    USER_DESKTOP_ID: {
      START_TABLE: "/main/user-desktop/start-table",
      FRIENDS: "/main/user-desktop/friends/:id",
      ROOM: "/main/user-desktop/room/:id",
      ROOM_ID: "/main/user-desktop/room/",
      FRIEND_ID: "/main/user-desktop/friends/",
    },
  },

  LOGIN: `/login/:id`,
};

export const PreloadSettings = {
  MAIN: {
    TITLE: true,
    POSITION: "absolute",
  },
  MESSAGES_ITEM: {
    TITLE: false,
    POSITION: "relative",
  },
  PROFILE_INFO: {
    TITLE: false,
    POSITION: "absolute",
  },
};
