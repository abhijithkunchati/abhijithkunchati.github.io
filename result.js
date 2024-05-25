const aboutMe = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result aboutmeresult">
          ${data[language].aboutme}
        </p>`);
};


const clear = () =>{
  terminalBody.innerHTML = "";
  terminalBody.insertAdjacentHTML("afterbegin", `<div id="terminal"></div>`);
};

const experiences = () =>{
  terminal.insertAdjacentHTML("beforeend", `
  <table class="result experienceresult">
      ${data[language].experience}
  </table>`);
};

const getCv = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result cvresult">${data[language].cv}</p>`);
  const a = document.createElement("a");
  a.href = window.rawdata.resumeLocation;
  a.setAttribute("download", window.rawdata.resumeName);
  a.setAttribute("target", "blank");
  a.click();
}

const getLinkedin = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultLinkedin">${data[language].redirectLinkedin}</p>`);
  const a = document.createElement("a");
  // a.href = window.rawdata.linkedInUrl;
  // a.href="intent://linkedin.com/in/abhijithkunchati#Intent;package=com.linkedin.android;scheme=https;end";
  // a.setAttribute("target", "blank");
  // a.click();
  var appInstalled = false;
        
        // Check if the LinkedIn app is installed
        if (window.navigator && window.navigator.msLaunchUri) {
            // For Edge
            window.navigator.msLaunchUri("linkedin://abhijithkunchati", null, function(success) {
                appInstalled = true;
            }, function() {});
        } else if (window.Android && window.Android.launchApp) {
            // For Android
            window.Android.launchApp("linkedin://abhijithkunchati");
            appInstalled = true;
        } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            // For iOS
            
            var appUrl = 'linkedin://abhijithkunchati';
            var fallbackUrl = 'https://www.linkedin.com/in/abhijithkunchati';
            // var startTime = Date.now();
            // setTimeout(function() {
            //     if (Date.now() - startTime < 2000) return;
            //     window.location.href = fallbackUrl;
            // }, 1500);
            window.location.href = appUrl;
            appInstalled = true;
        }

        // If app is not installed, open in browser
        if (!appInstalled) {
            event.preventDefault(); // Prevent default link behavior
            window.open('https://www.linkedin.com/in/abhijithkunchati', '_blank'); // Open in a new tab
        }
}

const getGithub = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result redirectresultGithub">${data[language].redirectGithub}</p>`);
  const a = document.createElement("a");
  a.href = window.rawdata.githubUrl;
  a.setAttribute("target", "blank");
  a.click();
}

const help = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          <ul class="helpresult">
            ${data[language].help}
          </ul>
        </p>`);
};

const hobby = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result hobbyresult">
          ${data[language].hobby}
        </p>`);
};


const project = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<div class="resultproject">
        ${data[language].project}
    </div>`);
};

const ls = (y, result, secret) =>{
  if(y === 0 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult1">${data[language].ls1}</div>`);
  } else if (y === 0 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls lsresult2">${data[language].ls2}</div>`);
  } else if (y === 1 && result === "ls -a" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
            <div>matrix</div>
            <div>hello kitty</div>
        </div>`);
  } else if (y === 1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div><code>.</code></div>
            <div><code>..</code></div>
            <div>dracula</div>
            <div>dark</div>
            <div>ubuntu</div>
            <div>medallion</div>
        </div>`);
  } else if (y === 1  && result === "ls" && secret === 1){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
      <div>matrix</div>
      <div>hello kitty</div>
    </div>`);
  } else if (y === 1  && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
    `<div class="result ls">
      <div>dracula</div>
      <div>dark</div>
      <div>ubuntu</div>
      <div>medallion</div>
    </div>`);
  } else if (y === -1 && result === "ls"){
    terminal.insertAdjacentHTML("beforeend", 
          `<div class="result ls">
            <div>list-secret</div>
            <div><code>${window.rawdata.name}</code></div>
          </div>`);
  } else if (y === -1 && result === "ls -a"){
    terminal.insertAdjacentHTML("beforeend",  
    `<div class="result ls">
      <div><code>.</code></div>
      <div><code>.secret</code></div>
      <div>list-secret</div>
      <div><code>${window.rawdata.name}</code></div>
    </div>`);
  }
}

const listSecret = () =>{
  terminal.insertAdjacentHTML("beforeend",
        `<p class="result">
          <ul class="listsecretresult">
            ${data[language].listsecretresult}
          </ul>
        </p>`);
}


const mailer = () =>{
  terminal.insertAdjacentHTML("beforeend", 
        `<p class="result bravo">${data[language].congratulation}</p>`);
  const a = document.createElement("a");
  a.href = `${data[language].bodymail}`;
  a.click();
}
