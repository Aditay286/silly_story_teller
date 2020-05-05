const name=document.getElementById("customname");
const button_obj=document.querySelector(".randomize");
const textbox=document.querySelector(".story");

button_obj.addEventListener('click',result);


let story= 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


function randomisedArray(array)
{
var rand=Math.floor(Math.random()*array.length);
return array[rand];
}


function result()
{
 let newstory=story;
 if(name!=='')
 {
   newstory=newstory.replace('Bob',name);
 }

 let insertXword=randomisedArray(insertX);
 let insertYword=randomisedArray(insertY);
 let insertZword=randomisedArray(insertZ);
 newstory=newstory.replace(':insertx:',insertXword);
 newstory=newstory.replace(':inserty:',insertYword);
 newstory=newstory.replace(':insertz:',insertZword);
if(document.getElementById("uk").checked) 
{
    console.log("entered");
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newstory = newstory.replace('94 fahrenheit',temperature);
    newStory = newstory.replace('300 pounds',weight);
  }



 textbox.textContent=newstory;
 textbox.style.visibility='visible';
}