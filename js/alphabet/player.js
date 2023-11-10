"use strict"; 
const previous= document.getElementById("previous");
const next= document.getElementById("next");
const content= document.getElementById("content");
const sound= document.getElementById("sound");
const soundfile= document.getElementById("soundfile");
const myAudio= document.getElementById("myAudio"); 
const letterOrder = document.getElementById("letterOrder");
const spelling = document.getElementById("spelling");
const letterSoundMatch = document.getElementById("letterSoundMatch");
const testSection= document.getElementById("testSection");
const pathname=window.location.pathname;
const contentItem0 = {
  alphabet: "A a",
  sound: "/eɪ/",
  soundfile: "../../asset/audio/alphabet/A.mp3"
};

const contentItem1 = {
  alphabet: "B b",
  sound: "/bi:/",
  soundfile: "../../asset/audio/alphabet/B.mp3"
};

const contentItem2 = {
  alphabet: "C c",
  sound: "/si:/",
  soundfile: "../../asset/audio/alphabet/C.mp3"
};

const contentItem3 = {
  alphabet: "D d",
  sound: "/di:/",
  soundfile: "../../asset/audio/alphabet/D.mp3"
};

const contentItem4 = {
  alphabet: "E e",
  sound: "/i:/",
  soundfile: "../../asset/audio/alphabet/E.mp3"
};

const contentItem5 = {
  alphabet: "F f",
  sound: "/ef/",
  soundfile: "../../asset/audio/alphabet/F.mp3"
};


const contentItem6 = {
  alphabet: "G g",
  sound: "/dʒiː/",
  soundfile: "../../asset/audio/alphabet/G.mp3"
};

const contentItem7 = {
  alphabet: "H h",
  sound: "/eɪtʃ/",
  soundfile: "../../asset/audio/alphabet/H.mp3"
};

const contentItem8 = {
  alphabet: "I i",
  sound: "/aɪ/",
  soundfile: "../../asset/audio/alphabet/I.mp3"
};

const contentItem9 = {
  alphabet: "J j",
  sound: "/dʒeɪ/",
  soundfile: "../../asset/audio/alphabet/J.mp3"
};

const contentItem10 = {
  alphabet: "K k",
  sound: "/keɪ/",
  soundfile: "../../asset/audio/alphabet/K.mp3"
};

const contentItem11 = {
  alphabet: "L l",
  sound: "/el/",
  soundfile: "../../asset/audio/alphabet/L.mp3"
};

const contentItem12 = {
  alphabet: "M m",
  sound: "/em/",
  soundfile: "../../asset/audio/alphabet/M.mp3"
};

const contentItem13 = {
  alphabet: "N n",
  sound: "/en/",
  soundfile: "../../asset/audio/alphabet/N.mp3"
};

const contentItem14 = {
  alphabet: "O o",
  sound: "/əʊ/",
  soundfile: "../../asset/audio/alphabet/O.mp3"
};

const contentItem15 = {
  alphabet: "P p",
  sound: "/piː/",
  soundfile: "../../asset/audio/alphabet/P.mp3"
};

const contentItem16 = {
  alphabet: "Q q",
  sound: "/kjuː/",
  soundfile: "../../asset/audio/alphabet/Q.mp3"
};

const contentItem17 = {
  alphabet: "R r",
  sound: "/ɑːr/",
  soundfile: "../../asset/audio/alphabet/R.mp3"
};

const contentItem18 = {
  alphabet: "S s",
  sound: "/es:/",
  soundfile: "../../asset/audio/alphabet/S.mp3"
};

const contentItem19 = {
  alphabet: "T t",
  sound: "/tiː/",
  soundfile: "../../asset/audio/alphabet/T.mp3"
};

const contentItem20 = {
  alphabet: "U u",
  sound: "/juː/",
  soundfile: "../../asset/audio/alphabet/U.mp3"
};

const contentItem21 = {
  alphabet: "V v",
  sound: "/viː/",
  soundfile: "../../asset/audio/alphabet/V.mp3"
};

const contentItem22= {
  alphabet: "W w",
  sound: "/dʌb.əl.juː/",
  soundfile: "../../asset/audio/alphabet/W.mp3"
};

const contentItem23 = {
  alphabet: "X x",
  sound: "/eks/",
  soundfile: "../../asset/audio/alphabet/X.mp3"
};

const contentItem24 = {
  alphabet: "Y y",
  sound: "/waɪ/",
  soundfile: "../../asset/audio/alphabet/Y.mp3"
};
const contentItem25 = {
  alphabet: "Z z",
  sound: "/zed/",
  soundfile: "../../asset/audio/alphabet/Z.mp3"
};

const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
const contents2 = [contentItem10,contentItem11,contentItem12,contentItem13,contentItem14];
const contents3 = [contentItem15,contentItem16,contentItem17,contentItem18,contentItem19];
const contents4 = [contentItem20,contentItem21,contentItem22,contentItem23,contentItem24,contentItem25];
const lessons = ["lesson-0","lesson-1","lesson-2","lesson-3","lesson-4"];

const letterSoundMatchContent = `
<div class="card border border-0">
  <div class="my-5 h2">
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="letter" id="letter1" value="">
      <label class="form-check-label" for="letter1"></label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="letter" id="letter2" value="">
      <label class="form-check-label" for="letter2"></label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="letter" id="letter3" value="">
      <label class="form-check-label" for="letter3"></label>
    </div>   

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="letter" id="letter4" value="">
      <label class="form-check-label" for="letter4"></label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="letter" id="letter5" value="">
      <label class="form-check-label" for="letter5"></label>
    </div>
  </div>

  <div id="showResult" class="my-2">
   
  </div>

  <div class="card-body" style="background-color: #00ffff;">

    <div class="d-flex justify-content-around align-items-center">
  
      <button type="button" class="btn border-0 p-0 mx-2" id="testPrevious">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </button>
          
      <audio id="testAudio" controls preload="none" controlsList="nodownload">
        <source id="testSoundFile" src="" type="audio/mpeg">
      </audio>

      <button type="button" class="btn border-0 p-0 mx-2" id="testNext">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </button>
    </div>
  </div>
</div>

`;

const spellingContent =`
<div class="card border border-0">

  <div class="row justify-content-center my-5">
    <div class="col-4">
      <input type="text" class="form-control highlight input-large text-center" id="spellingInput" maxlength="1">
    </div>
  </div>

  <div id="showResult" class="my-2">
   
  </div>
               
  <div class="card-body" style="background-color: #00ffff;">

    <div class="d-flex justify-content-around align-items-center">
  
      <button type="button" class="btn border-0 p-0 mx-2" id="testPrevious">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
      </button>
          
      <audio id="testAudio" controls preload="none" controlsList="nodownload">
        <source id="testSoundFile" src="" type="audio/mpeg">
      </audio>

      <button type="button" class="btn border-0 p-0 mx-2" id="testNext">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </button>
    </div>
  </div>
</div>

`;

const letterOrderContent =`
<div class="card border border-0">
  <div class="h2">
    <div class="row justify-content-center my-5">

      <div class="col-2">
        <H2 id="source1" class=" justify-content-center dragSource" style="cursor: move;" draggable="true"></H2>
      </div>

      <div class="col-2">
        <H2 id="source2" class="justify-content-center dragSource" style="cursor: move;" draggable="true"></H2>
      </div>

      <div class="col-2">
        <H2 id="source3" class="justify-content-center dragSource" style="cursor: move;" draggable="true"></H2>
      </div>

      <div class="col-2">
        <H2 id="source4" class="justify-content-center dragSource" style="cursor: move;" draggable="true"></H2>
      </div>
      
      <div class="col-2">
        <H2 id="source5" class="justify-content-center dragSource" style="cursor: move;" draggable="true"></H2>
      </div>
   </div>  

   <div class="row justify-content-center my-5 text-warning"style="height: 50px;" >
    
    <div class="col-2 border-3 border border-info mx-1 droppTarget">

      </div>

      <div class="col-2 border-3 border border-info mx-1 droppTarget">

      </div>

      <div class="col-2 border-3 border border-info mx-1 droppTarget">

      </div>

      <div class="col-2 border-3 border border-info mx-1 droppTarget">

      </div>

      <div class="col-2 border-3 border border-info mx-1 droppTarget">

      </div>
   </div>  

   <div id="showResult">
   
   </div>

    <button id="checkResult" type="button" style="width: 50%;" class="btn rounded-pill py-2 px-3 my-3 shadow practicebuttoncolor border-0">
      <span class="text-white">Play again</span> 
      <i class="bi bi-hand-index-thumb text-white">

      </i>    
    </button>
  </div> 
</div> 
`;
const goodResult=`<img src="../../asset/image/happy.png" alt="happy--v1"/>`;
const poorResult=`<img src="../../asset/image/sad.png" alt="happy--v1"/>`;
let i=0;
let k;
let letterSelected=false;
let testPreviousBtn;
let testNextBtn;
let testAudio;
let testSoundFile;
let letterElement1;
let letterElement2;
let letterElement3;
let letterElement4;
let letterElement5;
let game;
let spellingInput;
let draggableElements;
let droppableElements;
let checkResultBtn;
let goodResultObj;
let poorResultObj;
window.addEventListener("load", function(e){
  
  if(pathname.includes(lessons[0]))
  {
     k = contents0.length;

  }else if(pathname.includes(lessons[1]))
  {
     k = contents1.length;

  }else if(pathname.includes(lessons[2]))
  {

     k=contents2.length;

  }else if(pathname.includes(lessons[3]))
  {

     k = contents3.length;

  }else if(pathname.includes(lessons[4]))
  {

     k = contents4.length;
  }

});

previous.addEventListener("click", function(){

  if(i>0)
  {
    i--;
    if(pathname.includes(lessons[0]))
    {
      content.innerText=contents0[i].alphabet;
      sound.innerText=contents0[i].sound
      soundfile.setAttribute("src",contents0[i].soundfile); 

    }else if(pathname.includes(lessons[1]))
    {
      content.innerText=contents1[i].alphabet;
      sound.innerText=contents1[i].sound
      soundfile.setAttribute("src",contents1[i].soundfile); 
  
    }else if(pathname.includes(lessons[2]))
    {
  
      content.innerText=contents2[i].alphabet;
      sound.innerText=contents2[i].sound
      soundfile.setAttribute("src",contents2[i].soundfile); 
  
    }else if(pathname.includes(lessons[3]))
    {
  
      content.innerText=contents3[i].alphabet;
      sound.innerText=contents3[i].sound
      soundfile.setAttribute("src",contents3[i].soundfile); 
  
    }else if(pathname.includes(lessons[4]))
    {
      content.innerText=contents4[i].alphabet;
      sound.innerText=contents4[i].sound
      soundfile.setAttribute("src",contents4[i].soundfile); 
    }

    myAudio.load();

  }

});

next.addEventListener("click", function(){

  if(i<(k-1))
  {
    i++;
    if(pathname.includes(lessons[0]))
    {
      content.innerText=contents0[i].alphabet;
      sound.innerText=contents0[i].sound
      soundfile.setAttribute("src",contents0[i].soundfile); 

    }else if(pathname.includes(lessons[1]))
    {
      content.innerText=contents1[i].alphabet;
      sound.innerText=contents1[i].sound
      soundfile.setAttribute("src",contents1[i].soundfile); 
  
    }else if(pathname.includes(lessons[2]))
    {
  
      content.innerText=contents2[i].alphabet;
      sound.innerText=contents2[i].sound
      soundfile.setAttribute("src",contents2[i].soundfile); 
  
    }else if(pathname.includes(lessons[3]))
    {
  
      content.innerText=contents3[i].alphabet;
      sound.innerText=contents3[i].sound
      soundfile.setAttribute("src",contents3[i].soundfile); 

    }else if(pathname.includes(lessons[4]))
    {
      content.innerText=contents4[i].alphabet;
      sound.innerText=contents4[i].sound
      soundfile.setAttribute("src",contents4[i].soundfile); 
    }

    myAudio.load();
    
  }
   
});

function testNextBtnFunction() {
 
  if(letterSelected!=false)
  {
    letterSelected.target.checked=false;
  }

  if(i<(k-1))
  {

    i++;
    if(pathname.includes(lessons[0]))
    {
      
      testSoundFile.setAttribute("src",contents0[i].soundfile); 

    }else if(pathname.includes(lessons[1]))
    {
  
      testSoundFile.setAttribute("src",contents1[i].soundfile); 
  
    }else if(pathname.includes(lessons[2]))
    {
  
      testSoundFile.setAttribute("src",contents2[i].soundfile); 
  
    }else if(pathname.includes(lessons[3]))
    {
  
      testSoundFile.setAttribute("src",contents3[i].soundfile); 

    }else if(pathname.includes(lessons[4]))
    {
  
      testSoundFile.setAttribute("src",contents4[i].soundfile); 
    }

    testAudio.load();
  
  }
  document.getElementById("showResult").innerHTML="";
}

function testPreviousBtnFunction() {

  if(letterSelected!=false)
  {
    letterSelected.target.checked=false;
  }

  if(i>0)
  {
    i--;

    if(pathname.includes(lessons[0]))
    {
      
      testSoundFile.setAttribute("src",contents0[i].soundfile); 

    }else if(pathname.includes(lessons[1]))
    {
  
      testSoundFile.setAttribute("src",contents1[i].soundfile); 
  
    }else if(pathname.includes(lessons[2]))
    {
  
      testSoundFile.setAttribute("src",contents2[i].soundfile); 
  
    }else if(pathname.includes(lessons[3]))
    {
  
      testSoundFile.setAttribute("src",contents3[i].soundfile); 

    }else if(pathname.includes(lessons[4]))
    {
  
      testSoundFile.setAttribute("src",contents4[i].soundfile); 
    }

    testAudio.load();

  }
  document.getElementById("showResult").innerHTML="";
}

function letterSoundCheck(e) {

  let letter;
  letterSelected=e;
  if(pathname.includes(lessons[0]))
  {
    letter=contents0[i].alphabet;

  }else if(pathname.includes(lessons[1]))
  {

    letter=contents1[i].alphabet;

  }else if(pathname.includes(lessons[2]))
  {

    letter=contents2[i].alphabet; 

  }else if(pathname.includes(lessons[3]))
  {

    letter=contents3[i].alphabet; 

  }else if(pathname.includes(lessons[4]))
  {

    letter=contents4[i].alphabet; 
  }

  if(letter.includes(e.target.value))
  {

    document.getElementById("showResult").innerHTML=goodResult;
 
  }else 
  {

    document.getElementById("showResult").innerHTML=poorResult;
  }

 };

function buildletterSoundMatch()
{

  game="letterSoundMatch";
  let p = document.createElement("div"); 
  let list0;
  let list1;
  let letterList;
  p.innerHTML= letterSoundMatchContent;
  testSection.appendChild(p);
  
  list0= document.querySelectorAll(".form-check-input");
  list1 = document.querySelectorAll(".form-check-label");

  testNextBtn = document.getElementById("testNext");
  testPreviousBtn = document.getElementById("testPrevious");
  testAudio= document.getElementById("testAudio"); 
  testSoundFile = document.getElementById("testSoundFile");
  testNextBtn.addEventListener("click",testNextBtnFunction);
  testPreviousBtn.addEventListener("click",testPreviousBtnFunction);
  letterElement1=document.getElementById("letter1");
  letterElement2=document.getElementById("letter2");
  letterElement3=document.getElementById("letter3");
  letterElement4=document.getElementById("letter4");
  letterElement5=document.getElementById("letter5");
  letterElement1.addEventListener("click",letterSoundCheck);
  letterElement2.addEventListener("click",letterSoundCheck);
  letterElement3.addEventListener("click",letterSoundCheck);
  letterElement4.addEventListener("click",letterSoundCheck);
  letterElement5.addEventListener("click",letterSoundCheck);

  if(pathname.includes(lessons[0]))
  {
    letterList=contents0;

  }else if(pathname.includes(lessons[1]))
  {
    letterList=contents1;
     
  }else if(pathname.includes(lessons[2]))
  {

    letterList=contents2;

  }else if(pathname.includes(lessons[3]))
  {

    letterList=contents3;

  }else if(pathname.includes(lessons[4]))
  {

    letterList=contents4;
  }

  for(let i=0; i< letterList.length;i++)
  {
    list0[i].value=letterList[i].alphabet.charAt(0);
    list1[i].innerText=letterList[i].alphabet.charAt(0);
  }
  testSoundFile.setAttribute("src",letterList[0].soundfile);
  myAudio.load();
}

letterSoundMatch.addEventListener("click",function() {
  
  i=0;
  if(game=="letterOrder")
  {
   draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    testSection.innerHTML='';
    buildletterSoundMatch();

  }else if (game=="spelling")
  {

    testNextBtn.removeEventListener("click",testNextBtnFunction);
    testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    spellingInput.removeEventListener('change',inputChange);
    testSection.innerHTML='';
    buildletterSoundMatch();

  }else 
  {
    if(game=="letterSoundMatch")
    {


    }else{

      buildletterSoundMatch();
    }
  }

});


function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";

}

function dragOver(ev) {
  ev.preventDefault();
}

function checkResult()
{
  let flag = false;
  for(let i=0; i< droppableElements.length; i++)
  {
     if(droppableElements[i].innerText !="") {
      

     }else
     {
        flag=true;
     }
  }

  if(flag==false)
  {
    for(let i=0; i< droppableElements.length-1; i++)
    {
      if(droppableElements[i].innerText<droppableElements[i+1].innerText)
      {

      }else
      {
        flag=true;
      }
      
    }

    if(flag==false)
    {
      console.log("well done");
      document.getElementById("showResult").innerHTML=goodResult;
    }else{
      document.getElementById("showResult").innerHTML=poorResult;
      console.log("try again");
    }
  }
 
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(ev.target.innerText=="")
  {
    ev.target.appendChild(document.getElementById(data)); 
  }else{
    console.log("has data in here");
  }
  checkResult();
}


function buildletterOrder(){

  game="letterOrder";
  let letterList;
  let p = document.createElement("div"); 
  p.innerHTML= letterOrderContent;
  testSection.appendChild(p);
  draggableElements = document.querySelectorAll(".dragSource");
  droppableElements = document.querySelectorAll(".droppTarget");
  checkResultBtn = document.getElementById("checkResult");

  if(pathname.includes(lessons[0]))
  {
    letterList=contents0;

  }else if(pathname.includes(lessons[1]))
  {
    letterList=contents1;
     
  }else if(pathname.includes(lessons[2]))
  {

    letterList=contents2;

  }else if(pathname.includes(lessons[3]))
  {

    letterList=contents3;

  }else if(pathname.includes(lessons[4]))
  {

    letterList=contents4;
  }

  for(let i=0; i< letterList.length;i++)
  {
    draggableElements[i].innerText=letterList[i].alphabet.charAt(0);
  }

  draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); 
  });
  
  droppableElements.forEach(elem => {
    elem.addEventListener("dragover", dragOver); 
    elem.addEventListener("drop", drop); 
  });

  checkResultBtn.addEventListener("click",function()
  {
    draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    testSection.innerHTML='';
    buildletterOrder();

  });
}

letterOrder.addEventListener("click", function(){
  
  i=0;
  if(game=="letterSoundMatch")
  {
    testNextBtn.removeEventListener("click",testNextBtnFunction);
    testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    letterElement1.removeEventListener("click",letterSoundCheck);
    letterElement2.removeEventListener("click",letterSoundCheck);
    letterElement3.removeEventListener("click",letterSoundCheck);
    letterElement4.removeEventListener("click",letterSoundCheck);
    letterElement5.removeEventListener("click",letterSoundCheck);
    testSection.innerHTML='';
    buildletterOrder();
  }else if (game=="spelling")
  {
    testNextBtn.removeEventListener("click",testNextBtnFunction);
    testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    spellingInput.removeEventListener('change',inputChange);
    testSection.innerHTML='';
    buildletterOrder();
  }else 
  {
    if(game=="letterOrder")
    {


    }else{

      buildletterOrder();

    }
  }
 

});

function inputChange(e){
  letterSoundCheck(e);
}

function buildspelling()
{
  game="spelling";
  let letterList;
  let p = document.createElement("div"); 
  p.innerHTML= spellingContent;
  testSection.appendChild(p);
  testNextBtn = document.getElementById("testNext");
  testPreviousBtn = document.getElementById("testPrevious");
  testAudio= document.getElementById("testAudio"); 
  testSoundFile = document.getElementById("testSoundFile");
  testNextBtn.addEventListener("click",testNextBtnFunction);
  testPreviousBtn.addEventListener("click",testPreviousBtnFunction);
  spellingInput=document.getElementById("spellingInput");
  spellingInput.addEventListener('change',inputChange);
    
  if(pathname.includes(lessons[0]))
  {
    letterList=contents0;

  }else if(pathname.includes(lessons[1]))
  {
    letterList=contents1;
     
  }else if(pathname.includes(lessons[2]))
  {

    letterList=contents2;

  }else if(pathname.includes(lessons[3]))
  {

    letterList=contents3;

  }else if(pathname.includes(lessons[4]))
  {

    letterList=contents4;
  }

  testSoundFile.setAttribute("src",letterList[0].soundfile);
  myAudio.load();

};

spelling.addEventListener("click", function(){

  i=0;
  if(game=="letterSoundMatch")
  {
    testNextBtn.removeEventListener("click",testNextBtnFunction);
    testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    letterElement1.removeEventListener("click",letterSoundCheck);
    letterElement2.removeEventListener("click",letterSoundCheck);
    letterElement3.removeEventListener("click",letterSoundCheck);
    letterElement4.removeEventListener("click",letterSoundCheck);
    letterElement5.removeEventListener("click",letterSoundCheck);
    testSection.innerHTML='';
    buildspelling();
  }else if (game=="letterOrder")
  {

    draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    testSection.innerHTML='';
    buildspelling();
  }else 
  {
    if(game=="spelling")
    {


    }else{

      buildspelling();
   
    }
  }
 
});


