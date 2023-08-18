"use strict";
const defaultUser = {
    id: 1245,
    name: 'minoo',
    role: "super-admin",
    post: [
        {
            id: 100, title: 'Engineer'
        },
        {
            id: 200,
            title: 'teacher'
        }
    ]
};
const defaultUser2 = {
    id: 1245,
    name: 'hhhh',
    role: "admin",
    post: [
        {
            id: 100,
            title: 'worker'
        },
        {
            id: 200,
            title: 'teacher'
        }
    ]
};
const makeUser = () => {
    return defaultUser;
};
console.log(makeUser());
//# sourceMappingURL=index.js.map