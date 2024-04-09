"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  question: "What day is it?",
  answer: "It's monday",
  Image: "../../../asset/image/basic-sentence/day/monday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/sunny.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qamonday.mp3"
};

const contentItem1 = {
  question: "What day is it?",
  answer: "It's tuesday",
  Image: "../../../asset/image/basic-sentence/day/tuesday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qatuesday.mp3"
};

const contentItem2 = {
  question: "What day is it?",
  answer: "It's wednesday",
  Image: "../../../asset/image/basic-sentence/day/wednesday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qawednesday.mp3"
};

const contentItem3 = {
  question: "What day is it?",
  answer: "It's thursday",
  Image: "../../../asset/image/basic-sentence/day/thursday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/day.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qathursday.mp3"
};

const contentItem4 = {
  question: "What's your favorite day",
  answer: "I like friday",
  Image: "../../../asset/image/basic-sentence/day/friday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/favorite.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qafavorite.mp3"
};

const contentItem5 = {
  question: "What day comes after sunday?",
  answer: "Monday comes after sunday",
  Image: "../../../asset/image/basic-sentence/day/monday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whataftersunday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qaaftersunday.mp3"
};

const contentItem6 = {
  question: "What day comes before monday?",
  answer: "Sunday comes before monday",
  Image: "../../../asset/image/basic-sentence/day/sunday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whatbeforemonday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qabeforemonday.mp3"
};

const contentItem7 = {
  question: "What is your favorite saturday activity?",
  answer: "It is going to the park",
  Image: "../../../asset/image/basic-sentence/day/park.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/favoritesaturday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qapark.mp3"
};

const contentItem8 = {
  question: "What day is the last day of the school",
  answer: "Friday is the last day of the school",
  Image: "../../../asset/image/basic-sentence/day/friday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whatlast.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qalast.mp3"
};

const contentItem9 = {
  question: "What day is it before wednesday?",
  answer: "It's tuesday before wednesday",
  Image: "../../../asset/image/basic-sentence/day/tuesday.jpg",
  soundfileQ: "../../../asset/audio/basic-sentence/day/whatbeforewednesday.mp3",
  soundfileA: "../../../asset/audio/basic-sentence/day/getup.mp3",
  soundfileQA: "../../../asset/audio/basic-sentence/day/qabeforewednesday.mp3"
};

const contents = [contentItem0,contentItem1,contentItem2,contentItem3,contentItem4,contentItem5,contentItem6,contentItem7,contentItem8,contentItem9];

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
                                  <img src="../../../asset/image/happy.png" width="50" height="50" alt="">
                                  <p class="text-danger my-0" id="right">100</p>
                                </div>
                      
                                <div>
                                  <img src="../../../asset/image/score.png" width="50" height="50" alt="">
                                  <p class="text-danger my-0" id="score">Core</p>
                                </div>
                      
                                <div>
                                  <img src="../../../asset/image/sad.png" width="50" height="50" alt="">
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
    common.letterSelected =false;
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
    if(learnObj.letterList[wordImageMatchObj.counter].answer === (e.target.value))
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