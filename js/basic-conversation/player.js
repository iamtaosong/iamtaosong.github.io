"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  question: "get up",
  answer: "/naɪf/",
  Image: "../../asset/image/basic-conversation/up.jpg",
  soundfileQ: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileA: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../asset/audio/basic-conversation/getup.mp3"
};

const contentItem1 = {
  question: "get dressed",
  answer: "/pleɪt/",
  Image: "../../asset/image/basic-conversation/dress.jpg",
  soundfileQ: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileA: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../asset/audio/basic-conversation/getup.mp3"
};

const contentItem2 = {
  question: "wash your face",
  answer: "/fɔːk/",
  Image: "../../asset/image/basic-conversation/face.jpg",
  soundfileQ: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileA: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../asset/audio/basic-conversation/getup.mp3"
};

const contentItem3 = {
  question: "brush your teeth",
  answer: "/ˈtʃɒp.stɪk/",
  soundfileQ: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileA: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../asset/audio/basic-conversation/getup.mp3"
};

const contentItem4 = {
  question: "brush your hair",
  answer: "/spuːn/",
  Image: "../../asset/image/basic-conversation/hair.jpg",
  soundfileQ: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileA: "../../asset/audio/basic-conversation/getup.mp3",
  soundfileQA: "../../asset/audio/basic-conversation/getup.mp3"
};

const contentItem5 = {
  question: "have breakfast",
  answer: "/ɡlɑːs/",
  Image: "../../asset/image/basic-conversation/breakfast.jpg",
  soundfile: "../../asset/audio/basic-conversation/breakfast.mp3"
};

const contentItem6 = {
  question: "go to school",
  answer: "/kʌp/",
  Image: "../../asset/image/basic-conversation/school.jpg",
  soundfile: "../../asset/audio/basic-conversation/school.mp3"
};

const contentItem7 = {
  question: "have lunch",
  answer: "/ˈspætʃ.ə.lə/",
  Image: "../../asset/image/basic-conversation/lunch.jpg",
  soundfile: "../../asset/audio/basic-conversation/lunch.mp3"
};

const contentItem8 = {
  question: "play football",
  answer: "/wɪsk/",
  Image: "../../asset/image/basic-conversation/football.jpg",
  soundfile: "../../asset/audio/basic-conversation/football.mp3"
};

const contentItem9 = {
  question: "hurry up",
  answer: "/ˈnuː.dəl/",
  Image: "../../asset/image/basic-conversation/hurry.jpg",
  soundfile: "../../asset/audio/basic-conversation/hurryup.mp3"
};


const contentItem10 = {
  question: "take classes",
  answer: "/ˈɡreɪ.tər",
  Image: "../../asset/image/basic-conversation/class.jpg",
  soundfile: "../../asset/audio/basic-conversation/class.mp3"
};

const contentItem11 = {
  question: "go to bed",
  answer: "/bəʊl/",
  Image: "../../asset/image/basic-conversation/bed.jpg",
  soundfile: "../../asset/audio/basic-conversation/bed.mp3"
};

const contentItem12 = {
  question: "come home",
  answer: "/ˈkʌt.ɪŋ ˌbɔːd/",
  Image: "../../asset/image/basic-conversation/home.jpg",
  soundfile: "../../asset/audio/basic-conversation/home.mp3"
};

const contentItem13 = {
  question: "have dinner",
  answer: "/tɒŋz/",
  Image: "../../asset/image/basic-conversation/dinner.jpg",
  soundfile: "../../asset/audio/basic-conversation/dinner.mp3"
};

const contentItem14 = {
  question: "do your homework",
  answer: "/ˈbɒt.əl/",
  Image: "../../asset/image/basic-conversation/homework.jpg",
  soundfile: "../../asset/audio/basic-conversation/homework.mp3"
};

const contentItem15 = {
  question: "walk dog",
  answer: "/ˈket.əl/",
  Image: "../../asset/image/basic-conversation/dog.jpg",
  soundfile: "../../asset/audio/basic-conversation/dog.mp3"
};

const contentItem16 = {
  question: "take a shower",
  answer: "/pɒt/",
  Image: "../../asset/image/basic-conversation/shower.jpg",
  soundfile: "../../asset/audio/basic-conversation/shower.mp3"
};

const contentItem17 = {
  question: "take a bath",
  answer: "/frɪdʒ/",
  Image: "../../asset/image/basic-conversation/bath.jpg",
  soundfile: "../../asset/audio/basic-conversation/bath.mp3"
};

const contentItem18 = {
  question: "drink water",
  answer: "/mit/",
  Image: "../../asset/image/basic-conversation/water.jpg",
  soundfile: "../../asset/audio/basic-conversation/water.mp3"
};

const contentItem19 = {
  question: "ride a bike",
  answer: "/ˈfraɪ.ɪŋˌpæn/",
  Image: "../../asset/image/basic-conversation/bike.jpg",
  soundfile: "../../asset/audio/basic-conversation/bike.mp3"
};

const contentItem20 = {
  question: "go and play",
  answer: "/ˈmaɪ.krə.weɪv/",
  Image: "../../asset/image/basic-conversation/play.jpg",
  soundfile: "../../asset/audio/basic-conversation/play.mp3"
};

const contentItem21 = {
  question: "I love the food",
  answer: "/ˈeɪ.prən/",
  Image: "../../asset/image/basic-conversation/food.jpg",
  soundfile: "../../asset/audio/basic-conversation/food.mp3"
};

const contentItem22 = {
  question: "we are friends",
  answer: "/ˈeɪ.prən/",
  Image: "../../asset/image/basic-conversation/friend.jpg",
  soundfile: "../../asset/audio/basic-conversation/friend.mp3"
};

const contentItem23 = {
  question: "take school bus",
  answer: "/ˈeɪ.prən/",
  Image: "../../asset/image/basic-conversation/schoolbus.jpg",
  soundfile: "../../asset/audio/basic-conversation/bus.mp3"
};

const contentItem24 = {
  question: "watch TV",
  answer: "/ˈeɪ.prən/",
  Image: "../../asset/image/basic-conversation/Tv.jpg",
  soundfile: "../../asset/audio/basic-conversation/tv.mp3"
};

const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
const contents2 = [contentItem10,contentItem11,contentItem12,contentItem13,contentItem14]; 
const contents3 = [contentItem15,contentItem16,contentItem17,contentItem18,contentItem19]; 
const contents4 = [contentItem20,contentItem21,contentItem22,contentItem23,contentItem24]; 

const lessons = ["lesson-0","lesson-1","lesson-2","lesson-3","lesson-4"];

const common ={
  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  letterSelected: false,
  goodResult: `<img src="../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../asset/image/sad.png" alt="happy--v1"/>`
}

const learnObj = {

  previous: document.getElementById("previous"),
  next: document.getElementById("next"),
  content: document.getElementById("content"),
  sound: document.getElementById("sound"),
  soundfile: document.getElementById("soundfile"),
  myAudio: document.getElementById("myAudio"),
  picture:document.getElementById("picture"),
  playBtn:document.getElementById("playBtn"),
  counter: 0,
  letterList:null,
  totalLenght: null
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
                                <img id="wordImageMatchPicture" src="../../../asset/image/28732095_7480523.svg" width="100" height="100" alt="">
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

  } else if(pathname.includes(lessons[4]))
  {

    learnObj.letterList=contents4;

  }
  learnObj.totalLenght=learnObj.letterList.length;
  document.getElementById("content").style.opacity = 1;
  document.getElementById("content2").style.opacity = 1;
});


/* learnObj.playBtn.addEventListener("click", function(){
  var x = document.getElementById("myAudio"); 
  x.play(); 
});
 */

function loadData()
{
 
  learnObj.content.innerText=learnObj.letterList[learnObj.counter].question;

  learnObj.soundfile.setAttribute("src",learnObj.letterList[learnObj.counter].soundfile); 
  learnObj.picture.setAttribute("src",learnObj.letterList[learnObj.counter].Image);
  learnObj.myAudio.load();
}

learnObj.previous.addEventListener("click", function(){

  if(learnObj.counter>0)
  {
    learnObj.counter--;
    loadData();
  }
  
  document.getElementById("content").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("content").style.opacity = 1;
  }, 1000);
 
  document.getElementById("content2").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("content2").style.opacity = 1;
  }, 1000);

});

learnObj.next.addEventListener("click", function(){


  if(learnObj.counter<(learnObj.totalLenght-1))
  {
    learnObj.counter++;
    loadData();
  }
  document.getElementById("content").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("content").style.opacity = 1;
  }, 1000);
 

  document.getElementById("content2").style.opacity = 0;
  setTimeout(function() {
       document.getElementById("content2").style.opacity = 1;
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
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfile); 
    }

  }else if (common.game=="wordSoundMatch")
  {

    if(wordSoundMatchObj.counter<(learnObj.totalLenght-1))
    {
      wordSoundMatchObj.counter++;
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordSoundMatchObj.counter].soundfile);
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
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfile); 
    }

  }else if (common.game=="wordSoundMatch")
  {

    if(wordSoundMatchObj.counter>0)
    {
      wordSoundMatchObj.counter--;
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordSoundMatchObj.counter].soundfile);
    }
  }
  common.testAudio.load();
  document.getElementById("showResult").innerHTML="";
}

function letterSoundCheck(e) {
  common.letterSelected=e;

  if(common.game=="wordImageMatch")
  {
    if(learnObj.letterList[wordImageMatchObj.counter].question.includes(e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult;
   
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  

  }else if (common.game=="wordSoundMatch")
  {

    if(learnObj.letterList[wordSoundMatchObj.counter].question.includes(e.target.value))
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
  wordSoundMatchObj.counter=0;
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
    elem.addEventListener("click",letterSoundCheck); 
  });
  //here fill up the letters 
  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    wordSoundMatchObj.list0[k].value=learnObj.letterList[k].question;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[k].question;
  }

  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();
}

wordSoundMatchObj.wordSoundMatch.addEventListener("click",function() {
  
  wordSoundMatchObj.counter=0;
  if(common.game=="wordImageMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    wordImageMatchObj.wordElementLst.forEach(elem => {
      elem.removeEventListener("click",letterSoundCheck); 
    });
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
  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    wordImageMatchObj.list0[k].value=learnObj.letterList[k].question;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[k].question;
  }
  wordImageMatchObj.picture=document.getElementById("wordImageMatchPicture");
  wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[0].Image);
  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();
}


wordImageMatchObj.wordImageMatch.addEventListener("click",function() {
  
  wordSoundMatchObj.counter=0;
  if(common.game=="wordSoundMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    wordSoundMatchObj.wordElementLst.forEach(elem => {
      elem.removeEventListener("click",letterSoundCheck); 
    });
    common.testSection.innerHTML='';
    buildWordImageMatch();
  }else 
  {
    if(common.game=="wordImageMatch")
    {

    }else{
  
      buildWordImageMatch();
    }
  }

});


