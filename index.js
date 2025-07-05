const users = [{name: "Rob", name: "Brittany", name: "Julian", name: "Ava"}]

const printNames = () => {
    users.map(user => console.log(user.name))
}

printNames()