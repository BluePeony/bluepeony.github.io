function activateGallery(){
	//let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo img");

	thumbnails.forEach(function(thumbnail) {
		//Preload large images.
		let newImageSrc = thumbnail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;

		thumbnail.addEventListener("click", function(){
			//Set clicked image as main image.
			let newImageAlt = thumbnail.alt;
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", newImageAlt);

			//Change which image is current.
			let currentClass = "current";
			document.querySelector(".current").classList.remove(currentClass);
			thumbnail.parentNode.classList.add(currentClass);

			//Update image infos
			let galleryInfo = document.querySelector("#gallery-info");
			let title = galleryInfo.querySelector(".title");
			let description = galleryInfo.querySelector(".description");

			title.innerHTML = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}