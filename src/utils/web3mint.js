import contract from '../contracts/bithuabi.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum } from '../config';



export const mint = async (mint_amount) => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x1351fCc082d577c33bFB1bD5aA71bc718fe18177";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let txnHash = await nftContract.mint(ethereum.selectedAddress, mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.03 * mint_amount).toString())
        })
        return txnHash
    }
}

export const totalMintCount = async () => {
    if(isMetaMaskInstalled()){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x1351fCc082d577c33bFB1bD5aA71bc718fe18177";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);

        let totalMint = await nftContract.count();

        return totalMint;
    }
}
