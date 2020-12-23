import { returnSpliceMockArray, returnSpliceArray, getRandomIntegerNumber } from "./mock-utils";

const idUsers = [`id-user-1`, `id-user-2`, `id-user-3`, `id-user-4`];
const nameUsers = [`Alex`, `Jhon`, `Tom`, `Bill`];
const emailUsers = [`Alex@gmail.com`, `Jhon@gmail.com`, `Tom@gmail.com`, `Bill@gmail.com`];
const stateUsers = [`online`, `offline`, `offline`, `online`];

const idChannels = [`id-channel-1`, `id-channel-2`, `id-channel-3`, `id-channel-4`];
const nameChannels = [`channel-1`, `channel-2`, `channel-3`, `channel-4`];
const adminChannels = [`id-user-1`, `id-user-2`, `id-user-4`, `id-user-1`];

const test = [1, 2, 3, 4];
const idUsersCopy = idUsers.slice();
const nameUsersCopy = nameUsers.slice();
const emailUsersCopy = emailUsers.slice();
const stateUsersCopy = stateUsers.slice();

export const channelsSite = idChannels.map((idChannel, idx) => {
  return {
    id: idChannel,
    info: {
      name: nameChannels[idx],
      admin: adminChannels[idx],
    },
    usersRoom: idUsers.slice(0, getRandomIntegerNumber(1, 4)).map((idUser, id) => {
      return {
        usersIdRoom: idUser,
        usersNameRoom: nameUsers[id],
      }
    }),
  }
});

const generateUser = () => {
  const { index } = returnSpliceArray(test);
  return {
    id: returnSpliceMockArray(idUsersCopy, index),

    info: {
      name: returnSpliceMockArray(nameUsersCopy, index),
      mail: returnSpliceMockArray(emailUsersCopy, index),
    },

    status: {
      lastChange: new Date(),
      state: returnSpliceMockArray(stateUsersCopy, index),
    },

    channelsUser: channelsSite.slice(0, getRandomIntegerNumber(1, 4)).map(({ id, info }) => {
      return {
        id,
        name: info.name
      }
    }),

    friends: idUsersCopy.map((idUserCopy, idxUser) => {
      return {
        id: idUserCopy,
        name: nameUsersCopy[idxUser],
      }
    })
  }
};

const generateUsers = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateUser);
};

export const users = generateUsers(4);

export const userProfile = users[0];