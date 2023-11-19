"use strict";  
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

const learnObj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  eyeColor: "blue"
};

const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9,
                  contentItem10,contentItem11,contentItem12,contentItem13,contentItem14,contentItem15,contentItem16,contentItem17,contentItem18,contentItem19,contentItem20,
                  contentItem21,contentItem22,contentItem23,contentItem24,contentItem25];

const common ={

  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  goodResult: `<img src="../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../asset/image/sad.png" alt="happy--v1"/>`
}

const letterSoundMatchObj = {
  letterList: contents,
  totalLenght: contents.length,
  letterElementLst: null,
  counter: 0,
  sectionLength: 5,
  list0: null,
  list1: null,
  letterSoundMatch: document.getElementById("letterSoundMatch"),
  letterSoundMatchContent: `<div class="card border-0 highlight">
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


const LetterOrderObj = {
  letterOrder: document.getElementById("letterOrder"),
  letterList: contents,
  totalLenght: contents.length,
  letterElementLst: null,
  counter: 0,
  sectionLength: 5,
  draggableElements: null,
  droppableElements: null,
  checkResultBtn:null,
  letterOrderContent: `<div class="card border">
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

                        <button id="checkResult" type="button" style="width: 50%;" class="btn btn-light rounded-pill py-2 px-3 my-3 shadow backgroundcolor1">
                          <span >Play again</span> 
                          <i class="bi bi-hand-index-thumb text-danger" style='font-size:24px;'></i>    
                        </button>

                        </div> 
                      </div>`

};

const SpellingOrderObj = {
  spelling: document.getElementById("spelling"),
  spellingInput: null,
  letterList: contents,
  counter: 0,
  spellingContent: `<div class="card border">
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
                    </div>`
  
};

let letterSelected=false;

function testCommon2 ()
{

  for(let k=0; k<letterSoundMatchObj.sectionLength;k++)
  {
    letterSoundMatchObj.list0[k].value=letterSoundMatchObj.letterList[letterSoundMatchObj.counter+k].alphabet.charAt(0);
    letterSoundMatchObj.list1[k].innerText=letterSoundMatchObj.letterList[letterSoundMatchObj.counter+k].alphabet.charAt(0);
  }

}

function testCommon3 ()
{

  for(let k=0; k<letterSoundMatchObj.sectionLength;k++)
  {
    letterSoundMatchObj.list0[k].value=letterSoundMatchObj.letterList[letterSoundMatchObj.counter-4+k].alphabet.charAt(0);
    letterSoundMatchObj.list1[k].innerText=letterSoundMatchObj.letterList[letterSoundMatchObj.counter-4+k].alphabet.charAt(0);
  }

}

function testCommon()
{
  common.testSoundFile.setAttribute("src",letterSoundMatchObj.letterList[letterSoundMatchObj.counter].soundfile); 
  common.testAudio.load();
 if(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength==1 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==0)
  {

    testCommon2();
  }else if(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength==2 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==0)
  {
    testCommon2();

  }else if(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength==3 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==0)
  {

    testCommon2();
  }else if(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength==4 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==0)
  {

    testCommon2();
  }else if(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength==5 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==0)
  {

    testCommon3();
  }

}

function testNextBtnFunction() {
  if(letterSelected!=false)
  {
    letterSelected.target.checked=false;
  }

  if(letterSoundMatchObj.counter<(letterSoundMatchObj.totalLenght-1))
  {
    letterSoundMatchObj.counter++;
    testCommon();
  }
  document.getElementById("showResult").innerHTML="";
}

function testPreviousBtnFunction() 
{

  document.getElementById("showResult").innerHTML="";
  if(letterSelected!=false)
  {
    letterSelected.target.checked=false;
  }

  if(letterSoundMatchObj.counter>0)
  {
    letterSoundMatchObj.counter--;
    common.testSoundFile.setAttribute("src",letterSoundMatchObj.letterList[letterSoundMatchObj.counter].soundfile); 
    common.testAudio.load();

    if(Math.floor(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength)==4 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==4)
    {
       testCommon3();
    }else if(Math.floor(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength)==3 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==4)
    {
      testCommon3();
    }else if(Math.floor(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength)==2 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==4)
    {
      testCommon3();
  
    }else if(Math.floor(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength)==1 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==4)
    {
      testCommon3();
    }else if(Math.floor(letterSoundMatchObj.counter/letterSoundMatchObj.sectionLength)==0 && letterSoundMatchObj.counter%letterSoundMatchObj.sectionLength==4)
    {
      testCommon3();
    }
  }
 
}


function letterSoundCheck(e) {

  let letter;
  letterSelected=e;

  letter=letterSoundMatchObj.letterList[letterSoundMatchObj.counter].alphabet; 

  if(letter.includes(e.target.value))
  {

    document.getElementById("showResult").innerHTML=common.goodResult;
 
  }else 
  {

    document.getElementById("showResult").innerHTML=common.poorResult;
  }

 };

function buildletterSoundMatch()
{
  common.game="letterSoundMatch";
  let p = document.createElement("div"); 
  p.innerHTML= letterSoundMatchObj.letterSoundMatchContent;
  common.testSection.appendChild(p);
  
  letterSoundMatchObj.list0= document.querySelectorAll(".form-check-input");
  letterSoundMatchObj.list1 = document.querySelectorAll(".form-check-label");

  common.testNextBtn = document.getElementById("testNext");
  common.testPreviousBtn = document.getElementById("testPrevious");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.addEventListener("click",testPreviousBtnFunction);

  letterSoundMatchObj.letterElementLst = document.querySelectorAll(".letterElement");
  letterSoundMatchObj.letterElementLst.forEach(elem => {
    elem.addEventListener("click",letterSoundCheck); 
  });

  //here fill up the letters 
  for(let k=0; k<letterSoundMatchObj.sectionLength;k++)
  {
    letterSoundMatchObj.list0[k].value=letterSoundMatchObj.letterList[k].alphabet.charAt(0);
    letterSoundMatchObj.list1[k].innerText=letterSoundMatchObj.letterList[k].alphabet.charAt(0);
  }

  common.testSoundFile.setAttribute("src",letterSoundMatchObj.letterList[0].soundfile);
  common.testAudio.load();
}

letterSoundMatchObj.letterSoundMatch.addEventListener("click",function() {
letterSoundMatchObj.counter=0;
if(common.game=="letterOrder")
{
    LetterOrderObj.draggableElements.forEach(elem => {
    elem.removeEventListener("dragstart", dragStart); 
  });
  
  LetterOrderObj.droppableElements.forEach(elem => {
    elem.removeEventListener("dragover", dragOver); 
    elem.removeEventListener("drop", drop); 
  });

  common.testSection.innerHTML='';
  buildletterSoundMatch();

}else if (common.game=="spelling")
{

  common.testNextBtn.removeEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
  SpellingOrderObj.spellingInput.removeEventListener('change',inputChange);
  common.testSection.innerHTML='';
  buildletterSoundMatch();

}else 
{
  if(common.game=="letterSoundMatch")
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
  for(let i=0; i<LetterOrderObj.droppableElements.length; i++)
  {
     if(LetterOrderObj.droppableElements[i].innerText !="") {
      

     }else
     {
        flag=true;
     }
  }

  if(flag==false)
  {
    for(let i=0; i< LetterOrderObj.droppableElements.length-1; i++)
    {
      if(LetterOrderObj.droppableElements[i].innerText<=LetterOrderObj.droppableElements[i+1].innerText)
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

function LetterOrderTestCommon2 ()
{
  for(let k=0; k<LetterOrderObj.sectionLength;k++)
  {
    LetterOrderObj.draggableElements[k].innerText=LetterOrderObj.letterList[LetterOrderObj.counter+k].alphabet.charAt(0);
  }
}

function LetterOrderTestCommon3()
{
  for(let k=0; k<LetterOrderObj.sectionLength;k++)
  {
    LetterOrderObj.draggableElements[k].innerText=LetterOrderObj.letterList[LetterOrderObj.counter-4+k].alphabet.charAt(0);
  }
}

function LetterOrdertestCommon()
{
 if(LetterOrderObj.counter/LetterOrderObj.sectionLength==1 && LetterOrderObj.counter%LetterOrderObj.sectionLength==0)
  {
    LetterOrderTestCommon2();
  }else if(LetterOrderObj.counter/LetterOrderObj.sectionLength==2 && LetterOrderObj.counter%LetterOrderObj.sectionLength==0)
  {
    LetterOrderTestCommon2();

  }else if(LetterOrderObj.counter/LetterOrderObj.sectionLength==3 && LetterOrderObj.counter%LetterOrderObj.sectionLength==0)
  {

    LetterOrderTestCommon2();
  }else if(LetterOrderObj.counter/LetterOrderObj.sectionLength==4 && LetterOrderObj.counter%LetterOrderObj.sectionLength==0)
  {

    LetterOrderTestCommon2();
  }else if(LetterOrderObj.counter/LetterOrderObj.sectionLength==5 && LetterOrderObj.counter%LetterOrderObj.sectionLength==0)
  {

    LetterOrderTestCommon3();
  }

}

function letterOrderNextBtnFunction() {
  if(letterSelected!=false)
  {
    letterSelected.target.checked=false;
  }

  if(LetterOrderObj.counter<(LetterOrderObj.totalLenght-1))
  {
    LetterOrderObj.counter++;
    LetterOrdertestCommon();
  }
  document.getElementById("showResult").innerHTML="";
}

function letterOrderPreviousBtnFunction() 
{

  document.getElementById("showResult").innerHTML="";
  if(letterSelected!=false)
  {
    letterSelected.target.checked=false;
  }

  if(LetterOrderObj.counter>0)
  {
    LetterOrderObj.counter--;
    if(Math.floor(LetterOrderObj.counter/LetterOrderObj.sectionLength)==4 && LetterOrderObj.counter%LetterOrderObj.sectionLength==4)
    {
      LetterOrderTestCommon3();
    }else if(Math.floor(LetterOrderObj.counter/LetterOrderObj.sectionLength)==3 && LetterOrderObj.counter%LetterOrderObj.sectionLength==4)
    {
      LetterOrderTestCommon3();
    }else if(Math.floor(LetterOrderObj.counter/LetterOrderObj.sectionLength)==2 && LetterOrderObj.counter%LetterOrderObj.sectionLength==4)
    {
      LetterOrderTestCommon3();
  
    }else if(Math.floor(LetterOrderObj.counter/LetterOrderObj.sectionLength)==1 && LetterOrderObj.counter%LetterOrderObj.sectionLength==4)
    {
      LetterOrderTestCommon3();
    }else if(Math.floor(LetterOrderObj.counter/LetterOrderObj.sectionLength)==0 && LetterOrderObj.counter%LetterOrderObj.sectionLength==4)
    {
      LetterOrderTestCommon3();
    }
  }
 
}

function buildletterOrder(){

  common.game="letterOrder";
  let p = document.createElement("div"); 
  p.innerHTML= LetterOrderObj.letterOrderContent;
  common.testSection.appendChild(p);
  LetterOrderObj.draggableElements = document.querySelectorAll(".dragSource");
  LetterOrderObj.droppableElements = document.querySelectorAll(".droppTarget");
  LetterOrderObj.checkResultBtn = document.getElementById("checkResult");

  for(let k=0; k<LetterOrderObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*LetterOrderObj.totalLenght);
    LetterOrderObj.draggableElements[k].innerText=LetterOrderObj.letterList[m].alphabet.charAt(0);
  }

  LetterOrderObj.draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart); 
  });
  
  LetterOrderObj.droppableElements.forEach(elem => {
    elem.addEventListener("dragover", dragOver); 
    elem.addEventListener("drop", drop); 
  });

  LetterOrderObj.checkResultBtn.addEventListener("click",function()
  {
    LetterOrderObj.draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    LetterOrderObj.droppableElements.forEach(elem => {
      elem.removeEventListener("dragover", dragOver); 
      elem.removeEventListener("drop", drop); 
    });

    common.testSection.innerHTML='';
    buildletterOrder();

  });
}

LetterOrderObj.letterOrder.addEventListener("click", function(){
  
  LetterOrderObj.counter=0;
  if(common.game=="letterSoundMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    letterSoundMatchObj.letterElementLst.forEach(elem => {
      elem.removeEventListener("click",letterSoundCheck); 
    });

    common.testSection.innerHTML='';
    buildletterOrder();
  }else if (common.game=="spelling")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    SpellingOrderObj.spellingInput.removeEventListener('change',inputChange);
    common.testSection.innerHTML='';
    buildletterOrder();
  }else 
  {
    if(common.game=="letterOrder")
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
  common.game="spelling";
  let p = document.createElement("div"); 
  p.innerHTML= SpellingOrderObj.spellingContent;
  common.testSection.appendChild(p);
  common.testNextBtn = document.getElementById("testNext");
  common.testPreviousBtn = document.getElementById("testPrevious");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.addEventListener("click",testPreviousBtnFunction);
  SpellingOrderObj.spellingInput=document.getElementById("spellingInput");
  SpellingOrderObj.spellingInput.addEventListener('change',inputChange);
  testSoundFile.setAttribute("src",SpellingOrderObj.letterList[0].soundfile);
  common.testAudio.load();

};

SpellingOrderObj.spelling.addEventListener("click", function(){

  SpellingOrderObj.counter=0;
  if(common.game=="letterSoundMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    letterSoundMatchObj.letterElementLst.forEach(elem => {
      elem.removeEventListener("click",letterSoundCheck); 
    });
    common.testSection.innerHTML='';
    buildspelling();
  }else if (common.game=="letterOrder")
  {
    LetterOrderObj.draggableElements.forEach(elem => {
      elem.removeEventListener("dragstart", dragStart); 
    });
    
    LetterOrderObj.droppableElements.forEach(elem => {
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


