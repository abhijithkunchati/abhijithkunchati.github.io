const themes = () =>{
  if (secret === 0){
    terminal.insertAdjacentHTML("beforeend", 
    `<p class="result">
    <ul>
        <li>Here is the list of available themes:</li>
        <ol>
            <li>dracula</li>
            <li>dark</li>
            <li>ubuntu</li>
            <li>medallion</li>
        </ol>
    </ul><br>
    <p class="result">You can choose a theme by typing its name or its number in the command. Then, confirm your command by pressing <em>Enter</em>.</p><br>
    <p class="result">/!\\ To return to the main menu, please use the command <code>exit</code>.</p>
</p>`);
  } else {
    terminal.insertAdjacentHTML("beforeend", 
    `<p class="result">
    <ul>
        <li>Here is the list of available themes:</li>
        <ol>
            <li>dracula</li>
            <li>dark</li>
            <li>ubuntu</li>
            <li>medallion</li>
            <p class="linealign">secrets :</p>
            <li>matrix</li>
            <li>hello kitty</li>
        </ol>
    </ul><br>
    <p class="result">You can choose a theme by typing its name or its number in the command. Then, confirm your command by pressing <em>Enter</em>.</p><br>
    <p class="result">/!\\ To return to the main menu, please use the command <code>exit</code>.</p>
</p>`);
  }
  
};

const check = () =>{
  if (numberTheme === theme){
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
        Your terminal is already using the <code>${nameTheme}</code> theme.
    </p>`);
  } else {
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
        Your terminal is now using the <code>${nameTheme}</code> theme.
    </p>`);
    theme = numberTheme;
  }
}

const secrets = () =>{
  if (secret === 0){
    localStorage.setItem(secret, 1);
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
          You have unlocked additional themes! Use the command <code>themes</code> to see your new themes.
        </p>`);
        secret = 1;
  } else {
    terminal.insertAdjacentHTML("beforeend", 
        `<p class="result">
        The secret themes are already active. Use the command <code>themes</code> to view your themes.
        </p>`);
  }
}

const dracula = () =>{
  root.style.removeProperty('--text-color');
  root.style.removeProperty('--text-accent-color');
  root.style.removeProperty('--bg-1');
  root.style.removeProperty('--bg-2');
  root.style.removeProperty('--bg-3');
  root.style.removeProperty('--username-color');
  root.style.removeProperty('--terminal-bg');
  root.style.removeProperty('--terminal-header-bg');
  bannerTitle.style.removeProperty('color');
}

const dark = () =>{
  root.style.setProperty('--text-color', '#ffca85');
  root.style.setProperty('--text-accent-color', '#ff5555');
  root.style.setProperty('--bg-1','#211F20');
  root.style.setProperty('--bg-2','#292D34');
  root.style.setProperty('--bg-3','#213030');
  root.style.setProperty('--username-color','#858585');
  root.style.setProperty('--terminal-bg','rgb(0 0 0 / 90%)');
  root.style.setProperty('--terminal-header-bg','#585252');
  bannerTitle.style.color = "#ffca85";
}

const ubuntu = () =>{
  root.style.setProperty('--text-color', '#fff');
  root.style.setProperty('--text-accent-color', 'darksalmon');
  root.style.setProperty('--bg-1','#f27121');
  root.style.setProperty('--bg-2','#e94057');
  root.style.setProperty('--bg-3','#8a2387');
  root.style.setProperty('--username-color','cadetblue');
  root.style.setProperty('--terminal-bg','rgba(56, 4, 40, 0.9)');
  bannerTitle.style.color = "#222222";
  root.style.setProperty('--terminal-header-bg','#bbb');
}

const medallion = () =>{
  root.style.setProperty('--text-color', '#5e5219');
  root.style.setProperty('--text-accent-color', '#916c25');
  root.style.setProperty('--bg-1','#5e5219');
  root.style.setProperty('--bg-2','#d3bd26');
  root.style.setProperty('--bg-3','#d3bd26');
  root.style.setProperty('--username-color','#b64c00');
  root.style.setProperty('--terminal-bg','#cac296');
  root.style.setProperty('--terminal-header-bg','#585252');
  bannerTitle.style.color = "#cac296";
}

const matrix = () =>{
  root.style.setProperty('--text-color', '#00FF41');
  root.style.setProperty('--text-accent-color', 'red');
  root.style.setProperty('--bg-1','#213030');
  root.style.setProperty('--bg-2','#213030');
  root.style.setProperty('--bg-3','#003B00');
  root.style.setProperty('--username-color','blue');
  root.style.setProperty('--terminal-bg','rgb(0 0 0 / 90%)');
  root.style.setProperty('--terminal-header-bg','#585252');
  bannerTitle.style.color = "#00FF41";
}

const helloKitty = () =>{
  root.style.setProperty('--text-color', '#914186');
  root.style.setProperty('--text-accent-color', '#F62E70');
  root.style.setProperty('--bg-1','#F98EAA');
  root.style.setProperty('--bg-2','#F62E70');
  root.style.setProperty('--bg-3','#F62E70');
  root.style.setProperty('--username-color','#F62E70');
  root.style.setProperty('--terminal-bg','#F2F2F2');
  root.style.setProperty('--terminal-header-bg','#E77ED0');
  bannerTitle.style.color = "#F2F2F2";
}