var input = document.getElementById("input");
var btn = document.getElementById("btn");
var buttons = document.getElementById("buttons");
var words = document.getElementsByTagName("span");
var w_c = 0;
var word_c = parseInt(document.getElementById("word_c").textContent);
var startDate;
var results = document.getElementById("results");


function again(e)
{
    location.reload();
}


function handle(e)
{
    var value = e.target.value;
    var current_word  = words[w_c].textContent;
    for(var i=0;i<value.length;i++)
    {
        words[w_c].classList.remove("red");
        if (value[i] == current_word[i])
        {
            if (value[i]== ' ')
            {
                words[w_c].classList.add("green");
                w_c ++;
                input.value="";
                if (w_c == words.length){
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
        }
        else
        {
            words[w_c].classList.add("red");
            break;
        }
    }
}

btn.addEventListener("click", function(e){
    input.addEventListener("input",handle);
    input.focus();
    startDate = new Date().getTime();
    e.target.classList.add("hidden");})

