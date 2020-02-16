hodlbutton = (function(){

    function makeButton(text) {
        var btn = document.createElement("a");
        btn.classList.add("hodlbutton");
        
        btn.style.color = "black";
        btn.style.textDecoration = "none";
        btn.style.height = "2em";
        btn.style.height = "2em";
        btn.style.width = "8em";
        btn.style.backgroundColor = "white";
        btn.style.display = "grid";
        btn.style.gridTemplateColumns = "30% 70%";
        btn.style.border = "0.3em ridge #7c7cfd";
        btn.style.background = "#c3c3ff";
        btn.style.borderRadius = "1em";
        
        var circle = document.createElement("div");
        circle.classList.add("hodlbuttonCircle");
        circle.style.height = "1.5em";
        circle.style.width = "1.5em";
        circle.style.margin = "auto";
        circle.style.border = "0.1em solid black";
        circle.style.background = "#7c7cfd";
        circle.style.borderRadius = "50%";
        
        var content = document.createElement("div");
        content.classList.add("hodlbuttonContent");
        content.style.margin = "auto";
        content.style.verticalAlign = "auto";
        content.style.height = "1em";

        content.innerText = text;
        btn.appendChild(circle);
        btn.appendChild(content);

        return btn;
    }

    function create(areaSelector, message, address, amount) {
        var container = document.querySelector(areaSelector);
        container.innerHTML = "loading...";
        var text = message
        if (message.length > 12)
            text = message.substr(0,9) + "...";
        var btn = makeButton(text);

        if (address) {
            var url= "bitcoin:" + encodeURIComponent(address) + "?label=" + encodeURIComponent(message);
            if(amount)
                url = url + "&amount=" + encodeURIComponent(amount);
            btn.href = url;
        }
        else {
            btn.onclick = (e)=>{alert("Just HODL, bro!")};
        }

        container.innerHTML = "";
        container.appendChild(btn);
    }

    return { create: create }
})();