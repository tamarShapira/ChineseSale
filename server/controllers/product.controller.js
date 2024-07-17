const User = require('../models/user.model');

const getAlLProducts = async (req, res) => {
    try {
        let newUser = new User(req.body);
        let ansUser = await newUser.save();
        console.log("User saved successfuly!")
        res.status(200).send(ansUser);
    } catch (error) {
        console.log("Can't save this user with error: " + error);
    }
}

module.exports = {
    getAlLProducts,
}