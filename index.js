function run() {
    let a = parseInt(document.getElementById('first').value);
    let b = parseInt(document.getElementById('second').value);
    let c = parseInt(document.getElementById('third').value);
    let d = parseInt(document.getElementById('fourth').value);
    let mul = c *= d;
    let result = a += b += mul;

    //  innerHTML Property:

    if (!isNaN(result)) {
        document.getElementById("error-elem").innerHTML = "<span>Yay you did it, you have no errors</span>";
        document.getElementById("result-elem").innerHTML = "<span>" + result + "</span>";
    } else if (result) {
        document.getElementById("error-elem").innerHTML = "<span>Yay you did it, you have no errors</span>";
        document.getElementById("result-elem").innerHTML = "<span>" + result + "</span>";  
    }else{
        document.getElementById("error-elem").innerHTML = "<span>The value introduced is not a number</span>";
        document.getElementById("result-elem").innerHTML = "<span>Try again with numbers</span>";      
    }

    // replaceChild() Method:
        // if (!isNaN(result)) {
        //     let esp = document.createElement("span");
        //     esp.id = "error-elem";
        //     let esp_content = document.createTextNode('Yay you did it, you have no errors');
        //     esp.appendChild(esp_content);
        //     let oldesp = document.getElementById("error-elem");
        //     let parentTd = oldesp.parentNode;
        //     parentTd.replaceChild(esp, oldesp);

        //     let esp2 = document.createElement("span");
        //     esp2.id = "result-elem";
        //     let esp2_content = document.createTextNode(result);
        //     esp2.appendChild(esp2_content);
        //     let oldesp2 = document.getElementById("result-elem");
        //     let parentDiv = oldesp2.parentNode;
        //     parentDiv.replaceChild(esp2, oldesp2);
        // } else if (result) {
        //     let esp3 = document.createElement("span");
        //     esp3.id = "error-elem";
        //     let esp3_content = document.createTextNode('The value introduced is not a number');
        //     esp3.appendChild(esp3_content);
        //     let oldesp3 = document.getElementById("error-elem");
        //     let parentTd = oldesp3.parentNode;
        //     parentTd.replaceChild(esp3, oldesp3);

        //     let esp4 = document.createElement("span");
        //     esp4.id = "result-elem";
        //     let esp4_content = document.createTextNode(result);
        //     esp4.appendChild(esp4_content);
        //     let oldesp4 = document.getElementById("result-elem");
        //     let parentDiv = oldesp4.parentNode;
        //     parentDiv.replaceChild(esp4, oldesp4);
        // }  else {
        //     let esp3 = document.createElement("span");
        //     esp3.id = "error-elem";
        //     let esp3_content = document.createTextNode('The value introduced is not a number');
        //     esp3.appendChild(esp3_content);
        //     let oldesp3 = document.getElementById("error-elem");
        //     let parentTd = oldesp3.parentNode;
        //     parentTd.replaceChild(esp3, oldesp3);

        //     let esp4 = document.createElement("span");
        //     esp4.id = "result-elem";
        //     let esp4_content = document.createTextNode("Try again with number");
        //     esp4.appendChild(esp4_content);
        //     let oldesp4 = document.getElementById("result-elem");
        //     let parentDiv = oldesp4.parentNode;
        //     parentDiv.replaceChild(esp4, oldesp4);
        // } 
  
}
