const hre = require("hardhat");

const main = async () => {
    const memoryContractFactory = await hre.ethers.getContractFactory('Memory');
    const memoryContract = await memoryContractFactory.deploy();
    await memoryContract.deployed();
    console.log("contract deployed to:", memoryContract.address);
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