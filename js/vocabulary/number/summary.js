"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "one 1",
  sound: "/wʌn/",
  soundfile: "../../../asset/audio/number/one.mp3"
};

const contentItem1 = {
  word: "two 2",
  sound: "/tuː/",
  soundfile: "../../../asset/audio/number/two.mp3"
};

const contentItem2 = {
  word: "three 3",
  sound: "/θriː/",
  soundfile: "../../../asset/audio/number/three.mp3"
};

const contentItem3 = {
  word: "four 4",
  sound: "/fɔːr/",
  soundfile: "../../../asset/audio/number/four.mp3"
};


const contentItem4 = {
  word: "five 5",
  sound: "/faɪv/",
  soundfile: "../../../asset/audio/number/five.mp3"
};

const contentItem5 = {
  word: "six 6",
  sound: "/sɪks/",
  soundfile: "../../../asset/audio/number/six.mp3"
};

const contentItem6 = {
  word: "seven 7",
  sound: "/sev.ən/",
  soundfile: "../../../asset/audio/number/seven.mp3"
};


const contentItem7 = {
  word: "eight 8",
  sound: "/eɪt/",
  soundfile: "../../../asset/audio/number/eight.mp3"
};

const contentItem8 = {
  word: "nine 9",
  sound: "/naɪn/",
  soundfile: "../../../asset/audio/number/nine.mp3"
};

const contentItem9 = {
  word: "ten 10",
  sound: "/ten/",
  soundfile: "../../../asset/audio/number/ten.mp3"
};

const contentItem10 = {
  word: "eleven 11",
  sound: "/ɪˈlev.ən/",
  soundfile: "../../../asset/audio/number/eleven.mp3"
}

const contentItem11 = {
  word: "twelve 12",
  sound: "/twelv/",
  soundfile: "../../../asset/audio/number/twelve.mp3"
};

const contentItem12 = {
  word: "thirteen 13",
  sound: "/θɜːˈtiːn/",
  soundfile: "../../../asset/audio/number/thirteen.mp3"
}

const contentItem13 = {
  word: "fourteen 14",
  sound: "/ˌfɔːˈtiːn/",
  soundfile: "../../../asset/audio/number/fourteen.mp3"
};

const contentItem14 = {
  word: "fifteen 15",
  sound: "/ˌfɪfˈtiːn/",
  soundfile: "../../../asset/audio/number/fifteen.mp3"
};

const contentItem15 = {
  word: "sixteen 16",
  sound: "/ˌsɪkˈstiːn/",
  soundfile: "../../../asset/audio/number/sixteen.mp3"
};


const contentItem16 = {
  word: "seventeen 17",
  sound: "/ˌsev.ənˈtiːn/",
  soundfile: "../../../asset/audio/number/seventeen.mp3"
};

const contentItem17 = {
  word: "eighteen 18",
  sound: "/ˌeɪˈtiːn/",
  soundfile: "../../../asset/audio/number/eighteen.mp3"
};

const contentItem18 = {
  word: "nineteen 19",
  sound: "/ˌnaɪnˈtiːn/",
  soundfile: "../../../asset/audio/number/nineteen.mp3"
};

const contentItem19 = {
  word: "twenty 20",
  sound: "/twen.ti/",
  soundfile: "../../../asset/audio/number/twenty.mp3"
};

const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9,
  contentItem10,contentItem11,contentItem12,contentItem13,contentItem14,contentItem15,contentItem16,contentItem17,contentItem18,contentItem19];

const common ={
  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  letterSelected: false,
  goodResult: `<img src="../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../asset/image/sad.png" alt="happy--v1"/>`
}

const learnObj = {
  letterList:contents,
  totalLength: contents.length
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
  sectionLength: 5,
  checkResultBtn: null,
  draggableElements: null,
  droppableElements: null,
  wordOrder:document.getElementById("wordOrder"),
  wordOrderContent:` <div class="card border border-0">
                      <div class="h2">
                        <div class="row justify-content-center my-5">

                          <div class="col-2">
                            <H2 id="source1" class="justify-content-center dragSource" style="cursor: move;" draggable="true"></H2>
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
                          <i class="bi bi-hand-index-thumb text-white"></i>    
                        </button>
                      </div> 
                    </div> `

};

function wordGenProcess(i,index)
{

  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*learnObj.totalLength);
    console.log("m "+m);
    wordSoundMatchObj.list0[k].value=learnObj.letterList[m].word;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[m].word;
  }
  wordSoundMatchObj.list0[i].value=learnObj.letterList[index].word;
  wordSoundMatchObj.list1[i].innerText=learnObj.letterList[index].word;
  common.testSoundFile.setAttribute("src",learnObj.letterList[index].soundfile);
  common.testAudio.load();
}


function wordGen(index){
  
  let i=index%wordSoundMatchObj.sectionLength;
  if (i==0)
  {

    wordGenProcess(i,index);

  }else if(index==1)
  {

    wordGenProcess(i,index);

  }else if(index==2)
  {

    wordGenProcess(i,index);

  }else if(index==3)
  {

    wordGenProcess(i,index);

  }else if(index)
  {

    wordGenProcess(i,index);
    
  }

}

function testNextBtnFunction() {
 
  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }

 if (common.game=="wordSoundMatch")
  {
    if(wordSoundMatchObj.counter<(learnObj.totalLength-1))
    {
      wordSoundMatchObj.counter++;
      wordGen(wordSoundMatchObj.counter);
    }

  }

  document.getElementById("showResult").innerHTML="";
}

function testPreviousBtnFunction() {

  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }

  if (common.game=="wordSoundMatch")
  {
    if(wordSoundMatchObj.counter>0)
    {
      wordSoundMatchObj.counter--;
      wordGen(wordSoundMatchObj.counter);
    }
  }
  document.getElementById("showResult").innerHTML="";
}

function wordSoundCheck(e) {
  common.letterSelected=e;
 if (common.game=="wordSoundMatch")
  {
    if(learnObj.letterList[wordSoundMatchObj.counter].word.includes(e.target.value))
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

  if(common.game=="wordSoundMatch")
  {


  }else{
    buildwordSoundMatch();
  }

});


/* function dragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";

}
 
function dragOver(ev) {
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
 

function buildWordOrder(){

  common.game="wordOrderMatch";
  let p = document.createElement("div"); 
  p.innerHTML= wordOrderObj.wordOrderContent;
  common.testSection.appendChild(p);
  wordOrderObj.draggableElements = document.querySelectorAll(".dragSource");
  wordOrderObj.droppableElements = document.querySelectorAll(".droppTarget");
  wordOrderObj.checkResultBtn = document.getElementById("checkResult");

  for(let k=0; k< wordOrderObj.sectionLength;k++)
  {

    let m =Math.floor(Math.random()*learnObj.totalLength);
    wordOrderObj.draggableElements[k].innerText=learnObj.letterList[m].word;

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
  }else 
  {
    if(common.game=="wordOrderMatch")
    {


    }else{

      buildWordOrder();

    }
  }
 
});  */

