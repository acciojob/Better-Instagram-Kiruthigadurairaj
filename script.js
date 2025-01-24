let dragindex = 0;
let dropindex = 0;
let clone = "";

const images = document.querySelectorAll(".image");

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
} 
}

function allowDrop(e) {
  e.preventDefault();
@@ -43,15 +43,4 @@
  image.ondrop = drop;
};

images.forEach(dragdrop);
	div.addEventListener('drop',(e)=>{
		const drag = document.getElementById(e.dataTransfer.getData('id'))
	    let tid = drag.id
		drag.id = div.id
		div.id = tid
		let temp = div.innerText
		div.innerText  = drag.innerText
		drag.innerText = temp
		console.log(div.innerText, drag.innerText, temp)
	})
})
images.forEach(dragdrop);