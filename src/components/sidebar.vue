<template>
   <div id="layoutSidenav_nav" >
            <nav class="sb-sidenav accordion " id="sidenavAccordion" style="background-color: rgb(35, 1, 62);">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">Website</div>
                        <a class="nav-link" href="https://www.bitdogecoin.org/">
                            <div class="sb-nav-link-icon"><i class="menu-icon fas fa-arrow-circle-left"></i></div>
                            Back To Project Site 
                        </a>
                        <div class="sb-sidenav-menu-heading">Smart Contract</div>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Contract
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                             <a class="nav-link" href="https://bscscan.com/address/0xe81bfbb53a195fa3b6d1b12c4c1ea5452490bb8c"><img src="@/assets/bsc.png" class="mr-2" width="10%" >BscScan Verified</a>
                             <a class="nav-link" href="https://dessertswap.finance/audits/Bitdoge%20BEP-20%20Audit%2010368243.pdf"><i class="fas fa-check mr-2" width="10%" style="color: green"></i>Dessert Audit</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                            <div class="sb-nav-link-icon"><img src="@/assets/chart.png"  width="15%" > Chart</div>
                           
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                <a class="nav-link" href="https://poocoin.app/tokens/0xe81bfbb53a195fa3b6d1b12c4c1ea5452490bb8c"> <img src="@/assets/poocoin.png" width="10%" class="mr-2">PooCoin</a>
                                <a class="nav-link" href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x68329a1a2ed182e302d4eca6f28bba496f100120"> <i class="fas fa-chart-line mr-3" style="color: green"></i> Dex Tool</a>
                            </nav>
                        </div>
                        <div class="sb-sidenav-menu-heading">TOKENOMICS</div>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><img src="@/assets/buy.png"  width="15%" style=" background-color: white; padding: 5px; margin-right: 5px">16% Buy fees</div>
                            
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                            <a  class="nav-link" ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px">  7% BTC rewards</a>
                            <a  class="nav-link" ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 5% Marketing</a>
                            <a  class="nav-link" ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 3% Smart Auto BuyBack</a>
                            <a  class="nav-link" ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 1% AutoLiquidity</a>   
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><img src="@/assets/sell.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px">32% Sell Fees</div>
                            
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                            <a  class="nav-link"   ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 14% BTC rewards</a>
                            <a  class="nav-link"  ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 10% Marketing</a>
                            <a  class="nav-link"  ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 6% Smart Auto BuyBack</a>
                            <a  class="nav-link"  ><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 2% AutoLiquidity</a>
                            
                        </nav>
                        </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px"> 16% Smart BuyBack</div>
                               
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                <a  class="nav-link"   > <img src="@/assets/buyback.png"  width="15%" style=" background-color: white;padding:3px; margin-right: 5px">extra fee
                                    If you sell right after the buyback</a>
                                
                            </nav>
                            </div>
                        <div class="sb-sidenav-menu-heading">Social</div>
                        <a class="nav-link" href="https://t.me/BitDogeCoinBsc">
                            <div class="sb-nav-link-icon"><i class="menu-icon fab fa-telegram-plane"></i></div>
                            Twitter
                        </a>
                        <a class="nav-link" href="https://twitter.com/bitdogecoinbsc">
                            <div class="sb-nav-link-icon"><i class="menu-icon fab fa-twitter"></i></div>
                           Telegram
                        </a>
                        <a class="nav-link" href="https://www.instagram.com/BitDogeCoinBsc">
                            <div class="sb-nav-link-icon"><i class="menu-icon  fab fa-instagram"></i></div>
                            Instagram
                        </a>
                    </div>
                </div>
                
            </nav>
        </div>

</template>
<style>
.nav-link{
    color: white
}
.sb-sidenav-menu-heading {
    color:#929295;
}
</style>