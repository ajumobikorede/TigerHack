import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})
//router.get('/login', (req, res) => {
   // res.send('hello login page')
//})
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/login', (req, res) => {
    res.render('login')
})

export default router
