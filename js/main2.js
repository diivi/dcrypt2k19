var user = localStorage.getItem("loggedinuser");
var arr=[]
var arrid = []
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
    });

db.collection("UserDB").doc(user).collection("Inventory").onSnapshot(function(querySnapshot)
{
    querySnapshot.forEach(function(doc)
    {
        console.log(doc.data());
        if(doc.id=="Soldier")
        {
            soldash = doc.data().quantity;
        }
        else if(doc.id=="Bomber")
        {
            bombdash = doc.data().quantity;
        }

        else if(doc.id=="Airstrike")
        {
            airdash = doc.data().quantity;

        }
        else if(doc.id=="SpecOpsMercs")
        {
            specdash = doc.data().quantity;
        }
        else if(doc.id == "Tanks")
        {
            tandash=doc.data().quantity;
};
});
});

db.collection("UserDB").orderBy("fp","desc").onSnapshot(function(querySnapshot)
{
    var bro= document.getElementById('helo');
    bro.innerHTML = "";
    var aasasda = 0;
        var buttonid=-1;
    querySnapshot.forEach(function(doc)
    {
        var ddd = "Defence Points: ";
        aasasda+=1;
                buttonid+=1;
        var ds = ". ";
                var idstring = "btnid";
        //bro.innerHTML +=" <div class="column"><h2>"+aasasda+ds+doc.data().NameOfSchool+" | FP: <span>"+doc.data().fp+"</span></h2> <p>"+ddd+doc.data().dp+"</p></div>";
                console.log(doc.data());
                console.log(aasasda);
                  bro.innerHTML +="<div class=\"column\"><h2 class=\"white-text title\">"+doc.data().username+"</h2><div class=\"col-lg-2\"> <p class=\"t\">Rank</p> <div class=\"input-group\"> <p class=\"bruh\" id=\"price\">"+aasasda+"</p></div> </div> <div class=\"col-lg-2\"> <p class=\"t\">Flag Points</p> <div class=\"input-group\"> <p class=\"bruh\" id=\"attack\">"+doc.data().fp+"</p> </div> </div><div class=\"col-lg-2\"><p class=\"t\">Defence</p> <div class=\"input-group\"> <p class=\"bruh\" id=\"defense\">"+doc.data().dp+"</p> </div> </div>  <button class=\"butt\" style=\"width:150px;margin-top:0px;margin-left:100px\"  id="+buttonid+" >Attack</button></div>";
                arr.push(doc.data());
                arrid.push(doc.id);
                });
                for (let i = 0; i < arr.length; ++i) {
                    var elem = document.getElementById(i);
										var poo=document.getElementById('po');
                    elem.addEventListener('click', function() {
																																				poo.innerHTML="";
                          poo.innerHTML += '<div id="pop'+(i+1)+' class="overlay" ><div class="container divi"><div class="column"> <div class="col-lg-2"><p class="t">Attacking</p><div class="input-group"><p class="bruh" id="team" style="font-size:32px;cursor:pointer">'+arr[i].username+'</p></div></div><div class="col-lg-2 space1"><p class="t">Soldiers</p><div class="input-group bruh2"><span class="minus" onclick="minus(1,'+(i+1)+')">-</span><p class="bruh1" id="myP1'+(i+1)+'">0</p><span class="plus" style="display: inline-block;" onclick="plus(1,'+(i+1)+')">+</span></div></div><div class="col-lg-2 space1"><p class="t">AirStrike</p><div class="input-group bruh2"><span class="minus" onclick="minus(3,'+(i+1)+')">-</span><p class="bruh1" id="myP3'+(i+1)+'">0</p><span class="plus" style="display: inline-block;" onclick="plus(3,'+(i+1)+')">+</span></div></div><div class="col-lg-2 space1"><p class="t">SpecOps</p><div class="input-group bruh2"><span class="minus" onclick="minus(4,'+(i+1)+')">-</span><p class="bruh1" id="myP4'+(i+1)+'">0</p><span class="plus" style="display: inline-block;" onclick="plus(4,'+(i+1)+')">+</span></div></div><div class="col-lg-2 space1"><p class="t">Tanks</p><div class="input-group bruh2"><span class="minus" onclick="minus(5,'+(i+1)+')">-</span><p class="bruh1" id="myP5'+(i+1)+'">0</p><span class="plus" style="display: inline-block;" onclick="plus(5,'+(i+1)+')">+</span></div></div><div class="input-group bruh2"><p class="t">Total Attack</p><p class="bruh1" id="att">0</p></div</div></div><center><button class="butt" id="attack'+i+'">Attack</button></center></div></div></div>';
													document.getElementById('attack'+i).addEventListener('click',function(){
													
													var airamm=airatt/Airstrike.Attack;
													var soldieramm=solatt/Soldier.Attack;
													var mercamm=specatt/SpecOps.Attack;
													var tankamm=tankatt/Tanks.Attack;
                                                    
                                                    if(soldash>=soldieramm && airdash>=airamm && specdash>=mercamm && tankamm>= tankamm)
                                                    {
                                                        soldash-=soldieramm;
                                                        airdash-=airamm;
                                                        specdash-=mercamm;
                                                        tandash-=tankamm;
                                                        db.collection("UserDB").doc(user).collection("Inventory").doc("Soldier").set({
                                                                        quantity:soldash
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
                                                        var arasat = solatt+tankatt+specatt+airatt;
                                                        if(arasat>=arr[i].dp + 50)
                                                        {
                                                            var dasddd = fpdash + arr[i].fp; 
                                                            db.collection("UserDB").doc(user).update(
                                                                {
                                                                    fp: dasddd
                                                                }).then(function() {
                                                                    db.collection("UserDB").doc(arrid[i]).update(
                                                                        {
                                                                            dp: 0,
                                                                            fp: 0
                                                                        }).then(function() {
                                                                            poo.innerHTML="";
                                                                            location.reload();
                                                                        });
                                                                });
                                                        
                                                        }
                                                        else
                                                        {
                                                            var sdsd = arr[i].dp - arasat;
                                                            db.collection("UserDB").doc(arrid[i]).update(
                                                                {
                                                                    dp: sdsd
                                                                }).then(function() {
                                                                    poo.innerHTML="";
                                                                    location.reload();
                                                                });
                                                                
                                                        }
                                                    }
                                                    
                                                    
													});
													airatt=0;
													solatt=0;
													specatt=0;
													tankatt=0;

                    });
                }
});
