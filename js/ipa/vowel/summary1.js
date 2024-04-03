"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "iː",
  sound: "iː",
  Image: "../../../asset/image/ipa/vowel/i-long.png",
  soundfile: "../../../asset/audio/ipa/vowel/i-long.mp3"
};

const contentItem1 = {
  word: "i",
  sound: "i",
  Image: "../../../asset/image/ipa/vowel/i.png",
  soundfile: "../../../asset/audio/ipa/vowel/i.mp3"
};

const contentItem2 = {
  word: "uː",
  sound: "uː",
  Image: "../../../asset/image/ipa/vowel/u-long.png",
  soundfile: "../../../asset/audio/ipa/vowel/u-long.mp3"
};

const contentItem3 = {
  word: "ʊ",
  sound: "ʊ",
  Image: "../../../asset/image/ipa/vowel/u.png",
  soundfile: "../../../asset/audio/ipa/vowel/u.mp3"
};

const contentItem4 = {
  word: "e",
  sound: "e",
  Image: "../../../asset/image/ipa/vowel/e.png",
  soundfile: "../../../asset/audio/ipa/vowel/e.mp3"
};

const contentItem5 = {
  word: "æ",
  sound: "æ",
  Image: "../../../asset/image/ipa/vowel/æ.png",
  soundfile: "../../../asset/audio/ipa/vowel/æ.mp3"
};

const contentItem6 = {
  word: "ɔː",
  sound: "ɔː",
  Image: "../../../asset/image/ipa/vowel/o-long.png",
  soundfile: "../../../asset/audio/ipa/vowel/o-long.mp3"
};

const contentItem7 = {
  word: "ɒ",
  sound: "ɒ",
  Image: "../../../asset/image/ipa/vowel/o.png",
  soundfile: "../../../asset/audio/ipa/vowel/o.mp3"
};

const contentItem8 = {
  word: "ə",
  sound: "ə",
  Image: "../../../asset/image/ipa/vowel/ə.png",
  soundfile: "../../../asset/audio/ipa/vowel/ə.mp3"
};

const contentItem9 = {
  word: "ɜː",
  sound: "ɜː",
  Image: "../../../asset/image/ipa/vowel/ə.png",
  soundfile: "../../../asset/audio/ipa/vowel/ə-long.mp3"
};

const contentItem10 = {
  word: "ʌ",
  sound: "ʌ",
  Image: "../../../asset/image/ipa/vowel/ʌ.png",
  soundfile: "../../../asset/audio/ipa/vowel/ʌ.mp3"
};

const contentItem11 = {
  word: "ɑː",
  sound: "ɑː",
  Image: "../../../asset/image/ipa/vowel/ʌ-long.png",
  soundfile: "../../../asset/audio/ipa/vowel/ʌ-long.mp3"
};

const contentItem12 = {
  word: "ɪə",
  sound: "ɪə",
  Image: "../../../asset/image/ipa/vowel/ɪə.gif",
  soundfile: "../../../asset/audio/ipa/vowel/ɪə.mp3"
};

const contentItem13 = {
  word: "eɪ",
  sound: "eɪ",
  Image: "../../../asset/image/ipa/vowel/ei.gif",
  soundfile: "../../../asset/audio/ipa/vowel/ei.mp3"
};

const contentItem14 = {
  word: "ʊə",
  sound: "ʊə",
  Image: "../../../asset/image/ipa/vowel/ʊə.gif",
  soundfile: "../../../asset/audio/ipa/vowel/ʊə.mp3"
};

const contentItem15 = {
  word: "ɔɪ",
  sound: "/tɒŋz/",
  Image: "../../../asset/image/ipa/vowel/ɔɪ.gif",
  soundfile: "../../../asset/audio/ipa/vowel/ɔɪ.mp3"
};

const contentItem16 = {
  word: "əʊ",
  sound: "/ˈbɒt.əl/",
  Image: "../../../asset/image/ipa/vowel/əʊ.gif",
  soundfile: "../../../asset/audio/ipa/vowel/əʊ.mp3"
};

const contentItem17 = {
  word: "eə",
  sound: "/ˈrəʊ.lɪŋˌpɪn/",
  Image: "../../../asset/image/ipa/vowel/eə.png",
  soundfile: "../../../asset/audio/ipa/vowel/eə.mp3"
};

const contentItem18 = {
  word: "aɪ",
  sound: "/ˈket.əl/",
  Image: "../../../asset/image/ipa/vowel/aɪ.gif",
  soundfile: "../../../asset/audio/ipa/vowel/aɪ.mp3"
};

const contentItem19 = {
  word: "aʊ",
  sound: "/pɒt/",
  Image: "../../../asset/image/ipa/vowel/aʊ.gif",
  soundfile: "../../../asset/audio/ipa/vowel/aʊ.mp3"
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
  goodResult: `<img src="../../../asset/image/happy.png" alt="happy--v1"/>`,
  poorResult: `<img src="../../../asset/image/sad.png" alt="happy--v1"/>`
}

const learnObj = {
  letterList:contents,
  totalLength: contents.length
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
    }else 
    {
       document.getElementById("showResult").innerHTML=common.poorResult;
    }

  }
   
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/MaBess5ygYo?si=Unv803nGmJ91ckd1";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/C2c0zG47k3k?si=thH7cDecOvH5da0S";

});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/dg2Ep3DF8VY?si=_QtXWaXgT5fdoF81";
  
});

document.getElementById("video3").addEventListener("click",function(){
  document.getElementById('videoLink').src ="https://www.youtube.com/embed/69DwHUg2f7s?si=Ngb0yXkErDjgWnD_";
});

document.getElementById("video4").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/vL1iGL11Jzg?si=4FPGh1RnY-i4R0Xx";
  
});

document.getElementById("video5").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/HdXCF8KHSMQ?si=RzaLIpAGGIZE5EiM";
  
});

document.getElementById("video6").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/jORgKrANiMw?si=iyqvpR9bbtHhBof_";
  
});



