(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3576:function(e,t,s){Promise.resolve().then(s.bind(s,7753))},7753:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return S}});var r=s(7437),a=s(3145),i=s(598),l=s(5135);let n={name:"Abhijith Kunchati",title:"Software Engineer",subtitle:"Functional Programmer | Haskell | Payments",currentLearning:"Learning Distributed Systems",avatar:"/avatar.jpg",resumeLink:"https://drive.google.com/file/d/1qzzdwF8__a0tCr3TGqekKCYH-SCDeQOi/view?usp=drive_link",email:"akunchat@uci.edu",socialLinks:[{name:"LinkedIn",url:"https://linkedin.com/in/abhijithkunchati",icon:i.Z},{name:"GitHub",url:"https://github.com/abhijithkunchati",icon:l.Z}],navigation:[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Skills",href:"#skills"},{name:"Timeline",href:"#timeline"},{name:"Contact",href:"#contact"}],about:{title:"About Me",subtitle:"My Introduction",description:"An accomplished MERN Stack Developer with a passion for creating seamless user experiences. With a solid foundation in MongoDB, Express.js, React, and Node.js, I specialize in crafting visually captivating and intuitively navigable full-stack applications. Leveraging my expertise in responsive design, RESTful APIs, and UI/UX principles, I bring concepts to life, ensuring each project is a masterpiece of precision, functionality, and end-to-end development within the MERN stack ecosystem.",imageUrl:"/workspace.png",stats:[{value:"1.5+",label:"Year experience"},{value:"08",label:"Completed project"},{value:"01",label:"Companies trained"}]},projects:{title:"Projects",subtitle:"Most recent work",projectsList:[{id:1,title:"Stock Trading Platform",description:"Built a trading platform using microservice architecture in Go",imageUrl:"/projects/stock.jpg",technologies:["React","Node.js","Express","MongoDB"],deployLink:"https://stocktrade-452505.uw.r.appspot.com",githubLink:"https://github.com/abhijithkunchati/Stock-Trading"},{id:2,title:"Weenix OS",description:"Full-fledged mini Unix operating system",imageUrl:"/projects/OS.png",technologies:["unix","Memory Management","Threads","Processes"],githubLink:"https://github.com/abhijithkunchati/Weenix-OS"},{id:3,title:"Distributed KV Store",description:"Developed a Redis-like key-value store in Go with sharding and replication for scalability and fault-tolerance",imageUrl:"/projects/KV.webp",technologies:["React","Node.js","Express","MongoDB"],deployLink:"https://your-deploy-link.com",githubLink:"https://github.com/abhijithkunchati/Distributed-KV-Store"}]},skills:{title:"Skills",subtitle:"My technical level",categories:[{name:"Frontend",skills:["HTML","CSS","JavaScript","React","Next.js"]},{name:"Backend",skills:["Node.js","Express.js","MongoDB","RESTful API"]}]},timeline:[{title:"Master's in Computer Science",institution:"University of Southern California",period:"Jan 2024 - May 2025"},{title:"Master's in Computer Science (Transferred out to USC)",institution:"University of California, Irvine",period:"Sep 2023 - Dec 2023"},{title:"Software Development Engineer",institution:"Juspay Technologies",period:"2022 - 2023"},{title:"Software Development Engineer, Intern",institution:"Juspay Technologies",period:"2022"}]};var c=s(2265),o=s(5929),d=s(7226),m=s(535),x=s(1994),h=s(3335);function u(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,h.m6)((0,x.W)(t))}let p=(0,m.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=c.forwardRef((e,t)=>{let{className:s,variant:a,size:i,asChild:l=!1,...n}=e;return l?(0,r.jsx)("slot",{className:u(p({variant:a,size:i,className:s})),ref:t,...n}):(0,r.jsx)("button",{className:u(p({variant:a,size:i,className:s})),ref:t,...n})});function j(){let[e,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;("dark"===e||!e&&s)&&(t(!0),document.documentElement.classList.add("dark"))},[]),(0,r.jsx)(f,{variant:"ghost",size:"icon",onClick:()=>{e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")),t(!e)},"aria-label":"Toggle theme",children:e?(0,r.jsx)(o.Z,{className:"h-5 w-5"}):(0,r.jsx)(d.Z,{className:"h-5 w-5"})})}function g(e){let{href:t,children:s,isActive:a}=e;return(0,r.jsx)("a",{href:t,className:"".concat(a?"text-primary font-medium":"text-muted-foreground"," hover:text-primary transition-colors"),children:s})}function b(e){let{children:t}=e,[s,a]=(0,c.useState)("home");return(0,c.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&a(e.target.id)})},{threshold:.5}),t=document.querySelectorAll("section[id]");return t.forEach(t=>e.observe(t)),()=>{t.forEach(t=>e.unobserve(t))}},[]),(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsx)("header",{className:"fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"#home",className:"text-lg font-medium hover:text-primary transition-colors",children:n.name})}),(0,r.jsxs)("nav",{className:"flex items-center gap-4 md:gap-8",children:[(0,r.jsx)(g,{href:"#home",isActive:"home"===s,children:"Home"}),(0,r.jsx)(g,{href:"#about",isActive:"about"===s,children:"About"}),(0,r.jsx)(g,{href:"#projects",isActive:"projects"===s,children:"Projects"}),(0,r.jsx)(g,{href:"#skills",isActive:"skills"===s,children:"Skills"}),(0,r.jsx)(g,{href:"#timeline",isActive:"timeline"===s,children:"Journey"}),(0,r.jsx)(g,{href:"#contact",isActive:"contact"===s,children:"Contact"}),(0,r.jsx)(j,{})]})]})}),(0,r.jsx)("main",{className:"flex-1 pt-16",children:t})]})}f.displayName="Button";var v=s(9345),N=s(875),y=s(2735),k=s(2451),w=s(407);function S(){let[e,t]=(0,c.useState)(0),[s,i]=(0,c.useState)("home"),l=n.projects.projectsList.length;(0,c.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&i(e.target.id)})},{threshold:.5}),t=document.querySelectorAll("section[id]");return t.forEach(t=>e.observe(t)),()=>{t.forEach(t=>e.unobserve(t))}},[]);let o=e=>{t(e)};return(0,r.jsxs)(b,{children:[(0,r.jsx)("section",{id:"home",className:"min-h-screen flex flex-col justify-center py-16 md:py-24",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center md:items-start order-2 md:order-1",children:[(0,r.jsx)("div",{className:"flex flex-col md:flex-row gap-6 mb-8",children:n.socialLinks.map(e=>(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors","aria-label":e.name,children:[(0,r.jsx)(e.icon,{className:"h-6 w-6"}),(0,r.jsx)("span",{className:"text-sm font-medium",children:e.name})]},e.name))}),(0,r.jsxs)("div",{className:"text-center md:text-left",children:[(0,r.jsxs)("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:["Hi, I am ",n.name]}),(0,r.jsx)("h2",{className:"text-2xl md:text-3xl font-medium text-muted-foreground mb-4",children:n.title}),(0,r.jsx)("p",{className:"text-lg text-muted-foreground mb-6",children:n.subtitle}),(0,r.jsx)("p",{className:"mb-8",children:n.currentLearning}),(0,r.jsx)(f,{asChild:!0,className:"bg-primary hover:bg-primary/90",children:(0,r.jsxs)("a",{href:"#contact",className:"flex items-center",children:[(0,r.jsx)(v.Z,{className:"mr-2 h-4 w-4"}),"Contact Me"]})})]})]}),(0,r.jsx)("div",{className:"flex justify-center order-1 md:order-2",children:(0,r.jsx)("div",{className:"relative w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full overflow-hidden",children:(0,r.jsx)(a.default,{src:n.avatar||"/placeholder.svg",alt:n.name,fill:!0,priority:!0,className:"object-cover"})})})]}),(0,r.jsx)("div",{className:"flex justify-center mt-16",children:(0,r.jsxs)("a",{href:"#about",className:"flex items-center gap-2 text-sm animate-bounce",children:[(0,r.jsx)(N.Z,{className:"h-4 w-4"}),"Scroll down"]})})]})}),(0,r.jsx)("section",{id:"about",className:"py-16 md:py-24 bg-muted/30",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-2",children:n.about.title}),(0,r.jsx)("p",{className:"text-muted-foreground",children:n.about.subtitle})]}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)("div",{className:"relative w-full max-w-md aspect-square",children:(0,r.jsx)(a.default,{src:n.about.imageUrl||"/placeholder.svg",alt:"My workspace",fill:!0,className:"object-contain"})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-lg mb-6 leading-relaxed",children:n.about.description}),(0,r.jsx)("div",{className:"grid grid-cols-3 gap-4 my-8",children:n.about.stats.map((e,t)=>(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("div",{className:"text-2xl md:text-3xl font-bold text-primary mb-1",children:e.value}),(0,r.jsx)("div",{className:"text-sm text-muted-foreground",children:e.label})]},t))}),(0,r.jsx)(f,{asChild:!0,variant:"outline",className:"gap-2",children:(0,r.jsxs)("a",{href:n.resumeLink,download:!0,className:"flex items-center",children:["Download Resume",(0,r.jsx)(y.Z,{className:"ml-2 h-4 w-4"})]})})]})]})]})}),(0,r.jsx)("section",{id:"projects",className:"py-16 md:py-24",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-2",children:"Projects"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Most recent work"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("button",{onClick:()=>{t(e=>(e-1+l)%l)},className:"absolute left-0 top-1/2 -translate-y-1/2 text-primary text-5xl z-10 hover:bg-muted/50 rounded-full p-2","aria-label":"Previous project",children:(0,r.jsx)(k.Z,{className:"w-12 h-12"})}),(0,r.jsx)("button",{onClick:()=>{t(e=>(e+1)%l)},className:"absolute right-0 top-1/2 -translate-y-1/2 text-primary text-5xl z-10 hover:bg-muted/50 rounded-full p-2","aria-label":"Next project",children:(0,r.jsx)(w.Z,{className:"w-12 h-12"})}),(0,r.jsx)("div",{className:"grid grid-cols-1 gap-8 max-w-4xl mx-auto",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 items-center",children:[(0,r.jsx)("div",{className:"w-full md:w-1/2",children:(0,r.jsx)(a.default,{src:n.projects.projectsList[e].imageUrl||"/placeholder.svg",alt:n.projects.projectsList[e].title,width:500,height:300,className:"rounded-lg"})}),(0,r.jsxs)("div",{className:"w-full md:w-1/2",children:[(0,r.jsx)("h3",{className:"text-2xl font-bold mb-4",children:n.projects.projectsList[e].title}),(0,r.jsx)("p",{className:"text-muted-foreground mb-6",children:n.projects.projectsList[e].description}),(0,r.jsxs)("div",{className:"flex gap-4",children:[n.projects.projectsList[e].deployLink&&(0,r.jsx)(f,{asChild:!0,className:"bg-purple-600 hover:bg-purple-700",children:(0,r.jsxs)("a",{href:n.projects.projectsList[e].deployLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:["Deploy ",(0,r.jsx)(w.Z,{className:"ml-2 h-4 w-4"})]})}),(0,r.jsx)(f,{asChild:!0,className:"bg-purple-600 hover:bg-purple-700",children:(0,r.jsxs)("a",{href:n.projects.projectsList[e].githubLink,target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:["GitHub ",(0,r.jsx)(w.Z,{className:"ml-2 h-4 w-4"})]})})]})]})]})}),(0,r.jsx)("div",{className:"flex justify-center gap-2 mt-8",children:n.projects.projectsList.map((t,s)=>(0,r.jsx)("button",{onClick:()=>o(s),className:"w-2 h-2 rounded-full transition-colors ".concat(s===e?"bg-primary":"bg-gray-300"),"aria-label":"Go to project ".concat(s+1)},s))})]})]})}),(0,r.jsx)("section",{id:"skills",className:"py-16 md:py-24 bg-muted/30",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-2",children:n.skills.title}),(0,r.jsx)("p",{className:"text-muted-foreground",children:n.skills.subtitle})]}),(0,r.jsx)("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:n.skills.categories.map((e,t)=>(0,r.jsxs)("div",{className:"p-6 rounded-lg border bg-background",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold mb-4",children:e.name}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:e.skills.map(e=>(0,r.jsx)("span",{className:"px-3 py-1 bg-primary/10 text-primary rounded-full text-sm",children:e},e))})]},t))})]})}),(0,r.jsx)("section",{id:"timeline",className:"py-16 md:py-24",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-2",children:"Qualification"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"My Journey"})]}),(0,r.jsxs)("div",{className:"max-w-2xl mx-auto relative",children:[(0,r.jsx)("div",{className:"absolute left-1/2 transform -translate-x-1/2 top-0 bottom-8 w-0.5 bg-primary/30"}),n.timeline.map((e,t)=>(0,r.jsxs)("div",{className:"relative flex justify-start md:justify-between items-start mb-8",children:[(0,r.jsxs)("div",{className:"w-full md:w-[45%] ".concat(t%2==0?"md:text-right":"md:ml-auto"),children:[(0,r.jsx)("h3",{className:"text-lg font-semibold text-primary",children:e.title}),(0,r.jsx)("p",{className:"text-muted-foreground",children:e.institution}),(0,r.jsx)("span",{className:"text-sm text-muted-foreground",children:e.period})]}),(0,r.jsx)("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"})]},t))]})]})}),(0,r.jsx)("section",{id:"contact",className:"py-16 md:py-24",children:(0,r.jsxs)("div",{className:"container mx-auto px-4",children:[(0,r.jsxs)("div",{className:"text-center mb-12",children:[(0,r.jsx)("h2",{className:"text-3xl md:text-4xl font-bold mb-2",children:"Contact Me"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Get in touch"})]}),(0,r.jsxs)("div",{className:"max-w-md mx-auto",children:[(0,r.jsxs)("a",{href:"mailto:".concat(n.email),className:"flex items-center justify-center gap-2 w-full p-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",children:[(0,r.jsx)(v.Z,{className:"h-5 w-5"}),"Send me an email"]}),(0,r.jsx)("div",{className:"mt-8 flex justify-center gap-4",children:n.socialLinks.map(e=>(0,r.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors","aria-label":e.name,children:(0,r.jsx)(e.icon,{className:"h-6 w-6"})},e.name))})]})]})})]})}}},function(e){e.O(0,[219,971,117,744],function(){return e(e.s=3576)}),_N_E=e.O()}]);