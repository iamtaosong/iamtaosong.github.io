"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "bend",
  sound: "/bend/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/bend.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/bend.mp3"
};

const contentItem1 = {
  word: "lift",
  sound: "/lɪft/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/lift.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/lift.mp3"
};

const contentItem2 = {
  word: "carry",
  sound: "/bʌs/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/carry.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/carry.mp3"
};

const contentItem3 = {
  word: "kneel",
  sound: "/trʌk/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/kneel.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/kneel.mp3"
};

const contentItem4 = {
  word: "hold",
  sound: "/həʊld/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/hold.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/hold.mp3"
};

const contentItem5 = {
  word: "sit",
  sound: "/sɪt/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/sit.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/sit.mp3"
};

const contentItem6 = {
  word: "drag",
  sound: "/dræɡ/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/drag.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/drag.mp3"
};

const contentItem7 = {
  word: "jump",
  sound: "/dʒʌmp/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/jump.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/jump.mp3"
};

const contentItem8 = {
  word: "leap",
  sound: "/liːp/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/leap.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/leap.mp3"
};

const contentItem9 = {
  word: "punch",
  sound: "/pʌntʃ/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/punch.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/punch.mp3"
};

const contentItem10 = {
  word: "pull",
  sound: "/pʊl/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/pull.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/pull.mp3"
};

const contentItem11 = {
  word: "dive",
  sound: "/ˈdaɪv/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/dive.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/dive.mp3"
};

const contentItem12 = {
  word: "push",
  sound: "/pʊʃ/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/push.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/push.mp3"
};

const contentItem13 = {
  word: "run",
  sound: "/rʌn/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/run.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/run.mp3"
};

const contentItem14 = {
  word: "lean",
  sound: "/liːn/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/lean.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/lean.mp3"
};


const contentItem15 = {
  word: "squat",
  sound: "/skwɒt/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/squat.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/squat.mp3"
};

const contentItem16 = {
  word: "throw",
  sound: "/θrəʊ/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/throw.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/throw.mp3"
};

const contentItem17 = {
  word: "tiptoe",
  sound: "/ˈtɪp.təʊ/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/tiptoe.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/tiptoe.mp3"
};

const contentItem18 = {
  word: "walk",
  sound: "/wɔːk/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/walk.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/walk.mp3"
};

const contentItem19 = {
  word: "hit",
  sound: "/hɪt/",
  Image: "../../../../asset/image/vocabulary/action-verb/action-verb-1/hit.webp",
  soundfile: "../../../../asset/audio/vocabulary/action-verb/action-verb-1/hit.mp3"
};

const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9,
  contentItem10,contentItem11,contentItem12,contentItem13,contentItem14,contentItem15,contentItem16,contentItem17,contentItem18,contentItem19];

const common ={
  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  letterSelected: false,
  goodResult: `<img src="../../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../../asset/image/sad.png" alt="sad--v1"/>`,
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
  picture: null,
  wordImageMatch: document.getElementById("wordImageMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <h1 class="text-center my-3" id="progress">Learning test</h1>
                              <div class="my-3">
                                <img id="wordImageMatchPicture" src="" width="100" height="100" alt="">
                              </div>
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
    wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].Image);
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

    wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].Image);
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
  wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[0].Image);
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/wSrPSzduXNI?si=1eqblIBufA2c1dc1";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/jOx8sGmKyIE?si=RDacDRd9YpyPk-1_";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/nTmARVY4hcs?si=WJE66NvlvEg6OQzc";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/9-Epn5w-Jkw?si=pID2asj-nEcnbKVx";
  
});

