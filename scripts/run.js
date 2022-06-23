
   
const hre = require("hardhat");

const main = async () => {
    const memoryContractFactory = await hre.ethers.getContractFactory("Memory");
    const memoryContract = await memoryContractFactory.deploy();
    await memoryContract.deployed();
    console.log("contract deployed to:", memoryContract.address);

    let memCID = "bafybeihe2gh5zypdiacmz5zl7z3wuhohlepjwysjkbzar5wgaopr4nwqyi"
    let eventTimeStamp = 1952517724
    let visible = false;
    let friends = ["0x8A9cF9dABAC03273Ae81c7BB1029edabfB97550a"];

    let txn = await memoryContract.createNewMemory(memCID, eventTimeStamp, visible, friends);
    let wait = await txn.wait();
    console.log("NEW MEMORY CREATED, console log from the run script", wait.events[0].event, wait.events[0].args)

} 

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  //in order to run this:
  //npx hardhat node in a terminal
  //open a new terminal window and run npx hardhat run --network localhost scripts/YOUR_SCRIPT_FILE.js