const addChannel = (userProfile) => {
  const { channelsUser } = userProfile;
  const channel = {
    id: `id-channel-1`,
    name: `channel-test`,
  };

  channelsUser.push(channel);

  return { ...userProfile, channelsUser };
};

export const ActionTypeTest = {
  TEST: `TEST`,
};

export const ActionCreatorTest = {
  getTest: () => ({
    type: ActionTypeTest.TEST,
    payload: 1,
  }),

  addChannelUser: (userProfile) => ({
    type: ActionTypeTest.TEST,
    payload: addChannel(userProfile),
  })
};