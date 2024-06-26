"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "Good morning",
  sound: "/naɪf/",
  Image: "../../../asset/image/phrase/phrase-1/good-morning.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/good-morning.mp3"
};

const contentItem1 = {
  word: "Good afternoon",
  sound: "/pleɪt/",
  Image: "../../../asset/image/phrase/phrase-1/good-afternoon.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/good-afternoon.mp3"
};

const contentItem2 = {
  word: "Good evening",
  sound: "/fɔːk/",
  Image: "../../../asset/image/phrase/phrase-1/good-evening.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/good-evening.mp3"
};

const contentItem3 = {
  word: "Good night",
  sound: "/ˈtʃɒp.stɪk/",
  Image: "../../../asset/image/phrase/phrase-1/good-night.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/good-night.mp3"
};


const contentItem4 = {
  word: "How are you？",
  sound: "/spuːn/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/how-are-you.mp3"
};

const contentItem5 = {
  word: "Nice to meet you",
  sound: "/ɡlɑːs/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/nice-to-meet-you.mp3"
};

const contentItem6 = {
  word: "You're welcome",
  sound: "/ˈeɪ.prən/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/welcome.mp3"
};

const contentItem7 = {
  word: "Hi",
  sound: "/ˈspætʃ.ə.lə/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/hi.mp3"
};

const contentItem8 = {
  word: "Excuse me",
  sound: "/wɪsk/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/excuse-me.mp3"
};

const contentItem9 = {
  word: "Thank you",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/thank-you.mp3"
};

const contentItem10 = {
  word: "I am sorry",
  sound: "/ˈpiː.lər/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/sorry.mp3"
};

const contentItem11 = {
  word: "Goodbye",
  sound: "/ˈɡreɪ.tər",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/goodbye.mp3"
};

const contentItem12 = {
  word: "Have a nice day",
  sound: "/bəʊl/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/niceday.mp3"
};

const contentItem13 = {
  word: "Can you help me?",
  sound: "/ˈkʌt.ɪŋ ˌbɔːd/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/help.mp3"
};

const contentItem14 = {
  word: "I need help",
  sound: "/ˈkɒl.ən.dər",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/needhelp.mp3"
};

const contentItem15 = {
  word: "I am thirsty",
  sound: "/tɒŋz/",
  Image: "../../../asset/image/phrase/phrase-1/thirsty.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/thirsty.mp3"
};

const contentItem16 = {
  word: "I am hungry",
  sound: "/ˈbɒt.əl/",
  Image: "../../../asset/image/phrase/phrase-1/hungry.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/hungry.mp3"
};

const contentItem17 = {
  word: "I am happy",
  sound: "/ˈrəʊ.lɪŋˌpɪn/",
  Image: "../../../asset/image/phrase/phrase-1/happy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/happy.mp3"
};

const contentItem18 = {
  word: "I am sad",
  sound: "/ˈket.əl/",
  Image: "../../../asset/image/phrase/phrase-1/sad.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/sad.mp3"
};

const contentItem19 = {
  word: "I am tired",
  sound: "/pɒt/",
  Image: "../../../asset/image/phrase/phrase-1/tired.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/tired.mp3"
};

const contentItem20 = {
  word: "Can I play?",
  sound: "/ˈeɪ.prən/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/play.mp3"
};

const contentItem21 = {
  word: "It's my turn",
  sound: "/mit/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/turn.mp3"
};

const contentItem22 = {
  word: "Please stop",
  sound: "/frɪdʒ/",
  Image: "../../../asset/image/phrase/phrase-1/girl.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/stop.mp3"
};

const contentItem23 = {
  word: "Can we be friends?",
  sound: "/ˈmaɪ.krə.weɪv/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/friends.mp3"
};

const contentItem24 = {
  word: "Here you go",
  sound: "/ˈeɪ.prən/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/go.mp3"
};

const contentItem25 = {
  word: "Yes,I agree",
  sound: "/mit/",
  Image: "../../../asset/image/phrase/phrase-1/yes.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/agree.mp3"
};

const contentItem26 = {
  word: "No,I disagree",
  sound: "/ˈfraɪ.ɪŋˌpæn/",
  Image: "../../../asset/image/phrase/phrase-1/no.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/disagree.mp3"
};

const contentItem27 = {
  word: "I think so",
  sound: "/ˈmaɪ.krə.weɪv/",
  Image: "../../../asset/image/phrase/phrase-1/so.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/so.mp3"
};

const contentItem28 = {
  word: "I don’t think so",
  sound: "/ˈeɪ.prən/",
  Image: "../../../asset/image/phrase/phrase-1/no.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/notso.mp3"
};

const contentItem29 = {
  word: "That’s a good idea",
  sound: "/mit/",
  Image: "../../../asset/image/phrase/phrase-1/good.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/good.mp3"
};

/* 
const contentItem25 = {
  word: "take a sip",
  sound: "/mit/",
  Image: "../../../asset/image/phrase/phrase-1/sip.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/sip.mp3"
};

const contentItem26 = {
  word: "It is hot",
  sound: "/ˈfraɪ.ɪŋˌpæn/",
  Image: "../../../asset/image/phrase/phrase-1/hot.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/hot.mp3"
};

const contentItem27 = {
  word: "It is cold",
  sound: "/ˈmaɪ.krə.weɪv/",
  Image: "../../../asset/image/phrase/phrase-1/cold.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/cold.mp3"
};

const contentItem28 = {
  word: "Can I play?",
  sound: "/ˈeɪ.prən/",
  Image: "../../../asset/image/phrase/phrase-1/boy.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/welcome.mp3"
};

const contentItem29 = {
  word: "take a sip",
  sound: "/mit/",
  Image: "../../../asset/image/phrase/phrase-1/sip.jpg",
  soundfile: "../../../asset/audio/phrase/phrase-1/sip.mp3"
};
 */


const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
const contents2 = [contentItem10,contentItem11,contentItem12,contentItem13,contentItem14]; 
const contents3 = [contentItem15,contentItem16,contentItem17,contentItem18,contentItem19]; 
const contents4 = [contentItem20,contentItem21,contentItem22,contentItem23,contentItem24]; 
const contents5 = [contentItem25,contentItem26,contentItem27,contentItem28,contentItem29];
const lessons = ["lesson-0","lesson-1","lesson-2","lesson-3","lesson-4","lesson-5"];

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

  } else if(pathname.includes(lessons[4]))
  {

    learnObj.letterList=contents4;

  }else if(pathname.includes(lessons[5]))
  {

    learnObj.letterList=contents5;

  }
  learnObj.totalLenght=learnObj.letterList.length;
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

});

learnObj.next.addEventListener("click", function(){

  if(learnObj.counter<(learnObj.totalLenght-1))
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
