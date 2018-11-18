(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)a=s[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"0764":function(t,e,n){"use strict";var o=n("4b55"),r=n.n(o);r.a},"2dae":function(t,e,n){"use strict";var o=n("c524"),r=n.n(o);r.a},"4b55":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("sidebar"),n("introduction"),n("why-git"),n("benefits"),n("getting-started"),n("git-hub"),n("your-first-repo"),n("get-going")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"navbar",role:"navigation"}},[n("header",{attrs:{id:"sidebar-title"}},[t._v("\n    Git documentation\n  ")]),n("hr"),n("ul",{staticClass:"nav-menu"},[n("a",{attrs:{href:"#Introduction"},on:{click:function(e){e.preventDefault(),t.scroll("Introduction")}}},[n("li",[t._v("Introduction")])]),n("a",{attrs:{href:"#WhyGit"},on:{click:function(e){e.preventDefault(),t.scroll("WhyGit")}}},[n("li",[t._v("Why Git ?")])]),n("a",{attrs:{href:"#Benefits"},on:{click:function(e){e.preventDefault(),t.scroll("Benefits")}}},[n("li",[t._v("The benefits")])]),n("a",{attrs:{href:"#GettingStarted"},on:{click:function(e){e.preventDefault(),t.scroll("GettingStarted")}}},[n("li",[t._v("Getting Started")])]),n("a",{attrs:{href:"#GitHub"},on:{click:function(e){e.preventDefault(),t.scroll("GitHub")}}},[n("li",[t._v("GitHub")])]),n("a",{attrs:{href:"#YourFirstRepo"},on:{click:function(e){e.preventDefault(),t.scroll("YourFirstRepo")}}},[n("li",[t._v("Your First Repository")])]),n("a",{attrs:{href:"#GetGoing"},on:{click:function(e){e.preventDefault(),t.scroll("GetGoing")}}},[n("li",[t._v("Get Going")])])])])},s=[],l={name:"Sidebar",methods:{scroll:function(t){this.$nextTick(function(){var e=document.getElementById(t);e.scrollIntoView({behavior:"smooth"})})}}},c=l,u=(n("2dae"),n("7041"),n("2877")),f=Object(u["a"])(c,a,s,!1,null,"c5564212",null);f.options.__file="Sidebar.vue";var d=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"Introduction",href:"Introduction"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    Introduction\n  ")]),n("article",[n("p",[t._v("\n      In today's world, software developers working in teams are continually writing new source code and changing existing source code. Working in teams also means working on different features or even on the same bit of code with several person. "),n("br"),n("br"),n("span",[n("strong",[t._v("The question is : How do you manage that ?")])])]),n("br"),n("p",[t._v("\n      That's where "),n("em",[t._v("version control")]),t._v(" comes into play. Version control systems are a category of software tools that help a software team manage changes to source code over time. By keeping track of every modification to the code, allowing developer to go back on an earlier version and preventing conflicts, a "),n("abbr",{attrs:{title:"Version Control System"}},[t._v("VCS")]),t._v(" is a must have to work properly in team nowaday.\n    ")])])])])}],v={name:"Introduction"},b=v,m=(n("0764"),Object(u["a"])(b,h,p,!1,null,null,null));m.options.__file="Introduction.vue";var _=m.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"WhyGit",href:"WhyGit"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    Why Git ?\n  ")]),n("article",[n("p",[t._v("\n      You might wonder why is everybody talks about Git and why it's so popular. Well, the answer is that Git is by far, the most widely used modern version control system in the world. It was created in 2005 by Linus Torvalds the famous creator of the Linux operating system kernel."),n("br"),t._v("\n      Popular means that you'll find plenty of tutorials and documentation on the web and also be able to reproduce what you learned in your different jobs."),n("br"),n("br")]),n("p",[t._v("\n      In fact it's not the only benefit of using Git, the system was built to bring : "),n("br"),n("em",[t._v("Performance")]),t._v(", "),n("em",[t._v("Security")]),t._v(" and "),n("em",[t._v("Flexibility")]),t._v(" in your current team workflow, while bringing you the best experience it can deliver.\n    ")])])])])}],w={name:"WhyGit"},G=w,k=Object(u["a"])(G,g,y,!1,null,null,null);k.options.__file="WhyGit.vue";var O=k.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"Benefits",href:"Benefits"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    The Benefits\n  ")]),n("article",[n("p",[t._v("\n      The biggest feature of Git is it's branching and merging capabilities. Branching means you create a pointer to a snapshot of your changes while you work on a new feature without impacting the main branch (master). When you're done working on your feature, you can geniusly merge back your changes in the main branch."),n("br"),t._v("\n      Of course sometimes you'll have to work jointly with a teammate on a feature. That's when you'll probably encounter merge conflicts."),n("br"),n("br")]),n("p",[t._v("\n      Fortunately, as it's a common part of the Git experience, the system manages very well this type of problem you may encounter. When a conflict happens Git will detect the lines and conflict and will ask you to chose the right one to be committed so you keep control on what's committed and also don't have to worry about losing critical changes.\n    ")])])])])}],S={name:"Benefits"},j=S,I=Object(u["a"])(j,x,E,!1,null,null,null);I.options.__file="Benefits.vue";var $=I.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"GettingStarted",href:"GettingStarted"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    Getting Started\n  ")]),n("article",[n("p",[t._v("\n      Now that you have an overview of the purpose of Git, maybe you would like to give it a try but don't know where to start ?. Well, first you'll have to install Git on your computer by downloading the client from "),n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank"}},[t._v("here")]),t._v(" or, if you're on Debian/Ubuntu, you can install it by the package manager with the following command :"),n("br"),n("code",[t._v("\n        apt-get install git\n      ")]),n("br"),t._v("\n      Once you have git installed, you can access the full documentation by entering :"),n("br"),n("code",[t._v("\n        man git\n      ")]),n("br"),t._v("\n      Informations about a subcommands and concept guides can be accessed by the following :\n      "),n("code",[t._v("\n        git help -a "),n("br"),t._v("\n         or "),n("br"),t._v("\n        git help -g\n      ")]),n("br")]),n("p",[t._v("\n      The next step will be to create your first repository to get your hands dirty and have a better comprehension of the concept. But first we need to talk about "),n("a",{attrs:{href:"#GitHub"}},[t._v("GitHub")]),t._v(".\n    ")])])])])}],W={name:"GettingStarted"},B=W,C=Object(u["a"])(B,H,T,!1,null,null,null);C.options.__file="GettingStarted.vue";var F=C.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"GitHub",href:"GitHub"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    GitHub\n  ")]),n("article",[n("p",[t._v("\n      GitHub is a web-based hosting serve for version control using Git. It offers all the distributed version control and "),n("abbr",{attrs:{title:"Source Code Management"}},[t._v("SCM")]),t._v(" of Git as well as adding its own features like bug tracking, task management, wikis and so on. GitHub is free allowing you to have multiple repositories publicly accesible. It also offers plans to hosts private repositories."),n("br"),t._v("\n      We'll use GitHub to host our repository. Go on "),n("a",{attrs:{href:"https://github.com/",target:"_blank"}},[t._v("GitHub")]),t._v(" page and register."),n("br"),n("br")]),n("p",[t._v('\n      Once you have registered click the "New repository" button to create a new repository. Give it a name, a description and leave it in public. You can chose to initialize the repository with a README.md allowing you to immediately clone the repo onto your computer. On the other hand if you\'re importing an existing repo skip this step.'),n("br"),n("br")]),n("p",[t._v("\n      For simplicity we will click on initialize this repository with a README.\n    ")])])])])}],D={name:"GitHub"},M=D,P=Object(u["a"])(M,R,Y,!1,null,null,null);P.options.__file="GitHub.vue";var A=P.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"YourFirstRepo",href:"YourFirstRepo"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    Your First Repository\n  ")]),n("article",[n("p",[t._v('\n      Now that we have our first repository ready we will use Git to add a file and make our first commit. On the GitHub page in your repository click on "clone or download" button and get the https link. Then, on your computer open a terminal and place yourself in document. Now paste the link you copied before and type the following :\n      '),n("code",[t._v('\n        git clone "link you copied" "folder to clone into" '),n("br"),n("br"),n("u",[t._v(" Example ")]),t._v(": git clone https://github.com/Mlk777/test.git TestRepository\n      ")]),n("br")]),n("p",[t._v("\n      And voila! You did your first step with Git. Don't forget that this is a documentation template for FreeCodeCamp. Besides that, Git is a tool that I recommend to learn if you're looking for a developper job whether you work in team or not.\n    ")])])])])}],L={name:"YourFirstRepo"},q=L,z=Object(u["a"])(q,N,V,!1,null,null,null);z.options.__file="YourFirstRepo.vue";var J=z.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"GetGoing",href:"GetGoing"}},[n("div",{staticClass:"content"},[n("header",{attrs:{id:"section-title"}},[t._v("\n    Get Going\n  ")]),n("article",[n("p",[t._v("\n      Below, I give some links to really learn and understand Git. Of course you must read and all, but practising even if you make mistake is still the best solution to master this tool."),n("br"),n("br")]),n("p",[t._v("\n      Links : "),n("br"),t._v("\n      - "),n("a",{attrs:{href:"https://git-scm.com/doc",target:"_blank"}},[t._v("Official git documentation")]),n("br"),t._v("\n      - "),n("a",{attrs:{href:"https://www.atlassian.com/git/tutorials",target:"_blank"}},[t._v("Tutorials and training")]),n("br"),t._v("\n      - "),n("a",{attrs:{href:"https://medium.com/search?q=git",target:"_blank"}},[t._v("Medium articles on Git")]),n("br"),t._v("\n      - "),n("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank"}},[t._v("Train directly in your browser")]),n("br")])])])])}],Q={name:"GetGoing"},X=Q,Z=Object(u["a"])(X,U,K,!1,null,null,null);Z.options.__file="GetGoing.vue";var tt=Z.exports,et={name:"app",components:{Sidebar:d,Introduction:_,WhyGit:O,Benefits:$,GettingStarted:F,GitHub:A,YourFirstRepo:J,GetGoing:tt}},nt=et,ot=(n("034f"),Object(u["a"])(nt,r,i,!1,null,null,null));ot.options.__file="App.vue";var rt=ot.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(rt)}}).$mount("#app")},7041:function(t,e,n){"use strict";var o=n("f0ea"),r=n.n(o);r.a},c21b:function(t,e,n){},c524:function(t,e,n){},f0ea:function(t,e,n){}});
//# sourceMappingURL=app.dae995d5.js.map