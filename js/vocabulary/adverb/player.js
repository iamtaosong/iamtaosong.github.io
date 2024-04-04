"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "quickly",
  sound: "/ˈkwɪk.li/",
  soundfile: "../../../asset/audio/vocabulary/adverb/quickly.mp3"
};

const contentItem1 = {
  word: "slowly",
  sound: "/ˈsləʊ.li/",
  soundfile: "../../../asset/audio/vocabulary/adverb/slowly.mp3"
};

const contentItem2 = {
  word: "carefully",
  sound: "/ˈkeə.fəl.i/",
  soundfile: "../../../asset/audio/vocabulary/adverb/carefully.mp3"
};

const contentItem3 = {
  word: "happily",
  sound: "/ˈhæp.əl.i/",
  soundfile: "../../../asset/audio/vocabulary/adverb/happily.mp3"
};

const contentItem4 = {
  word: "easily",
  sound: "/ˈiː.zəl.i/",
  soundfile: "../../../asset/audio/vocabulary/adverb/easily.mp3"
};

const contentItem5 = {
  word: "now",
  sound: "/naʊ/",
  soundfile: "../../../asset/audio/vocabulary/adverb/now.mp3"
};

const contentItem6 = {
  word: "then",
  sound: "/ðen/",
  soundfile: "../../../asset/audio/vocabulary/adverb/then.mp3"
};

const contentItem7 = {
  word: "today",
  sound: "/təˈdeɪ/",
  soundfile: "../../../asset/audio/vocabulary/adverb/today.mp3"
};

const contentItem8 = {
  word: "tomorrow",
  sound: "/təˈmɒr.əʊ/",
  soundfile: "../../../asset/audio/vocabulary/adverb/tomorrow.mp3"
};

const contentItem9 = {
  word: "yesterday",
  sound: "/ˈjes.tə.deɪ/",
  soundfile: "../../../asset/audio/vocabulary/adverb/yesterday.mp3"
};

const contentItem10 = {
  word: "here",
  sound: "/hɪər/",
  soundfile: "../../../asset/audio/vocabulary/adverb/here.mp3"
};

const contentItem11 = {
  word: "there",
  sound: "/ðeər/",
  soundfile: "../../../asset/audio/vocabulary/adverb/there.mp3"
};

const contentItem12 = {
  word: "everywhere",
  sound: "/ˈev.ri.weər/",
  soundfile: "../../../asset/audio/vocabulary/adverb/everywhere.mp3"
};

const contentItem13 = {
  word: "inside",
  sound: "/ɪnˈsaɪd/",
  soundfile: "../../../asset/audio/vocabulary/adverb/inside.mp3"
};

const contentItem14 = {
  word: "outside",
  sound: "/ˌaʊtˈsaɪd/",
  soundfile: "../../../asset/audio/vocabulary/adverb/outside.mp3"
};

const contentItem15 = {
  word: "very",
  sound: "/ˈver.i/",
  soundfile: "../../../asset/audio/vocabulary/adverb/very.mp3"
};

const contentItem16 = {
  word: "too",
  sound: "/tuː/",
  soundfile: "../../../asset/audio/vocabulary/adverb/too.mp3"
};

const contentItem17 = {
  word: "quite",
  sound: "/kwaɪt/",
  soundfile: "../../../asset/audio/vocabulary/adverb/quite.mp3"
};

const contentItem18 = {
  word: "almost",
  sound: "/ˈɔːl.məʊst/",
  soundfile: "../../../asset/audio/vocabulary/adverb/almost.mp3"
};

const contentItem19 = {
  word: "really",
  sound: "/ˈrɪə.li/",
  soundfile: "../../../asset/audio/vocabulary/adverb/really.mp3"
};
const contentItem20 = {
  word: "always",
  sound: "/ˈɔːl.weɪz/",
  soundfile: "../../../asset/audio/vocabulary/adverb/always.mp3"
};

const contentItem21 = {
  word: "often",
  sound: "/ˈɒf.ən/",
  soundfile: "../../../asset/audio/vocabulary/adverb/often.mp3"
};

const contentItem22 = {
  word: "sometimes",
  sound: "/ˈsʌm.taɪmz/",
  soundfile: "../../../asset/audio/vocabulary/adverb/sometimes.mp3"
};

const contentItem23 = {
  word: "never",
  sound: "/ˈnev.ər/",
  soundfile: "../../../asset/audio/vocabulary/adverb/never.mp3"
};

const contentItem24 = {
  word: "usually",
  sound: "/ˈjuː.ʒu.ə.li/",
  soundfile: "../../../asset/audio/vocabulary/adverb/usually.mp3"
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

  }else if(pathname.includes(lessons[3]))
  {
    learnObj.letterList=contents3;
  }else if(pathname.includes(lessons[4]))
  {
    learnObj.letterList=contents4;

  }

  learnObj.totalLenght=learnObj.letterList.length;

});

function loadData()
{
  learnObj.content.innerText=learnObj.letterList[learnObj.counter].word;
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
  if(common.game=="wordSoundMatch")
  {


  }else{
    buildwordSoundMatch();
  }
});




