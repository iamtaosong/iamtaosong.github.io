"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  question: "What day is it?",
  answer: "It's monday",
  Image: "../../../asset/image/basic-sentence/day/monday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/sunny.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qamonday.mp3"
};

const contentItem1 = {
  question: "What day is it?",
  answer: "It's tuesday",
  Image: "../../../asset/image/basic-sentence/day/tuesday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qatuesday.mp3"
};

const contentItem2 = {
  question: "What day is it?",
  answer: "It's wednesday",
  Image: "../../../asset/image/basic-sentence/day/wednesday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qawednesday.mp3"
};

const contentItem3 = {
  question: "What day is it?",
  answer: "It's thursday",
  Image: "../../../asset/image/basic-sentence/day/thursday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qathursday.mp3"
};

const contentItem4 = {
  question: "What's your favorite day",
  answer: "I like friday",
  Image: "../../../asset/image/basic-sentence/day/friday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/favorite.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qafavorite.mp3"
};

const contentItem5 = {
  question: "What day comes after sunday?",
  answer: "Monday comes after sunday",
  Image: "../../../asset/image/basic-sentence/day/monday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whataftersunday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qaaftersunday.mp3"
};

const contentItem6 = {
  question: "What day comes before monday?",
  answer: "Sunday comes before monday",
  Image: "../../../asset/image/basic-sentence/day/sunday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whatbeforemonday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qabeforemonday.mp3"
};

const contentItem7 = {
  question: "What is your favorite saturday activity?",
  answer: "It is going to the park",
  Image: "../../../asset/image/basic-sentence/day/park.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/favoritesaturday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qapark.mp3"
};

const contentItem8 = {
  question: "What day is the last day of the school",
  answer: "Friday is the last day of the school",
  Image: "../../../asset/image/basic-sentence/day/friday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whatlast.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qalast.mp3"
};

const contentItem9 = {
  question: "What day is it before wednesday?",
  answer: "It's tuesday before wednesday",
  Image: "../../../asset/image/basic-sentence/day/tuesday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whatbeforewednesday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qabeforewednesday.mp3"
};

const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
 
const lessons = ["lesson-0","lesson-1"];

const common ={
  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  letterSelected: false,
  goodResult: `<img src="../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../asset/image/sad.png" alt="happy--v1"/>`,
  right: "../../../asset/image/right.mp3",
  wrong: "../../../asset/image/wrong.mp3"
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
                              <div class="m-3 h2">
                                <div class="form-check my-3">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter1" value="">
                                  <label class="form-check-label" for="letter1"></label>
                                </div>

                                <div class="form-check my-3">
                                  <input class="form-check-input letterElement " type="radio" name="letter" id="letter2" value="">
                                  <label class="form-check-label" for="letter2"></label>
                                </div>

                                <div class="form-check my-3">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter3" value="">
                                  <label class="form-check-label" for="letter3"></label>
                                </div>   

                                <div class="form-check my-3">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter4" value="">
                                  <label class="form-check-label" for="letter4"></label>
                                </div>

                                <div class="form-check my-3">
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
      common.testSoundFile.setAttribute("src",common.right);
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
      common.testSoundFile.setAttribute("src",common.wrong);
    }
  
    common.testAudio.load();
    common.testAudio.play();
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


