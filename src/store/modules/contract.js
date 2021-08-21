// import Web3 from 'web3';
import  {tokenAbi , devidentAbi ,  devidentAddress, tokenAddress } from "./abi";

const state = {
   address : '',
   data : {
    myBalance : 0,
    totalDevident : 0,
    totalPayed : 0,
    unpaidEarnings : 0,
    totalShares : 0,
    shares : {}
   }
}

const getters = {}
const actions = {
    setAddress({commit} , address){
        commit('setAddress' , address);
    },
    async loadtotalPayed({commit}){
        window.devidentContact   =  await new window.web3.eth.Contract( devidentAbi ,devidentAddress);
        let data = {
            myBalance : 0,
            totalDevident : 0,
            totalPayed : 0,
            unpaidEarnings : 0,
            totalShares : 0,
            shares : {}
        }
        data.totalPayed = await window.devidentContact.methods.totalDistributed().call();
        commit("setData" , data);
    },
    async loadData({commit} , address){
        commit("setAddress",address);
        window.tokenContract   =  await new window.web3.eth.Contract( tokenAbi ,tokenAddress);
        window.devidentContact   =  await new window.web3.eth.Contract( devidentAbi ,devidentAddress);
        let data = {};
        data.myBalance =   await window.tokenContract.methods.balanceOf(address).call();
        data.totalDevident = await window.devidentContact.methods.totalDividends().call();
        data.totalPayed = await window.devidentContact.methods.totalDistributed().call();
        data.unpaidEarnings  =  await  window.devidentContact.methods.getUnpaidEarnings(address).call();
        data.totalShares  =  await  window.devidentContact.methods.totalShares().call();
        data.shares  =  await  window.devidentContact.methods.shares(address).call();
        commit("setData" , data);

      }
};
const mutations = {
    setData(state , data){
        state.data = data;
    },
    setAddress(state , address){
        state.address = address; 
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}