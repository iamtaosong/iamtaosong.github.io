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


const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9,
  contentItem10,contentItem11,contentItem12,contentItem13,contentItem14];

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
  letterList:contents,
  totalLength: contents.length
};

const wordImageMatchObj = {
  wordElementLst: null,
  counter: 0,
  sectionLength: 5,
  progress: null,
  list0: null,
  list1: null,
  wordImageMatch: document.getElementById("wordImageMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <h1 class="text-center my-3" id="progress">Learning test</h1>
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
function wordGenProcess(i,index)
{

  for(let k=0; k<wordImageMatchObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*learnObj.totalLength);
    wordImageMatchObj.list0[k].value=learnObj.letterList[m].word;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[m].word;
  }
  wordImageMatchObj.list0[i].value=learnObj.letterList[index].word;
  wordImageMatchObj.list1[i].innerText=learnObj.letterList[index].word;
 
}

function wordGen(index){

   let i=index%wordImageMatchObj.sectionLength;
  if (i==0)
  {

    wordGenProcess(i,index);

  }else if(index==1)
  {

    wordGenProcess(i,index);

  }else if(index==2)
  {

    wordGenProcess(i,index);

  }else if(index==3)
  {

    wordGenProcess(i,index);

  }else if(index)
  {

    wordGenProcess(i,index);
    
  }

}

function testNextBtnFunction() {
 
  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }

 if (common.game=="wordImageMatch")
  {

    if(wordImageMatchObj.counter<(learnObj.totalLength-1))
    {
      wordImageMatchObj.counter++;
      wordGen(wordImageMatchObj.counter);
    }
    common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfile); 
  }
  wordImageMatchObj.progress.innerText=wordImageMatchObj.counter+1 +"/"+learnObj.totalLength;
  common.testAudio.load();
  document.getElementById("showResult").innerHTML="";
}

function testPreviousBtnFunction() {

  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }
  if (common.game=="wordImageMatch")
  {
    if(wordImageMatchObj.counter>0)
    {
      wordImageMatchObj.counter--;
      wordGen(wordImageMatchObj.counter);
    }

    common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfile); 
   
  }
  wordImageMatchObj.progress.innerText=wordImageMatchObj.counter+1+"/"+learnObj.totalLength;
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

  }
  common.testAudio.load();
  common.testAudio.play();
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
  wordImageMatchObj.picture=document.getElementById("wordImageMatchPicture");

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

  wordImageMatchObj.progress=document.getElementById("progress");
  wordImageMatchObj.progress.innerText=wordImageMatchObj.counter+1+"/"+learnObj.totalLength;
  //here fill up the letters 
  for(let k=0; k<wordImageMatchObj.sectionLength;k++)
  {
    wordImageMatchObj.list0[k].value=learnObj.letterList[k].word;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[k].word;
  }

  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();

}

wordImageMatchObj.wordImageMatch.addEventListener("click",function() {
  wordImageMatchObj.counter=0;
  if(common.game=="wordImageMatch")
  {

  }else{

    buildWordImageMatch();
  }

});


document.getElementById("video0").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/F03w-vOV-xw?si=OAkw2_zE1kI6yNsY";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/NR8jHsXgzyY?si=xxWZ0Uo1yysVNV0a";
  
});

