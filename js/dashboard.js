var user = localStorage.getItem("loggedinuser");
const fp = document.querySelector("#fp");
const bp = document.querySelector("#bp");
const dp = document.querySelector("#dp");

const sol = document.querySelector("#sol");
const bom = document.querySelector("#bom");
const air = document.querySelector("#air");
const cav = document.querySelector("#cav");
const tan = document.querySelector("#tan");


var fpdash = 0;
var dpdash = 0;
var bpdash = 0;
var soldash, bombdash, airdash, specdash, tandash = 0;

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


db.collection("UserDB").doc(user)
    .onSnapshot(function(doc) {
        console.log(doc.data().fp);
        fpdash = doc.data().fp;
        dpdash = doc.data().dp;
        bpdash = doc.data().bp;
        fp.innerText = doc.data().fp;
        bp.innerText = doc.data().bp;
        dp.innerText = doc.data().dp;
    });

db.collection("UserDB").doc(user).collection("Inventory").onSnapshot(function(querySnapshot)
{
    querySnapshot.forEach(function(doc)
    {
        console.log(doc.data());
        if(doc.id=="Soldier")
        {
            soldash = doc.data().quantity;
            sol.innerText = doc.data().quantity;
        }
        else if(doc.id=="Bomber")
        {
            bombdash = doc.data().quantity;
            bom.innerText = doc.data().quantity;
        }

        else if(doc.id=="Airstrike")
        {
            airdash = doc.data().quantity;
            air.innerText = doc.data().quantity;
        }
        else if(doc.id=="SpecOpsMercs")
        {
            specdash = doc.data().quantity;
            cav.innerText = doc.data().quantity;
        }
        else if(doc.id == "Tanks")
        {
            tandash=doc.data().quantity;
            tan.innerText = doc.data().quantity;}
    });
});
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
function buy(){
  var q= parseInt(document.getElementById('myP').innerHTML);
  var w = parseInt(document.getElementById('myP1').innerHTML);
  var e=parseInt(document.getElementById('myP2').innerHTML);
  var r =parseInt(document.getElementById('myP3').innerHTML);
  var t = parseInt(document.getElementById('myP4').innerHTML);
  if(soldash>=q&&bombdash>=w&&airdash>=e&&specdash>=r&&tandash>=t){
    var totaldefence = (q*Soldier.Defence)+(w*Bomber.Defence)+(e*Airstrike.Defence)+(r*SpecOps.Defence)+(t*Tanks.Defence);
    var dpbp= dpdash+totaldefence;
    db.collection("UserDB").doc(user).update(
                    {
                        dp: dpbp
                    });
    soldash-=q;
    bombdash-=w;
    airdash-=e;
    specdash-=r;
    tandash-=t;
    db.collection("UserDB").doc(user).collection("Inventory").doc("Soldier").set({
                    quantity:soldash
                });

                db.collection("UserDB").doc(user).collection("Inventory").doc("Bomber").set({
                    quantity:bombdash
                });

                db.collection("UserDB").doc(user).collection("Inventory").doc("Airstrike").set({
                    quantity:airdash
                });

                db.collection("UserDB").doc(user).collection("Inventory").doc("SpecOpsMercs").set({
                    quantity:specdash
                });
                db.collection("UserDB").doc(user).collection("Inventory").doc("Tanks").set({
                    quantity:tandash
                });

    }

}
