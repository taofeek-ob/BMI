var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');
var chartType = 'line';
var myBarChart;

// Global Options:
Chart.defaults.global.defaultFontColor = 'grey';
Chart.defaults.global.defaultFontSize = 14;

var data = {
    labels: [],
    datasets: [{
        label: "BMI",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(0,255,0,0.4)",
        borderColor: "green", // The main line color
        borderCapStyle: 'square',
        pointBorderColor: "white",
        pointBackgroundColor: "green",
        pointBorderWidth: 1,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "yellow",
        pointHoverBorderColor: "green",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [],
        spanGaps: true,
    }]
};

var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    title: {
        fontSize: 14,
        display: true,
        text: 'BMI Chart',
        position: 'bottom'
    }
};

init();

function init() {
    // Chart declaration:
    myBarChart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: options
    });
}
  

  
// Book Class: Represents A book
class BMID {
  constructor(weight,weightM, height, heightM, bmi,  date) {
    this.weight = weight;
    this.weightM = weightM;  
    this.height = height;
      this.heightM = heightM;
    
      this.bmi = bmi;
      this.date= date
//
// const options = { dateStyle: 'full'}
// this.date= new Date(date).toLocaleDateString(undefined, options)



//
//var dater = Date.parse(date);

// const options = { dateStyle: 'full'}
// this.date= new Date(dater).toLocaleDateString(undefined, options)
      //



  }
  // calculateBMI (){

  // }
}


   class UI {
      static displayBmi() {
  
          const bmis = store.getBMI();
  
          bmis.forEach((bmi) => UI.addToCardList(bmi));
          bmis.forEach((bmi) => UI.addGraph(bmi))
      }

      static addGraph(bmi){
      
          myBarChart.data.labels.push(bmi.date);
          // myBarChart.data.labels[13] ="2018";
          // myBarChart.data.datasets[0].data[1+myBarChart.data.labels.length] = bmi.bmi;
          myBarChart.data.datasets[0].data.push(bmi.bmi);
          myBarChart.update();
       
      }
      // static addGraph(bmi){
      
      //    var ds1 = {
      //     label: bmi.date,
      //     data: bmi.bmi
      //    }
      // data.datasets.push(ds1);
         
      //     myBarChart.update();
       
      // }

      static removeGraph(date) {
//      let removalIndex = data.datasets.indexOf(date); //Locate index of ds1
     let removalIndex = myBarChart.data.labels.indexOf(date); //Locate index of ds1
// if(removalIndex >= 0) { //make sure this element exists in the array
//     data.datasets.splice(removalIndex, 1);
 if (removalIndex >= 0) { 
  //make sure this element exists in the array
  myBarChart.data.labels.splice(removalIndex, 1)
  myBarChart.data.datasets[0].data.splice(removalIndex, 1)
  myBarChart.update();
}
myBarChart.update();
// const bmis = store.getBMI()
// bmis.forEach((bmi, index) => {
//   if (bmi.date === date) {
// myBarChart.data.labels.splice(index, 1);
// myBarChart.data.datasets[0].data.splice(index, 1);
//   }
//   myBarChart.update();
// })
          // myBarChart.data.labels[13] ="2018";
          // myBarChart.data.datasets[0].data[1+myBarChart.data.labels.length] = bmi.bmi;
          
        //  myBarChart.update();

          //myBarChart.data.datasets[0].data[11] = 300;
          // const bmis = store.getBMI()
          // bmis.forEach((bmi) => {
          // myBarChart.data.labels.slice(bmi.date, 1);
          // myBarChart.data.datasets[0].data.slice(bmi.bmi,1)
          // })
          // const bmiy = myBarChart.data.datasets[0].data
          // const bmix = myBarChart.data.labels
          // bmiy.forEach((bmis, index) => {
    
          //     if (bmis.date === date) {
          //         bmiy.splice(index, 1);
          //     } })
          // bmix.forEach((bmis, index) => {
    
          //     if (bmis.date === date) {
          //         bmix.splice(index, 1);
          //     }
    
          // });
         
        
      } 
     
      static addToCardList(bmi) {
          const Card = document.querySelector(".framework");
          const row = document.createElement("div");

          row.innerHTML = `
          <div class="box bootstrap">
          
        <div class="row poin , mt-2">
        <div class="col-md-3 point"></div>
          <div class="col-md-6  text-center text-monospace font-weight-bold point ">BMI: ${bmi.bmi} </div>
          <div class="col-md-3 point"></div></div>
       <br/>
     
          <div class="row point">
          <div class="col-sm-4 font-weight-bold  point">Weight: ${bmi.weight}${bmi.weightM}</div>
          <div class="col-sm-4 pl-4 font-weight-bold point">Height: ${bmi.height}${bmi.heightM}</div>
          <div class="col-sm-4 font-weight-bold point">${bmi.date}</div></div>
          <div class="row">
          <div class="col-md-3 point"></div>
            <div class="col-sm-6 text-center pointt"><a href="#" class="text-danger delete ">X</a> </div>
            <div class="col-md-3 point"></div></div>
   </div>
  `;
  
//<a href="#" class=" align-middle"><a href="#" class="btn btn-outline-light delete  "><span class=""><i class="fas fa-trash fa-lg "></i></span> </a>
//<p class="card-text">Your BMI was ${bmi.date}</p>
          Card.appendChild(row);
      }
  
      static deleteBmi(el) {
          if (el.classList.contains("delete")) {
              el.parentElement.parentElement.parentElement.remove();
  
          }
          // else if (el.classList.contains("delete")) {
          //     el.parentElement.parentElement.parentElement.remove();
  
          // }
      }

      static clearField (){
        document.getElementById('weight').value = "";
       document.getElementById('height').value = "";
       document.getElementById('select1').value = "";
       document.getElementById('select2').value = "";
       
       }
    
    }
    
   
   
   
//Store Class:Handles storage
class store {


  //get book
  static getBMI() {
          let bmis;
          if (localStorage.getItem("bmis") === null) {
              bmis = [];
          } else {
              bmis = JSON.parse(localStorage.getItem("bmis"));
          }
          return bmis;
      }
      //add book
  static addBmi(BMI) {
      const bmis = store.getBMI()
      bmis.push(BMI)
      localStorage.setItem("bmis", JSON.stringify(bmis))
     

  }
  // static addGraph{
  //   const graph = store.getBMI()
  //   graph.push(BMI)
  //   localStorage.setItem("graph", JSON.stringify(bmis))
  // }


  //remove book
  static removeBMI(date) {
 
      var bmis = store.getBMI()
     
     
      
      
      bmis.forEach((bmi, index) => {

          if (bmi.date === date) {
            bmis.splice(index, 1);
              
          }
         // return bmis
      });
      localStorage.setItem("bmis", JSON.stringify(bmis))
  }
}
   
   
   
   
  
  
  
  const form = document.querySelector('form');
  
  
     
  document.addEventListener("DOMContentLoaded", UI.displayBmi);
     
     
  
  form.addEventListener('submit', function(e){
  
                 e.preventDefault();
        
           const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  const weightM = document.getElementById('select1').value;
  const heightM = document.getElementById('select2').value;
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = date.getFullYear();
  
  date = mm + '/' + dd + '/' + yyyy;
  let BMI;

  
 
  if (JSON.parse(localStorage.getItem("bmis")) !==  null && JSON.parse(localStorage.getItem("bmis")).some(ch => ch.date === date)) {
    return  alert(`You've entered a metric on ${date} before`);
  }
  else {
    if (weightM == "Kg" && heightM=="m"){
      BMI = weight/(Math.pow(height, 2))
      console.log(BMI)
      console.log( myBarChart.data.labels)
      }
      
      else if (weightM == "Kg" && heightM=="cm"){
        BMI= [weight/(Math.pow(height, 2))]*10000
      
     
      }
      
      else if (weightM == "Kg" && heightM=="ft"){
        BMI= weight/(Math.pow((height*0.3048), 2))
      
      }
      
      else if (weightM == "lb" && heightM=="m"){
        BMI= (weight/2.20462262)/(Math.pow(height, 2))
      
    
      }
      else if (weightM == "lb" && heightM=="cm"){
        BMI= [(weight/2.20462262)/(Math.pow(height, 2))]*10000
      
    
      }
      else if (weightM =="lb" && heightM =="ft"){
        BMI = (weight/2.20462262)/(Math.pow((height*0.3048), 2))
      
    
      }
      BMI= BMI.toFixed( [1] )
  
    
  
        // result.textContent =`Your Calculated BMI is: ${BMI}`	
  
         const Bmi = new BMID (weight,weightM, height,heightM, BMI, date);
         UI.addToCardList(Bmi)  
         UI.addGraph(Bmi)
         store.addBmi(Bmi)
    UI.clearField()			
    
  }
  
    
                       
   
                    })
                
                    document.querySelector(".framework").addEventListener("click", (e) => {
                      //var table = $('#tabler').DataTable();
                      
                      var result = confirm("Want to delete?");
                      console.log(e.target);
                      console.log(e.target.parentElement.parentElement.previousElementSibling.children[2])
                      if (result) {
                      //show success
                      console.log(e.target);
                      UI.deleteBmi(e.target)
                      store.removeBMI(e.target.parentElement.parentElement.previousElementSibling.children[2].textContent);
                     // myBarChart.update()
                  UI.removeGraph(e.target.parentElement.parentElement.previousElementSibling.children[2].textContent)
                      // remove book from store
                     
                  console.log(e.target.parentElement.previousElementSibling.parentElement.parentElement.textContent)
                  
                     // UI.showAlert("Book Delete", "info");
                      //table
                      //.row()
                      //.clear()
                      //.draw();
                     
                      }
                  });




   

    // function adjust2016() {
    //   myBarChart.data.datasets[0].data[11] = 300;
    //   myBarChart.update();
    // }
