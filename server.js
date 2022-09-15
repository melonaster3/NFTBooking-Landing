import express from "express";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";
config();
import  router  from "./routes/users.js"
const app = express();
const PORT = 3000;
app.use("/", router);
app.use(express.static("views"));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  app.set('view engine', 'ejs');
  
const editionAddress = "0x050E86c51107dc696d2d73052BCE390C8034f04C";
const sdk = new ThirdwebSDK("rinkeby");
const nftDrop = sdk.getNFTDrop(editionAddress)


  




/*
ThirdwebAuth(app, {
    // Using environment variables to secure your private key is a security vulnerability.
    // Learn how to store your private key securely:
    // https://portal.thirdweb.com/sdk/set-up-the-sdk/securing-your-private-key
    privateKey: process.env.ADMIN_PRIVATE_KEY || "",
    // Set this to your domain to prevent signature malleability attacks.
    domain: "example.com",
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  app.use(express.static("views"));
  const userRouter = require("./routes/users")
  app.listen(3000);
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/'));



const express = require("express");
app.use(express.static("views"));
const userRouter = require("./routes/users")
app.use("/", userRouter);
app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));




import express from "express";
import { getUser, ThirdwebAuth } from "@thirdweb-dev/auth/express";
import { config } from "dotenv";
config();


const connectWithMetamask = useMetamask();
const disconnectWallet = useDisconnect();
const address = useAddress();

const express = require("express")
const router = express.Router()
const editionAddress = "0x050E86c51107dc696d2d73052BCE390C8034f04C";
const sdk = new ThirdwebSDK("Rinkeby");
const nftDrop = sdk.getNFTDrop(editionAddress);

*/