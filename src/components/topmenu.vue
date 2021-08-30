<template>
  <nav class="sb-topnav navbar navbar-expand " style="background-color: rgb(35, 1, 62);">
    <!-- Navbar Brand-->
    <a class="navbar-brand" href="https://www.bitdogecoin.org/" > <h4 style="color: green ; padding-left:40px ; font-size: 30px;"><img src="@/assets/logo3.png" alt="" width="40px"> <span style="color: white; font-family: Ubuntu;">BIT</span ><span  style="color: rgb(242, 169, 0); font-family: doge;padding-left: 5px;">DOGE</span></h4></a>
    <!-- Sidebar Toggle-->
    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 " style="margin-left: 30px; color: white;" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
    
    <!-- Navbar Search-->
    <div class="row">
      <div class=" col-md-8 offset-md-2 d-none d-lg-block"> <input type="text" placeholder="Enter Address here..." class="form-control"  v-model="address" style="margin-top: 10px; width: 70%;"> </div>
    </div>
    <!-- Navbar-->
   
</nav>
  <!-- <header id="header" class="header">
    <div class="top-left">
    <div class="navbar-header">
    <a class="navbar-brand" href="https://www.bitdogecoin.org/" > <h4 style="color: green ; padding-left:40px ; font-size: 30px;"><img src="@/assets/logo3.png" alt="" width="40px">  <img src="@/assets/looo.png" alt="" srcset=""></h4></a>
    <a class="navbar-brand hidden" href="https://colorlib.com/polygon/elaadmin/"> <h4 style="color: green ; padding-left:40px"><img src="@/assets/logo.svg" alt="" width="40px">BitDoge </h4></a>
    <a id="menuToggle" class="menutoggle" @click="toggle"><i class="fa fa-bars"></i></a>
    </div>
    </div>
    <div class="top-right">
    <div class="header-menu">
     <div class="row">
       <div class="col-md-8 offset-2"> <input type="text" placeholder="Enter Address here..." class="form-control"  v-model="address" style="margin-top: 10px; width: 70%;"> </div>
     </div>
    </div>
    </div>
    </header> -->
<!-- <div class="container-fluid no-gutters">
            <div class="row">
                <div class="col-lg-12 p-0">
                    <div class="header_iner d-flex justify-content-between align-items-center">
                        <div class="sidebar_icon d-lg-none">
                            <i class="ti-menu"></i>
                        </div>
                        <div class="serach_field-area">
                                <div class="search_inner">
                                    <form action="#">
                                        <div class="search_field">
                                            <h4 style="color: green ; padding-left:40px"><img src="@/assets/logo.svg" alt="" width="60px"> BitDoge</h4>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                        <div class="header_right d-flex justify-content-between align-items-center">
                            <div  class="profile_info">
                              <div class="serach_field-area">
                                <div class="search_inner">
                                    
                                            <div class="search_field">
                                            <input type="text" placeholder="Enter Address here..."  v-model="address">
                                            </div>
                                            <button type="submit"> <img src="img/icon/icon_search.svg" alt=""> </button>
                                    
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

</template>
<script>
export default {
  props : ['status'],
 data(){
   return {
    address : ''

   }
 },
 watch : {
address : function(newadd ){
  this.$store.dispatch("contract/setAddress" , newadd);
}
 },
 computed :  {
   addressFormated : function(){
     if(!this.user.address) return "";
     return this.user.address.substring(0 ,6) + "...." + this.user.address.substring(this.user.address.length -4 ,this.user.address.length)
   },
   user : function(){
     return this.$store.state.currentUser.user;
   },
   metamaskUser : function(){
     return this.$store.state.metamask.user;
     
   }
 },
 mounted(){
 },
 methods :{
   toggle() {
    this.$store.dispatch("loading/toggle" )

   },
   load(status){
     this.$store.dispatch("loading/activateLoader" , status)
   },
     logout(){
       this.load(true);
          this.$store.dispatch('currentUser/logout').then(
            response => {
              this.$router.push('/')
              this.load(false);
              console.log(response);
              this.$toast.success(response);
            }
          ).catch(
            error => {
              this.load(false);
              console.log(error)
              this.$toast.error(error.message)
            }
          )
        },
     login(){
       
        this.$store.dispatch("metamask/validateMetamaskAvailable").then(
          response => {
            console.log(response);
            this.$store.dispatch("metamask/loginMetaMask").then(
              response=>{
                this.$store.dispatch("currentUser/setUser" ,this.metamaskUser);
                this.$toast.success(response);
              }
            ).catch( error => {
              if(error.error){
             this.$toast.error(error.message);   
              }
              else{
                this.$toast.error("Error while connecting to metamask");
              }
            })
          }
        ).catch(error => {
          this.$toast.error(error.message)
        })
        
 },
 loginMoralis(){
   this.load(true);
          this.$store.dispatch('currentUser/loginUser').then(
            response => {
               this.load(false);
              console.log(response);
              this.$toast.success(response);
            }
          ).catch(
            error => {
              console.log(error)
              this.$toast.error(error.message);
               this.load(false);

            }
          )
        }
 }
}
</script>

<style scoped>

</style>