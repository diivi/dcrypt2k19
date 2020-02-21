
var user = localStorage.getItem("loggedinuser");


var Soldier,Bomber,Airstrike,SpecOps,Tanks;

db.collection("ShopDB").get().then(function(querySnapshot)
{
	querySnapshot.forEach(function(doc)
	{
		if(doc.data().Name == "Soldier")
		{
			Soldier = doc.data();
		}
		else if(doc.data().Name == "Bombers")
		{
			Bomber = doc.data();
		}
		else if(doc.data().Name == "Airstrike")
		{
			Airstrike = doc.data();
		}
		else if(doc.data().Name == "Tanks")
		{
			Tanks = doc.data();
		}
		else if(doc.data().Name == "Spec Ops Mercs")
		{
			SpecOps = doc.data();
		}
	});
});

var totalprice = 0;

function plus() {
  var x = document.getElementById("myP").innerHTML;
  var y =Number(x)
  if (y<10){
  document.getElementById("myP").innerHTML = y+1;
	   document.getElementById("price").innerHTML=(y+1)*Soldier.Price;
	   totalprice +=Soldier.Price;
	 document.getElementById("attack").innerHTML=Soldier.Attack*(y+1);
	 document.getElementById("defense").innerHTML=Soldier.Defence*(y+1);
}else{
	alert("no")
}


}
function minus() {
  var x = document.getElementById("myP").innerHTML;
  var y =Number(x)
  if (y>0){
  document.getElementById("myP").innerHTML = y-1;
	   document.getElementById("price").innerHTML=(y-1)*Soldier.Price;
	   totalprice -= Soldier.Price;
	 document.getElementById("attack").innerHTML=Soldier.Attack*(y-1);
	 document.getElementById("defense").innerHTML=(y-1)*Soldier.Defence;
}else{
	alert("Please Buy Something")
}
}
var ss,bb,aa,spm,t;
db.collection("UserDB").doc(user).collection("Inventory").get().then(function(querySnapshot)
{
	querySnapshot.forEach(function(doc)
	{	
		console.log(doc.id);
		if(doc.id=="Soldier")
		{
			console.log(doc.data().quantity);
			console.log(doc.data());
			ss = doc.data().quantity;
		}
		else if(doc.id=="Bomber")
		{
			bb = doc.data().quantity;
		}
			
		else if(doc.id=="Airstrike")
		{
			aa = doc.data().quantity;
		}
		else if(doc.id=="SpecOpsMercs")
		{
			spm = doc.data().quantity;
		}
		else if(doc.id == "Tanks")
		{t = doc.data().quantity;}
		
		
	});
});


function buy(){
	var x = parseInt(document.getElementById("myP").innerHTML);
	var y = parseInt(document.getElementById("myP1").innerHTML);
	var z = parseInt(document.getElementById("myP2").innerHTML);
	var a = parseInt(document.getElementById("myP3").innerHTML);
	var b = parseInt(document.getElementById("myP4").innerHTML);

	if (x == 0 && y == 0 && z == 0 && a == 0 && b == 0) {
		alert("plz buy something")
	}
	else{
		//alert("You bought " + x +" Soldier(s) " + y + " Bomber(s)" + z+ " Aircraft(s) " + a + " Cavelier(s) " + b + " Tank(s).")
		db.collection("UserDB").doc(user).get().then(function(doc)
		{	var currentbp = doc.data().bp;
			if(currentbp>=totalprice)
			{
				currentbp -= totalprice;
				db.collection("UserDB").doc(user).update(
					{
						bp : currentbp
					});
				ss += x;
				bb += y;
				aa += z;
				spm += a;
				t += b;
				db.collection("UserDB").doc(user).collection("Inventory").doc("Soldier").set({
					quantity:ss
				});
				
				db.collection("UserDB").doc(user).collection("Inventory").doc("Bomber").set({
					quantity:bb
				});
				
				db.collection("UserDB").doc(user).collection("Inventory").doc("Airstrike").set({
					quantity:aa
				});
				
				db.collection("UserDB").doc(user).collection("Inventory").doc("SpecOpsMercs").set({
					quantity:spm
				});
				db.collection("UserDB").doc(user).collection("Inventory").doc("Tanks").set({
					quantity:t
				});
			}
		});
	}
}
	


function plus1() {
  var x = document.getElementById("myP1").innerHTML;
  var y =Number(x)
  if (y<10){
  document.getElementById("myP1").innerHTML = y+1;
	   document.getElementById("price1").innerHTML=(y+1)*Bomber.Price;
	   totalprice+= Bomber.Price;
	 document.getElementById("attack1").innerHTML=Bomber.Attack*(y+1);
	 document.getElementById("defense1").innerHTML=(y+1)*Bomber.Defence;
}else{
	alert("no")
}


}
function minus1() {
  var x = document.getElementById("myP1").innerHTML;
  var y =Number(x)
  if (y>0){
  document.getElementById("myP1").innerHTML = y-1;
	   document.getElementById("price1").innerHTML=(y-1)*Bomber.Price;
	   totalprice -= Bomber.Price;
	 document.getElementById("attack1").innerHTML=Bomber.Attack*(y-1);
	 document.getElementById("defense1").innerHTML=(y-1)*Bomber.Defence;
}else{
	alert("Please Buy Something")
}
}

	
function plus2() {
  var x = document.getElementById("myP2").innerHTML;
  var y =Number(x)
  if (y<10){
  document.getElementById("myP2").innerHTML = y+1;
	   document.getElementById("price2").innerHTML=(y+1)*Airstrike.Price;
	   totalprice +=Airstrike.Price;
	 document.getElementById("attack2").innerHTML=Airstrike.Attack*(y+1);
	 document.getElementById("defense2").innerHTML=(y+1)*Airstrike.Defence;
}else{
	alert("no")
}


}
function minus2() {
  var x = document.getElementById("myP2").innerHTML;
  var y =Number(x)
  if (y>0){
  document.getElementById("myP2").innerHTML = y-1;
	   document.getElementById("price2").innerHTML=(y-1)*Airstrike.Price;
	   totalprice-=Airstrike.Price;
	 document.getElementById("attack2").innerHTML=Airstrike.Attack*(y-1);
	 document.getElementById("defense2").innerHTML=(y-1)*Airstrike.Defence;
}else{
	alert("Please Buy Something")
}
}


function plus3() {
  var x = document.getElementById("myP3").innerHTML;
  var y =Number(x)
  if (y<10){
  document.getElementById("myP3").innerHTML = y+1;
	   document.getElementById("price3").innerHTML=(y+1)*SpecOps.Price;
	   totalprice+=SpecOps.Price;
	 document.getElementById("attack3").innerHTML=SpecOps.Attack*(y+1);
	 document.getElementById("defense3").innerHTML=(y+1)*SpecOps.Defence;
}else{
	alert("no")
}


}
function minus3() {
  var x = document.getElementById("myP3").innerHTML;
  var y =Number(x)
  if (y>0){
  document.getElementById("myP3").innerHTML = y-1;
	   document.getElementById("price3").innerHTML=(y-1)*SpecOps.Price;
	   totalprice-=SpecOps.Price;
	 document.getElementById("attack3").innerHTML=SpecOps.Attack*(y-1);
	 document.getElementById("defense3").innerHTML=(y-1)*SpecOps.Defence;
}else{
	alert("Please Buy Something")
}
}

	

function plus4() {
  var x = document.getElementById("myP4").innerHTML;
  var y =Number(x)
  if (y<10){
  document.getElementById("myP4").innerHTML = y+1;
	   document.getElementById("price4").innerHTML=(y+1)*Tanks.Price;
	   totalprice+=Tanks.Price;
	 document.getElementById("attack4").innerHTML=Tanks.Attack*(y+1);
	 document.getElementById("defense4").innerHTML=(y+1)*Tanks.Defence;
}else{
	alert("no")
}


}
function minus4() {
  var x = document.getElementById("myP4").innerHTML;
  var y =Number(x)
  if (y>0){
  document.getElementById("myP4").innerHTML = y-1;
	   document.getElementById("price4").innerHTML=(y-1)*Tanks.Price;
	   totalprice-=Tanks.Price;
	 document.getElementById("attack4").innerHTML=Tanks.Attack*(y-1);
	 document.getElementById("defense4").innerHTML=(y-1)*Tanks.Defence;
}else{
	alert("Please Buy Something")
}
}


