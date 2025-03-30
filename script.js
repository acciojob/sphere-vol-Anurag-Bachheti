document.addEventListener("DOMContentLoaded", function(){

	let radius = document.getElementById("radius");
	let volume = document.getElementById("volume");
	let submit = document.getElementById("submit");

	function volume_sphere(){
		let r = parseFloat(radius.value);
		if(isNaN(r) || r < 0){
			volume.value = NaN;
		} else{
			let vol = (4/3) * Math.PI * Math.pow(r,3);
			volume.value = vol.toFixed(4);
		}
	}
	submit.addEventListener("click", volume_sphere)
});