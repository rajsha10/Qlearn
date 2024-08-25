import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./components/Hero";
import Quest from "./components/Quest";

export default function Home() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Quest challangeNo={0}
       title={'Wallet Setup'}
       description={"In this Wallet Setup Quest, you'll install MetaMask, create a wallet, and connect to a test network. Successfully complete these steps to earn a token airdrop or a special badge, marking your first achievement in the Web3 world."}
       imgAdd={'/images/quest1.webp'}
        />

        <Quest challangeNo={1}
       title={'NFT Creation Quest'}
       description={"Follow the steps to mint a simple NFT. You can choose to do this on a user-friendly platform like OpenSea or by directly creating it on-chain. The process will guide you through creating, listing, and managing your NFT."}
       imgAdd={'/images/quest2.png'}
        />

        <Quest challangeNo={2}
        title={'Smart Contract Interaction Quest'}
        description={"Connect your wallet to a provided dapp and interact with a simple smart contract. This contract could be something straightforward, like one that returns a greeting message. The quest will guide you through the process of connecting your wallet, sending a transaction, and receiving the response from the smart contract."}
        imgAdd={'/images/quest3.png'}
          />
    </div>
  );
}
