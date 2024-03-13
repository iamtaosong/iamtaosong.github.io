"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "shirt",
  sound: "/ʃɜːt//",
  Image: "../../../../asset/image/clothes/shirt.jpg",
  soundfile: "../../../../asset/audio/clothes/shirt.mp3"
};

const contentItem1 = {
  word: "T-shirt",
  sound: "/ˈtiː.ʃɜːt/",
  Image: "../../../../asset/image/clothes/T-shirt.jpg",
  soundfile: "../../../../asset/audio/clothes/T-shirt.mp3"
};

const contentItem2 = {
  word: "blouse",
  sound: "/blaʊz/",
  Image: "../../../../asset/image/clothes/blouse.jpg",
  soundfile: "../../../../asset/audio/clothes/blouse.mp3"
};

const contentItem3 = {
  word: "sweater",
  sound: "/ˈswet.ər/",
  Image: "../../../../asset/image/clothes/sweater.jpg",
  soundfile: "../../../../asset/audio/clothes/sweater.mp3"
};


const contentItem4 = {
  word: "hoodie",
  sound: "/ˈhʊd.i/",
  Image: "../../../../asset/image/clothes/hoodie.jpg",
  soundfile: "../../../../asset/audio/clothes/hoodie.mp3"
};

const contentItem5 = {
  word: "jacket",
  sound: "/ˈdʒæk.ɪt/",
  Image: "../../../../asset/image/clothes/jacket.jpg",
  soundfile: "../../../../asset/audio/clothes/jacket.mp3"
};

const contentItem6 = {
  word: "coat",
  sound: "/kəʊt/",
  Image: "../../../../asset/image/clothes/coat.jpg",
  soundfile: "../../../../asset/audio/clothes/coat.mp3"
};

const contentItem7 = {
  word: "pants",
  sound: "/pænts/",
  Image: "../../../../asset/image/clothes/pants.jpg",
  soundfile: "../../../../asset/audio/clothes/pants.mp3"
};

const contentItem8 = {
  word: "shorts",
  sound: "/ʃɔːts/",
  Image: "../../../../asset/image/clothes/shorts.jpg",
  soundfile: "../../../../asset/audio/clothes/shorts.mp3"
};

const contentItem9 = {
  word: "skirt",
  sound: "/skɜːt/",
  Image: "../../../../asset/image/clothes/skirt.jpg",
  soundfile: "../../../../asset/audio/clothes/skirt.mp3"
};

const contentItem10 = {
  word: "dress",
  sound: "/dres/",
  Image: "../../../../asset/image/clothes/dress.jpg",
  soundfile: "../../../../asset/audio/clothes/dress.mp3"
};

const contentItem11 = {
  word: "hat",
  sound: "/hæt/",
  Image: "../../../../asset/image/clothes/hat.jpg",
  soundfile: "../../../../asset/audio/clothes/hat.mp3"
};

const contentItem12 = {
  word: "scarf",
  sound: "/skɑːf/",
  Image: "../../../../asset/image/clothes/scarf.jpg",
  soundfile: "../../../../asset/audio/clothes/scarf.mp3"
};

const contentItem13 = {
  word: "glove",
  sound: "/ɡlʌv/",
  Image: "../../../../asset/image/clothes/glove.jpg",
  soundfile: "../../../../asset/audio/clothes/glove.mp3"
};


const contentItem14 = {
  word: "belt",
  sound: "/belt/",
  Image: "../../../../asset/image/clothes/belt.jpg",
  soundfile: "../../../../asset/audio/clothes/belt.mp3"
};

const contentItem15 = {
  word: "shoe",
  sound: "/ʃuː/",
  Image: "../../../../asset/image/clothes/shoe.jpg",
  soundfile: "../../../../asset/audio/clothes/shoe.mp3"
};

const contentItem16 = {
  word: "boot",
  sound: "/buːt/",
  Image: "../../../../asset/image/clothes/boot.jpg",
  soundfile: "../../../../asset/audio/clothes/boot.mp3"
};

const contentItem17 = {
  word: "underwear",
  sound: "/ˈʌn.də.weər/",
  Image: "../../../../asset/image/clothes/underwear.jpg",
  soundfile: "../../../../asset/audio/clothes/underwear.mp3"
};

const contentItem18 = {
  word: "pajamas",
  sound: "/pəˈdʒɑː.məz/",
  Image: "../../../../asset/image/clothes/pajamas.jpg",
  soundfile: "../../../../asset/audio/clothes/pajamas.mp3"
};

const contentItem19 = {
  word: "sock",
  sound: "/sɒk/",
  Image: "../../../../asset/image/clothes/sock.jpg",
  soundfile: "../../../../asset/audio/clothes/sock.mp3"
};

const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9
  ,contentItem10,contentItem11,contentItem12,contentItem13,contentItem14,contentItem15,contentItem16,contentItem17,contentItem18,contentItem19];

const common ={
  testPreviousBtn: null,
  testNextBtn: null,
  testAudio: null,
  testSoundFile:null,
  game: null,
  testSection: document.getElementById("testSection"),
  letterSelected: false,
  goodResult: `<img src="../../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../../asset/image/sad.png" alt="happy--v1"/>`
}

const learnObj = {
  letterList:contents,
  totalLength: contents.length
};

const wordSoundMatchObj = {
  wordElementLst: null,
  counter: 0,
  sectionLength: 5,
  list0: null,
  list1: null,
  wordSoundMatch: document.getElementById("wordSoundMatch"),
  wordSoundMatchContent: `<div class="card highlight border-0">
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

const soundImageMatchObj = {
  wordElementLst: null,
  counter: 0,
  sectionLength: 5,
  list0: null,
  list1: null,
  picture: null,
  soundImageMatch: document.getElementById("soundImageMatch"),
  soundImageMatchContent: `<div class="card highlight border-0">
                              <div class="my-3 h2">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter1" value="">
                                  <label class="form-check-label" for="letter1"><img class="soundImageMatchPicture" src="" alt="" width="50" height="50"></label>
                                </div>

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement " type="radio" name="letter" id="letter2" value="">
                                  <label class="form-check-label" for="letter2"><img class="soundImageMatchPicture" src="" alt="" width="50" height="50"></label>
                                </div>

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter3" value="">
                                  <label class="form-check-label" for="letter3"><img class="soundImageMatchPicture" src="" alt="" width="50" height="50"></label>
                                </div>   

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter4" value="">
                                  <label class="form-check-label" for="letter4"><img class="soundImageMatchPicture" src="" alt="" width="50" height="50"></label>
                                </div>

                                <div class="form-check form-check-inline">
                                  <input class="form-check-input letterElement" type="radio" name="letter" id="letter5" value="">
                                  <label class="form-check-label" for="letter5"><img class="soundImageMatchPicture" src="" alt="" width="50" height="50"></label>
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

  for(let k=0; k<wordSoundMatchObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*learnObj.totalLength);
    wordSoundMatchObj.list0[k].value=learnObj.letterList[m].word;
    wordSoundMatchObj.list1[k].innerText=learnObj.letterList[m].word;
  }
  wordSoundMatchObj.list0[i].value=learnObj.letterList[index].word;
  wordSoundMatchObj.list1[i].innerText=learnObj.letterList[index].word;
  common.testSoundFile.setAttribute("src",learnObj.letterList[index].soundfile);
  common.testAudio.load();
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

function imagedGenProcess(i,index)
{

  for(let k=0; k<soundImageMatchObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*learnObj.totalLength);
    soundImageMatchObj.list0[k].value=learnObj.letterList[m].word;
    soundImageMatchObj.list1[k].setAttribute("src",learnObj.letterList[m].Image);
  }
  soundImageMatchObj.list0[i].value=learnObj.letterList[index].word;
  soundImageMatchObj.list1[i].setAttribute("src",learnObj.letterList[index].Image);
  common.testSoundFile.setAttribute("src",learnObj.letterList[index].soundfile);
  common.testAudio.load();

}


function imagedGen(index){

  
  let i=index%soundImageMatchObj.sectionLength;
  if (i==0)
  {

    imagedGenProcess(i,index);

  }else if(index==1)
  {

    imagedGenProcess(i,index);

  }else if(index==2)
  {

    imagedGenProcess(i,index);

  }else if(index==3)
  {

    imagedGenProcess(i,index);

  }else if(index)
  {

    imagedGenProcess(i,index);
    
  }

}

function testNextBtnFunction() {
 
  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }

  if(common.game=="soundImageMatch")
  {
    if(soundImageMatchObj.counter<(learnObj.totalLength-1))
    {
      soundImageMatchObj.counter++;
      imagedGen(soundImageMatchObj.counter);
    }

  }else if (common.game=="wordSoundMatch")
  {

    if(wordSoundMatchObj.counter<(learnObj.totalLength-1))
    {
      wordSoundMatchObj.counter++;
      wordGen(wordSoundMatchObj.counter);
    }
  }

  document.getElementById("showResult").innerHTML="";
}

function testPreviousBtnFunction() {

  if(common.letterSelected!=false)
  {
    common.letterSelected.target.checked=false;
  }
  if(common.game=="soundImageMatch")
  {
    if(soundImageMatchObj.counter>0)
    {
      soundImageMatchObj.counter--;
      imagedGen(soundImageMatchObj.counter); 
    }

  }else if (common.game=="wordSoundMatch")
  {

    if(wordSoundMatchObj.counter>0)
    {
      wordSoundMatchObj.counter--;
      wordGen(wordSoundMatchObj.counter);
    }
  }
  document.getElementById("showResult").innerHTML="";
}

function letterSoundCheck(e) {
  common.letterSelected=e;

  if(common.game=="soundImageMatch")
  {
    if(learnObj.letterList[soundImageMatchObj.counter].word === (e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult;
   
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  

  }else if (common.game=="wordSoundMatch")
  {

    if(learnObj.letterList[wordSoundMatchObj.counter].word === (e.target.value))
    {
  
      document.getElementById("showResult").innerHTML=common.goodResult;
   
    }else 
    {
  
      document.getElementById("showResult").innerHTML=common.poorResult;
    }
  }
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
  if(common.game=="soundImageMatch")
  {
    common.testNextBtn.removeEventListener("click",testNextBtnFunction);
    common.testPreviousBtn.removeEventListener("click",testPreviousBtnFunction);
    soundImageMatchObj.wordElementLst.forEach(elem => {
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
  common.game="soundImageMatch";
  soundImageMatchObj.counter=0;
  let p = document.createElement("div"); 
  p.innerHTML= soundImageMatchObj.soundImageMatchContent;
  common.testSection.appendChild(p);
  
  soundImageMatchObj.list0= document.querySelectorAll(".form-check-input");
  soundImageMatchObj.list1 = document.querySelectorAll(".soundImageMatchPicture");

  common.testNextBtn = document.getElementById("testNext");
  common.testPreviousBtn = document.getElementById("testPrevious");
  common.testAudio= document.getElementById("testAudio"); 
  common.testSoundFile = document.getElementById("testSoundFile");
  common.testNextBtn.addEventListener("click",testNextBtnFunction);
  common.testPreviousBtn.addEventListener("click",testPreviousBtnFunction);

  soundImageMatchObj.wordElementLst = document.querySelectorAll(".letterElement");
  soundImageMatchObj.wordElementLst.forEach(elem => {
    elem.addEventListener("click",letterSoundCheck); 
  });

  //here fill up the letters 
  for(let k=0; k<soundImageMatchObj.sectionLength;k++)
  {
    soundImageMatchObj.list0[k].value=learnObj.letterList[k].word;
  /*   soundImageMatchObj.list1[k].innerText=learnObj.letterList[k].word; */
    soundImageMatchObj.list1[k].setAttribute("src",learnObj.letterList[k].Image);
  }
  /* soundImageMatchObj.picture=document.getElementById("soundImageMatchPicture");
  soundImageMatchObj.picture.setAttribute("src",learnObj.letterList[0].Image); */
  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfile);
  common.testAudio.load();
}


soundImageMatchObj.soundImageMatch.addEventListener("click",function() {
  
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
    if(common.game=="soundImageMatch")
    {

    }else{
  
      buildWordImageMatch();
    }
  }

});

document.getElementById("video0").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/KDE6i_ZZkFU?si=BQeo6fCFJfXu6uFe";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/xvQOUNQTSS0?si=tb-SSSZMJD8rMJrR";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/jdgZFLKRZ0A?si=kVP7iflG4rDJTpDN";
  
});

