```javascript id="k9a3xd"
/* ===========================
   Battlegrounds Academy
   script.js
=========================== */

// ==========================
// FAQ
// ==========================

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const opened = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(item => {
            item.style.display = "none";
        });

        if(!opened){
            answer.style.display = "block";
        }

    });

});

// ==========================
// Scroll Reveal
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition=".8s";

    observer.observe(section);

});

// ==========================
// Botões dos Cards
// ==========================

const buttons = document.querySelectorAll(".card button");

buttons[0].addEventListener("click",()=>{

    window.location.href="tsb.html";

});

buttons[1].addEventListener("click",()=>{

    window.location.href="jjs.html";

});

// ==========================
// Botão Voltar ao Topo
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="25px";
topButton.style.bottom="25px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.cursor="pointer";
topButton.style.fontSize="22px";
topButton.style.display="none";
topButton.style.background="#00e5ff";
topButton.style.color="black";
topButton.style.boxShadow="0 0 20px #00e5ff";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ==========================
// Partículas Neon
// ==========================

document.addEventListener("mousemove",(e)=>{

    const particle=document.createElement("div");

    particle.style.position="fixed";
    particle.style.left=e.clientX+"px";
    particle.style.top=e.clientY+"px";
    particle.style.width="6px";
    particle.style.height="6px";
    particle.style.borderRadius="50%";
    particle.style.pointerEvents="none";
    particle.style.background="#00e5ff";
    particle.style.boxShadow="0 0 12px #00e5ff";
    particle.style.zIndex="9999";

    document.body.appendChild(particle);

    let size=6;
    let opacity=1;

    const animation=setInterval(()=>{

        size+=1;
        opacity-=0.05;

        particle.style.width=size+"px";
        particle.style.height=size+"px";
        particle.style.opacity=opacity;

        if(opacity<=0){

            clearInterval(animation);
            particle.remove();

        }

    },16);

});

// ==========================
// Navbar Glow
// ==========================

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.textShadow="0 0 20px #00e5ff";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.textShadow="none";

    });

});

// ==========================
// Console
// ==========================

console.log("%cBattlegrounds Academy",
"color:#00e5ff;font-size:22px;font-weight:bold;");

console.log("%cWebsite iniciado com sucesso.",
"color:white;");
```
