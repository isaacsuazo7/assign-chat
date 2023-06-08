interface ISacUser {
    uid: string;
    username: string;
    lastDatetimeAssignedChat: number;
    activeChatRooms: number;
}

const date1 = new Date();
const date2 = new Date();
date1.setDate(27);
date2.setHours(7);


const allSacUsers: ISacUser[] = [
    {
        uid: '1',
        username: 'Isaac',
        lastDatetimeAssignedChat: date1.getTime(),
        activeChatRooms: 0,
    },
    {
        uid: '2',
        username: 'Eenes',
        lastDatetimeAssignedChat: date2.getTime(),
        activeChatRooms: 0,
    },
    {
        uid: '2',
        username: 'EDD',
        lastDatetimeAssignedChat: date1.getTime(),
        activeChatRooms: 1,
    }
];


const assignMultipleChats = () => {
    const users = allSacUsers;
    for (const chat of [1, 2, 3, 4, 5]) {
        console.log(users);
        const user = users[0];
        const userUpdated = assignChat(user);
        users[0] = userUpdated;

        users.sort(compareSacUsers);
    }
}


const assignChat = (user: ISacUser): ISacUser => {
    return {
        ...user,
        lastDatetimeAssignedChat: new Date().getTime(),
        activeChatRooms: user.activeChatRooms + 1

    }
};

const compareSacUsers = (a: ISacUser, b: ISacUser) => {
  return  a.activeChatRooms - b.activeChatRooms || a.lastDatetimeAssignedChat - b.lastDatetimeAssignedChat;
};

assignMultipleChats();


const a = new Array<number>(15).fill(10);

console.log(a)
