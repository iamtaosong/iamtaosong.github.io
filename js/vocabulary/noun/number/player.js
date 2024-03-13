"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "1",
  sound: "/wʌn/",
  soundfile: "../../../../asset/audio/number/one.mp3"
};

const contentItem1 = {
  word: "2",
  sound: "/tuː/",
  soundfile: "../../../../asset/audio/number/two.mp3"
};

const contentItem2 = {
  word: "3",
  sound: "/θriː/",
  soundfile: "../../../../asset/audio/number/three.mp3"
};

const contentItem3 = {
  word: "4",
  sound: "/fɔːr/",
  soundfile: "../../../../asset/audio/number/four.mp3"
};


const contentItem4 = {
  word: "5",
  sound: "/faɪv/",
  soundfile: "../../../../asset/audio/number/five.mp3"
};

const contentItem5 = {
  word: "6",
  sound: "/sɪks/",
  soundfile: "../../../../asset/audio/number/six.mp3"
};

const contentItem6 = {
  word: "7",
  sound: "/sev.ən/",
  soundfile: "../../../../asset/audio/number/seven.mp3"
};


const contentItem7 = {
  word: "8",
  sound: "/eɪt/",
  soundfile: "../../../../asset/audio/number/eight.mp3"
};

const contentItem8 = {
  word: "9",
  sound: "/naɪn/",
  soundfile: "../../../../asset/audio/number/nine.mp3"
};

const contentItem9 = {
  word: "10",
  sound: "/ten/",
  soundfile: "../../../../asset/audio/number/ten.mp3"
};

const contentItem10 = {
  word: "11",
  sound: "/ɪˈlev.ən/",
  soundfile: "../../../../asset/audio/number/eleven.mp3"
}

const contentItem11 = {
  word: "12",
  sound: "/twelv/",
  soundfile: "../../../../asset/audio/number/twelve.mp3"
};

const contentItem12 = {
  word: "13",
  sound: "/θɜːˈtiːn/",
  soundfile: "../../../../asset/audio/number/thirteen.mp3"
}

const contentItem13 = {
  word: "14",
  sound: "/ˌfɔːˈtiːn/",
  soundfile: "../../../../asset/audio/number/fourteen.mp3"
};

const contentItem14 = {
  word: "15",
  sound: "/ˌfɪfˈtiːn/",
  soundfile: "../../../../asset/audio/number/fifteen.mp3"
};

const contentItem15 = {
  word: "16",
  sound: "/ˌsɪkˈstiːn/",
  soundfile: "../../../../asset/audio/number/sixteen.mp3"
};


const contentItem16 = {
  word: "17",
  sound: "/ˌsev.ənˈtiːn/",
  soundfile: "../../../../asset/audio/number/seventeen.mp3"
};

const contentItem17 = {
  word: "18",
  sound: "/ˌeɪˈtiːn/",
  soundfile: "../../../../asset/audio/number/eighteen.mp3"
};

const contentItem18 = {
  word: "19",
  sound: "/ˌnaɪnˈtiːn/",
  soundfile: "../../../../asset/audio/number/nineteen.mp3"
};

const contentItem19 = {
  word: "20",
  sound: "/twen.ti/",
  soundfile: "../../../../asset/audio/number/twenty.mp3"
};

const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
const contents2 = [contentItem10,contentItem11,contentItem12,contentItem13,contentItem14];
const contents3 = [contentItem15,contentItem16,contentItem17,contentItem18,contentItem19];
const lessons = ["lesson-0","lesson-1","lesson-2","lesson-3"];

const common ={
  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  letterSelected: false,
  goodResult: `<img src="../../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../../asset/image/sad.png" alt="happy--v1"/>`
}

const learnObj = {

  previous: document.getElementById("previous"),
  next: document.getElementById("next"),
  content: document.getElementById("content"),
  sound: document.getElementById("sound"),
  soundfile: document.getElementById("soundfile"),
  myAudio: document.getElementById("myAudio"),
  counter: 0,
  letterList:null,
  totalLength: null
};


const wordSoundMatchObj = {
  wordElementLst: null,
  counter: 0,
  sectionLength: 5,
  list0: null,
  list1: null,
  wordSoundMatch: document.getElementById("wordSoundMatch"),
  wordSoundMatchContent: `<div class="card highlight">
                              <div class="my-5 h2">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter1" value="">
                                  <label class="form-check-label" for="letter1"></label>
                                </div>

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement " type="radio" name="letter" id="letter2" value="">
                                  <label class="form-check-label" for="letter2"></label>
                                </div>

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter3" value="">
                                  <label class="form-check-label" for="letter3"></label>
                                </div>   

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter4" value="">
                                  <label class="form-check-label" for="letter4"></label>
                                </div>

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter5" value="">
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
                            </div>`,

};

const wordOrderObj ={
  counter: 0,
  checkResultBtn: null,
  draggableElements: null,
  droppableElements: null,
  wordOrder:document.getElementById("wordOrder"),
  wordOrderContent:` <div class="card border border-0">
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
                    </div> `

};

const spellingObj ={
  counter: 0,
  spellingInput:null,
  spelling: document.getElementById("spelling"),
  spellingContent: ` <div class="card border border-0">
                      <div class="row justify-content-center my-5">
                      <div class="col-6">
                        <input type="text" class="form-control highlight input-large text-center" id="spellingInput" maxlength="10">
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
                  </div>`
};


window.addEventListener("load", function(e){
  
  if(pathname.includes(lessons[0]))
  {
    learnObj.letterList=contents0;

  }else if(pathname.includes(lessons[1]))
  {
    learnObj.letterList=contents1;

  }else if(pathname.includes(lessons[2]))
  {

    learnObj.letterList=contents2;

  }else if(pathname.includes(lessons[3]))
  {

    learnObj.letterList=contents3;

  }
 
  learnObj.totalLength=learnObj.letterList.length;
});

function loadData()
{
 
  learnObj.content.innerText=learnObj.letterList[learnObj.counter].word;
  learnObj.sound.innerText=learnObj.letterList[learnObj.counter].sound
  learnObj.soundfile.setAttribute("src",learnObj.letterList[learnObj.counter].soundfile); 
  learnObj.myAudio.load();
}

learnObj.previous.addEventListener("click", function(){

  if(learnObj.counter>0)
  {
    learnObj.counter--;
    loadData();
  }

});

learnObj.next.addEventListener("click", function(){

  if(learnObj.counter<(learnObj.totalLength-1))
  {
    learnObj.counter++;
    loadData();
  }
   
});

function testNextBtnFunction() {
 
  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }

  if(common.game=="wordOrderMatch")
  {
    if(wordOrderObj.counter<(learnObj.totalLength-1))
    {
      wordOrderObj.counter++;
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordOrderObj.counter].soundfile); 
    }

  }else if (common.game=="wordSoundMatch")
  {

    if(wordSoundMatchObj.counter<(learnObj.totalLength-1))
    {
      wordSoundMatchObj.counter++;
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordSoundMatchObj.counter].soundfile);
    }
  }else if (common.game=="spelling")
  {
    if(spellingObj.counter<(learnObj.totalLength-1))
    {
      spellingObj.counter++;
      common.testSoundFile.setAttribute("src",learnObj.letterList[spellingObj.counter].soundfile);
    }
  }
  common.testAudio.load();
  document.getElementById("showResult").innerHTML="";
}

function testPreviousBtnFunction() {

  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }
  if(common.game=="wordOrderMatch")
  {
    if(wordOrderObj.counter>0)
    {
      wordOrderObj.counter--;      
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordOrderObj.counter].soundfile); 
    }

  }else if (common.game=="wordSoundMatch")
  {
    if(wordSoundMatchObj.counter>0)
    {
      wordSoundMatchObj.counter--;
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordSoundMatchObj.counter].soundfile);
    }
  }else if (common.game=="spelling")
  {

    if(spellingObj.counter>0)
    {
      spellingObj.counter--;
      common.testSoundFile.setAttribute("src",learnObj.letterList[spellingObj.counter].soundfile);
    }
  }
  common.testAudio.load();
  document.getElementById("showResult").innerHTML="";
}

function wordSoundCheck(e) {
  common.letterSelected=e;

  if(common.game=="spelling")
  {
    if(learnObj.letterList[spellingObj.counter].word === (e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult;
   
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  

  }else if (common.game=="wordSoundMatch")
  {

    if(learnObj.letterList[wordSoundMatchObj.counter].word === (e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult;
   
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  }
}

function buildwordSoundMatch()
{
  common.game="wordSoundMatch";
  let p = document.createElement("div"); 
  p.innerHTML= wordSoundMatchObj.wordSoundMatchContent;
  common.testSection.appendChild(p);
  
  wordSoundMatchObj.list0= document.querySelectorAll(".form-check-input");
  wordSoundMatchObj.list1 = document.querySelectorAll(".form-check-label");

  common.testNextBtn = document.getElementById("testNext");
  common.testPreviousBtn = document.getElementById("testPrevious");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.addEventListener("click",testPreviousBtnFunction);

  wordSoundMatchObj.wordElementLst = document.querySelectorAll(".letterElement");
  wordSoundMatchObj.wordElementLst.forEach(elem => {
    elem.addEventListener("click",wordSoundCheck); 
  });
  //here fill up the letters 
  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    wordSoundMatchObj.list0[k].value=learnObj.letterList[k].word;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[k].word;
  }

  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();
}

wordSoundMatchObj.wordSoundMatch.addEventListener("click",function() {
  
  wordSoundMatchObj.counter=0;
  if(common.game=="wordOrderMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    wordOrderObj.draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    wordOrderObj.droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    common.testSection.innerHTML='';
    buildwordSoundMatch();
  }else if (common.game=="spelling")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    spellingObj.spellingInput.removeEventListener('change',wordSoundCheck);
    common.testSection.innerHTML='';
    buildwordSoundMatch();

  }else 
  {
    if(common.game=="wordSoundMatch")
    {
  
  
    }else{
      buildwordSoundMatch();
    }
  }

});


/* function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";

}
 */
/* function dragOver(ev) {
  ev.preventDefault();
}

function checkResult()
{
  let flag = false;
  for(let i=0; i<wordOrderObj.droppableElements.length; i++)
  {
     if(wordOrderObj.droppableElements[i].innerText !="") {
      

     }else
     {
        flag=true;
     }
  }

  if(flag==false)
  {
    for(let i=0; i<wordOrderObj.droppableElements.length-1; i++)
    {
      if(wordOrderObj.droppableElements[i].innerText<wordOrderObj.droppableElements[i+1].innerText)
      {

      }else
      {
        flag=true;
      }
      
    }

    if(flag==false)
    {

      document.getElementById("showResult").innerHTML=common.goodResult;
    }else{
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  }
 
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(ev.target.innerText=="")
  {
    ev.target.appendChild(document.getElementById(data)); 
  }
  checkResult();
}
 */

/* function buildWordOrder(){

  common.game="wordOrderMatch";
  let p = document.createElement("div"); 
  p.innerHTML= wordOrderObj.wordOrderContent;
  common.testSection.appendChild(p);
  wordOrderObj.draggableElements = document.querySelectorAll(".dragSource");
  wordOrderObj.droppableElements = document.querySelectorAll(".droppTarget");
  wordOrderObj.checkResultBtn = document.getElementById("checkResult");

  for(let i=0; i< learnObj.totalLength;i++)
  {
    wordOrderObj.draggableElements[i].innerText=learnObj.letterList[i].word;
  }

  wordOrderObj.draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); 
  });
  
  wordOrderObj.droppableElements.forEach(elem => {
    elem.addEventListener("dragover", dragOver); 
    elem.addEventListener("drop", drop); 
  });

  wordOrderObj.checkResultBtn.addEventListener("click",function()
  {
    wordOrderObj.draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    wordOrderObj.droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    common.testSection.innerHTML='';
    buildWordOrder();

  });
}

wordOrderObj.wordOrder.addEventListener("click", function(){

  wordOrderObj.counter=0;
  if(common.game=="wordSoundMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    wordSoundMatchObj.wordElementLst.forEach(elem => {
      elem.removeEventListener("click",wordSoundCheck); 
    });
    common.testSection.innerHTML='';
    buildWordOrder();
  }else if (common.game=="spelling")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    spellingObj.spellingInput.removeEventListener('change',wordSoundCheck);
    common.testSection.innerHTML='';
    buildWordOrder();
  }else 
  {
    if(common.game=="wordOrderMatch")
    {


    }else{

      buildWordOrder();

    }
  }
 
}); */

function buildspelling()
{
  common.game="spelling";
  let p = document.createElement("div"); 
  p.innerHTML= spellingObj.spellingContent;
  common.testSection.appendChild(p);
  common.testNextBtn = document.getElementById("testNext");
  common.testPreviousBtn = document.getElementById("testPrevious");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.addEventListener("click",testPreviousBtnFunction);
  spellingObj.spellingInput=document.getElementById("spellingInput");
  spellingObj.spellingInput.addEventListener('change',wordSoundCheck);
  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();

};

spellingObj.spelling.addEventListener("click", function(){

  spellingObj.counter=0;
  if(common.game=="wordSoundMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    wordSoundMatchObj.wordElementLst.forEach(elem => {
      elem.removeEventListener("click",wordSoundCheck); 
    });
    common.testSection.innerHTML='';
    buildspelling();
  }else if (common.game=="wordOrderMatch")
  {
    wordOrderObj.draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    wordOrderObj.droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    common.testSection.innerHTML='';
    buildspelling();
  }else 
  {
    if(common.game=="spelling")
    {


    }else{

      buildspelling();
   
    }
  }
 
});




