const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index');
})

router.get("/roadmap", (req, res) => {
    res.render('nft_booking_roadmap');
})

router.get("/lounge", (req, res) => {
    res.render('nft_Lounge');
})



module.exports = router;