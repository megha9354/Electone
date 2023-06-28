

document.getElementById("lth").addEventListener("change", () =>{
    if (this.checked) {
        fetched_lth();
    }
    else{
        fetchedData();
    }
})





const displayData = ((data) => {
    let mainSection = document.getElementById("myproduct");
    mainSection.innerHTML = "";
    
    data.forEach((elem) => {
        let div = document.createElement("div");
        div.setAttribute("id","box");
        div.addEventListener("click", () => {
            localStorage.setItem("laptopId",elem.id)
            location.href = "detailslaptop.html"
        })

        let upperDiv = document.createElement("div");
        upperDiv.setAttribute("id","imagediv")
        let image = document.createElement("img");
        image.setAttribute("id","laptop-img")
        image.src = elem.image;
        upperDiv.append(image);

        let bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","detail-div")
        let title = document.createElement("h4");
        title.setAttribute("class","laptop-title")
        title.textContent = elem.title;
        let br = document.createElement("br");
        let price = document.createElement("h2");
        price.textContent = "Rs. " + elem.price;

        bottomDiv.append(title,br,price);
        div.append(upperDiv,bottomDiv);
        mainSection.append(div);
    })
})