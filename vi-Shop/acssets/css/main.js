        const product = document.querySelector('.product-js')
        product.addEventListener('click',function(event) {
            event.stopPropagation()
        })
        // heart
        var likebtn = document.querySelector('.like-js')
        var likebtn2 = document.querySelector('.like-js2')
        var likebtn3 = document.querySelector('.like-js3')
        var likebtn4 = document.querySelector('.like-js4')
        var likebtn5 = document.querySelector('.like-js5')
        var likebtn6 = document.querySelector('.like-js6')
        var likebtn7 = document.querySelector('.like-js7')
        var likebtn8 = document.querySelector('.like-js8')
        var likebtn9 = document.querySelector('.like-js9')
        var likebtn10 = document.querySelector('.like-js10')
        var likebtn11 = document.querySelector('.like-js11')
        var likebtn12 = document.querySelector('.like-js12')
        var likebtn13 = document.querySelector('.like-js13')
        var likebtn14 = document.querySelector('.like-js14')
        var likebtn15 = document.querySelector('.like-js15')
        
        likebtn.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn2.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn3.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn4.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn5.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn6.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn7.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn8.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn9.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn10.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn11.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn12.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn13.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn14.addEventListener('click',function() {
            this.classList.toggle('red')
        })
        likebtn15.addEventListener('click',function() {
            this.classList.toggle('red')
        })
         // End heart
         //  Đăng ký đăng nhập
        const DangkyBtn = document.querySelector('.js-dangky-btn')
        DangkyBtn.addEventListener('click',function() {
            modal.classList.add('open')
        })
        
        const DangkymenuBtn = document.querySelector('.dangky-btn-js')
        DangkymenuBtn.addEventListener('click',function(){
            modal.classList.add('open')
        })
       
        const close = document.querySelector('.back-js')
        close.addEventListener('click',function() {
            modal.classList.remove('open')
        })
        const modal = document.querySelector('.moda-js')
        modal.addEventListener('click',function() {
            modal.classList.remove('open')
        })
        const modatop1 = document.querySelector('.moda-top-js1')
        modatop1.addEventListener('click',function(event) {
            event.stopPropagation()
        })
        const dangnhapBtn = document.querySelector('.dangnhap-js')
        dangnhapBtn.addEventListener('click',function() {
            Login.classList.add('open1')
        })
        const Dangnhapmenubtn = document.querySelector('.dangnhap-btn-js')
        Dangnhapmenubtn.addEventListener('click',function() {
            Login.classList.add('open1')
        })
        const close1 = document.querySelector('.back-btn-js')
        close1.addEventListener('click',function() {
            Login.classList.remove('open1')
        })
        const Login = document.querySelector('.login-js')
        Login.addEventListener('click',function() {
            Login.classList.remove('open1')
        })
        const modatop = document.querySelector('.moda-top-js')
        modatop.addEventListener('click',function(event) {
            event.stopPropagation()
        })
      
    
        const menubar = document.querySelector('.menu-btn')
        const menu = document.querySelector('.nav-bar')
        const close2 = document.querySelector('.close-btn')
        
        menubar.addEventListener ('click',function() {
            menu.classList.add('open')
        })
        close2.addEventListener('click',function(){
            menu.classList.remove('open')
        })
        DangkymenuBtn.addEventListener('click',function(){
            menu.classList.remove('open')
        })  
        Dangnhapmenubtn.addEventListener('click',function(){
            menu.classList.remove('open')
        }) 
         // End Đăng ký đăng nhập
         // Hiệu ứng slide sử dụng thử viện slick           
        $(document).ready(function () {
            $(".slick").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
                },
            ],
            });
        });
        
        //  End slick 
        // đăng nhập Admin 
        var arrayUser = []
        function dangky() {
            var user_Name = document.getElementById("Name").value
            var user_pass = document.getElementById("Password").value
           var  user = {
                name :user_Name,
                pass :user_pass
            }
            var user1 = {
                name :"admin",
                pass :"12345"
            }
            arrayUser.push(user)
            arrayUser.push(user1)
        
            console.log(arrayUser)

        }
        // Đăng Nhập
        function dangnhap() {
            Login.classList.remove('open1')
            var email = document.getElementById("email").value
            var pass = document.getElementById("pass").value
            if(email=="admin"&& pass=="12345"){  
                    document.getElementById("dangky").style.display = "none"
                    document.getElementById("dangnhap").style.display = "none"
                    // document.getElementById("taikhoan").style.display = "none"
                    var admin = document.querySelector(".admin")
                    admin.classList.add('open3') 
            }
            for(let i=0;i<arrayUser.length;i++) {
                if(arrayUser[i].name==email && arrayUser[i].pass==pass){
                        document.getElementById("dangky").style.display = "none"
                        document.getElementById("dangnhap").style.display = "none"
                        var admin1 = document.querySelector(".admin1")
                        admin1.classList.add('open4') 
                        document.getElementById("taikhoan").innerHTML=email
                    
                }
                
                
            }
            
        }
        // Thêm sản phẩm
        var add = document.querySelector(".addproduct")
        add.addEventListener('click',function(){
           var productName = prompt("productname: ")
           var priceOld = prompt("price-Old: ")
           var priceCurent = prompt("price-curent: ")
         
           document.getElementById("addsp").style.display = "block"
           document.getElementById("ptname").innerHTML = productName
           document.getElementById("old").innerHTML = priceOld
           document.getElementById("curent").innerHTML = priceCurent
           
        })
