const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TokenTransferController = await hre.ethers.getContractFactory("TokenTransferController");
  const tokenAddress = "0xYourTokenAddressHere"; // Replace with your token address
  const contract = await TokenTransferController.deploy(tokenAddress);

  console.log("TokenTransferController deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
