// document.getElementById("count-el").innerText = 5

// let count = 52



// Create a function, increment(), that increases the count by 1
// Then call this function
// Hint: you can use the following code inside your function
// let mytext = 3
// count = mytext
// console.log(count)
// document.getElementById("count-el").innerText = count

// let myAge = 25
// console.log(myAge * 4)

// let countEl = document.getElementById("count-el").innerHTML = myAge

// function increment(){
//     console.log("hello ahmed and ali school ")
// }

// function CuntDown(){
//    console.log(5)
//    console.log(4)
//    console.log(3)
//    console.log(2)
//    console.log(1)
// }
// CuntDown()


// function logNumber(){
//     console.log(42)
// }
// logNumber()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function Episode(){
//     let total = lap1 + lap2 + lap3
//     console.log(total)
// }
// Episode()
// console.log(total)

// lapsCompleted
// incrementLaps
 
// let lapsCompleted = 0
 
// function incrementLaps(){
   
//     lapsCompleted += 1
// }
// incrementLaps()
// incrementLaps()
// incrementLaps()

// console.log(lapsCompleted)


let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let minusBtn = document.getElementById("minus-btn")
let titleText = document.getElementById("title-text")
let saveBtn = document.getElementById('save-btn')
// -------------
let savedPage = document.getElementById("saved-Page");
//------------
let count = 0

console.log(titleText)

incrementBtn.addEventListener("click" , function(){

   count +=1
   countEl.innerHTML = count

   updateCountDisplay()
  
})
minusBtn.addEventListener("click",function(){

    count -=1
    if(count < 0 ){
        count = 0
    }
    countEl.innerHTML = count

    updateCountDisplay()
})

function updateCountDisplay(){
    count == 10 || count == 20 || count == 30 ? titleText.innerHTML = `Well done, you've reached level ${count /10}.` :titleText.innerHTML = "";
}



saveBtn.addEventListener("click", function() {
    // Display the saved count on the page
    console.log(`Saved count: ${count}`);
    savedPage.textContent += count + ` - `
    countEl.textContent = 0
    count = 0
    
});


// ============== 
// let userName = "Ahmed"
// let message = "You have tree new notifications"
// let totalText = message + ", " + userName + "!"
// console.log(totalText);


// let points = 3
// let orange = 30
// let myTotal = points + orange 
// console.log(myTotal);

// let points1 = "5" + 30 //530
// let points2 = 10 + 20  // 30
// let points3 = 30 + "2" //302
// let points4 = "10" + "5" //105

// console.log(points1)
// console.log(points2)
// console.log(points3)
// console.log(points4)
let welcomeEl = document.getElementById("welcome-el")

let name = "Per Harald Borgen"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText += "👋" + 1
