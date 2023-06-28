
function sideBar(){
    return `<div id="sideBar">
    <div id="sort">
        <h3>sort by Price</h3>
        <label>
            <input type="checkbox" id="lth">
            low to high
            <br>
            <input type="checkbox" id="htl">
            high to low
        </label>
    </div>
    <br>

    <div id="availibilty">
        <h3>Availibility</h3>
        <p>in Stock ✅</p>
    </div>
    <br>

    <div id="brand">
        <h3>Brand</h3>
        <label>
            <input type="checkbox" id="lenovo">
            Lenovo
            <br>
            <input type="checkbox" id="hp">
            Hp
            <br>
            <input type="checkbox" id="apple">
            Apple
            <br>
            <input type="checkbox" id="canon">
            Canon
            <br>
            <input type="checkbox" id="noise">
            Noise
            <br>
            <input type="checkbox" id="boat">
            Boat
        </label>
    </div>
    <br>

    <div id="color">
        <h3>Color</h3>
        <label>
            <input type="checkbox" id="lenovo">
            Red
            <br>
            <input type="checkbox" id="hp">
            Yellow
            <br>
            <input type="checkbox" id="apple">
            Black
            <br>
            <input type="checkbox" id="canon">
            Green
            <br>
            <input type="checkbox" id="noise">
            Pink
            <br>
            <input type="checkbox" id="boat">
            Neon
        </label>
    </div>
    <br>

    <div id="size">
        <h3>Size</h3>
        <label>
            <input type="checkbox" id="lenovo">
            Small
            <br>
            <input type="checkbox" id="hp">
            Medium
            <br>
            <input type="checkbox" id="apple">
            Large
            <br>
            <input type="checkbox" id="canon">
            X-large
            <br>
            <input type="checkbox" id="noise">
            XX-large
        </label>
    </div>
</div>`
}

export default sideBar