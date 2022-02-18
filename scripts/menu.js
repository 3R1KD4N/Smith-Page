const menuBtn = document.getElementById("menuBtn");
const acordionMenu = document.querySelector(".acordionMenu");
const acordionItems = document.querySelectorAll(".acordionItem");
const gridArea = document.querySelector(".gridArea");

menuBtn.addEventListener("click", ()=>{
	if(acordionMenu.className == "acordionMenu open"){
		setTimeout(()=>{
			acordionMenu.className = "acordionMenu close";
		}, 350);
		setTimeout(()=>{
			gridArea.style.zIndex = 5;
		}, 800);
		acordionItems.forEach((e)=>{
			e.className = "acordionItem noVisible";
		});
	} else{
		gridArea.style.zIndex = -5;
		acordionMenu.className = "acordionMenu open";
		setTimeout(()=>{
			acordionItems.forEach((e)=>{
				e.className = "acordionItem visible";
			});
		}, 350);
	}
});