import Web3 from 'web3';

window.ethereum.enable();
const web3 = new Web3(window.web3.currentProvider);

export default web3;

//This file is to change the version of metamask to 1.0.0 whuch we downloaded here to be used instead of the defualt 0.2 version
//which is used by default in the browser by metamask.
//Refer video 92 of Course