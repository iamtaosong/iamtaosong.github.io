"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "pig",
  sound: "/pɪɡ/",
  Image: "../../../../asset/image/vocabulary/farm-animal/pig.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/pig.mp3"
};

const contentItem1 = {
  word: "cow",
  sound: "/kaʊ/",
  Image: "../../../../asset/image/vocabulary/farm-animal/cow.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/cow.mp3"
};

const contentItem2 = {
  word: "rooster",
  sound: "/ˈruː.stər/",
  Image: "../../../../asset/image/vocabulary/farm-animal/rooster.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/rooster.mp3"
};

const contentItem3 = {
  word: "hen",
  sound: "/hen/",
  Image: "../../../../asset/image/vocabulary/farm-animal/hen.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/hen.mp3"
};

const contentItem4 = {
  word: "chick",
  sound: "/tʃɪk/",
  Image: "../../../../asset/image/vocabulary/farm-animal/chick.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/chick.mp3"
};

const contentItem5 = {
  word: "dog",
  sound: "/dɒɡ/",
  Image: "../../../../asset/image/vocabulary/farm-animal/dog.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/dog.mp3"
};

const contentItem6 = {
  word: "cat",
  sound: "/kæt/",
  Image: "../../../../asset/image/vocabulary/farm-animal/cat.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/cat.mp3"
};

const contentItem7 = {
  word: "rabbit",
  sound: "/ˈræb.ɪt/",
  Image: "../../../../asset/image/vocabulary/farm-animal/rabbit.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/rabbit.mp3"
};

const contentItem8 = {
  word: "duck",
  sound: "/dʌk/",
  Image: "../../../../asset/image/vocabulary/farm-animal/duck.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/duck.mp3"
};

const contentItem9 = {
  word: "donkey",
  sound: "/ˈdɒŋ.ki/",
  Image: "../../../../asset/image/vocabulary/farm-animal/donkey.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/donkey.mp3"
};

const contentItem10 = {
  word: "llama",
  sound: "/ˈlɑː.mə/",
  Image: "../../../../asset/image/vocabulary/farm-animal/llama.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/llama.mp3"
};

const contentItem11 = {
  word: "bird",
  sound: "/bɜːd/",
  Image: "../../../../asset/image/vocabulary/farm-animal/bird.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/bird.mp3"
};

const contentItem12 = {
  word: "bat",
  sound: "/bæt/",
  Image: "../../../../asset/image/vocabulary/farm-animal/bat.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/bat.mp3"
};

const contentItem13 = {
  word: "mouse",
  sound: "/maʊs/",
  Image: "../../../../asset/image/vocabulary/farm-animal/mouse.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/mouse.mp3"
};

const contentItem14 = {
  word: "sheep",
  sound: "/ʃiːp/",
  Image: "../../../../asset/image/vocabulary/farm-animal/sheep.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/sheep.mp3"
};


const contentItem15 = {
  word: "horse",
  sound: "/hɔːs/",
  Image: "../../../../asset/image/vocabulary/farm-animal/horse.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/horse.mp3"
};

const contentItem16 = {
  word: "goat",
  sound: "/ɡəʊt/",
  Image: "../../../../asset/image/vocabulary/farm-animal/goat.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/goat.mp3"
};

const contentItem17 = {
  word: "goose",
  sound: "/ɡuːs/",
  Image: "../../../../asset/image/vocabulary/farm-animal/goose.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/goose.mp3"
};

const contentItem18 = {
  word: "bull",
  sound: "/bʊl/",
  Image: "../../../../asset/image/vocabulary/farm-animal/bull.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/bull.mp3"
};

const contentItem19 = {
  word: "turkey",
  sound: "/ˈtɜː.ki/",
  Image: "../../../../asset/image/vocabulary/farm-animal/turkey.jpg",
  soundfile: "../../../../asset/audio/vocabulary/farm-animal/turkey.mp3"
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/zXEq-QO3xTg?si=2EZsetesl-3sOf6o";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/_6HzoUcx3eo?si=JhKABXCx00-uObOG";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/o5kduClgF5Y?si=O2WUk2WHxLctUir1";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/dAjznDtcy8E?si=GyZ8CwwEqhLZ-X8R";
  
});

