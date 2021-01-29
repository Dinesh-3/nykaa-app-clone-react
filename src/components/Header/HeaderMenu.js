const HeaderMenu = () =>  (
        <div class="header_container">
        <div class="header_logo">
            <img src="./assets/images/nykaa_logo_pink.svg" alt="nykaa logo" srcset="" />
        </div>
        <div class="header_nav">
            <a>CATEGORIES</a>
            <a>BRANDS</a>
            <a>NYKAA FASHION</a>
            <a>BEAUTY ADVICE</a>
            <a>NYKAA NETWORK</a>
        </div>
        <div class="search_box media_input">
            <div class="input_box">
                <i class="bx bx-search"></i>
                <input autocomplete="off" placeholder="Search for Products, Brands etc " value="" />
            </div>
        </div>
        <div class="accounts">
            <a href=""> <i class='bx bxs-user'></i> <span>Account</span></a>
            <a href=""> <i class='bx bxs-lock-alt'></i> </a>
        </div>
    </div>
    )
export default HeaderMenu;    