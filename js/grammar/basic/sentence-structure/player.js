"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "I sit",
  sound: "/sɒft/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/sit.mp3"
};
const contentItem1 = {
  word: "They jump",
  sound: "/hɑːd/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/jump.mp3"
};

const contentItem2 = {
  word: "Dogs bark",
  sound: "/rʌf/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/bark.mp3"
};

const contentItem3 = {
  word: "We play",
  sound: "/smuːð/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/play.mp3"
};

const contentItem4 = {
  word: "Fish swim",
  sound: "/ˈfʌz.i/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/swim.mp3"
};

const contentItem5 = {
  word: "Thay have lunch",
  sound: "/ˈbʌm.pi/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/lunch.mp3"
};

const contentItem6 = {
  word: "Father pulls dog",
  sound: "/ˈsɪl.ki/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/dog.mp3"
};

const contentItem7 = {
  word: "Mother cooks dinner",
  sound: "/laɪt/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/dinner.mp3"
};

const contentItem8 = {
  word: "Cows eat grass",
  sound: "/ˈhev.i/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/grass.mp3"
};

const contentItem9 = {
  word: "Painters paint picture",
  sound: "/wet/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/picture.mp3"
};

const contentItem10 = {
  word: "London is beautiful",
  sound: "/draɪ/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/London.mp3"
};

const contentItem11 = {
  word: "Frogs jump high",
  sound: "/ˈstɪk.i/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/frogs.mp3"
};

const contentItem12 = {
  word: "It is cold",
  sound: "/ˈɡriː.si/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/cold.mp3"
};

const contentItem13 = {
  word: "Tomatoes are sweet",
  sound: "/hɒt/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/sweet.mp3"
};

const contentItem14 = {
  word: "Cats are quiet",
  sound: "/kəʊld/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/Cats.mp3"
};

const contentItem15 = {
  word: "I am here",
  sound: "/draɪ/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/here.mp3"
};

const contentItem16 = {
  word: "You are there",
  sound: "/ˈstɪk.i/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/there.mp3"
};

const contentItem17 = {
  word: "Father walks slow",
  sound: "/ˈɡriː.si/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/slow.mp3"
};

const contentItem18= {
  word: "Trains run fast",
  sound: "/hɒt/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/fast.mp3"
};

const contentItem19= {
  word: "Birds sing beautifully",
  sound: "/kəʊld/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/birds.mp3"
};

const contentItem20 = {
  word: "I am a student",
  sound: "/draɪ/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/student.mp3"
};

const contentItem21 = {
  word: "It is winter",
  sound: "/ˈstɪk.i/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/winter.mp3"
};

const contentItem22 = {
  word: "Father is a doctor",
  sound: "/ˈɡriː.si/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/doctor.mp3"
};

const contentItem23= {
  word: "Mother is a teacher",
  sound: "/hɒt/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/teacher.mp3"
};

const contentItem24= {
  word: "She is a waiter",
  sound: "/kəʊld/",
  soundfile: "../../../../asset/audio/grammar/basic/sentence-structure/waiter.mp3"
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
  goodResult: `<img src="../../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../../asset/image/sad.png" alt="happy--v1"/>`,
  right: "../../../../asset/image/right.mp3",
  wrong: "../../../../asset/image/wrong.mp3"
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
  // learnObj.sound.innerText=learnObj.letterList[learnObj.counter].sound;
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




