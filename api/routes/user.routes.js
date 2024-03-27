const express = require('express')
const router = express.Router()
const { createUser, getUsers, deleteUser, getUser, updateUser, addHabit, getHabits } = require('../controllers/user.controller.js')

router.post('/', createUser)

router.get('/', getUsers)
router.get('/:id', getUser)
router.get('/habits/:id', getHabits)

router.put('/:id', updateUser)
router.put('/habits/:id', addHabit)

router.delete('/:id', deleteUser)

module.exports = router
