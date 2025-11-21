const users = [
    {userId: 1,firstName: 'vivek', gender: 'male'},
    {userId: 2,firstName: 'het', gender: 'male'},
    {userId: 3,firstName: 'daksh', gender: 'male'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);