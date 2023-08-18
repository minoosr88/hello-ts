// const age : number = 30
// if(age > 50){
//     console.log(`Minoo is ${age} years old!`)
// }
// console.log(`Minoo is ${age} years old!`)


interface User {
    id: number,
    name: string,
    role: 'admin' | 'user' | 'super-admin',
    post: Post[]
}

type Post = {
    id: number,
    title?: string
}

const defaultUser: User = {
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

}

const defaultUser2: User = {
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

}

// let users: Set<User>;
// users = new Set<User>();
// users.add(defaultUser)
// users.add(defaultUser2)
const makeUser = (): User => {
    return defaultUser
}
console.log(makeUser())