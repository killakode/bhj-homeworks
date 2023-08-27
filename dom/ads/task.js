let element = document.querySelectorAll("span.rotator__case");
let numberOfElement = document.querySelectorAll("span.rotator__case").length;
let activeElement = "rotator__case_active" ;


const repeat = (numberOfIterations, timeBetweenItereation, stuffToRepeat) => {
  let iterationCounter = 0;
  const repeater = () => {
    setTimeout( () => {
       	stuffToRepeat(element[iterationCounter],activeElement);
		iterationCounter ++;

		if (numberOfIterations === iterationCounter) {
			iterationCounter = 0;
		};

		if (iterationCounter >= numberOfIterations){
			return;
		};
       repeater(); 
    }, 1000 * timeBetweenItereation);
  };
  repeater();
};

let addClassToElement = (elmnt, className) => {
	let elementRemove = document.getElementsByClassName(className);

	[...elementRemove].forEach((curentElmnt) => {
		curentElmnt.classList.remove(className);
	});

	elmnt.classList.add(className);
};

repeat(numberOfElement, 1, addClassToElement);