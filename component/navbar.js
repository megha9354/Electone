function navbar(){

    return `<div id="upper-of-nav">
    <div>
        <p>Need help? Call us (+91) 9876543210</p>
    </div>

    <div id="upper-nav-right">
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <p id="location">Our store</p>
        </div>
        <div>
            <i class="fa-solid fa-truck"></i>
            <p>Track your order</p> 
        </div>
    </div>
</div>


<div id="nav">
    <div id="nav-1">
        <div id="first">
            <div id="leftPart">
                <i class="fa-solid fa-bolt-lightning" id="bolt-logo"></i>
                <h2>Electon</h2> 
            </div>
            
            <div id="righPart">
                <input type="text" id="search-inp" placeholder="Search">
                <button id="search-btn">Search</button>
                
            </div>
        </div>
        
        <i id="bars" class="fa-solid fa-bars"></i>
        
        
        <div id="second">
            <i class="fa-regular fa-user"></i>
            <p><a href="../project/signin.html">Sign in </a></p>
            <p><a href="../project/signup.html">Sign up </a></p>
            <i class="fa-regular fa-heart"></i>
            <a href="../CartPage/cart.html"><i class="fa-solid fa-cart-shopping"></i></a>           
        </div>
    </div>

    <div id="nav-2">
        <div id="categories">
            <ul>
                <li class="browse"><a href="../mainpage/index.html">Home</a> </li>
                <li class="newNav">Categories</i>
                <div class="sub-menu">
                    <ul>
                        <li><a href="../products/laptop.html">Laptop</a></li>
                        <li><a href="#">PC</a></li>
                        <li><a href="../products/camera.html">Camera</a></li>
                        <li><a href="#">Headphone</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Refrigerator</a></li>
                        <li><a href="#">Fan</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">LCD</a></li>
                        <li><a href="#">LED</a></li>
                    </ul>
                </div>
            </li>
                   
                 <li class="newNav"><a href="#">Catalog</a>
                    <div class="sub-menu">
                        <ul>
                            <li><a href="#">Brand</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Availibility</a></li>
                            <li><a href="#">Customer Rating</a></li>
                            <li><a href="#">Products</a></li>
                        </ul>
                    </div>
                 </li>
                 <li class="newNav"><a href="#">Blog</a>
                    <div class="sub-menu">
                        <ul>
                            <li><a href="#">LG</a></li>
                            <li><a href="#">Mitshubishi</a></li>
                            <li><a href="#">Bosch</a></li>
                            <li><a href="#">Boat</a></li>
                            <li><a href="#">Noise</a></li>
                        </ul>
                    </div>
                </li>
                 <li class="newNav"><a href="#">Pages</a>
                    <div class="sub-menu">
                        <ul>
                            <li><a href="#">page1</a></li>
                            <li><a href="#">Page2</a></li>
                            <li><a href="#">Page3</a></li>
                            <li><a href="#">Page4</a></li>
                            <li><a href="#">Page5</a></li>
                        </ul>
                    </div>
                 </li>
                 <li class="newNav"><a href="#">About us</a>
                    <div class="sub-menu">
                        <ul>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Our Jobs</a></li>
                            <li><a href="#">Headquarter</a></li>
                            <li><a href="#">Investors</a></li>
                        </ul>
                    </div>
                 </li> 
                </ul>
        </div>

        <div id="free-return">
            <h3>30 Days Free Return</h3>
        </div>
    </div>
</div>`
}
export default navbar;