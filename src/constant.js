export const sliderOptions = [

  {
    title: `заводи друзей`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rem quis iusto quas eum aliquam fugiat sint, cumque neque veniam, aut amet`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fa-handshake`,
  },

  {
    title: `общайся`,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque obcaecati cumque eius sed sequi architecto iste recusandae, facilis est`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fa-comment-alt`, 
  },

  {
    title: `создавай группы`,
    text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate nam nesciunt soluta quidem eaque id vitae`,
    color: `#194c63a6`,
    colorText: `#fff`,
    icon: `fa-users`,
  },
   
];

export const PageType = {
  HOME: `home-type`,
  LOGIN: `login-type`,
}

export const SignMenu = {
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
      link: `/login/sign-in`,
    },
  ],
};

export const AppRoute = {
  HOME: `/`,
  LOGIN: `/login/:id`,
};