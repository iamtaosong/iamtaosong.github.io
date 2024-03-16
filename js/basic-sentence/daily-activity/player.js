"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "I usually get up at 7 clock in the morning",
  sound: "/naɪf/",
  Image: "../../../asset/image/basic-sentence/daily-activity/up.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/up.mp3"
};

const contentItem1 = {
  word: "I bush teeth carefully",
  sound: "/pleɪt/",
  Image: "../../../asset/image/basic-sentence/daily-activity/teeth.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/teeth.mp3"
};

const contentItem2 = {
  word: "I then wash face",
  sound: "/fɔːk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/face.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/face.mp3"
};

const contentItem3 = {
  word: "I have breakfast slowly",
  sound: "/ˈtʃɒp.stɪk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/breakfast.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/breakfast.mp3"
};

const contentItem4 = {
  word: "I go to school today",
  sound: "/spuːn/",
  Image: "../../../asset/image/basic-sentence/daily-activity/school.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/school.mp3"
};

const contentItem5 = {
  word: "I often take school bus",
  sound: "/ɡlɑːs/",
  Image: "../../../asset/image/basic-sentence/daily-activity/schoolbus.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/schoolbus.mp3"
};

const contentItem6 = {
  word: "I sometimes play football outside",
  sound: "/kʌp/",
  Image: "../../../asset/image/basic-sentence/daily-activity/football.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/football.mp3"
};

const contentItem7 = {
  word: "I really like football",
  sound: "/ˈspætʃ.ə.lə/",
  Image: "../../../asset/image/basic-sentence/daily-activity/football.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/football.mp3"
};


const contentItem8 = {
  word: "we always take classes at 8 clock",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/lunch.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/lunch.mp3"
};

const contentItem9 = {
  word: "We usually have lunch at 12 clock",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/lunch.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/lunch.mp3"
};

const contentItem10 = {
  word: "I often come home at 5 clock in the afternoon",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/daily-activity/home.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/home.mp3"
};

const contentItem11 = {
  word: "I do my homework easily and quickly",
  sound: "/naɪf/",
  Image: "../../../asset/image/basic-sentence/daily-activity/homework.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/homework.mp3"
};

const contentItem12 = {
  word: "I always take a shower quickly",
  sound: "/pleɪt/",
  Image: "../../../asset/image/basic-sentence/daily-activity/shower.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/shower.mp3"
};

const contentItem13 = {
  word: "I never go to bed late at night",
  sound: "/fɔːk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/bed.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/bed.mp3"
};

const contentItem14 = {
  word: "I drink quite some water everyday ",
  sound: "/ˈtʃɒp.stɪk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/water.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/water.mp3"
};

const contentItem15 = {
  word: "I sometimes walk dog on Sunday ",
  sound: "/spuːn/",
  Image: "../../../asset/image/basic-sentence/daily-activity/dog.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/dog.mp3"
};

const contentItem16 = {
  word: "I ride a bike outside too ",
  sound: "/ɡlɑːs/",
  Image: "../../../asset/image/basic-sentence/daily-activity/bike.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/bike.mp3"
};

const contentItem17 = {
  word: "we are never friends",
  sound: "/kʌp/",
  Image: "../../../asset/image/basic-sentence/daily-activity/friends.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/friends.mp3"
};

const contentItem18 = {
  word: "I watch TV happily",
  sound: "/ˈspætʃ.ə.lə/",
  Image: "../../../asset/image/basic-sentence/daily-activity/TV.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/TV.mp3"
};

const contentItem19 = {
  word: "I really love the food there",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/daily-activity/food.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/food.mp3"
};

const contentItem20 = {
  word: "It was hot yesterday",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/daily-activity/hot.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/hot.mp3"
};

const contentItem21 = {
  word: "I go and play tennis tomorrow",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/daily-activity/tennis.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/tennis.mp3"
};

const contentItem22 = {
  word: "There are flowers everywhere ",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/daily-activity/flowers.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/flowers.mp3"
};

const contentItem23 = {
  word: "Please come here",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/daily-activity/welcome.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/welcome.mp3"
};

const contentItem24 = {
  word: "I cook now",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/daily-activity/cook.jpg",
  soundfile: "../../../asset/audio/basic-sentence/daily-activity/cook.mp3"
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
  goodResult: `<img src="../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../asset/image/sad.png" alt="happy--v1"/>`,
  right: "../../../asset/image/right.mp3",
  wrong: "../../../asset/image/wrong.mp3"
}

const learnObj = {

  previous: document.getElementById("previous"),
  next: document.getElementById("next"),
  content: document.getElementById("content"),
  sound: document.getElementById("sound"),
  soundfile: document.getElementById("soundfile"),
  myAudio: document.getElementById("myAudio"),
  picture:document.getElementById("picture"),
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
                              <div class="m-3 h2">
                                <div class="form-check my-3">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter1" value="">
                                  <label class="form-check-label" for="letter1"></label>
                                </div>

                                <div class="form-check my-3">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter2" value="">
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

  }else if(pathname.includes(lessons[2]))
  {
    learnObj.letterList=contents2;

  }else if(pathname.includes(lessons[3]))
  {
    learnObj.letterList=contents3;

  }else if(pathname.includes(lessons[4]))
  {
    learnObj.letterList=contents4;

  }

  learnObj.totalLenght=learnObj.letterList.length;
  document.getElementById("content").style.opacity = 1;

});

function loadData()
{
 
  learnObj.content.innerText=learnObj.letterList[learnObj.counter].word;
  // learnObj.sound.innerText=learnObj.letterList[learnObj.counter].sound
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
    if(learnObj.letterList[wordImageMatchObj.counter].word === (e.target.value))
    {
      document.getElementById("showResult").innerHTML=common.goodResult;
      common.testSoundFile.setAttribute("src",common.right);
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
      common.testSoundFile.setAttribute("src",common.wrong);
    }
  
  }else if (common.game=="wordSoundMatch")
  {

    if(learnObj.letterList[wordSoundMatchObj.counter].word === (e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult; 
      common.testSoundFile.setAttribute("src",common.right);
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
      common.testSoundFile.setAttribute("src",common.wrong);
    }

  }

  common.testAudio.load();
  common.testAudio.play();
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
    wordSoundMatchObj.list0[k].value=learnObj.letterList[k].word;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[k].word;
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
  for(let k=0; k<wordImageMatchObj.sectionLength;k++)
  {
    wordImageMatchObj.list0[k].value=learnObj.letterList[k].word;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[k].word;
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
