"use strict"; 
const pathname=window.location.pathname;
const contentItem0 = {
  word: "cob",
  sound: "/kɒb/",
  Image: "../../../../asset/image/phonics/cvc/coc/cob.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/cob.mp3"
};

const contentItem1 = {
  word: "job",
  sound: "/dʒɒb/",
  Image: "../../../../asset/image/phonics/cvc/coc/job.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/job.mp3"
};

const contentItem2 = {
  word: "mob",
  sound: "/mob/",
  Image: "../../../../asset/image/phonics/cvc/coc/mob.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/mob.mp3"
};

const contentItem3 = {
  word: "sob",
  sound: "/sob/",
  Image: "../../../../asset/image/phonics/cvc/coc/sob.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/sob.mp3"
};

const contentItem4 = {
  word: "bob",
  sound: "/bob/",
  Image: "../../../../asset/image/phonics/cvc/coc/bob.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/bob.mp3"
};

const contentItem5 = {
  word: "dog",
  sound: "/dog/",
  Image: "../../../../asset/image/phonics/cvc/coc/dog.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/dog.mp3"
};

const contentItem6 = {
  word: "fog",
  sound: "/fog/",
  Image: "../../../../asset/image/phonics/cvc/coc/fog.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/fog.mp3"
};

const contentItem7 = {
  word: "hog",
  sound: "/hog/",
  Image: "../../../../asset/image/phonics/cvc/coc/hog.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/hog.mp3"
};

const contentItem8 = {
  word: "jog",
  sound: "/jog/",
  Image: "../../../../asset/image/phonics/cvc/coc/jog.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/jog.mp3"
};

const contentItem9 = {
  word: "log",
  sound: "/log/",
  Image: "../../../../asset/image/phonics/cvc/coc/log.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/wlogin.mp3"
};

const contentItem10 = {
  word: "cop",
  sound: "/cop/",
  Image: "../../../../asset/image/phonics/cvc/coc/cop.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/cop.mp3"
};

const contentItem11 = {
  word: "hop",
  sound: "/hop/",
  Image: "../../../../asset/image/phonics/cvc/coc/hop.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/hop.mp3"
};

const contentItem12 = {
  word: "mop",
  sound: "/mop/",
  Image: "../../../../asset/image/phonics/cvc/coc/mop.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/mop.mp3"
};

const contentItem13 = {
  word: "pop",
  sound: "/pop/",
  Image: "../../../../asset/image/phonics/cvc/coc/pop.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/pop.mp3"
};

const contentItem14 = {
  word: "top",
  sound: "/top/",
  Image: "../../../../asset/image/phonics/cvc/coc/top.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/top.mp3"
};

const contentItem15 = {
  word: "cot",
  sound: "/cot/",
  Image: "../../../../asset/image/phonics/cvc/coc/cot.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/cot.mp3"
};

const contentItem16 = {
  word: "hot",
  sound: "/hot/",
  Image: "../../../../asset/image/phonics/cvc/coc/hot.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/hot.mp3"
};

const contentItem17 = {
  word: "pot",
  sound: "/pot/",
  Image: "../../../../asset/image/phonics/cvc/coc/pot.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/pot.mp3"
};

const contentItem18 = {
  word: "rot",
  sound: "/rot/",
  Image: "../../../../asset/image/phonics/cvc/coc/rot.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/rot.mp3"
};

const contentItem19 = {
  word: "tot",
  sound: "/tot/",
  Image: "../../../../asset/image/phonics/cvc/coc/tot.jpg",
  soundfile: "../../../../asset/audio/phonics/cvc/coc/tot.mp3"
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

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/cT29fKypSME?si=rAz7pMc6RWxXBaEe";
  
});

document.getElementById("video1").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/g3wiUPFHgIA?si=d0XfxxZzPt6dPuz-";
  
});

document.getElementById("video2").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/7JBpu8BLGco?si=6_O7obvjnhvBdK46";
  
});

document.getElementById("video3").addEventListener("click",function(){

  document.getElementById('videoLink').src ="https://www.youtube.com/embed/zBJmed6oUmA?si=SEoODhrPZNic_L1w";
  
});


