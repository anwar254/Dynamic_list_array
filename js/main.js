// getting the elemets
const rand = document.getElementById('ramdom-wrapper');
const data = document.querySelector('input');

// generating random words
let words = ['anwar', 'magara', 'sizzler'];

// creating the shuffle function
function shuffle(w){

  for (let i = w.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    const x = w[i];
    w[i] = w[j];
    w[j] = x;
  }

  return w
}

function element(text){
  // var heading = document.createElement('p');
  // rand.appendChild(heading);
  // heading.createTextNode(text);
  // const con = [heading];
  var textNode;
  textNode = "<ul>";
  for (let i = 0; i <= text.length - 1; i++){
    // const textNode = document.createTextNode(text[i]);
    // console.log(text[i]);
    // heading.appendChild(textNode);

    textNode += "<li>" + text[i] + "</li>";

  }
  textNode += "</ul>";


  String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  };

  rand.innerHTML = textNode.capitalize();
}

// listening for the click event
function clicking(){
  // getting the button element
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {

    // shuffling the array indexes
    if (data.value.length <= 10){
      words.push(data.value);
    }else{
      alert("the data should be less than 10 words")
    }

    element(shuffle(words));
  });
}

// executing the function
clicking()

//
// what to do tomorrow morning:
//   add animation to the lists
