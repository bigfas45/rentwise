

<!DOCTYPE html>
<html lang="zxx" class="js">

<head>
    <base href="../">
    <meta charset="utf-8">
    <meta name="author" content="Softnio">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="A powerful and conceptual apps base dashboard template that especially build for developers and programmers.">
    <!-- Fav Icon  -->
    <link rel="shortcut icon" href="./images/favicon.png">
    <!-- Page Title  -->
    <title>Renwise | Payment</title>
    <!-- StyleSheets  -->
    <link rel="stylesheet" href="./assets/css/dashlite.css?ver=1.8.0">
    <link id="skin-default" rel="stylesheet" href="./assets/css/theme.css?ver=1.8.0">

    <style type="text/css">
        .card_style {
               display: flex;text-align: center;cursor: pointer;flex-direction: column;align-items: center;justify-content: center;border: 1px solid rgba(10,46,101,.09);background: #fff;position: relative;     padding: 20px 25px;border-radius: 8px;min-height: 200px;/* display: block; */transition: border .3s ease,transform .3s ease;

            }

        .card__list {

            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            overflow-x: auto;
            }


        .card__list__item {
            width: 100%;
            min-width: 100%;
            border-radius: 12px;
            background-color: #fff;
            color: #7c889d;
            padding: 18px 18px 14px 20px;
            position: relative;
            margin-right: 24px;
            min-height: 200px;
            -webkit-transition: background-color .3s ease-in-out;
            transition: background-color .3s ease-in-out
        }


        .card__list__item__row {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
        }

        .card__list__item__name {
            font-size: 16px;
            font-weight: 700;
            color: inherit;
            text-transform: capitalize
        }

        .card__list__item__numbers {
            padding-top: 40px;
            padding-bottom: 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between
        }

        .card__list__item__numbers__item {
            font-size: 16px;
            letter-spacing: 1.3px;
            font-weight: 700;
            color: inherit
        }

        .card__list__item__balance__title {
            font-size: 10px;
            font-weight: 700;
            color: #8791a0;
            text-transform: uppercase;
            margin-bottom: 6px
        }

        .card__list__item__balance__value {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .card__list__item__balance__value__currency {
            font-size: 14px;
            margin-right: 6px
        }

        .card__list__item__balance__value__amount {
            font-size: 18px;
            font-weight: 700;
            color: #1d222c
        }

        .card__list__item__valid__title {
            font-size: 10px;
            font-weight: 700;
            color: #8791a0;
            text-transform: uppercase;
            margin-bottom: 6px
        }

        .card__list__item__valid__value {
            font-size: 12px;
            letter-spacing: .9px;
            color: inherit;
            font-weight: 700;
            text-align: right
        }

        
        .card__list__item:first-child {
            border-radius: 12px;
            -webkit-box-shadow: 0 4px 8px -1px rgba(29,32,47,.22);
            box-shadow: 0 4px 8px -1px rgba(29,32,47,.22);
            background-color: #a3d4fb;
            color: #fff;
            overflow: visible
        }

        

        .card__list__item:first-child .card__list__item__balance__title,.card__list__item:first-child .card__list__item__balance__value__currency,.card__list__item:first-child .card__list__item__valid__title {
            color: #fff
        }

        .card__list__item:first-child .card__list__item__balance__value__amount {
            color: inherit
        }

        .card__list__item.freeze {
            opacity: .4
        }

        .vl {
          border-left: 1px solid #808080;
          height: 50px;
          left: 80%;
          margin-left: 60px;
          top: 0;
        }
    </style>

   
</head>

<body class="nk-body npc-crypto bg-white has-sidebar ">

    <div class="nk-app-root">
        <!-- main @s -->
        <div class="nk-main ">
             <!-- sidebar @s -->
            <div class="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand">
                        <a href="html/crypto/index.html" class="logo-link nk-sidebar-logo">
                            <img class="logo-light logo-img" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo">
                            <img class="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark">
                           
                        </a>
                    </div>
                    <div class="nk-menu-trigger mr-n2">
                      
                    </div>
                </div><!-- .nk-sidebar-element -->
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-body" data-simplebar>
                        <div class="nk-sidebar-content">
                            <div class="nk-sidebar-widget d-none d-xl-block">
                                
                               
                            </div><!-- .nk-sidebar-widget -->
                            <div class="nk-sidebar-widget nk-sidebar-widget-full d-xl-none pt-0">
                                
                            </div><!-- .nk-sidebar-widget -->

                            <div class="nk-sidebar-menu">
                                <!-- Menu -->
                                <ul class="nk-menu">
                                    
                                    <li class="nk-menu-item">
                                        <a href="html/dashboard.html" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-dashboard"></em></span>
                                            <span class="nk-menu-text">Home</span>
                                        </a>
                                    </li>

                                    <li class="nk-menu-item">
                                        <a href="html/plan.html" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-report-profit"></em></span> 
                                            <span class="nk-menu-text">Plans</span>
                                        </a>
                                    </li>


                                    <li class="nk-menu-item">
                                        <a href="html/accounts.html" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-user-c"></em></span>
                                            <span class="nk-menu-text">My Account</span>
                                        </a>
                                    </li>

                                    <li class="nk-menu-item">
                                            <a href="html/Payment_page.html" class="nk-menu-link">
                                                <span class="nk-menu-icon">
                                                <em class="icon ni ni-money"></em></span>
                                                <span class="nk-menu-text">Payment</span>
                                            </a>
                                    </li> 

                                    <li class="nk-menu-item">
                                            <a href="html/history.html" class="nk-menu-link">
                                                <span class="nk-menu-icon">
                                                <em class="icon ni ni-histroy"></em></span>
                                                <span class="nk-menu-text">History</span>
                                            </a>
                                    </li>                               
                                    
                                    <!--  -->
                                </ul>
                            </div><!-- .nk-sidebar-widget -->
                            
                        </div><!-- .nk-sidebar-content -->
                    </div><!-- .nk-sidebar-body -->
                </div><!-- .nk-sidebar-element -->
            </div>
            <!-- sidebar @e -->
            <!-- wrap @s -->
            <div class="nk-wrap ">
                <!-- main header @s -->
                <div class="nk-header nk-header-fluid nk-header-fixed is-light">
                    <div class="container-fluid">
                        <div class="nk-header-wrap">
                            <div class="nk-menu-trigger d-xl-none ml-n1">
                                <a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
                            </div>
                            <div class="nk-header-brand d-xl-none">
                                <h3 style="margin-left:40px">BANKS & CARDS</h3>
                            </div>

                            <div class="nk-header-news d-none d-xl-block">  
                                <h3 style="margin-left: 260px">BANKS & CARDS</h3>
                            </div>

                            <div class="nk-header-tools">
                                <ul class="nk-quick-nav">
                                    <li class="dropdown user-dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                            <div class="user-toggle">
                                                <div class="user-avatar sm">
                                                    <em class="icon ni ni-user-alt"></em>
                                                </div>
                                                
                                            </div>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                                            <div class="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                
                                            </div>
                                          
                                            <div class="dropdown-inner">
                                                <ul class="link-list">
                                                    <li><a href="html/crypto/profile.html"><em class="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                    
                                                </ul>
                                            </div>
                                            <div class="dropdown-inner">
                                                <ul class="link-list">
                                                    <li><a href="#"><em class="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- main header @e -->
                <!-- content @s -->
                <div class="nk-content nk-content-fluid">
                    <div class="container-xl wide-lg">
                        <div class="nk-content-body">
                            <div class="nk-block-head">
                               
                                
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabItem1">Cards</a>

                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabItem2">Banks</a>
                                    </li>
                                    
                                  
                                </ul>

                            </div><!-- .nk-block-head -->
                            
                            <div class="nk-block nk-block-lg">
                                      
                                            <div class="tab-content">
                                                    <div class="tab-pane active" id="tabItem1">      

                                                        <div class="card card-preview">
                                                            <div class="card-inner">
                                                                <div class="row">

                                                                    <div class="col-lg-5" >

                                                                        <a  data-toggle="modal" data-target="#modalDefault"style="font-weight: 500;color: #0066f5;font-size: 1rem;text-decoration: none;">
                                                                        <div class="card_style" >
                                                                           
                                                            
                                                                            <div class="card-inner">
                                                                            <p><h6 class="card-title" style="color: #0066f5;">+</h6></p>
                                                                            <p class="card-text">Add new card</p>
                                                                            </div>                                                   
                                                                        </div>
                                                                        </a>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    
                                                    <div class="tab-pane" id="tabItem2">
                                                        
                                                        <div class="card card-preview">
                                                            <div class="card-inner">
                                                                <div class="row">

                                                                    <div class="col-lg-5" >
                                                                        <a  href = "html/add_bank_details.html" style="font-weight: 500;color: #0066f5;font-size: 1rem;text-decoration: none;">
                                                                        <div class="card_style" >
                                                                           
                                                            
                                                                            <div class="card-inner">
                                                                            <p><h6 class="card-title" style="color: #0066f5;">+</h6></p>
                                                                            <p class="card-text">Add bank account</p>
                                                                            </div>                                                   
                                                                        </div>
                                                                        </a>
                                                                        <!-- Modal Trigger Code -->

                                                                    </div>   
                                                                                 
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                            </div>
                                     
                            </div>



<!-- Modal Content Code -->
<div class="modal fade" tabindex="-1" id="modalDefault">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                <em class="icon ni ni-cross"></em>
            </a>
            <div class="modal-header">
                <h5 class="modal-title">Add card</h5>
            </div>
            <div class="modal-body">
                <p>To add and verify your card ₦ 100 will be charged and saved into your plan.</p>
            </div>
            <div class="modal-footer bg-light">

                <a href="#" class="close" data-dismiss="modal" aria-label="Close">
                    <h6 style="color: blue">Cancel</h6>
                </a>
                
                <Button class = "btn btn-primary">Proceed</button>
            </div>
        </div>
    </div>
</div>

                           

                        </div>
                    </div>
                </div>
                <!-- content @e -->
                <!-- footer @s -->
                <div class="nk-footer nk-footer-fluid">
                    <div class="container-fluid">
                        <div class="nk-footer-wrap">
                            <div class="nk-footer-copyright"> &copy; 2020 DashLite. Template by <a href="#">Softnio</a>
                            </div>
                            <div class="nk-footer-links">
                                <ul class="nav nav-sm">
                                    <li class="nav-item"><a class="nav-link" href="html/terms.html">Terms</a></li>
                                    
                                    <li class="nav-item"><a class="nav-link" href="html/howitworks.html">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- footer @e -->
            </div>
            <!-- wrap @e -->
                
            
        </div>
        <!-- main @e -->
    </div>

    <!-- app-root @e -->
    <!-- JavaScript -->
    <script src="./assets/js/bundle.js?ver=1.8.0"></script>
    <script src="./assets/js/scripts.js?ver=1.8.0"></script>
    <script src="html/file.js"></script>
    
</body>

</html>