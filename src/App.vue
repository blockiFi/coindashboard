<template>
  <div id="app" >
    <div class="preloader" v-show="loading">
        <div class="loader">
            <div class="loader-outter"></div>
            <div class="loader-inner"></div>
    
            <div class="indicator"> 
                <svg width="16px" height="12px">
                    <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg>
            </div>
        </div>
    </div>
    <div >
      <topmenu></topmenu>
      <div id="layoutSidenav">
        <sidebar></sidebar>
        <div id="layoutSidenav_content">
            <main>
                <div class="container-fluid px-4">
                  <!-- d-md-none -->
                  <div class="row">
                    <div class=" col-md-8 offset-md-2  d-lg-none"> <input type="text" placeholder="Enter Address here..." class="form-control"  v-model="address1" style="margin-top: 10px; width: 70%;"> </div>
                  </div>
                   <div class="row">
                    <!-- d-lg-none -->
                    <div  class="col-sm-12 col-md-8 offset-2 mt-1">
                        <h4 class="alert alert-primary " v-if="address == ''">Please enter an address to see your dividends!</h4>
                        <h4 class="alert alert-danger " v-if="address != '' &&  !isvalidAddress" >Please enter a valid address!</h4>
                    </div>

                    <div class="col-lg-12">

                      <div class="col-md-4 offset-4">
                        <!-- <img src="@/assets/looo.png" alt="" > -->
                        <h3 style="padding-left: 40px;"><span style="color: white; font-family: Ubuntu;">BIT</span ><span  style="color: rgb(242, 169, 0); font-family: doge;padding-left: 5px;">DOGE</span></h3>
                        <img src="@/assets/logo3.png" alt="" height="200px">

                      </div>
                    </div>

                 <div class="col-lg-12" v-if="address != '' &&  isvalidAddress">
                 <div class="row" >
                   <div class="col-md-8 offset-2">
                     <div class="row">
                       <div class="col-lg-6 col-md-6">
                         <div class="card"  style="background: #F2A900; border-radius: 60px;">
                         <div class="card-body">
                         <div class="stat-widget-five">
                         <div class="stat-icon dib flat-color-1">
                         <i style="color: black;" class="pe-7f-cash"></i>
                         </div>
                         <div class="stat-content">
                         <div class="text-left dib">
                           
                         <div class="stat-text"><span  style=" color: white;" >
                           <span v-if="data.myBalance">{{parseFloat(fromWei(data.myBalance)).toFixed(8)}}</span>
                           </span></div>
                         <div class="stat-heading" style=" color: white;">Token Balance</div>
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                       <div class="col-lg-6 col-md-6">
                       <div class="card" style="background: #F2A900; border-radius: 60px;">
                       <div class="card-body">
                       <div class="stat-widget-five">
                       <div class="stat-icon dib flat-color-1">
                       <i style="color: black;" class="pe-7f-cash"></i>
                       </div>
                       <div class="stat-content">
                       <div class="text-left dib">
                         
                       <div class="stat-text"><span  style=" color: white;">
                       <span v-if="data.totalDevident"> {{parseFloat(fromWei(data.totalDevident)).toFixed(8)}}</span> 
                       </span></div>
                       <div class="stat-heading"  style=" color: white;">Total Dividend</div>
                       </div>
                       </div>
                       </div>
                       </div>
                       </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div class="row" >
                   <div class="col-md-8 offset-2">
                     <div class="row">
                       <div class="col-lg-6 col-md-6" >
                         <div class="card" style="background: #F2A900;border-radius: 60px;" > 
                         <div class="card-body">
                         <div class="stat-widget-five">
                         <div class="stat-icon dib flat-color-2">
                         <i style="color: black;" class="pe-7f-browser"></i>
                         </div>
                         <div class="stat-content">
                         <div class="text-left dib">
                         <div class="stat-text"><span   style=" color: white;" v-if="data.unpaidEarnings">
                           {{parseFloat(fromWei(data.unpaidEarnings)).toFixed(8)}}
                         </span></div>
                         <div class="stat-heading"  style=" color: white;">Unpaid Earnings</div>
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                       
                         <div class="col-lg-6 col-md-6">
                         <div class="card" style="background: #F2A900; border-radius: 60px;">
                         <div class="card-body">
                         <div class="stat-widget-five">
                         <div class="stat-icon dib flat-color-3">
                         <i style="color: black;" class="pe-7f-browser"></i>
                         </div>
                         <div class="stat-content">
                         <div class="text-left dib">
                         <div class="stat-text"><span   style=" color: white;" v-if="data.shares[0]">{{parseFloat(fromWei(data.shares[0])).toFixed(8)}}</span></div>
                         <div class="stat-heading"  style=" color: white;">Share</div>
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                         </div>
                     </div>
                   </div>
                  
                  
                   </div>
               </div>

               <div class="col-sm-12 col-md-10 offset-1">
                <div class="card" style="  box-shadow: 2px 6px #888888 ;background: #F2A900;">
                    <div class="card-body">
                        <h1 style="text-align: center;"><img src="@/assets/reward.png"  width="10%" style="padding:3px; margin-right: 5px"> Total paid to BitDoge  holders:</h1>
                        <h1 style="text-align: center; font-size:80px; color: white;" v-if="data.totalPayed" >{{parseFloat(fromWei(data.totalPayed)).toFixed(4)}} BTC</h1>
                    </div>
                </div>
            </div>
                   </div>
                   
                </div>
            </main>
         
        </div>
    </div>
    </div>
   
  
  </div>
</template>
<script>
  export default {
    data(){
        return {
          address1: '',
          bg : require('@/assets/bg.jpg'),
        }
    },
    watch : {
address1 : function(newadd ){
  this.$store.dispatch("contract/setAddress" , newadd);
}
 },
    computed: {
      toggle : function(){
        return this.$store.state.loading.toggle;
      },
      loading : function(){
            return this.$store.state.loading.status;
        } ,  
     address : function(){
         return this.$store.state.contract.address;
     },
     data : function(){
         return this.$store.state.contract.data;
     },
     isvalidAddress : function(){
       let valid = false;
       if(window.web3){
         valid =  window.web3.utils.isAddress(this.address);

       }
        if(valid){
            console.log("dayau")
            
            this.loadData();
        }
        return valid;
     }
    },
    methods : {
      fromWei(value){
        if(window.web3.utils){
          return window.web3.utils.fromWei(value);

        }return 0;
      },
      loadData(){
           this.$store.dispatch("loading/activateLoader" , true)
          setTimeout( ()=> {
             this.$store.dispatch("loading/activateLoader" , false)
      }, 2000);
          this.$store.dispatch("contract/loadData", this.address);
      }  
    },
    mounted() {
        setTimeout( ()=> {
             this.$store.dispatch("loading/activateLoader" , false)
      }, 1000);   
   
  //  this.$store.dispatch("metamask/getNetwork");
   this.$store.dispatch('metamask/innitaliseWeb3');
    this.$store.dispatch("contract/loadtotalPayed");
   

  }
  }
</script>
<style>
  .stat-heading{
    color: white;
  }
    .preloader {
  position: fixed;
  left: 0;
  width: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  z-index: 9999999;
  -webkit-transition: .9s;
  transition: .9s;
}

.preloader .loader {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 45%;
  -webkit-transform: translateY(-45%);
          transform: translateY(-45%);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.preloader .loader .loader-outter {
  position: absolute;
  border: 4px solid #ffffff;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
          animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

.preloader .loader .loader-inner {
  position: absolute;
  border: 4px solid #ffffff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  left: calc(40% - 21px);
  top: calc(40% - 21px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
          animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}

.preloader .loader .indicator {
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%) scale(1.5);
          transform: translateY(-50%) scale(1.5);
}

.preloader .loader .indicator svg polyline {
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.preloader .loader .indicator svg polyline#back {
  stroke: #ffffff;
}

.preloader .loader .indicator svg polyline#front {
  stroke: #1A76D1;
  stroke-dasharray: 12, 36;
  stroke-dashoffset: 48;
  -webkit-animation: dash 1s linear infinite;
          animation: dash 1s linear infinite;
}

.preloader::before, .preloader::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 60%;
  z-index: -1;
  background: #23013E;
  -webkit-transition: .9s;
  transition: .9s;
}

.preloader::after {
  left: auto;
  right: 0;
}

.preloader.preloader-deactivate {
  visibility: hidden;
}

.preloader.preloader-deactivate::after, .preloader.preloader-deactivate::before {
  width: 0;
}

.preloader.preloader-deactivate .loader {
  opacity: 0;
  visibility: hidden;
}

@-webkit-keyframes loader-outter {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes loader-outter {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@-webkit-keyframes loader-inner {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@keyframes loader-inner {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@-webkit-keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>


