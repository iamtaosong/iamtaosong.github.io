"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: 'cab<span class="text-danger">|</span>in',
  word2:"cabin",
  sound: "/ˈkæb.ɪn/",
  soundfile: "../../../asset/audio/phonics/syllable/division/cabin.mp3"
};

const contentItem1 = {
  word: 'cam<span class="text-danger">|</span>el',
  word2:"camel",
  sound: "/ˈkæm.əl/",
  soundfile: "../../../asset/audio/phonics/syllable/division/camel.mp3"
};

const contentItem2 = {
  word: 'top<span class="text-danger">|</span>ic',
  word2:"topic",
  sound: "/ˈtɒp.ɪk/",
  soundfile: "../../../asset/audio/phonics/syllable/division/topic.mp3"
};

const contentItem3 = {
  word: 'mu<span class="text-danger">|</span>sic',
  word2:"music",
  sound: "/ˈmjuː.zɪk/",
  soundfile: "../../../asset/audio/phonics/syllable/division/music.mp3"
};

const contentItem4 = {
  word: 'ba<span class="text-danger">|</span>ker',
  word2:"baker",
  sound: "/ˈbeɪ.kər/",
  soundfile: "../../../asset/audio/phonics/syllable/division/baker.mp3"
};

const contentItem5 = {
  word: 'in<span class="text-danger">|</span>sect',
  word2:"insect",
  sound: "/ˈɪn.sekt/",
  soundfile: "../../../asset/audio/phonics/syllable/division/insect.mp3"
};

const contentItem6 = {
  word: 'car<span class="text-danger">|</span>pet',
  word2:"carpet",
  sound: "/ˈkɑː.pɪt/",
  soundfile: "../../../asset/audio/phonics/syllable/division/carpet.mp3"
};

const contentItem7 = {
  word: 'gar<span class="text-danger">|</span>den',
  word2:"garden",
  sound: "/ˈɡɑː.dən/",
  soundfile: "../../../asset/audio/phonics/syllable/division/garden.mp3"
};

const contentItem8 = {
  word: 'rab<span class="text-danger">|</span>bit',
  word2:"rabbit",
  sound: "/ˈræb.ɪt/",
  soundfile: "../../../asset/audio/phonics/syllable/division/rabbit.mp3"
};

const contentItem9 = {
  word: 'muf<span class="text-danger">|</span>fin',
  word2:"muffin",
  sound: "/ˈmʌf.ɪn/",
  soundfile: "../../../asset/audio/phonics/syllable/division/muffin.mp3"
};

const contentItem10 = {
  word: 'ta<span class="text-danger">|</span>ble',
  word2:"table",
  sound: "/ˈteɪ.bəl/",
  soundfile: "../../../asset/audio/phonics/syllable/division/table.mp3"
};

const contentItem11 = {
  word: 'bicy<span class="text-danger">|</span>cle',
  word2:"bicycle",
  sound: "/ˈbaɪ.sɪ.kəl/",
  soundfile: "../../../asset/audio/phonics/syllable/division/bicycle.mp3"
};

const contentItem12 = {
  word: 'can<span class="text-danger">|</span>dle',
  word2:"candle",
  sound: "/ˈkæn.dəl/",
  soundfile: "../../../asset/audio/phonics/syllable/division/candle.mp3"
};

const contentItem13 = {
  word: 'ea<span class="text-danger">|</span>gle',
  word2:"eagle",
  sound: "/ˈiː.ɡəl/",
  soundfile: "../../../asset/audio/phonics/syllable/division/eagle.mp3"
};

const contentItem14 = {
  word: 'bot<span class="text-danger">|</span>tle',
  word2:"bottle",
  sound: "/ˈbɒt.əl/",
  soundfile: "../../../asset/audio/phonics/syllable/division/bottle.mp3"
};


const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
const contents2 = [contentItem10,contentItem11,contentItem12,contentItem13,contentItem14]; 

const lessons = ["lesson-0","lesson-1","lesson-2","lesson-3","lesson-4","lesson-5","lesson-6","lesson-7"];

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

  }
  learnObj.totalLenght=learnObj.letterList.length;

});

function loadData()
{
  learnObj.content.innerHTML=learnObj.letterList[learnObj.counter].word;
  learnObj.soundfile.setAttribute("src",learnObj.letterList[learnObj.counter].soundfile); 
  learnObj.sound.innerText=learnObj.letterList[learnObj.counter].sound;
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

 if (common.game=="wordSoundMatch")
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
  if (common.game=="wordSoundMatch")
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

  if (common.game=="wordSoundMatch")
  {
    if(learnObj.letterList[wordSoundMatchObj.counter].word2 === (e.target.value))
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
    wordSoundMatchObj.list0[k].value=learnObj.letterList[k].word2;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[k].word2;
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




