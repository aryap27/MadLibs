let bgR = 0;
let bgB = 0;
let bgG = 0;
let cR = 0;
let cB = 0;
let cG = 0;
let font = 0;
let completeStory = [];
let story1 = [];
let story2 = [];
let story1String = "";
let story2String = "";
let space = ["name", "planet","name","color","name","pronoun","adjective",
 "time", "adjective2", "noun", "name","pronoun", "noun1", "noun2",
 "noun3", "noun4", "noun5", "name", ""];
let space2 = ["Once upon a time, there was a determined engineer named ",
" on ",". They were fascinated by space and eager to explore it. One day, they had the ",
" idea to build a "," spaceship to fulfill their dream to explore space! The engineer worked long, ",
" nights to finish it by ",", and once done, it "," with lots of ",
". The next day, the engineer got inside and "," into space! They saw many ",
" things like ",", ",", ",", and even ",". Astonished by the ",
"s of space, the engineer decided never to return."];
let zoo = ["name","verbED","animal","adjective2","place",
"noun","number","animal2","verbPAST","animal2","food",
"animal2","adjective3","name","time",""];
let zoo2 = ["The zookeeper "," had a "," day. First, they "," in ",
" poo and got all ",". Feeling a bit silly, they took a break in a ",
" but forgot to take the "," with them. Hurrying back, they accidentally let out ",
" playful ","s. Needing to feed them, the zookeeper ",
" to get bananas, but they had disappeared. So instead, he fed the monkeys ",
" and cleaned themselves, and some ",
"s up. Later, going about their day, they met a lost child, called them a ",
", and "," their cheek. Checking in on the animals, the zookeeper found they were a bit ",
". And so despite feeling ",",The zookeeper was ",
" and had to tell others about the issue so the animals could get the ",
" they needed. The next "," everyone was all ","!"];
let west = ["adjective","verb","job","job1","name","adjective","noun",
"adjective2","verbED","name2","verbER","color","noun2","number","food",
"job2","verbED2","name2","units","name","name2","color2","name2"];
let west2 = ["It is the most "," time to ever ",
": the wild west! Many people lived there, like ","s, ",
"s, and motel managers. "," managed a small motel named "," ",
" Inn. One day, the "," cowboy of all time "," in, "," the cow ",
". Their horse was as big and "," as a ",". The cowboy wanted a room for ",
" nights, as well as ",". At this time, the outlaw Slimy Sam came in, and he had a small group of ",
"s with him. Not a good sign! Slimy Sam counted to three, and ",
". Suddenly, the cowboy returned with a noisy baby and threw it at the outlaw, missing by five ",
" and hitting ",". Then, the "," cowboy hit the outlaw with his "," ",
" and scared them off. Afterwards, the cowboy helped himself to the motel’s ","."];
let candy = ["adjective","name","adjective1","pronoun","place","candy","candy2","name","pronoun",
"pronoun","animal","animal2","pronoun","candy3","name","pronoun","adjective2","verbING"];
let candy2 = ["Once upon a time in Candyland, there lived a "," child called ",
". One "," day, the child stumbled upon a magical candy "," filled with ",
" trees, "," rivers, and "," flowers. The kid was filled with excitement as ",
" embarked on the adventure! They met many candy creatures like marshmallow ",
" and licorice ",". Along the way, the youngster faced "," challenges, like crossing a ",
" bridge and solving lots of puzzles! The young child's journey was a sugary ",
", and "," made many "," friends with the candy creatures living within this ",
" world, "," that sometimes the "," adventures are the ones you ","."];
let conspiracy = ["verbING","adjective","name","noun","pronoun","name",
"number","time","planet","adjective2","name","adjective3","color",
"adjective4","animal","pronoun","relative","number2","noun2","name",
"pronoun","animal","planet"];
let conspiracy2 = ["Convinced it was true, "," in a dusty, dim, ",
" attic, the genius "," inhaled the scent of rusty ",". The genius lived in a ",
" cellar in their parents' house. Just like the main character in their favorite book, \"The Enchanted Cavern\". ",
" knew mastodons left Earth "," thousand "," ago and settled on the surface of ",
", yet no one else believed the same thing. Their proof? A ",
" journal with the words \"to sad moon.\" and their ",
" common sense and gut feeling. The genius had read about the astonishing ",
" planet’s "," landscape, as well as the "," people. The genius knew the world was ruled by their skeptical ",
", and that "," % of people were really ",
". At this moment, they posted the theory online and waited for the world to react, knowing that they were right no matter what other people thought."];
let minimum = ["adjective" ,"name","adjective2","adverb","time","pronoun","number","number2","adjective3","place","place2","color","pronoun",
"adjective4","verb","adjective5","verbED","adjective6"];
let minimum2 = ["The "," and "," employee was working at ","'s ",
" Burgers, and prepared "," tasty burgers. However, despite working multiple ",
" a year, the employee only received an annual salary of ",
" dollars, making them constricted within the boundaries of poverty in the year 20",
". Tired and ",", the worker decided to quit making burgers, but later had little success finding another job. Some days, they lived in the ",
", and other days, in a ",". Suddenly, bright ",
" drones zoomed into the area from the sky!  Everyone surrounding the worker was ",
" and randomly began to ",
" enthusiastically. At that moment, the worker realized it was all a trick, a fake reality! They never actually existed! The truth was that the worker's life, their story, was overseen by a mysterious being. Later realized to be a ",
" writer who controlled every aspect of the worker’s life. The worker angrily entered a ",
" and started ",". Then, eventually the writer decided things were too "," and stopped writing."];

function next(place)
{
	location.replace(place);
}

function setStory()
{
	story = document.getElementById("selectStory").value;
	localStorage.setItem("story", story);
	if(story == 0)
    {
		for (i = 0; i < space2.length; i++) {
			story1[i] = space[i];
			story2[i] = space2[i];
		}
    }
    if(story == 1)
    {
		for (i = 0; i < zoo2.length; i++) {
			story1[i] = zoo[i];
			story2[i] = zoo2[i];
		}
    }
    if(story == 2)
    {
		for (i = 0; i < west2.length; i++) {
			story1[i] = west[i];
			story2[i] = west2[i];
		}
    }
    if(story == 3)
    {
		for (i = 0; i < candy2.length; i++) {
			story1[i] = candy[i];
			story2[i] = candy2[i];
		}
    }
    if(story == 4)
    {
		for (i = 0; i < conspiracy2.length; i++) {
			story1[i] = conspiracy[i];
			story2[i] = conspiracy2[i];
		}
    }
    if(story == 5)
    {
		for (i = 0; i < minimum2.length; i++) {
			story1[i] = minimum[i];
			story2[i] = minimum2[i];
		}
    }
	// see https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage 
	// also see https://www.geeksforgeeks.org/how-to-store-an-array-in-localstorage/
	
	let story2String = JSON.stringify(story2);
	localStorage.setItem('story2', story2String);
	
	if (story <= 5)
	{
		localStorage.setItem("story", story); // https://www.w3schools.com/jsref/prop_win_localstorage.asp
		next("MadLibsFormat.html");
    	}
	else
		alert("Please select an option before continuing");
}

function setVars() 
{
    let n = "";
    let which = "";
	story = localStorage.getItem("story");
    story1 = [];
	if(story == 0) // make a new arrary with these inputs?// worked -- add form validation if extra time
        	which = "space";
	if(story == 1)
        	which = "zoo";
	if(story == 2)
       		which = "west";
	if(story == 3)
		which = "candy";
	if(story == 4)
        	which = "theory";
	if(story == 5)
        	which = "wage";
    let storedStory2String = localStorage.getItem('story2');
	let storedStory2 = JSON.parse(storedStory2String);
    for(m = 0; m < (storedStory2.length-1); ++m)
    {
        n = (m + '');
        story1[m] = document.getElementById((which + n)).value;
    }
    story1String = JSON.stringify(story1);
    localStorage.setItem('story1', story1String);
    next('MadLibsFinal.html');
}
	

function createStory()
{ 
	mkFormat()
	let storedStory1String = localStorage.getItem('story1'); //see above for citation
	let storedStory1 = JSON.parse(storedStory1String);
	let storedStory2String = localStorage.getItem('story2');
	let storedStory2 = JSON.parse(storedStory2String);
	let fullStr = "";

    for (let i = 0; i < storedStory2.length; i++)
    {
        if(i == (storedStory2.length - 1))
            fullStr += storedStory2[i];
        else
            fullStr += (storedStory2[i] + storedStory1[i]);
    }
    document.getElementById("finalStory").textContent = fullStr;
    let finalStoryElement = document.getElementById("finalStory");

   // finalStoryElement.style.textAlign = 'center'; //researched from w3schools se https://www.w3schools.com/jsref/prop_style_top.asp

   // finalStoryElement.style.top = '20%';
   // finalStoryElement.style.left = '0%';
    
	//finalStoryElement.style.position = 'absolute';
}



function mkFormat()
{
    font = localStorage.getItem("fontSet");
    cR = localStorage.getItem("red");
    cG = localStorage.getItem("green");
    cB = localStorage.getItem("blue");
    bgR = localStorage.getItem("bgRed");
    bgG = localStorage.getItem("bgGreen");
    bgB = localStorage.getItem("bgBlue");
    font2 = '' + font;
    cR2 = '' + cR;
    cG2 = '' + cG;
    cB2 = '' + cB;
    bgR2 = '' + bgR;
    bgG2 = '' + bgG;
    bgB2 = '' + bgB;
    document.getElementById("finalStory").style.fontSize = (font2 + "px");
    document.getElementById("finalStory").style.color = ("rgb(" +
    cR2 + "," + cG2 + "," + cB2 + ")");
    document.body.style.backgroundColor = 
     ("rgb(" + bgR2 + "," + bgG2 + "," + bgB2 + ")");//Found on stackOverflow:
    //https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
    //Researched from w3schools.
}


function chooseNext() 
{
    setFormat();
	story = localStorage.getItem("story");
	if(story == 0)
		next("MadLibsStory.html");
	if(story == 1)
		next("MadLibsStory2.html");
	if(story == 2)
		next("MadLibsStory3.html");
	if(story == 3)
		next("MadLibsStory4.html");
	if(story == 4)
		next("MadLibsStory5.html");
	if(story == 5)
		next("MadLibsStory6.html");
	
}
function setFormat()
{
    cR = document.getElementById("fR").value;
	localStorage.setItem("red", cR);
	cG = document.getElementById("fG").value;
	localStorage.setItem("green", cG);
	cB = document.getElementById("fB").value;
    localStorage.setItem("blue", cB);
	bgR = document.getElementById("bgR").value;
    localStorage.setItem("bgRed", bgR);
	bgG = document.getElementById("bgG").value;
    localStorage.setItem("bgGreen", bgG);
	bgB = document.getElementById("bgB").value;
    localStorage.setItem("bgBlue", bgB);
	font = document.getElementById("fontSize").value;
    localStorage.setItem("fontSet", font);
}

