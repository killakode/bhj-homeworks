let book = document.getElementsByClassName("book")[0];
let settings = book.getElementsByClassName("book__controls")[0].children;

[...settings].forEach(setting => {
	let settingName = setting.classList[1];
	let options = setting.querySelectorAll("a.font-size");
	let optionsName = options[0].classList[0];

	let getActiveIndex = () => {
		let index = 0;
		while (!options[index].classList.contains(optionsName + "_active")) index++;
		return index;
	};

	let click = e => {
		e.preventDefault();
		let activeIndex = getActiveIndex();
		options[activeIndex].classList.remove(optionsName + "_active");
		e.target.classList.add(optionsName + "_active");
		activeIndex = getActiveIndex();

		switch (settingName) {
			case "book__control_font-size":
				book.classList.remove("book_fs-big");
				book.classList.remove("book_fs-small");
				switch (activeIndex) {
					case 0:
						book.classList.add("book_fs-small");
						break;
					case 2:
						book.classList.add("book_fs-big");
						break;
				}
				break;

			
		}
	};

  [...options].forEach(option => {
		option.addEventListener("click", click, false);
	});
});