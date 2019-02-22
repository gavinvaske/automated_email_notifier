# automated_email_notifier

## Context
This repository was created in store my solution to a problem outlined in a coding interview. The problem statement given is listed below and my problem solving processes is shown step-by-step below it.

## Problem Statement 
I get an email from my local library whenever I check out books. The email gives calendar date, if my account currently owes any fees, title of book, etc. I need to remind myself to take back the book. I personally use my calendar on my phone for everything. 

## Problem Solving Process
1) Given this problem, my first step is to think of a niave solution. Something that would be simple to implement and get me close to the required solution.

I am familiar with a online Tool called IFTTT which allows you to wait for a specific event to happen (Like recieving an email from the library) and trigger one of many responses (In this case, I can create an event on a calendar). 

  [Example using IFTTT]  [Email recieved from library] --> [Calendar event created]
  
While this solution was able to take the body of an email and create a calendar event, I wasn't able to parse the date the book was due so I had to arbitarily assign the event date which is not very useful.

2) My naive solution took and email and created a calendar event but I need someway to process the text in the email to extract useful information before I create a calendar event. 

Thankfully I found that using IFTTT I can trigger a webhook whenever an email from the library is recieved and make a POST request to send the body of the email. I know one solution to this problem I am familiar with, creating a webserver!
  
   [Example using IFTTT]  [Email recieved from library] --> [POST request sent to webserver] 

I will choose to use Node.js along with the library Express.js, which will handle recieving POST requests and making GET requests which will come in handy after the program has extracted the necessary data from the body of the email.

My first step is to host the Node.js application with a basic webserver to see that it can successfully recieve the POST request sent by IFTTT.


