"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  question: "How is the weather?",
  answer: "It's sunny",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/sunny.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/weather.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/sunny.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qasunny.mp3"
};

const contentItem1 = {
  question: "How is the weather?",
  answer: "It's rainy?",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/rainy.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/weather.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qarainy.mp3"
};

const contentItem2 = {
  question: "How is the weather?",
  answer: "It's cloudy",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/cloudy.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/weather.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qacloudy.mp3"
};

const contentItem3 = {
  question: "How is the weather?",
  answer: "It's snowy",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/snowy.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/weather.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qasnowy.mp3"
};

const contentItem4 = {
  question: "How is the weather?",
  answer: "It's windy",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/windy.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/weather.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qawindy.mp3"
};

const contentItem5 = {
  question: "What food do you like?",
  answer: "I like pizza",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/pizza.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/food.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qapizza.mp3"
};

const contentItem6 = {
  question: "What food do you like?",
  answer: "I like ice cream",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/ice-cream.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/food.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qaice.mp3"
};

const contentItem7 = {
  question: "What food do you like?",
  answer: "I like juice",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/juice.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/food.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qajuice.mp3"
};

const contentItem8 = {
  question: "What food do you like?",
  answer: "I like broccoli",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/broccoli.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/food.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qabroccoli.mp3"
};

const contentItem9 = {
  question: "What food do you like?",
  answer: "I like burger",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/burger.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/food.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qaburger.mp3"
};


const contentItem10 = {
  question: "What shape is it?",
  answer: "It's circle",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/circle.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/shape.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qacircle.mp3"
};

const contentItem11 = {
  question: "What shape is it?",
  answer: "It's square",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/square.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/shape.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qasquare.mp3"
};

const contentItem12 = {
  question: "What shape is it?",
  answer: "It's heart",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/heart.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/shape.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qaheart.mp3"
};

const contentItem13 = {
  question: "What shape is it?",
  answer: "It's rectangle",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/rectangle.png",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/shape.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/these.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qarectangle.mp3"
};

const contentItem14 = {
  question: "What shape is it?",
  answer: "It's triangle",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/triangle.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/shape.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qatriangle.mp3"
};

const contentItem15 = {
  question: "How are you feeling?",
  answer: "I'm feeling happy",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/happy.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/feeling.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qahappy.mp3"
};

const contentItem16 = {
  question: "How are you feeling?",
  answer: "I'm feeling sad",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/sad.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/feeling.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qasad.mp3"
};

const contentItem17 = {
  question: "How are you feeling?",
  answer: "I'm feeling angry",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/angry.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/feeling.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qaangry.mp3"
};

const contentItem18 = {
  question: "How are you feeling?",
  answer: "I'm feeling excited",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/excited.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/feeling.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qaexcited.mp3"
};

const contentItem19 = {
  question: "How are you feeling?",
  answer: "I'm feeling tired",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/tired.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/feeling.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qatired.mp3"
};

const contentItem20 = {
  question: "who is she?",
  answer: "she's my mother",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/mother.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/she.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qamother.mp3"
};

const contentItem21 = {
  question: "who is she?",
  answer: "she's my sister",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/sister.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/she.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qasister.mp3"
};

const contentItem22 = {
  question: "who is she?",
  answer: "she's my grandmother",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/grandmother.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/she.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qagrandmother.mp3"
};

const contentItem23 = {
  question: "who is he?",
  answer: "he's my father",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/father.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/he.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qafather.mp3"
};

const contentItem24 = {
  question: "who is he?",
  answer: "he's my brother",
  Image: "../../../asset/image/basic-sentence/basic-conversation2/brother.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/basic-conversation2/he.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/basic-conversation2/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/basic-conversation2/qabrother.mp3"
};



const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9,
  contentItem10,contentItem11,contentItem12,contentItem13,contentItem14,contentItem15,contentItem16,contentItem17,contentItem18,contentItem19,contentItem20,contentItem21,contentItem22,contentItem23,contentItem24];

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

//i is the section index
//index is the content counter

function wordGenProcess(i,index)
{

  for(let k=0; k<wordImageMatchObj.sectionLength;k++)
  {
    let m =Math.floor(Math.random()*learnObj.totalLength);
    wordImageMatchObj.list0[k].value=learnObj.letterList[m].answer;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[m].answer;
  }
  wordImageMatchObj.list0[i].value=learnObj.letterList[index].answer;
  wordImageMatchObj.list1[i].innerText=learnObj.letterList[index].answer;
 
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
    common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfileQ); 
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
    common.testSoundFile.setAttribute("src",learnObj.letterList[wordImageMatchObj.counter].soundfileQ); 
  }
  common.testAudio.load();
  document.getElementById("showResult").innerHTML="";
}

function letterSoundCheck(e) {
  common.letterSelected=e;

  if(common.game=="wordImageMatch")
  {
    if(learnObj.letterList[wordImageMatchObj.counter].answer === (e.target.value))
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

  //here fill up the letters 
  for(let k=0; k<wordImageMatchObj.sectionLength;k++)
  {
    wordImageMatchObj.list0[k].value=learnObj.letterList[k].answer;
    wordImageMatchObj.list1[k].innerText=learnObj.letterList[k].answer;
  }
  wordImageMatchObj.picture.setAttribute("src",learnObj.letterList[0].Image);
  common.testSoundFile.setAttribute("src",learnObj.letterList[0].soundfileQ);
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/qoVcMJTjJ4A?si=ilbJOtk7Hci6vq9t";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/frN3nvhIHUk?si=YoHDTaW-rGe6m4_3";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/lcl8uB2AWM0?si=iFjOF9CiqrWcvKSh";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/v0QjJORZ7Hg?si=Rz9KXj3VEoXu9ShT";
  
});
