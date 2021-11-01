# Blog-CS50-Recap & Final Project

Hi there, this blog is about what i learned in cs50 and what i did for the final project.

## What is cs50?

Among all programming courses maybe cs50 is the most popular, especially for beginners, in 10 weeks you will learn different topics from Scratch to C, python,  SQL, frontend, and backend, you have to solve some challenging problems every week, and at the end of the course you have to build a final project.  

## CS50 weeks briefly

1. Week 0: Some computer science basics(Binary, Ascii, Images...) plus 
a simple introduction to programming world with scratch

2. Week 1 -> week 5: You will learn C programming starting from the basics
(data types, loops,pointers, files, algorithms...) then you will learn about data structures(linked lists, tree, hash tables, tries) and you have to implement some of them. The problem sets in those weeks are the most difficult in the course.

3. Week 6: After learning the low level C, you will learn python a high level language with simple syntax and will not you worry about segmentation faults, this week focus on some python topics like dictionnaries and
teach you how to deal with csv files which is possible in C but way harder.

4. Week 7: After introducing csv files in week 6, this week will show you a more efficient way to store data. You will learn the basics of relational databases, SQL, sqlite. 

5. Week 8: Discover the basics of the web(http,tcp/ip...) and how to create a simple website with html, css and javascript with some bootstrap.

6. Week 9: You will how to build a fully functional website with python-flask
and by using what you have learned in previous weeks(sqlite,html,css,js...)

## CS50 final project

To start with the final project you have different choices :
 
1. A command line app.
2. A webiste.
3. A video game.

and a lot of different choices. First i was very confused what to do, i was planning to create a website but i have no ideas, i spent some time thinking 
then i decided to do a typing speed website.

## the typing speed website 

I spend some of my time using typing speed websites to increase my typing speed because i'm learning programming, so when i was searching for some ideas i thought that maybe i could create my own typing speed website.

### Register

First i created a page to register users or a register route, this idea was in the problem set of week 10, so it didn't take a lot of time.

### Login and Logout

Creating the login page wasn't a hard task also, you should just check if the user information are in your database and if the password is correct, then put the user id in the session.

The logout was just a redirect to the login page, and the login page will clear the session for the user.

### Typing speed page

The most challenging page was the typing speed route, i tried different things, then i chose the following :

1. The text is displayed with big font-size in the middle of the screen.
2. The user should type the text in an input field i tried to listen to      the keyboard events but i think the input field is better.
3. you should press a start button before you start, and after pressing the button you have to wait for 5 seconds.
4. when you start typing, if you type things correctly in the input field they will be colored blue, but you have a typo in a letter it will has a red color, and you should fix it before you complete typing, the input field is cleared after completing each word.
5. when you finish the web app will calculate your typing speed.

### Leadbords page 

Finally the leadbords page will grab top 10 fastest user from the database and display them.