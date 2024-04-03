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
  wordImageMatch: document.getElementById("wordImageMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <h1 class="text-center my-3" id="progress">Learning test</h1>
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
    wordImageMatchObj.list0[k].value=learnObj.letterList[m].word2;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[m].word2;
  }
  wordImageMatchObj.list0[i].value=learnObj.letterList[index].word2;
  wordImageMatchObj.list1[i].innerText=learnObj.letterList[index].word2;
 
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
    if(learnObj.letterList[wordImageMatchObj.counter].word2 === (e.target.value))
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
    wordImageMatchObj.list0[k].value=learnObj.letterList[k].word2;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[k].word2;
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/5qv0mh4LoM4?si=U0azjfBYskgGJlUA";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/8NYeMoz9pjI?si=o0oj7IM5aYv7eB_2";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/TYIc1mCGucA?si=mfBEnZWEr4Brl8A1";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/ikFsUf8rRrw?si=m7Z0oKoFdBah98lI";
  
});

document.getElementById("video4").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/KRAyneBo-tU?si=L2UGw3FoBSg9KE7O";
  
});