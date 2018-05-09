function reverse(){
	var arr = [].slice.call(document.getElementsByClassName("gallery")[0].children);
	document.getElementsByClassName("gallery")[0].innerHTML = "";
	for(var i=arr.length-1;i!= -1;i--){
		document.getElementsByClassName("gallery")[0].appendChild(arr[i]);
		document.getElementsByClassName("gallery")[0].innerHTML += "\n";
	}

	document.getElementById("reverse").classList.toggle("reverse");
}