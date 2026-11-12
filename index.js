import express  from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const users = [];

app.get("/", (req, res) => {
    res.send("this is get requesr responce !!!!")
})

app.post("/userData", (req, res) => {
    const newUser = new User(
        users.length+1,
        req.body.name,
        req.body.age
    )
    users.push(newUser)
    res.send(`user data received and latest list contains ${users.length} users!!`)
})

app.get("/getUserList", (req, res) => {
    if (users.length === 0) {
res.send("No user data avilable!!!")
    } else {
    res.send(users)
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}!!!`)
})