"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "soft",
  sound: "/sɒft/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/soft.mp3"
};

const contentItem1 = {
  word: "hard",
  sound: "/hɑːd/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/hard.mp3"
};

const contentItem2 = {
  word: "rough",
  sound: "/rʌf/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/rough.mp3"
};

const contentItem3 = {
  word: "smooth",
  sound: "/smuːð/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/smooth.mp3"
};

const contentItem4 = {
  word: "fuzzy",
  sound: "/ˈfʌz.i/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/fuzzy.mp3"
};

const contentItem5 = {
  word: "bumpy",
  sound: "/ˈbʌm.pi/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/bumpy.mp3"
};

const contentItem6 = {
  word: "silky",
  sound: "/ˈsɪl.ki/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/silky.mp3"
};

const contentItem7 = {
  word: "light",
  sound: "/laɪt/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/light.mp3"
};

const contentItem8 = {
  word: "heavy",
  sound: "/ˈhev.i/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/heavy.mp3"
};

const contentItem9 = {
  word: "wet",
  sound: "/wet/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/wet.mp3"
};

const contentItem10 = {
  word: "dry",
  sound: "/draɪ/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/dry.mp3"
};

const contentItem11 = {
  word: "sticky",
  sound: "/ˈstɪk.i/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/sticky.mp3"
};

const contentItem12 = {
  word: "greasy",
  sound: "/ˈɡriː.si/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/greasy.mp3"
};

const contentItem13 = {
  word: "hot",
  sound: "/hɒt/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/hot.mp3"
};

const contentItem14 = {
  word: "cold",
  sound: "/kəʊld/",
  soundfile: "../../../../asset/audio/vocabulary/adjective/touch/cold.mp3"
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

const wordSoundMatchObj = {
  wordElementLst: null,
  counter: 0,
  right:  0,
  wrong:  0,
  score:  0,
  right_content:null,
  wrong_content:null,
  score_conent:null,
  sectionLength: 5,
  progress: null,
  list0: null,
  list1: null,
  picture: null,
  wordImageMatch: document.getElementById("wordSoundMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <h2 class="text-center my-1" id="progress"></h2>

                              <div class="d-flex justify-content-around align-items-center text-center my-1">

                                <div>
                                  <img src="../../../../asset/image/happy.png" width="50" height="50" alt="">
                                  <p class="text-danger my-0" id="right">100</p>
                                </div>
                      
                                <div>
                                  <img src="../../../../asset/image/score.png" width="50" height="50" alt="">
                                  <p class="text-danger my-0" id="score">Core</p>
                                </div>
                      
                                <div>
                                  <img src="../../../../asset/image/sad.png" width="50" height="50" alt="">
                                  <p class="text-danger my-0" id="wrong">100</p>
                                </div>
                    
                              </div>
                                             
                              <div class="m-1 h2">
                                <div class="form-check">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter1" value="">
                                  <label class="form-check-label" for="letter1"></label>
                                </div>

                                <div class="form-check my-2">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter2" value="">
                                  <label class="form-check-label" for="letter2"></label>
                                </div>

                                <div class="form-check my-2">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter3" value="">
                                  <label class="form-check-label" for="letter3"></label>
                                </div>   

                                <div class="form-check my-2">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter4" value="">
                                  <label class="form-check-label" for="letter4"></label>
                                </div>

                                <div class="form-check my-2">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter5" value="">
                                  <label class="form-check-label" for="letter5"></label>
                                </div>
                              </div>

                              <div id="showResult" class="my-1">
                              
                              </div>

                              <div class="card-body p-1" style="background-color: #00ffff;">
                                <div class="m-1">
                                  <button type="button" class="btn border-0 p-0 mx-2" id="testNext">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                  </button>
                                </div>

                                <audio id="testAudio" controls preload="none" controlsList="nodownload">
                                  <source id="testSoundFile" src="" type="audio/mpeg">
                                </audio>
                  
                              </div>
                            </div>`,

};

function wordGenProcess(i,index)
{
  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*learnObj.totalLength);
    wordSoundMatchObj.list0[k].value=learnObj.letterList[m].word;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[m].word;
  }
  wordSoundMatchObj.list0[i].value=learnObj.letterList[index].word;
  wordSoundMatchObj.list1[i].innerText=learnObj.letterList[index].word;
}

function wordGen(index){

   let i=index%wordSoundMatchObj.sectionLength;
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
    common.letterSelected =false;
    if (common.game=="wordSoundMatch")
    {
      if(wordSoundMatchObj.counter<(learnObj.totalLength-1))
      {
        wordSoundMatchObj.counter++;
        wordGen(wordSoundMatchObj.counter);
      }
      common.testSoundFile.setAttribute("src",learnObj.letterList[wordSoundMatchObj.counter].soundfile); 
    }
    wordSoundMatchObj.progress.innerText=wordSoundMatchObj.counter+1+"/"+learnObj.totalLength;
    common.testAudio.load();
    document.getElementById("showResult").innerHTML="";

    wordSoundMatchObj.wordElementLst.forEach(elem => {
      elem.disabled=false;
    });
  

  }


}

function letterSoundCheck(e) {
  common.letterSelected=e;
  
  if(common.game=="wordSoundMatch")
  {
    if(learnObj.letterList[wordSoundMatchObj.counter].word === (e.target.value))
    {
        common.testSoundFile.setAttribute("src",common.right);
        wordSoundMatchObj.right++;
        wordSoundMatchObj.right_content.innerText=wordSoundMatchObj.right;
     
    }else 
    {
       common.testSoundFile.setAttribute("src",common.wrong);
       wordSoundMatchObj.wrong++;
       wordSoundMatchObj.wrong_content.innerText=wordSoundMatchObj.wrong;
    }

  }
  wordSoundMatchObj.score_conent.innerText=Math.round(100*wordSoundMatchObj.right/(wordSoundMatchObj.counter+1))
  common.testAudio.load();
  common.testAudio.play();
  wordSoundMatchObj.wordElementLst.forEach(elem => {
    elem.disabled=true;
  });

}

function buildWordImageMatch()
{
  common.game="wordSoundMatch";
  wordSoundMatchObj.counter=0;
  let p = document.createElement("div"); 
  p.innerHTML= wordSoundMatchObj.wordImageMatchContent;
  common.testSection.appendChild(p);
  
  wordSoundMatchObj.list0= document.querySelectorAll(".form-check-input");
  wordSoundMatchObj.list1 = document.querySelectorAll(".form-check-label");
  wordSoundMatchObj.picture=document.getElementById("wordImageMatchPicture");

  common.testNextBtn = document.getElementById("testNext");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);

  wordSoundMatchObj.wordElementLst = document.querySelectorAll(".letterElement");
  wordSoundMatchObj.wordElementLst.forEach(elem => {
    elem.addEventListener("click",letterSoundCheck); 
  });

  wordSoundMatchObj.progress=document.getElementById("progress");
  wordSoundMatchObj.progress.innerText=wordSoundMatchObj.counter+1+"/"+learnObj.totalLength;
  wordSoundMatchObj.right_content=document.getElementById("right");
  wordSoundMatchObj.wrong_content=document.getElementById("wrong");
  wordSoundMatchObj.score_conent=document.getElementById("score");
  wordSoundMatchObj.right_content.innerText=wordSoundMatchObj.right;
  wordSoundMatchObj.wrong_content.innerText=wordSoundMatchObj.wrong;
  wordSoundMatchObj.score_conent.innerText=wordSoundMatchObj.score;

  //here fill up the letters 
  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    wordSoundMatchObj.list0[k].value=learnObj.letterList[k].word;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[k].word;
  }
  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();

}

wordSoundMatchObj.wordImageMatch.addEventListener("click",function() {
  wordSoundMatchObj.counter=0;
  if(common.game=="wordImageMatch")
  {

  }else{

    buildWordImageMatch();
  }

});

document.getElementById("video0").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/vl82AMjANRU?si=Nn3j2w85KCZFK6_1";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/43AApkXYcEs?si=bn0p1b7a7V4N9tAK";
  
});

