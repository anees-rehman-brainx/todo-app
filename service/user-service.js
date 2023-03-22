var users = [];

// check if email exists
const validateEmail = (email) => {
    const existedUser = users.find(user => user.email === email);
    return existedUser ? true : false;
}


// check if userId exists
const validateUserId = (userId) => {
    const existedUser = users.find(user => user.userId === userId);
    return existedUser ? true : false;
}


// add user to the list
const addUser = (user) => {
    users.push(user);
}


// get all users
const getAllUsers = () => {
    return users;
}


// get user by ID
const getUserById = (id) => {
    const existedUser = users.find(user => user.userId === id);
    return existedUser ? existedUser : false;
}


// get user by email
const getUserByEmail = (email) => {
    const existedUser = users.find(user => user.email === email);
    return existedUser ? existedUser : false;
}


// change username
const updateUsername = (userId, username) => {
    const index = users.findIndex(user => user.userId === userId);

    if(index != -1){
        users[index].username = username;
    }
}


// change password
const updatePassword = (userId, newPassword) => {
    const index = users.findIndex(user => user.userId === userId );
    if(index != -1){
        users[index].password = newPassword;
    }
}


module.exports = {
    validateEmail,
    validateUserId,
    addUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    updateUsername,
    updatePassword
}