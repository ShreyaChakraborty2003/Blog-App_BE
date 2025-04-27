const express=require("express")

const { getAllUser, getSingleData, createData, updateData, deleteData } = require("../controller/user_controller")

const router=express.Router()
const { followUser, unfollowUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // assume JWT auth

router.post('/follow/:userIdToFollow', protect, followUser);
router.post('/unfollow/:userIdToUnfollow', protect, unfollowUser);

module.exports = router;

//GET: 
router.get('/',getAllUser)

//GET: /:id

router.get('/:id',getSingleData)

//POST :
router.post('/',createData)

//PUT : 

router.put('/:id',updateData)

//DELETE :

router.delete('/:id',deleteData)

module.exports=router
