const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

//currently at /api/users endpoint
router.route('/')
    .get(getAllUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:id')
    .get(getUserById);

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;