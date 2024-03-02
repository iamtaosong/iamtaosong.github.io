"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "cat",
  sound: "/kæt/",
  Image: "../../../asset/image/phonics/syllable/closed/cat.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/closed/cat.mp3"
};

const contentItem1 = {
  word: "hen",
  sound: "/hen/",
  Image: "../../../asset/image/phonics/syllable/closed/hen.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/closed/hen.mp3"
};

const contentItem2 = {
  word: "pig",
  sound: "/pɪɡ/",
  Image: "../../../asset/image/phonics/syllable/closed/pig.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/closed/pig.mp3"
};

const contentItem3 = {
  word: "dog",
  sound: "/dɒɡ/",
  Image: "../../../asset/image/phonics/syllable/closed/dog.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/closed/dog.mp3"
};

const contentItem4 = {
  word: "duck",
  sound: "/dʌk/",
  Image: "../../../asset/image/phonics/syllable/closed/duck.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/closed/duck.mp3"
};


const contentItem5 = {
  word: "apron",
  sound: "/ˈeɪ.prən/",
  Image: "../../../asset/image/phonics/syllable/open/apron.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/open/apron.mp3"
};

const contentItem6 = {
  word: "she",
  sound: "/ʃiː/",
  Image: "../../../asset/image/phonics/syllable/open/she.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/open/she.mp3"
};

const contentItem7 = {
  word: "I",
  sound: "/aɪ/",
  Image: "../../../asset/image/phonics/syllable/open/I.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/open/I.mp3"
};

const contentItem8 = {
  word: "no",
  sound: "/nəʊ/",
  Image: "../../../asset/image/phonics/syllable/open/no.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/open/no.mp3"
};

const contentItem9 = {
  word: "music",
  sound: "/ˈmjuː.zɪk/",
  Image: "../../../asset/image/phonics/syllable/open/music.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/open/music.mp3"
};


const contentItem10 = {
  word: "car",
  sound: "/kɑːr/",
  Image: "../../../asset/image/phonics/syllable/r-controlled/car.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/r-controlled/car.mp3"
};

const contentItem11 = {
  word: "her",
  sound: "/hɜːr/",
  Image: "../../../asset/image/phonics/syllable/r-controlled/her.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/r-controlled/her.mp3"
};

const contentItem12 = {
  word: "bird",
  sound: "/bɜːd/",
  Image: "../../../asset/image/phonics/syllable/r-controlled/bird.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/r-controlled/bird.mp3"
};

const contentItem13 = {
  word: "corn",
  sound: "/kɔːn/",
  Image: "../../../asset/image/phonics/syllable/r-controlled/corn.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/r-controlled/corn.mp3"
};

const contentItem14 = {
  word: "hurt",
  sound: "/hɜːt/",
  Image: "../../../asset/image/phonics/syllable/r-controlled/hurt.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/r-controlled/hurt.mp3"
};

const contentItem15 = {
  word: "grape",
  sound: "/ɡreɪp/",
  Image: "../../../asset/image/phonics/syllable/magic-e/grape.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/magic-e/grape.mp3"
};

const contentItem16 = {
  word: "athlete",
  sound: "/ˈæθ.liːt/",
  Image: "../../../asset/image/phonics/syllable/magic-e/athlete.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/magic-e/athlete.mp3"
};

const contentItem17 = {
  word: "rice",
  sound: "/raɪs/",
  Image: "../../../asset/image/phonics/syllable/magic-e/rice.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/magic-e/rice.mp3"
};

const contentItem18 = {
  word: "rope",
  sound: "/rəʊp/",
  Image: "../../../asset/image/phonics/syllable/magic-e/rope.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/magic-e/rope.mp3"
};

const contentItem19 = {
  word: "mule",
  sound: "/mjuːl/",
  Image: "../../../asset/image/phonics/syllable/magic-e/mule.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/magic-e/mule.mp3"
};

const contentItem20 = {
  word: "boat",
  sound: "/bəʊt/",
  Image: "../../../asset/image/phonics/syllable/vowel-team/boat.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/vowel-team/boat.mp3"
};

const contentItem21 = {
  word: "rain",
  sound: "/reɪn/",
  Image: "../../../asset/image/phonics/syllable/vowel-team/rain.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/vowel-team/rain.mp3"
};

const contentItem22 = {
  word: "bee",
  sound: "/biː/",
  Image: "../../../asset/image/phonics/syllable/vowel-team/bee.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/vowel-team/bee.mp3"
};

const contentItem23 = {
  word: "tea",
  sound: "/tiː/",
  Image: "../../../asset/image/phonics/syllable/vowel-team/tea.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/vowel-team/tea.mp3"
};

const contentItem24 = {
  word: "pie",
  sound: "/paɪ/",
  Image: "../../../asset/image/phonics/syllable/vowel-team/pie.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/vowel-team/pie.mp3"
};

const contentItem25 = {
  word: "table",
  sound: "/ˈteɪ.bəl/",
  Image: "../../../asset/image/phonics/syllable/consonant-le/table.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/consonant-le/table.mp3"
};

const contentItem26 = {
  word: "bicycle",
  sound: "/ˈbaɪ.sɪ.kəl/",
  Image: "../../../asset/image/phonics/syllable/consonant-le/bicycle.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/consonant-le/bicycle.mp3"
};

const contentItem27 = {
  word: "candle",
  sound: "/ˈkæn.dəl/",
  Image: "../../../asset/image/phonics/syllable/consonant-le/candle.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/consonant-le/candle.mp3"
};

const contentItem28 = {
  word: "eagle",
  sound: "/ˈiː.ɡəl/",
  Image: "../../../asset/image/phonics/syllable/consonant-le/eagle.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/consonant-le/eagle.mp3"
};

const contentItem29 = {
  word: "bottle",
  sound: "/ˈbɒt.əl/",
  Image: "../../../asset/image/phonics/syllable/consonant-le/bottle.jpg",
  soundfile: "../../../asset/audio/phonics/syllable/consonant-le/bottle.mp3"
};


const contents0 = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4];
const contents1 = [contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];
const contents2 = [contentItem10,contentItem11,contentItem12,contentItem13,contentItem14]; 
const contents3 = [contentItem15,contentItem16,contentItem17,contentItem18,contentItem19];
const contents4 = [contentItem20,contentItem21,contentItem22,contentItem23,contentItem24];
const contents5 = [contentItem25,contentItem26,contentItem27,contentItem28,contentItem29]; 

const lessons = ["lesson-0","lesson-1","lesson-2","lesson-3","lesson-4","lesson-5","lesson-6"];

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

  }else if(pathname.includes(lessons[4]))
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
  learnObj.soundfile.setAttribute("src",learnObj.letterList[learnObj.counter].soundfile); 
  learnObj.sound.innerText=learnObj.letterList[learnObj.counter].sound;
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
