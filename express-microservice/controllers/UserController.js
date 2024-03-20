const User = require('../models/User');

const createUser = async (name, surname, username, password, email, userType) => {
    try {
        const newUser = await User.create({
            name,
            surname,
            username,
            password,
            email,
            user_type: userType // assuming 'userType' corresponds to 'user_type' in the database
        });
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Internal Server Error');
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Internal Server Error');
    }
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            return user;
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Internal Server Error');
    }
};

const updateUser = async (id, name, surname, username, password, email, userType) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.update({
                name,
                surname,
                username,
                password,
                email,
                user_type: userType // assuming 'userType' corresponds to 'user_type' in the database
            });
            return user;
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Internal Server Error');
    }
};

const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return { message: 'User deleted successfully' };
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Internal Server Error');
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
