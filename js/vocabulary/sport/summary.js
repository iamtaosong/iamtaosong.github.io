"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "football",
  sound: "/ˈfʊt.bɔːl/",
  Image: "../../../asset/image/vocabulary/sport/football.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/football.mp3"
};

const contentItem1 = {
  word: "basketball",
  sound: "/ˈbaɪ.sɪ.kəl/",
  Image: "../../../asset/image/vocabulary/sport/basketball.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/basketball.mp3"
};

const contentItem2 = {
  word: "baseball",
  sound: "/ˈbeɪs.bɔːl/",
  Image: "../../../asset/image/vocabulary/sport/baseball.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/baseball.mp3"
};

const contentItem3 = {
  word: "volleyball",
  sound: "/ˈvɒl.i.bɔːl/",
  Image: "../../../asset/image/vocabulary/sport/volleyball.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/volleyball.mp3"
};

const contentItem4 = {
  word: "tennis",
  sound: "/ˈten.ɪs/",
  Image: "../../../asset/image/vocabulary/sport/tennis.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/tennis.mp3"
};

const contentItem5 = {
  word: "swimming",
  sound: "/ˈswɪm.ɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/swimming.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/swimming.mp3"
};

const contentItem6 = {
  word: "cycling",
  sound: "/ˈsaɪ.klɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/cycling.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/cycling.mp3"
};

const contentItem7 = {
  word: "badminton",
  sound: "/ˈbæd.mɪn.tən/",
  Image: "../../../asset/image/vocabulary/sport/badminton.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/badminton.mp3"
};

const contentItem8 = {
  word: "running",
  sound: "/ˈrʌn.ɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/running.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/running.mp3"
};

const contentItem9 = {
  word: "boxing",
  sound: "/ˈbɒk.sɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/boxing.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/boxing.mp3"
};

const contentItem10 = {
  word: "archery",
  sound: "/ˈɑː.tʃər.i/",
  Image: "../../../asset/image/vocabulary/sport/archery.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/archery.mp3"
};

const contentItem11 = {
  word: "ice skating",
  sound: "/ˈaɪsˌskeɪ.tɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/ice-skating.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/ice-skating.mp3"
};

const contentItem12 = {
  word: "surfing",
  sound: "/ˈsɜː.fɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/surfing.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/surfing.mp3"
};

const contentItem13 = {
  word: "karate",
  sound: "/kəˈrɑː.ti/",
  Image: "../../../asset/image/vocabulary/sport/karate.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/karate.mp3"
};

const contentItem14 = {
  word: "diving",
  sound: "/ˈdaɪ.vɪŋ/",
  Image: "../../../asset/image/vocabulary/sport/diving.jpg",
  soundfile: "../../../asset/audio/vocabulary/sport/diving.mp3"
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
  picture: null,
  wordImageMatch: document.getElementById("wordImageMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <h1 class="text-center my-3" id="progress">Learning test</h1>
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/WCYTlVF-djw?si=v7LYEJc86iC1mqkA";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/27f0QUUScQ8?si=D9VFPg9HG23s0sWO";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/rx531TunWlY?si=XPTg5i0WoPNu6uKL";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/A-jqYXMBFzA?si=6QmPYzd2ajR_i-Fv";
  
});

