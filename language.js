var rawdata = 
{ name : "Abhijith Kunchati"
, linkedInUrl : "https://linkedin.com/in/abhijithkunchati/"
, githubUrl : "https://github.com/abhijithkunchati"
, aboutMe : 
  { name : "Abhijith Kunchati"
  , skills : "Git, React etc..."
  , city : "Los Angeles"
  }
, experiences : 
  [ {  Date : "June 30th - July 30th"
    , Company : "Juspay"
    , Position : "Intern"
    , Description : "TODO"
    }
  , { Date : "June 30th - July 30th"
    , Company : "Juspay"
    , Position : "SDE"
    , Description : "TODO"
    }
  ]
, hobbies :  
  { todo : "TODO"
  }
, projects : 
  { meta_data : ["Name", "Tech", "Description", "team", "github"]
  , data : 
    [ { Name : "P1"
      , Tech : "T1"
      , Description : "DUMMy"
      , team : "Yes"
      , github : "temp"
      }
    , { Name : "P2"
      , Tech : "T2"
      , Description : "DUMMy"
      , team : "Yes"
      , github : "temp"
      }
    ]
  }
, resumeLocation : "https://drive.google.com/uc?export=download&id=1JrpqPxkxo9TQWru0mNq0h1rtdL2S0bQU"
}
var data = {
  "english":
  {
    "welcome" : "Welcome to my portfolio ! To display the available commands type <code>help</code>. You can use the <em>Tab</em> key to auto-complete a command.",

    "information" : "This site was entirely created using <code>HTML</code>, <code>CSS</code> and <code>Javascript</code> without using any library or framework. This site contains a large number of features (hidden animations, secret themes, etc.) but also a well-hidden <code>easter egg</code> that only developers can find. Good discovery!",

    "btnpopup" : "Continue",

    "help" : `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get cv</code>: Download my CV</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    "aboutme" : `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Guillaume REYGNER",<br>
      &nbsp;&nbsp;&nbsp;"formation": "Developer 1200h in 6 months - The Hacking Project",<br>
      &nbsp;&nbsp;&nbsp;"language" : "JS, SCSS, HTML, CSS, Ruby, Git",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Rails",<br>
      &nbsp;&nbsp;&nbsp;"tools": "GitHub, Heroku, Figma",<br>
      &nbsp;&nbsp;&nbsp;"softSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Lyon, France"<br>
    }`,

    "experience" : `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">June 2016 - June 2018</td>
    <td>Klevery</td>
    <td>Co-founder</td>
    <td>Routing optimization software for professionals with high delivery or travel activity.</td>
  </tr>
  <tr>
    <td class="center">Sept 2017 - Sept 2018</td>
    <td>Credit Agricole Centre-Est</td>
    <td>Expert risk analyst</td>
    <td>Feasibility study of files, frequent contact with project managers in the field, legal study of bilateral/arranger contracts.</td>
  </tr>
  <tr>
    <td class="center">Jan 2019 - Jul 2021</td>
    <td>CIC - Lyonnaise de Banque</td>
    <td>Professional Business Manager</td>
    <td>Accompaniment of the entrepreneur on his personal and professional projects, financing of needs, accompaniment on the optimization of the balance sheet and projects.</td>
  </tr>
  <tr>
    <td class="center">Dec 2019 - Today</td>
    <td>Overstats</td>
    <td>Co-founder</td>
    <td>Overstats is a team management tool for the game Overwatch developed by Blizzard used by over 100 teams around the world. Management of partnerships and development of the application.</td>
  </tr>
  <tr>
    <td class="center">August 2021 - Today</td>
    <td>Startup101</td>
    <td>Editor</td>
    <td>Writer for the Startup101 newsletter which explores the beginnings of today's great startups such as Facebook, Instagram, Google and many more.</td>
  </tr>`,

  "cv" : `The resume upload will begin.`,

  "redirectLinkedin" : `You will be redirected to Linkedin.`,

  "redirectGithub" : `You will be redirected to Github.`,

  "hobby" : `{<br>
    &nbsp;&nbsp;&nbsp;"Sport": "Volleyball, Cycling",<br>
    &nbsp;&nbsp;&nbsp;"Programming": "JS, Rails",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Entrepreneurship, Photography, Reading autobiography, Design, Marketing"<br>
  }`,



  "glassmorphismOff" : `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

  "glassmorphismOn" : `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

  "notfound" : `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

  "notfoundmenu" : `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

  "website" : `<p class="result websiteresult">You will be redirected to the project website.</p>`,

  "ls1" : `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div><code>themes</code></div>
  `,

  "ls2" : `
    <div>about</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get CV</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div><code>themes</code></div>
  `,

  "listsecretresult" : `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

  "congratulation" : `Congratulations you have found the <code>.secret</code> folder.`,

  "bodymail" : `mailto:reygner0224@gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Guillaume REYGNER > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time !`

  }
 
}
//------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
window.rawdata = rawdata;
var name = rawdata.aboutMe.name;
var skills = rawdata.aboutMe.skills;
var city = rawdata.aboutMe.city;

// Formatting experiences as HTML table rows
var experienceHTML = '<tr>\n<th>Date</th>\n<th>Company</th>\n<th>Position</th>\n<th class="description">Description</th>\n</tr>\n';

rawdata.experiences.forEach(function(experience) {
  experienceHTML += '<tr>\n';
  experienceHTML += '<td class="center">' + experience.Date + '</td>\n';
  experienceHTML += '<td>' + experience.Company + '</td>\n';
  experienceHTML += '<td>' + experience.Position + '</td>\n';
  experienceHTML += '<td>' + experience.Description + '</td>\n';
  experienceHTML += '</tr>\n';
});


var metaData = rawdata.projects.meta_data;
var projectData = rawdata.projects.data;

// Convert projects to HTML table format
var projectHTML = '<table class="result">\n';
projectHTML += '<tr>\n';
metaData.forEach(function (item) {
  projectHTML += '<th>' + item + '</th>\n';
});
projectHTML += '</tr>\n';

projectData.forEach(function (project) {
  projectHTML += '<tr>\n';
  metaData.forEach(function (item) {
    projectHTML += '<td>' + project[item] + '</td>\n';
  });
  projectHTML += '</tr>\n';
});

projectHTML += '</table><br>';

data.english.project = projectHTML;
data.english.aboutme = JSON.stringify(rawdata.aboutMe, null, 2).replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
data.english.hobby = JSON.stringify(rawdata.hobbies, null, 2).replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
data.english.experience = experienceHTML;


//------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let welcome = document.getElementById("welcome");
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage(){
  if(localStorage.getItem("language") === null){
    localStorage.setItem('language', "english");
  } 
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  document.querySelectorAll(".helpresult").forEach(element => {
    element.innerHTML = data[language].help
  });
  document.querySelectorAll(".aboutmeresult").forEach(element => {
    element.innerHTML = data[language].aboutme
  });
  document.querySelectorAll(".experienceresult").forEach(element =>{
    element.innerHTML = data[language].experience
  });
  document.querySelectorAll(".cvresult").forEach(element =>{
    element.innerHTML = data[language].cv
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach(element =>{
    element.innerHTML = data[language].redirectLinkedin
  });
  document.querySelectorAll(".redirectresultGithub").forEach(element =>{
    element.innerHTML = data[language].redirectGithub
  });
  document.querySelectorAll(".hobbyresult").forEach(element =>{
    element.innerHTML = data[language].hobby
  });
  document.querySelectorAll(".resultproject").forEach(element =>{
    element.innerHTML = data[language].project
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOff
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach(element =>{
    element.innerHTML = data[language].glassmorphismOn
  });
  document.querySelectorAll(".notfoundlanguage").forEach(element =>{
    element.innerHTML = data[language].notfound
  });
  document.querySelectorAll(".notfoundmenu").forEach(element =>{
    element.innerHTML = data[language].notfoundmenu
  });
  document.querySelectorAll(".websiteresult").forEach(element =>{
    element.innerHTML = data[language].website
  });
  document.querySelectorAll(".lsresult1").forEach(element =>{
    element.innerHTML = data[language].ls1
  });
  document.querySelectorAll(".lsresult2").forEach(element =>{
    element.innerHTML = data[language].ls2
  });
  document.querySelectorAll(".listsecretresult").forEach(element =>{
    element.innerHTML = data[language].listsecretresult
  });
  document.querySelectorAll(".congratulation").forEach(element =>{
    element.innerHTML = data[language].congratulation
  });

  
}
setLanguage();
