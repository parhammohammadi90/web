const clock=document.getElementById("clock")

setInterval(update,1000);
function update(){
    let time = new Date()
    clock.innerHTML = formatTime()

    function formatTime(){
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    return `${hours}:${minutes}:${seconds}`
    }
}
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('open');
});
class Car{ 
  constructor(year,model,color){
this.year = year,
this.model = model,
this.color = color
  }
  drive(){
    console.log(`${this.model}is runnig!`)
  }
}

const car1 = new Car(1398,`dena`,`black`)
const car2 = new Car(1400,`sina`,`white`)
const car3 = new Car(1402,`tara`,`blue`)
const car4 = new Car(2024,`nissan`,`cupper`)

console.log(car1.year)
console.log(car3.color)
car4.drive()