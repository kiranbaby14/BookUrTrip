import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hey, authentication sucessful!");
});

router.get("/register", (req, res) => {
    res.send("Register users");
});


export default router;