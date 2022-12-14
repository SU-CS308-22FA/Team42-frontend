# Team42-Play.tff

### https://cs308-frontend42.herokuapp.com/
### Table of Contents
+ #### [1.Description](#desc)
+ #### [2.User Documentation](#userdoc)
  - [2.1 Installing the Software](#installandrunsoftware)
  - [2.2 Reporting a Bug](#reportbug)
  - [2.3 Known Bugs](#knownbug)
+ #### [3.Develeoper Documentation](#devdoc)
  - [3.1 Building Webapp](#obtainsource)
  - [3.2 Backend Source](#obtainsourcebackend)
  - [3.3 Layout of the directory](#layoutdirectory)
  
# **Play.tff**
# 1.Description <a name="desc"/>
<table>
<tr>
<td>

Play.tff is an web app developed for turkish football federation. The main purpose of this app is to discover newly formed teams and players playing in the lower leagues. In addition, ensuring that young talents have equal chances and rights. With this app, federation members will be able to organize tournaments and teams will be able to participate in these tournaments. As a result of these tournaments, the teams will be awarded points according to their order of success, and the players will be awarded points according to their statistics during the match. Thanks to the points earned, good players and good teams will come to the fore. The project is a mern stack project. Develped in JavaScript, NodeJS and Express and MongoDB is used for database system.
</td>
</tr>
</table>



# 2.User Documentation <a name="userdoc"/>
### 2.1 Installing and Running the Software <a name="installandrunsoftware"/>
Link: https://cs308-frontend42.herokuapp.com/

Clone the repository. <br />
Open the working directory.  <br />
Install dependencies with "npm install" command. <br />
Open http://localhost:3000/ in browser. <br />

### 2.2 How to report a bug <a name="reportbug"/>
If you notice any bugs in the app please let us know via sending e mail. <br />
Emails: giriskeneren@sabanciuniv.edu  <br />

### 2.3 Known bugs <a name="knownbug"/>

There is visual bug when user try to create team. <br />
While deleting a team with multiple members some of the users' statuses dont update. <br />


# 3. Developer Documentation <a name="devdoc"/>

### 3.1 Obtaining frontend source code <a name="obtainsource"/>

Open the terminal. <br />
Select the directory. <br />
Type "git clone https://github.com/SU-CS308-22FA/Team42-frontend.git" <br />
Select Client directory. <br />
After cloning the repository you should install the dependencies with "npm install" command. <br />
You can start the app with "npm start" command. <br />

### 3.2 Obtaining backend source code <a name="obtainsourcebackend"/>

Open the terminal. <br />
Select the directory. <br />
Type "git clone https://github.com/SU-CS308-22FA/Team42-backend.git" <br />
Select Client directory. <br />
After cloning the repository you should install the dependencies with "npm install" command. <br />
You can start the app with "npm start" command. <br />

The backend code includes the schemas of various class objects in the folder named "models". <br />
Implementation of http requests can be found under the folder name "routes". <br />
.env file includes all the constant variables necessary for the connection to the mongodb. <br />
app.js is a main file that includes the connection to the database, cors, and access to the routes folder. <br />

## 3.3 Building Webapp <a name="layoutdirectory"/>

**node_modules**: Contains node packages for running project. <br />
**Components**: Contains all of the components. <br />
**Pages**: Contains page views for each page seperately. <br />
**Config**: Contains routes and their details. <br />
**app.js**: Contains Main Router. <br />
**package.json**: Contains the packages we used in our app.


