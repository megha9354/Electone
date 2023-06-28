

const fetchedDetails = async () => {
    try{
        let laptopId = localStorage.getItem("laptopId");
        let res = await fetch (`https://electon-backend-data.onrender.com/Laptop/${laptopId}`)
        let details = await res.json();
        console.log(details);
        displayData(details);
    }catch(err){
        console.log(err);
    }
}

const displayData = ((data) => {
    let cartArr = JSON.parse(localStorage.getItem("myCart")) || [];
    document.getElementById("bottom").innerHTML = "";

    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","upper-div");

    let imagediv = document.createElement("div");
    imagediv.setAttribute("id","image-div");
    let image = document.createElement("img");
    image.setAttribute("id","myImage");
    image.src = data.image;
    imagediv.append(image);

    let detaildiv = document.createElement("div");
    detaildiv.setAttribute("id","detail-div");

    let availibilty = document.createElement("h3");
    availibilty.textContent = "Availibilty ✅";

    let title = document.createElement("h2");
    title.textContent = data.title;

    let price = document.createElement("h2");
    price.textContent ="Rs. " + data.price;

    let btn = document.createElement("button");
    btn.setAttribute("id","cart-button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", () => {
        let laptopId = localStorage.getItem("laptopId");
        cartArr.push(`/Laptop/${laptopId}`)
        localStorage.setItem("myCart",JSON.stringify(cartArr));
        alert("Item Added to Cart Successfully!");
    })

    detaildiv.append(title,availibilty,price,btn);
    upperdiv.append(imagediv,detaildiv);

    let bottomdiv = document.createElement("div");
    bottomdiv.setAttribute("id","bottom-div")
    let desc = document.createElement("h2");
    desc.textContent = "Description"
    desc.style.textDecoration = "underline";
    let description = document.createElement("h3");
    description.textContent = data.description;
    bottomdiv.append(desc,description);

    document.getElementById("bottom").append(upperdiv,bottomdiv);
})

function searchProd () {
    document.getElementById("search-btn").addEventListener("click",() => {

    let input = document.getElementById("search-inp").value;
    console.log("done")
    location.href = `${input}.html`
})
}


export {fetchedDetails,displayData,searchProd};