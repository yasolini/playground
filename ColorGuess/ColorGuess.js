window.onload = () => {
    const button = document.getElementById("button");
    const hu = document.getElementById("hu");

    let colors = new Map();
    colors.set('red', (255, 0, 0));
    colors.set('pink', (204, 0, 102));
    colors.set('yellow', (255, 255, 51));


    button.addEventListener("click", () => {
        hu.innerHTML = "";
        let min = 0;
        let max = 255;

        function RandomColor(min, max) {
           return Math.floor(Math.random() * (max - min + 1)) + min;
        } 

        let r = RandomColor(min, max);
        let g = RandomColor(min, max);
        let b = RandomColor(min, max);

        

        button.style = `background-color: rgb(${r}, ${g}, ${b})`;
        console.log("r" + r, "g" + g, "b" + b);
        

        if(colors.get("red") === (r,g,b) || colors.get("pink") === (r,g,b) || colors.get('yellow') === (r,g,b)){
            console.log("yes");
            hu.innerHTML = "Du hast eine Lieblingsfarbe gefunden. Glückwunsch!"
        };        
    });
};