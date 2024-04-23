/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DORKING CRIME BAR GRAPH
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 let dataset;
 let margin = 200;
 
 let scale = 1;
 let spacing = 70;
 
 let maxVal;
 let minVal;
 
 let graphBaseLine;
 
 function preload(){
   dataset = loadTable("Dorking-Crime-data.csv", "header");
 }
 
 function setup(){
   createCanvas(1100, 750);
   
   minVal = min(dataset.getColumn("Crime Rates (t)"));
   maxVal = max(dataset.getColumn("Crime Rates(t)"));
   console.log("Min: "+minVal);
   console.log("Max: "+maxVal);
   
   graphBaseLine = height-margin/2;
 
 }
 
 function draw(){
   background(221,);
   
   for(let row=0; row<dataset.getRowCount(); row++){
     let countryName = dataset.getString(row, 1);
     let food = dataset.getNum(row, 2) / scale;
     let animalFeed = dataset.getNum(row, 2) / scale;
     
     let x = margin+row*spacing;
     let y = graphBaseLine;
 
     
     //LABEL
     fill(55);
     noStroke();
     textSize(10);
     textAlign(CENTER);
     text(countryName, x, y+20);
     
     //BARS
     
     fill(105, 155, 255);
     rect(x, y, spacing/3, -animalFeed);
   }
   
   
   fill(55);
   noStroke();
   rect(0, 0, width, 120);
   fill(245);
   textSize(18);
   textAlign(LEFT);
   text("Dorking Crime Rate (2023)", margin/8, 50);
   
   
   
   fill(105, 155, 255);
   text("Crime Rates", margin/8, 90)
   
   displayAxis(margin/2, graphBaseLine, 1, maxVal, scale, 1);
   
   textAlign(RIGHT);
   text("Source: Surrey Police", width-margin/8, height-margin/8);
 }
 
 function displayAxis(x, y, mini, maxi, scale, interval){
   
   
   let lineHeight = (maxi-mini) / scale;
   let increment =  interval/scale;
   stroke(55);
   line(x, y, x, y-lineHeight);
   line(x, y, width-margin/2, y);
   
   textAlign(RIGHT);
   for(let yt=0; yt <= lineHeight; yt+=50){
     stroke(55);
     line(x, y-yt, x-5, y-yt);
     noStroke();
     fill(55);
     text((yt*scale)/interval, x-1, y-yt);
   }
   
   
 }