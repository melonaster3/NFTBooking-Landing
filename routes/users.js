
import express from "express";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
const router = express.Router()
const editionAddress = "0x050E86c51107dc696d2d73052BCE390C8034f04C";
const sdk = new ThirdwebSDK("rinkeby");
const nftDrop = sdk.getNFTDrop(editionAddress)

  
router.get("/", (req, res) => {
    console.log(nftDrop);
    res.render('index');
})

router.get("/roadmap", (req, res) => {
    res.render('nft_booking_roadmap');
})

router.get("/lounge", (req, res) => {
    res.render('nft_Lounge');
})


export default router;