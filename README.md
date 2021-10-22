# typingSpeed
This is my final project for cs50 introduction to computer science
a typing speed website.
the website has 6 routes or pages :
1. A register route where you can register for a new account by applying a form(username/passorwd) it uses js regex to do some checks.
2. A login page it will check if the username and password match then create a session for the user.
3. The main page: this page will send a http request to this website "http://metaphorpsum.com/paragraphs/1" as a response it will get a random paragraph and display it to the user after pressing the start button a timer start and the user should write this paragraph in an input field as fast as possible after completing the timer stop and the average typing speed is calclated with a simple math word_number/time(minutes) 
and a request with the typing speed will be sent to the app to update the database.well let's talk a little about what happens when the user is typing,let's say the user has to type the word "hello "
after typing the first letter "h"
correctly it will colored with a blue color then "e","l","l" but instead of pressing "o" the user press "p" so it will be colored with "red" marking his fault and the "o"
should be fixed or you can't complete typing other letters,
after typing "hello" correctly and hitting space congrats now the input field is cleared and you can proceed to the next word and the same thing will repeat until you finish. I tried another methods for checking but i think this one is the best atleast for me. finally we have just one small problem remaining
the annoying touchpad random clicks that blur the input so i added a simple line of code to the inputfield
"onblur = this.focus()" it helps a little bit.
4. the score page well you wont see this page at all, just when a game is finished this route will receive the score to update the database.
5. the leadboards where you can the top 10 users with highest speed.
6. the logout nothing specific about this route just clear the session.

That's all enjoy!.
