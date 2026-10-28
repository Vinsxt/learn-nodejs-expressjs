import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// /auth/register for register user endpoint
router.post("/register", (req, res) => {
  const {username, password} = req.body;

  // encrypt the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  // save the new user and hashed password to db
  try {
    const insertUser = db.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`);
    const result = insertUser.run(username, hashedPassword);

  } catch (err) {
    console.log(err.message);
    res.sendStatus(503);
  }
})

router.post("/login", (req, res) => {

})

export default router;