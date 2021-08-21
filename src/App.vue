<template>
  <div id="app">
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

    <sidebar></sidebar>
 <div id="right-panel" class="right-panel" v-show="!loading" >

        <!-- menu  -->
        <topmenu></topmenu>
         <div class="main_content_iner ">
        <div class="container-fluid plr_30 body_white_bg pt_30">
            <div class="row justify-content-center">
           
                <div  class="col-md-8 offset-2 mt-3">
                    <h4 class="alert alert-primary " v-if="address == ''">Please enter an address to see your dividends!</h4>
                </div>
                <div  class="col-md-8 offset-2">
                    <h4 class="alert alert-danger " v-if="address != '' &&  !isvalidAddress" >Please enter a valid address!</h4>
                </div>
                <div class="col-lg-12" v-if="address != '' &&  isvalidAddress">
                  <div class="row" >
                    <div class="col-lg-3 col-md-6">
                      <div class="card">
                      <div class="card-body">
                      <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-1">
                      <i class="pe-7f-cash"></i>
                      </div>
                      <div class="stat-content">
                      <div class="text-left dib">
                        
                      <div class="stat-text"><span class="count">{{new Intl.NumberFormat().format(fromWei(data.myBalance))}}</span></div>
                      <div class="stat-heading">Token Balance</div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="card">
                    <div class="card-body">
                    <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-1">
                    <i class="pe-7f-cash"></i>
                    </div>
                    <div class="stat-content">
                    <div class="text-left dib">
                      
                    <div class="stat-text"><span class="count">{{new Intl.NumberFormat().format(fromWei(data.totalDevident))}}</span></div>
                    <div class="stat-heading">Total Devident</div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                    <div class="card">
                    <div class="card-body">
                    <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-2">
                    <i class="pe-7f-browser"></i>
                    </div>
                    <div class="stat-content">
                    <div class="text-left dib">
                    <div class="stat-text"><span class="count">{{new Intl.NumberFormat().format(fromWei(data.unpaidEarnings))}}</span></div>
                    <div class="stat-heading">Unpaid Earnings</div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                  
                    <div class="col-lg-3 col-md-6">
                    <div class="card">
                    <div class="card-body">
                    <div class="stat-widget-five">
                    <div class="stat-icon dib flat-color-3">
                    <i class="pe-7f-browser"></i>
                    </div>
                    <div class="stat-content">
                    <div class="text-left dib">
                    <div class="stat-text"><span class="count">{{new Intl.NumberFormat().format(fromWei(data.shares[0]))}}</span></div>
                    <div class="stat-heading">Share</div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-10 offset-1">
                            <div class="card" style="  box-shadow: 2px 6px #888888;">
                                <div class="card-body">
                                    <h1 style="text-align: center;">Total paid to BitDoge  holders:</h1>
                                    <h1 style="text-align: center; font-size:80px; color: green;">{{fromWei(data.totalPayed)}} BNB</h1>
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
</template>
<script>
  export default {
    data(){
        return {

        }
    },
    computed: {
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
        let valid =  window.web3.utils.isAddress(this.address);
        if(valid){
            console.log("dayau")
            
            this.loadData();
        }
        return valid;
     }
    },
    methods : {
      fromWei(value){
        return window.web3.utils.fromWei(value);
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
      }, 2000);   
    this.$store.dispatch("currentUser/setUser" , localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user"))  : {});
   
   this.$store.dispatch("metamask/getNetwork");
   this.$store.dispatch('metamask/innitaliseWeb3');
    this.$store.dispatch("contract/loadtotalPayed");
   window.ethereum.on('accountsChanged', function (accounts) {
    console.log(accounts[0]);
    let user = {};
        user.id  =  Math.floor(Math.random() * 1000) + 1;
        user.address = accounts[0];
        localStorage.setItem("user",JSON.stringify(user));
        this.$store.dispatch("swap/loadAssets" ) 
  })

  }
  }
</script>
<style>
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
  background: #d9534f;
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


