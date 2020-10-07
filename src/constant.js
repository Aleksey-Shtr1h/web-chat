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