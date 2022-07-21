# QuizWorker (a.k.a Admin Panel)
The main idea of the application* is creating an admin panel responsible for uploading/removing existing quizzes in the Excel format. <br>
A quiz is created via the template, after what it is parsed and the data is uploaded from the Excel table to the database tables.<br><br>

The quiz template:<br>
![image](https://user-images.githubusercontent.com/73338488/180271267-cb1f08d8-651d-4eb2-a327-bb539d24e4d2.png)<br>
1st column - question number<br>
2nd column - question<br>
3rd-6th columns (3rd stands for the right answer) - question answers<br><br>


The admin panel:<br>
![image](https://user-images.githubusercontent.com/73338488/179951779-b8ef826e-e655-4d31-8971-9ef54d7d9dd6.png)<br><br>
Quiz uploading modal window:<br>
![image](https://user-images.githubusercontent.com/73338488/179952028-ca3d18fc-1e98-499b-8068-2b5ca673a557.png)<br>

## What can be highlighted from the additional functionality:<br>
* Pagination
* All validated, including Excel files uploading
* User authorization
* User roles <br><br>

## Utilized technologies:<br>
### Backend
* C#
* ASP.NET Core Web API (Client Side Rendering, SPA)
* Entity Framework Core
* Insomnia (Postman analog) 
### Frontend
* HTML & CSS (CSS Modules)
* TypeScript
* React TS

\* - this repo is a part of the private product I was taking part In development during my educational practice, so that's the reason here the only part of the initial project
