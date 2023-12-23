"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  question: "What's this?",
  answer: "This is cat",
  Image: "../../../asset/image/basic-conversation/cat.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthis.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/cat.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qacat.mp3"
};

const contentItem1 = {
  question: "What's this?",
  answer: "This is tiger",
  Image: "../../../asset/image/basic-conversation/tiger.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthis.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qatiger.mp3"
};

const contentItem2 = {
  question: "What's this?",
  answer: "This is fox",
  Image: "../../../asset/image/basic-conversation/fox.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthis.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qafox.mp3"
};

const contentItem3 = {
  question: "What's this?",
  answer: "This is frog",
  Image: "../../../asset/image/basic-conversation/frog.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthis.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qafrog.mp3"
};

const contentItem4 = {
  question: "What's this?",
  answer: "This is pig",
  Image: "../../../asset/image/basic-conversation/pig.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthis.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qapig.mp3"
};

const contentItem5 = {
  question: "What's that?",
  answer: "That is dog",
  Image: "../../../asset/image/basic-conversation/dog.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthat.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qadog.mp3"
};

const contentItem6 = {
  question: "What's that?",
  answer: "That is fish",
  Image: "../../../asset/image/basic-conversation/fish.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthat.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qafish.mp3"
};

const contentItem7 = {
  question: "What's that?",
  answer: "That is goat",
  Image: "../../../asset/image/basic-conversation/goat.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthat.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qagoat.mp3"
};

const contentItem8 = {
  question: "What's that?",
  answer: "That is panda",
  Image: "../../../asset/image/basic-conversation/panda.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthat.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qapanda.mp3"
};

const contentItem9 = {
  question: "What's that?",
  answer: "That is horse",
  Image: "../../../asset/image/basic-conversation/horse.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatsthat.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qahorse.mp3"
};


const contentItem10 = {
  question: "what are these?",
  answer: "These are shorts",
  Image: "../../../asset/image/basic-conversation/short.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthese.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qashort.mp3"
};

const contentItem11 = {
  question: "what are these?",
  answer: "These are shoes",
  Image: "../../../asset/image/basic-conversation/shoe.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthese.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qashoe.mp3"
};

const contentItem12 = {
  question: "what are these?",
  answer: "These are pants",
  Image: "../../../asset/image/basic-conversation/pant.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthese.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qapant.mp3"
};

const contentItem13 = {
  question: "what are these?",
  answer: "These are socks",
  Image: "../../../asset/image/basic-conversation/sock.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthese.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/these.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qasock.mp3"
};

const contentItem14 = {
  question: "what are these?",
  answer: "These are gloves",
  Image: "../../../asset/image/basic-conversation/glove.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthese.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qaglove.mp3"
};

const contentItem15 = {
  question: "what are those?",
  answer: "Those are broccoli",
  Image: "../../../asset/image/basic-conversation/broccoli.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthose.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qabrocoli.mp3"
};

const contentItem16 = {
  question: "what are those?",
  answer: "Those are tomatoes",
  Image: "../../../asset/image/basic-conversation/tomato.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthose.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qatomato.mp3"
};

const contentItem17 = {
  question: "what are those?",
  answer: "Those are mushrooms",
  Image: "../../../asset/image/basic-conversation/mushroom.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthose.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qamushroom.mp3"
};

const contentItem18 = {
  question: "what are those?",
  answer: "Those are carrots",
  Image: "../../../asset/image/basic-conversation/carrot.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthose.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qacarrot.mp3"
};

const contentItem19 = {
  question: "what are those?",
  answer: "Those are green peppers",
  Image: "../../../asset/image/basic-conversation/pepper.jpg",
  soundfileQ: "../../../asset/audio/basic-conversation/whatthose.mp3",
  soundfileA: "../../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-conversation/qapepper.mp3"
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
  goodResult: `<img src="../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../asset/image/sad.png" alt="happy--v1"/>`
}

const learnObj = {

  previous: document.getElementById("previous"),
  next: document.getElementById("next"),
  question: document.getElementById("question"),
  answer:document.getElementById("answer"),
  sound: document.getElementById("sound"),
  soundfile: document.getElementById("soundfile"),
  myAudio: document.getElementById("myAudio"),
  picture:document.getElementById("picture"),
  playBtn:document.getElementById("playBtn"),
  counter: 0,
  letterList:null,
  totalLenght: null
};

const wordImageMatchObj = {
  wordElementLst: null,
  counter: 0,
  sectionLength: 5,
  list0: null,
  list1: null,
  picture: null,
  wordImageMatch: document.getElementById("wordImageMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <div class="my-3">
                                <img id="wordImageMatchPicture" src="" width="100" height="100" alt="">
                              </div>
                              <div class="my-3 h2">
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

  learnObj.totalLenght=learnObj.letterList.length;
  document.getElementById("question").style.opacity = 1;
  document.getElementById("answer").style.opacity = 1;
});

function loadData()
{
 
  learnObj.question.innerText=learnObj.letterList[learnObj.counter].question;
  learnObj.answer.innerText=learnObj.letterList[learnObj.counter].answer;
  learnObj.soundfile.setAttribute("src",learnObj.letterList[learnObj.counter].soundfileQA); 
  learnObj.picture.setAttribute("src",learnObj.letterList[learnObj.counter].Image);
  learnObj.myAudio.load();
}

learnObj.previous.addEventListener("click", function(){

  if(learnObj.counter>0)
  {
    learnObj.counter--;
    loadData();
  }
  
  document.getElementById("question").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("question").style.opacity = 1;
  }, 1000);
 
  document.getElementById("answer").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("answer").style.opacity = 1;
  }, 1000);

});

learnObj.next.addEventListener("click", function(){


  if(learnObj.counter<(learnObj.totalLenght-1))
  {
    learnObj.counter++;
    loadData();
  }
  document.getElementById("question").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("question").style.opacity = 1;
  }, 1000);
 

  document.getElementById("answer").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("answer").style.opacity = 1;
  }, 1000);

});

function testNextBtnFunction() {
 
  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }

  if(common.game=="wordImageMatch")
  {
    if(wordImageMatchObj.counter<(learnObj.totalLenght-1))
    {
      wordImageMatchObj.counter++;
      wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].Image);
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfileQ); 
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
  if(common.game=="wordImageMatch")
  {
    if(wordImageMatchObj.counter>0)
    {
      wordImageMatchObj.counter--;
      wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].Image);
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfileQ); 
    }

  }
  common.testAudio.load();
  document.getElementById("showResult").innerHTML="";
}

function letterSoundCheck(e) {
  common.letterSelected=e;

  if(common.game=="wordImageMatch")
  {
    if(learnObj.letterList[wordImageMatchObj.counter].answer === (e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult;
   
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  

  }
}


function buildWordImageMatch()
{
  common.game="wordImageMatch";
  wordImageMatchObj.counter=0;
  let p = document.createElement("div"); 
  p.innerHTML= wordImageMatchObj.wordImageMatchContent;
  common.testSection.appendChild(p);
  
  wordImageMatchObj.list0= document.querySelectorAll(".form-check-input");
  wordImageMatchObj.list1 = document.querySelectorAll(".form-check-label");

  common.testNextBtn = document.getElementById("testNext");
  common.testPreviousBtn = document.getElementById("testPrevious");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.addEventListener("click",testPreviousBtnFunction);

  wordImageMatchObj.wordElementLst = document.querySelectorAll(".letterElement");
  wordImageMatchObj.wordElementLst.forEach(elem => {
    elem.addEventListener("click",letterSoundCheck); 
  });

  //here fill up the letters 
  for(let k=0; k<wordImageMatchObj.sectionLength;k++)
  {
    wordImageMatchObj.list0[k].value=learnObj.letterList[k].answer;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[k].answer;
  }
  wordImageMatchObj.picture=document.getElementById("wordImageMatchPicture");
  wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[0].Image);
  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfileQ);
  common.testAudio.load();
}


wordImageMatchObj.wordImageMatch.addEventListener("click",function() {
  
  if(common.game=="wordImageMatch")
  {

  }else{

    buildWordImageMatch();
  }

});

