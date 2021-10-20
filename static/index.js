var input = document.getElementById("input");
var btn = document.getElementById("btn");
var buttons = document.getElementById("buttons");
// var words = document.getElementsByTagName("span");
var letters = document.getElementsByClassName("letter");
var w_c = 0;
var l_c = 0;
var word_c = parseInt(document.getElementById("word_c").textContent);
console.log(word_c);
var startDate;
var results = document.getElementById("results");


function again(e)
{
    location.reload();
}


function handle(e)
{
    var value = e.target.value;
    l_c = w_c;
    ///////////////////////////////////////////
    do{
        var current_letter  = letters[l_c].textContent;
        letters[l_c].classList.remove("red");
        letters[l_c].classList.remove("green");
        l_c++;  
    }while(current_letter.charCodeAt(0) != 160);
    //////////////////////////////////////
    l_c = w_c;
    for (var i = 0;i < value.length;i++)
    {
        var current_letter  = letters[l_c].textContent;
        if (current_letter.charCodeAt(0) == 160)
        {
            if(value[i] == " ")
            {
                letters[l_c].classList.add("green");
                w_c = l_c + 1;
                input.value = "";
                if (w_c == letters.length)
                {
                    console.log("end");
                    var seconds = (new Date().getTime() - startDate)/1000;
                    input.removeEventListener("input",handle);
                    buttons.innerHTML ='<button type="button" class="btn px-4 py-2" id="btn2">Play again</button>';
                    btn2 = document.getElementById("btn2");
                    btn2.addEventListener("click",again);
                    var minutes = seconds/60;
                    var wpm = word_c / minutes;
                    results.innerHTML = "<p class='result'>Your average speed is : "+ Math.round(wpm) +" wpm</p>"
                    //send  a request to flask app with the result
                    var data = {'score':wpm};
                    fetch("/score", {
                        method: "POST", 
                        body: JSON.stringify(data)
                        }).then(res => {
                    console.log("Request complete! response:", res);
                    });
                } 
            }
            else {
                letters[l_c].classList.add("red");
                break;
                }
        }
        else if (value[i] == current_letter)
        {
            letters[l_c].classList.add("green");
            l_c += 1;
        }
        else
        {
            letters[l_c].classList.add("red");
            break;
        }
    }
    
    fetch("/score", {
        method: "POST", 
        body: JSON.stringify(data)
        }).then(res => {
    console.log("Request complete! response:", res);
    });
                
                }
// function handle(event)
// {
//     var l = words[w_c].textContent;
//     var key = event.key;
//     if(l.charCodeAt(0) == 160)
//     {
//         if (key == " ")
//         {
//             words[w_c].classList.add("green");
//             words[w_c].classList.remove("red");
//             w_c++;
//             if (w_c == words.length)
//             {
//                     var seconds = (new Date().getTime() - startDate)/1000;
//                     console.log(seconds);
//                     document.removeEventListener("keypress",handle);
//                     buttons.innerHTML ='<button type="button" class="btn px-4 py-2" id="btn2">Play again</button>';
//                     btn2 = document.getElementById("btn2");
//                     btn2.addEventListener("click",again);
//                     var minutes = seconds/60;
//                     var wpm = word_c / minutes;
//                     results.innerHTML = "<p class='result'>Your average speed is : "+ Math.round(wpm) +" wpm</p>"
//                     //send  a request to flask app with the result
//                     var data = {'score':wpm};
//                     fetch("/score", {
//                     method: "POST", 
//                     body: JSON.stringify(data)
//                     }).then(res => {
//                     console.log("Request complete! response:", res);
//                     });
//                 }   
//         }
//     }
//     else if (key == l) 
//     {
//         words[w_c].classList.add("green");
//         words[w_c].classList.remove("red");
//         w_c++;
//     }
//     else{
//         words[w_c].classList.add("red");
//     }
// }

btn.addEventListener("click", function(e){
    input.addEventListener("input",handle);
    input.focus();
    // document.addEventListener("keypress",handle);
    startDate = new Date().getTime();
    e.target.classList.add("hidden");})

