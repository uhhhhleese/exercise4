let input, button, result, question, submit, answer;

// let Answer1;

let colorInput = document.getElementById('color-input');
let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(4000, windowHeight);
    cnv.parent('mySketch');

    // result = createElement('p', 'Do you want to destroy the patriarchy?');
    // result.style('font-size', '30px');
    // result.style('margin', '0px');
    // result.style('text-align', 'center');
    // result.style('font-family', 'Helvetica')
    // result.style('padding', '20px 0px')
    // result.style('margin', '20px 0px')
    // result.style('color', '#FFFFFF')
    // result.id('answer');
    // answer = document.getElementById('answer');
    // colorInput.appendChild(answer);

  

    // let button = createButton("Yes");
    // button.id('yes');
    // yes = document.getElementById('yes');
    // colorInput.appendChild(yes);
    // button.mousePressed(clock);
    // button.style('font-size', '30px');
    // button.style('color', 'A9BD93')
    // button.style('background-color', 'FFFFFF');
    // button.style('border-style', 'inset')
    // button.style('margin', '20px 0px')

  
    frame1 = createImg("images/frame1 copy.png");
    frame1.position(250, 90);
    frame1.size(280,400)

    frame2 = createImg("images/frame2.png")
    frame2.position(650, 50)
    frame2.size(432,505)
    
    frame3 = createImg("images/frame3 copy.png")
    frame3.position(1150, 50)
    frame3.size(952,631)

    frame4 = createImg("images/frame4 copy.png")
    frame4.position(2300, 70)
    frame4.size(410,513)

    frame5 = createImg("images/frame5 copy.png")
    frame5.position(2800, 70)
    frame5.size(364,512)
  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(8800, windowHeight);
}

  function clock(){
    window.location.replace("next.html")
  }

  

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

// function output() {
//   const answers = input.value();
//   input.value('');

//   let answer1 = createP('');
//   answer1.id('answer-1')
//   answer1.style('font-size', '30px');
//   answer1.style('margin', '0px');

//   let Answer1 = document.getElementById('answer-1');
//   colorInput.appendChild(Answer1);
//   Answer1.innerHTML = answers;

//   let a = createA('next.html', 'next');

  // if (answers == "yes"){
  //   Answer1.innerHTML = answers;
  //   let clock = createImg("images/clock.png");
  //   clock.size(439,287);
  //   clock.position(650, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else if (answers == "ya"){
  //   Answer1.innerHTML = answers;
  //   let sam = createImg("images/unclesam.png");
  //   sam.size(179,287);
  //   sam.position(450, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else if (answers == "yeah"){
  //   Answer1.innerHTML = answers;
  //   let red = createImg("images/red.png");
  //   red.size(200,287);
  //   red.position(200, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else if (answers == "hell yes") {
  //   Answer1.innerHTML = answers;
  //   let planet = createImg("images/planet.jpg");
  //   planet.size(180,287);
  //   planet.position(1100, 350);
  //   a.id('next');
  //   colorInput.appendChild(next);
  // } else {
  //   Answer1.innerHTML = "News flash: it wants to destroy you. <3";
  // }
     
  // }
