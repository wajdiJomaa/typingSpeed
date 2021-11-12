# Blog-CS50-Recap & Final Project

Hi there, this blog is about what I learned in cs50 and my final project.

## What is cs50?

Among all programming courses, maybe cs50 is the most popular, especially for beginners, in 10 weeks you will learn different topics from Scratch to C, python,  SQL, frontend, and backend, you have to solve some challenging problems every week, and at the end of the course, you have to create a final project.  

## CS50 weeks briefly

1. Week 0: Some computer science basics(Binary, Ascii, Images...) plus 
a simple introduction to the programming world with scratch

2. Week 1 -> week 5: You will learn C programming starting from the basics
(data types, loops, pointers, files, algorithms...) then you will learn about data structures(linked lists, tree, hash tables, tries) and you have to implement some of them. The problem sets in those weeks are the most difficult in the course.

3. Week 6: After learning the low-level C, you will learn python a high-level language, with simple syntax and will not let you worry about some problems like data allocation and segmentation faults, this week focus on some python topics like dictionaries and, teach you how to deal with CSV files which are possible in C but way harder.

4. Week 7: After introducing CSV files in week 6, this week will show you a more efficient way to store data. You will learn the basics of relational databases, SQL, SQLite. you will enjoy solving the problems. 

5. Week 8: Discover the basics of the web(HTTP, TCP/IP...) and how to create a simple website with HTML, CSS, and javascript with some bootstrap.

6. Week 9: You will learn how to build a fully functional website with python-flask, in addition to what you have learned in previous weeks(SQLite, HTML, Js...).

## CS50 final project

To start with the final project you have different choices :
 
1. A command-line app.
2. A website.
3. A video game.

First, I was very confused about what to do, I was planning to create a website but I have no ideas, I spent some time thinking then I decided to implement a typing speed website.

## the typing speed website 

Weekly, I spend some time using typing speed websites to increase my typing speed because I'm learning to program and I want to be a fast typer, so when I was searching for some ideas I thought that maybe I could create my own typing speed website.

The website has different pages as follows :


### Register

First, I created a page to register users or a register route, this idea was in the problem set of week 10, so this helped me.

### Login and Logout

Creating the login page wasn't a hard task also, you should just check if the user's information is in your database and if the password is correct, then put the user id in the Session.

The logout was just a redirect to the login page, and the login page will clear the session for the user.

### Typing speed page

The most challenging page was the typing route, I tried different things, then i decided the following :

1. A paragraph is displayed with big font size in the middle of the screen.
2. The user should type the paragraph in an input field. I tried to listen to the keyboard events, but I think the input field is better.
3. you should press a start button before you start, and after pressing the button you have to wait for 5 seconds.
4. when you start typing, if you type things correctly in the input field they will be colored blue, but if you got a typo the letter will be colored red, and you should fix it before you complete typing, the input field is cleared after typing each word.
5. when you finish, the web app will calculate your typing speed, and display it.

### Leaderbords page 

Finally, the leaderboards page will grab the top 10 fastest users from the database and display them.

## What I have learned from CS50 and what I think about it

I want to thank Harvard University, David Malan, and the rest of the cs50 team for making this great course available online and free. In this course, I've learned the basics of programming and computer science, and what makes the course challenging are the problem sets, the majority of problems were somehow related to real-life problems, and were not easy to solve,  sometimes I would feel frustrated when I get stuck, or when I have a lot of errors in my code, especially when the error is a "segmentation fault". 

But thank god after about 10 weeks of work, I watched all lectures and solved all the problems. Finally, I would say thanks to my teacher who helped me to complete the course.

## Date

I completed this course in the summer of 2021, before starting my third year of computer science at the Lebanese university.