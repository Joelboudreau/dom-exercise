//var extraParagraph = document.getElementById("extra");
//console.log(extraParagraph);
//
//var linkTag = extraParagraph.firstElementChild;
//console.log(linkTag);
//
////aceess the content between html
//console.log

/*
Task 1
1. Access HTML element with id tag-line.
2. Access all headings that belong to div with the class name bg-main-content.
3. Create the variable collect and assign it with content of tag-line.
4. Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect */


//1.
var tagline = document.getElementById("tag-line");
console.log("tagline:", tagline.innerHTML);

//2.
var headings = document.querySelectorAll(".bg-main-content h2");
console.log("tagline: ", headings);

//3.
var collect = tagline.innerHTML + "\n-----------------------------------\n\n";
console.log("tagline: ", collect);


var i;

for (i=0; i< headings.length; i += 1) {
     collect += headings[i].innerHTML + "\n";
    
}

alert(collect);
//
//
//
//
//-----------------------------

var launch= document.querySelectorAll(".bg-main-content .box")[12].children;
//console.log("when_to_launch:", tagline.innerHTML);

var collect = launch[0] .innerHTML + "\n-----------------------------------\n\n";
//console.log("tagline: ", collect);

var i;

for (i=1; i<launch.length; i += 1) {
     collect += launch[i].innerHTML + "\n\n";
}
alert(collect);

