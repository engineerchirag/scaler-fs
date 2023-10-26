import fs from 'fs';

export const getUserDetail = (req, res) => {
    const { userId } = req.params;
    try {
        const usersData = fs.readFileSync('mock/user.mock.json');
        const searchedUserData = JSON.parse(usersData)[userId];
        res.status(200).send(searchedUserData);
    } catch(e) {
        res.status(500).send(e.message);
    }
    
};

export const createUserDetail = (req, res) => {
    const userData = req.body;
    const usersData = JSON.parse(fs.readFileSync('mock/user.mock.json'));
    const newUserId = Math.random();
    usersData[newUserId] = req.body;
    fs.writeFileSync('mock/user.mock.json', JSON.stringify(usersData));
    res.status(200).send({ ...userData, id: newUserId });
};


export const updateUserDetail = (req, res) => {
    const { userId } = req.params;
    const userData = req.body;
    const usersData = JSON.parse(fs.readFileSync('mock/user.mock.json'));
    usersData[userId] = req.body;
    fs.writeFileSync('mock/user.mock.json', JSON.stringify(usersData));
    res.status(200).send({ ...userData, id: userId });
};

export const deleteUserDetail = (req, res) => {
    const { userId } = req.params;
    const usersData = JSON.parse(fs.readFileSync('mock/user.mock.json'));
    delete usersData[userId];
    fs.writeFileSync('mock/user.mock.json', JSON.stringify(usersData));
    res.status(200).send("User deleted");
};