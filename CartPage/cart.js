var cart = JSON.parse(localStorage.getItem("myCart")) || [];
  if(cart.length>0){
    displayCart();
    cartTotal();
  }

  else{
    var head = document.getElementById("head").textContent = "Your Cart is Empty!"
    document.getElementById("child-Price").style.display = "none";
    document.getElementById("checkOut").style.display = "none";
    document.querySelector("p").style.display = "none";
  }
 //
  function displayCart(){
    
    cart.map(function(data,ind){

        const fetchedData = async () => {
            try{
                let res = await fetch(`https://electon-backend-data.onrender.com${data}`);
                let elem = await res.json();
                console.log(elem);

                var div = document.createElement("div");
                div.setAttribute("id","div-box")
                var image = document.createElement("img");
                image.setAttribute("src",elem.image);
                image.setAttribute("id","imghover");

                var divOfPara = document.createElement("div");
                var para1 = document.createElement("p");
                para1.textContent = elem.title;
                para1.setAttribute("id","parahover")
                var para2 = document.createElement("p");
                para2.textContent = "$" + elem.price;

                var button = document.createElement("button");
                button.textContent = "Remove from cart";
                button.setAttribute("id","remove-btn")
                button.addEventListener("click",function(){
                  // localStorage.removeItem("")
                  deleteItem(elem,ind);
                });

                divOfPara.append(para1,para2,button);
                div.append(image,divOfPara);
            
                document.getElementById("parent").append(div);
            }catch(err){
                console.log(err);
            }
        }
        fetchedData(); 
    })
} 



  function deleteItem(elem,ind){
    cart.splice(ind,1);
    localStorage.setItem("cart-list",JSON.stringify(cart));
    window.location.reload();
    displayCart();
  }

  function cartTotal(){
    console.log("cart page", cart)
            
    let total = 0;
    cart.map(function(data){

        const fetchedData = async () => {
            try{
                let res = await fetch(`https://electon-backend-data.onrender.com${data}`);
                let elem = await res.json();
                console.log(elem, "elem")
                total = total + (Number(elem.price));
                console.log(total,"total");
                localStorage.setItem("totalCost",JSON.stringify(total));
            }catch(err){
                console.log(err);
            }
        }
        fetchedData(); 
    })

    let newTotal = JSON.parse(localStorage.getItem("totalCost"))
    console.log("new total",total)
    document.getElementById("subtotal").append("$ "+newTotal);
}




document.getElementById("check-out-btn").addEventListener("click",() =>{
    location.href = "../Payment/payment.html";
})
    
  
  