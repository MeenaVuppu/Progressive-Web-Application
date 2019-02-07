function getfile(file,callback) {
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if (htp.readyState===4 && htp.status=="200"){ 
			callback(htp.responseText);
}

	}
	htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
    edu(data.education);
    lan(data.languages);
})
var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var ph3=document.createElement("h3");
	ph3.textContent=p.roll;
	left.appendChild(ph3);
	var ph4=document.createElement("h4");
	ph4.textContent=p.institute;
	left.appendChild(ph4);
	var ph4=document.createElement("h4");
	ph4.textContent=p.place;
	left.appendChild(ph4);
	

}
var right=document.querySelector(".right");
function career(car){
	var hc=document.createElement("h2");
	hc.innerHTML="Resume";
	right.appendChild(hc);

	var cc=document.createElement("h3");
	cc.innerHTML="career objective:";
	right.appendChild(cc);
	var chr=document.createElement("hr");
	right.appendChild(chr);
	var cp=document.createElement("p");
	cp.innerHTML=car.info;
	right.appendChild(cp);
	}
function edu(e){
	var ed=document.createElement("h2");
	ed.innerHTML="Educatiional details:";
		right.appendChild(ed);
	var ehr=document.createElement("hr");
	right.appendChild(ehr);
	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>yop</td></tr>";
	var tr2="";
	for (var i = 0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].s+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>";

}
etable.innerHTML=tr1+tr2;
right.appendChild(etable);
}
function lan(l){
	var ll=document.createElement("h2");
	ll.innerHTML="languages:";
	right.appendChild(ll);
	var lhr=document.createElement("hr");
	right.appendChild(lhr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<l.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=l[i].lang;
		ul.appendChild(li);
	}
	

}
