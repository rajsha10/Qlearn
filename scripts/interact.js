const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = "0xYourContractAddressHere"; // Replace with your deployed contract address

  const TokenTransferController = await hre.ethers.getContractFactory("TokenTransferController");
  const contract = TokenTransferController.attach(contractAddress);

  const tx = await contract.transferTokens("0xRecipientAddressHere", ethers.utils.parseUnits("10", 18)); // Transfer 10 tokens
  await tx.wait();

  console.log("Tokens transferred");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
