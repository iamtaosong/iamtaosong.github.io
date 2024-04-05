"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "sunny",
  sound: "/ˈsʌn.i/",
  Image: "../../../../asset/image/weather/sunny.jpg",
  soundfile: "../../../../asset/audio/weather/sunny.mp3"
};

const contentItem1 = {
  word: "cloudy",
  sound: "/ˈklaʊ.di/",
  Image: "../../../../asset/image/weather/cloudy.jpg",
  soundfile: "../../../../asset/audio/weather/cloudy.mp3"
};

const contentItem2 = {
  word: "rainy",
  sound: "/ˈreɪ.ni/",
  Image: "../../../../asset/image/weather/rainy.jpg",
  soundfile: "../../../../asset/audio/weather/rainy.mp3"
};

const contentItem3 = {
  word: "snowy",
  sound: "/ˈsnəʊ.i/",
  Image: "../../../../asset/image/weather/snowy.jpg",
  soundfile: "../../../../asset/audio/weather/snowy.mp3"
};


const contentItem4 = {
  word: "windy",
  sound: "/ˈwɪn.di/",
  Image: "../../../../asset/image/weather/windy.jpg",
  soundfile: "../../../../asset/audio/weather/windy.mp3"
};

const contentItem5 = {
  word: "stormy",
  sound: "/ˈstɔː.mi/",
  Image: "../../../../asset/image/weather/stormy.jpg",
  soundfile: "../../../../asset/audio/weather/stormy.mp3"
};

const contentItem6 = {
  word: "sleet",
  sound: "/sliːt/",
  Image: "../../../../asset/image/weather/sleet.jpg",
  soundfile: "../../../../asset/audio/weather/sleet.mp3"
};

const contentItem7 = {
  word: "hot",
  sound: "/hɒt/",
  Image: "../../../../asset/image/weather/hot.jpg",
  soundfile: "../../../../asset/audio/weather/hot.mp3"
};

const contentItem8 = {
  word: "cold",
  sound: "/kəʊld/",
  Image: "../../../../asset/image/weather/cold.jpg",
  soundfile: "../../../../asset/audio/weather/cold.mp3"
};

const contentItem9 = {
  word: "humid",
  sound: "/ˈhjuː.mɪd/",
  Image: "../../../../asset/image/weather/humid.jpg",
  soundfile: "../../../../asset/audio/weather/humid.mp3"
};


const contentItem10 = {
  word: "sun",
  sound: "/sʌn/",
  Image: "../../../../asset/image/weather/sun.jpg",
  soundfile: "../../../../asset/audio/weather/sun.mp3"
};

const contentItem11 = {
  word: "moon",
  sound: "/muːn/",
  Image: "../../../../asset/image/weather/moon.jpg",
  soundfile: "../../../../asset/audio/weather/moon.mp3"
};

const contentItem12 = {
  word: "snow",
  sound: "/snəʊ/",
  Image: "../../../../asset/image/weather/snow.jpg",
  soundfile: "../../../../asset/audio/weather/snow.mp3"
};

const contentItem13 = {
  word: "rain",
  sound: "/reɪn/",
  Image: "../../../../asset/image/weather/rain.jpg",
  soundfile: "../../../../asset/audio/weather/rain.mp3"
};

const contentItem14 = {
  word: "rainbow",
  sound: "/ˈreɪn.bəʊ/",
  Image: "../../../../asset/image/weather/rainbow.jpg",
  soundfile: "../../../../asset/audio/weather/rainbow.mp3"
};

const contentItem15 = {
  word: "cyclone",
  sound: "/ˈsaɪ.kləʊn/",
  Image: "../../../../asset/image/weather/cyclone.jpg",
  soundfile: "../../../../asset/audio/weather/cyclone.mp3"
};

const contentItem16 = {
  word: "lightning",
  sound: "/ˈlaɪt.nɪŋ/",
  Image: "../../../../asset/image/weather/lightning.jpg",
  soundfile: "../../../../asset/audio/weather/lightning.mp3"
};

const contentItem17 = {
  word: "icicle",
  sound: "/ˈaɪ.sɪ.kəl/",
  Image: "../../../../asset/image/weather/icicle.jpg",
  soundfile: "../../../../asset/audio/weather/icicle.mp3"
};

const contentItem18 = {
  word: "foggy",
  sound: "/ˈfɒɡ.i/",
  Image: "../../../../asset/image/weather/foggy.jpg",
  soundfile: "../../../../asset/audio/weather/foggy.mp3"
};

const contentItem19 = {
  word: "icy",
  sound: "/ˈaɪ.si/",
  Image: "../../../../asset/image/weather/icy.jpg",
  soundfile: "../../../../asset/audio/weather/icy.mp3"
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
  wordImageMatch: document.getElementById("wordImageMatch"),
  wordImageMatchContent: `<div class="card highlight">
                              <h2 class="text-center my-1" id="progress">Learning test</h2>

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

                              <div class="my-1">
                                <img id="wordImageMatchPicture" src="" width="100" height="100" alt="">
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
    common.letterSelected =false;
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
    wordImageMatchObj.progress.innerText=wordImageMatchObj.counter+1+"/"+learnObj.totalLength;
    common.testAudio.load();
    document.getElementById("showResult").innerHTML="";

    wordImageMatchObj.wordElementLst.forEach(elem => {
      elem.disabled=false;
    });
  

  }


}

/* function testPreviousBtnFunction() {

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
} */

function letterSoundCheck(e) {
  common.letterSelected=e;
  
  if(common.game=="wordImageMatch")
  {
    if(learnObj.letterList[wordImageMatchObj.counter].word === (e.target.value))
    {
        common.testSoundFile.setAttribute("src",common.right);
        wordImageMatchObj.right++;
        wordImageMatchObj.right_content.innerText=wordImageMatchObj.right;
     
    }else 
    {
       common.testSoundFile.setAttribute("src",common.wrong);
       wordImageMatchObj.wrong++;
       wordImageMatchObj.wrong_content.innerText=wordImageMatchObj.wrong;
    }

  }
  wordImageMatchObj.score_conent.innerText=Math.round(100*wordImageMatchObj.right/(wordImageMatchObj.counter+1))
  common.testAudio.load();
  common.testAudio.play();
  wordImageMatchObj.wordElementLst.forEach(elem => {
    elem.disabled=true;
  });

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
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);

  wordImageMatchObj.wordElementLst = document.querySelectorAll(".letterElement");
  wordImageMatchObj.wordElementLst.forEach(elem => {
    elem.addEventListener("click",letterSoundCheck); 
  });

  wordImageMatchObj.progress=document.getElementById("progress");
  wordImageMatchObj.progress.innerText=wordImageMatchObj.counter+1+"/"+learnObj.totalLength;
  wordImageMatchObj.right_content=document.getElementById("right");
  wordImageMatchObj.wrong_content=document.getElementById("wrong");
  wordImageMatchObj.score_conent=document.getElementById("score");
  wordImageMatchObj.right_content.innerText=wordImageMatchObj.right;
  wordImageMatchObj.wrong_content.innerText=wordImageMatchObj.wrong;
  wordImageMatchObj.score_conent.innerText=wordImageMatchObj.score;

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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/5-DeiXPJ3H8?si=TEactbxFcaG30Ns_";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/Ut-HbauKzDw?si=532O9CfVNozE3r4O";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/OMyT91W9iV4?si=k4t8ec03hZtAUoUX";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/48OXJtf8c3E?si=OkeZhGxlun4EVPDH";
  
});
