"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "I see a cat",
  sound: "/naɪf/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/a.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/a.mp3"
};

const contentItem1 = {
  word: "You and I play",
  sound: "/pleɪt/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/and.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/and.mp3"
};

const contentItem2 = {
  word: "Cat ran away",
  sound: "/fɔːk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/away.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/away.mp3"
};

const contentItem3 = {
  word: "Look at the big dog",
  sound: "/ˈtʃɒp.stɪk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/big.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/big.mp3"
};

const contentItem4 = {
  word: "Sky is blue",
  sound: "/spuːn/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/blue.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/blue.mp3"
};

const contentItem5 = {
  word: "I can jump",
  sound: "/ɡlɑːs/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/can.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/can.mp3"
};

const contentItem6 = {
  word: "Come to me",
  sound: "/kʌp/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/come.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/come.mp3"
};

const contentItem7 = {
  word: "Birds fly down",
  sound: "/ˈspætʃ.ə.lə/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/down.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/down.mp3"
};


const contentItem8 = {
  word: "Find the ball",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/find.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/find.mp3"
};

const contentItem9 = {
  word: "This gift is for you",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/for.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/for.mp3"
};

const contentItem10 = {
  word: "Clown is funny",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/funny.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/funny.mp3"
};

const contentItem11 = {
  word: "Let's go to the park",
  sound: "/naɪf/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/go.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/go.mp3"
};

const contentItem12 = {
  word: "Can you help me?",
  sound: "/pleɪt/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/help.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/help.mp3"
};

const contentItem13 = {
  word: "Toy is here",
  sound: "/fɔːk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/here.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/here.mp3"
};

const contentItem14 = {
  word: "I like ice cream",
  sound: "/ˈtʃɒp.stɪk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/I.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/I.mp3"
};

const contentItem15 = {
  word: "The frog is in pond",
  sound: "/spuːn/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/in.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/in.mp3"
};

const contentItem16 = {
  word: "It is hot today",
  sound: "/ɡlɑːs/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/is.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/is.mp3"
};

const contentItem17 = {
  word: "It is my toy",
  sound: "/kʌp/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/it.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/it.mp3"
};

const contentItem18 = {
  word: "Watch me jump",
  sound: "/ˈspætʃ.ə.lə/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/jump.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/jump.mp3"
};

const contentItem19 = {
  word: "It is a little dog",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/little.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/little.mp3"
};

const contentItem20 = {
  word: "Look at stars",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/look.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/look.mp3"
};

const contentItem21 = {
  word: "We make a cake",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/make.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/make.mp3"
};

const contentItem22 = {
  word: "Give it to me",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/me.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/me.mp3"
};

const contentItem23 = {
  word: "This is my book",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/my.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/my.mp3"
};

const contentItem24 = {
  word: "I am not sad",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/not.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/not.mp3"
};

const contentItem25 = {
  word: "I have one apple",
  sound: "/pleɪt/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/one.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/one.mp3"
};

const contentItem26 = {
  word: "We play together",
  sound: "/fɔːk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/play.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/play.mp3"
};

const contentItem27 = {
  word: "The apple is red",
  sound: "/ˈtʃɒp.stɪk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/red.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/red.mp3"
};

const contentItem28 = {
  word: "Dogs like to run",
  sound: "/spuːn/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/run.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/run.mp3"
};

const contentItem29 = {
  word: "She said hi",
  sound: "/ɡlɑːs/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/said.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/said.mp3"
};

const contentItem30 = {
  word: "I see you",
  sound: "/kʌp/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/see.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/see.mp3"
};

const contentItem31 = {
  word: "The tomato is sweet",
  sound: "/ˈspætʃ.ə.lə/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/the.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/the.mp3"
};

const contentItem32 = {
  word: "I have three cookies",
  sound: "/wɪsk/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/three.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/three.mp3"
};

const contentItem33 = {
  word: "We walk to school",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/to.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/to.mp3"
};

const contentItem34 = {
  word: "I have two cats",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/two.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/two.mp3"
};

const contentItem35 = {
  word: "Birds fly up",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/up.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/up.mp3"
};

const contentItem36 = {
  word: "We are friends",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/we.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/we.mp3"
};

const contentItem37 = {
  word: "Where is duck?",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/where.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/where.mp3"
};


const contentItem38 = {
  word: "Sun is yellow",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/yellow.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/yellow.mp3"
};

const contentItem39 = {
  word: "You are great",
  sound: "/ˈnuː.dəl/",
  Image: "../../../asset/image/basic-sentence/sight-sentence/you.jpg",
  soundfile: "../../../asset/audio/basic-sentence/sight-sentence/you.mp3"
};

const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9,
  contentItem10,contentItem11,contentItem12,contentItem13,contentItem14,contentItem15,contentItem16,contentItem17,contentItem18,contentItem19,contentItem20,contentItem21,contentItem22,contentItem23,contentItem24,
  contentItem25,contentItem26,contentItem27,contentItem28,contentItem29,contentItem30,contentItem31,contentItem32,contentItem33,contentItem34,contentItem35,contentItem36,contentItem37,contentItem38,contentItem39];


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
                                <div class="form-check">
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/qD1pnquN_DM?si=tX5wWgLWKgJKTp2t";
  
});

