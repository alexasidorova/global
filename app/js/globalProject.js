let highLightedElems = []
	let list;
	let indexRandom;

	function showLight()
	{
		console.log("showLight() start!")
		let list = document.querySelectorAll('*');		
		let indexRandom = Math.floor(Math.random() * list.length);
		console.log('showLight():indexRandom', indexRandom);
		var r = Math.floor(Math.random() * 256);
		var g= Math.floor(Math.random() * 256);
		var b= Math.floor(Math.random() * 256);
		list[indexRandom].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';	
		highLightedElems.push(list[indexRandom]);
		console.log('showLight():highLightedElems', highLightedElems);
	}
	
	setInterval(function() {
		    showLight();
		}, 2000);
		console.log('showLight()setInterval:highLightedElems[0]', highLightedElems[0] )

function killHighLightedElems(){
	console.log("killHighLightedElems() start!")
	let highLightedElemsIndexRandom = Math.floor(Math.random() * highLightedElems.length);
	console.log('killHighLightedElems():highLightedElems[0]', highLightedElems[highLightedElemsIndexRandom] )
highLightedElems[highLightedElemsIndexRandom].style.backgroundColor = "transparent";
highLightedElems.slice(highLightedElemsIndexRandom );
//delete highLightedElems[highLightedElems.length-1];
}
// killHighLightedElems();

setInterval(function() {
  killHighLightedElems();
}, 2000);
	
	//setInterval(showLight2(), 2000);