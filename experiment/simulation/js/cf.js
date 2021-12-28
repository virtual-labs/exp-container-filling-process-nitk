var aon=[],aoff=[],opOn=[],opOff=[];
var track,container,img;
var position=0,level=0;
var loop=0; var rolling=false;

function start()
{
	level=0;
	position=1;
	document.getElementById("stop").disabled=false;
	document.getElementById("start").disabled=true;
	document.getElementById("con").style.visibility="visible";
	document.getElementById("run").style.visibility="visible";
	document.getElementById("w1").style.visibility="visible";
	document.getElementById("w1").style.animation="waterFlow 0.2s linear infinite";
	aon=[2,3,4,5,7,9,10];
	aoff=[1,6,8,11,12,13];
	displayInstruction(aon,aoff);
	
	opOn=[1,2]; opOff=[3,4,5];
	displayOutput(opOn,opOff);
	
	setTimeout(function()
	{
		moveEmptyContainer();
	},500);
}

function moveEmptyContainer()
{
	container=document.getElementById("con");
	track=setInterval(function()
	{
		if(container.offsetLeft <= 210)
		{
			container.style.left=(container.offsetLeft + 2.5 )+"px";	
			statRolling(true);
		}
		if(container.offsetLeft == 210)
		{
			fill();
		}
	},100);
}

function fill()
{
	position=2;
	clearInterval(track);
	container.style.animation="";
	
	aon=[2,3,4,7,8,9,10,12];
	aoff=[1,5,6,11,13];
	displayInstruction(aon,aoff);
	
	opOn=[1,3,4]; opOff=[2,5];
	displayOutput(opOn,opOff);
	
	statRolling(false);
	
	document.getElementById("sol").style.visibility="visible";
	
	setTimeout(function()
	{
		startFilling();
	},500);
}


function startFilling()
{
	position=3;
	document.getElementById("run").style.visibility="visible";
	document.getElementById("fill").style.visibility="visible";
	document.getElementById("sol").style.visibility="visible";
	document.getElementById("prox").style.visibility="visible";
	
	aon=[2,3,4,7,8,9,10,12];
	aoff=[1,5,6,11,13];
	displayInstruction(aon,aoff);
	
	opOn=[1,3,4]; opOff=[2,5];
	displayOutput(opOn,opOff);
	
	document.getElementById("sol").style.visibility="visible";
	filling();
}

function filling()
{
	document.getElementById("sol").style.visibility="visible";
	setTimeout(function()
	{
		position=4;
		document.getElementById("w2").style.animation="waterFlow 0.5s linear infinite";
	},750);
	loop = setInterval(function()
	{
		level++;
		document.getElementById("con"+level).style.visibility="visible";
		img=document.getElementById("con"+level);
		if(level==5)
		{
			clearInterval(loop);
			document.getElementById("w2").style.animation="";
			setTimeout(function()
			{
				document.getElementById("con").style.visibility="hidden";
				for(i=1;i<=4;i++)
				{
					document.getElementById("con"+i).style.visibility="hidden";	
				}
				containerFull();
			},500);
		}
	},750);
}

function containerFull()
{
	position=5;
	document.getElementById("run").style.visibility="visible";
	document.getElementById("full").style.visibility="visible";
	document.getElementById("fill").style.visibility="hidden";
	document.getElementById("sol").style.visibility="hidden";
	document.getElementById("prox").style.visibility="visible";
	document.getElementById("level").style.visibility="visible";
	
	aon=[2,3,4,6,7,8,11,12,13];
	aoff=[1,5,9,10];
	displayInstruction(aon,aoff);
	
	opOn=[1,2,5]; opOff=[3,4];
	displayOutput(opOn,opOff);
	
	statRolling(false);
	
	setTimeout(function()
	{
		moveFilledContainer();
	},500);
}

function moveFilledContainer()
{
	level=0;
	position=6;
	document.getElementById("level").style.visibility="hidden";
	container=document.getElementById("con5");
	track=setInterval(function()
	{
		if(container.offsetLeft <=315)
		{
			setTimeout(function(){
				document.getElementById("prox").style.visibility="hidden";
			},2500);
			container.style.left=(container.offsetLeft + 2.5 )+"px";	
			
			statRolling(true);
		}
		if(container.offsetLeft == 315)
		{
			endProcees();
		}
	},100);
}

function endProcees()
{
	position=7;
	clearInterval(track);
	container.style.animation="";
	
	aon=[2,3,4,5,7,9,10];
	aoff=[1,6,8,11,12,13];
	displayInstruction(aon,aoff);
	
	opOn=[1,2]; opOff=[3,4,5];
	displayOutput(opOn,opOff);
	
	statRolling(false);
	
	document.getElementById("run").style.visibility="visible";
	document.getElementById("full").style.visibility="hidden";
	document.getElementById("fill").style.visibility="hidden";
	setTimeout(function()
	{
		document.getElementById("con5").style.visibility="hidden";
		resetPos();
	},750);
}

function resetPos()
{
	document.getElementById("con").style.left="60px";
	document.getElementById("con5").style.left="210px";
	for(i=1;i<=5;i++)
	{
		
		document.getElementById("op"+i).style.transformOrigin="";
		document.getElementById("op"+i).style.animation="";
	}
	start();
}

function stop()
{
	clearInterval(track);
	container.style.animation="";
	document.getElementById("start").disabled=false;
	document.getElementById("sol").style.visibility="hidden";
	document.getElementById("run").style.visibility="hidden";
	document.getElementById("full").style.visibility="hidden";
	document.getElementById("fill").style.visibility="hidden";
	for(i=1;i<=5;i++)
	{
		document.getElementById("op"+i).style.background="radial-gradient(#FF0000 15%, #000000)";
		document.getElementById("op"+i).style.transformOrigin="";
		document.getElementById("op"+i).style.animation="";
	}
	document.getElementById("w1").style.visibility="hidden";
	document.getElementById("w1").style.animation="";
	for(i=1;i<=13;i++)
	{
		document.getElementById("roller"+i).style.animation="";
	}
	switch(position)
	{
		case 1 : aon=[2,5,9,10];   /*start() , moveEmptyContainer()*/	
				 aoff=[1,3,4,6,7,8,11,12,13];
				 onStop(aon,aoff);
		break;
		case 2 : aon=[2,8,9,10,12]; /*fill() below cylinder*/	
				 aoff=[1,3,4,5,6,7,11,13];
				 onStop(aon,aoff);
		break;
		case 3 : aon=[2,8,9,10,12]; /*startFilling()*/	
				 aoff=[1,3,4,5,6,7,11,13];
				 onStop(aon,aoff);
		break;
		case 4 : aon=[2,8,9,10,12]; /*filling()*/	
				 aoff=[1,3,4,5,6,7,11,13];
				 onStop(aon,aoff);
				 clearInterval(loop);
				 document.getElementById("w2").style.animation="";
		break;
		case 5 : aon=[2,6,8,9,12,13]; /*containerFull()*/	
				 aoff=[1,3,4,5,7,10,11];
				 onStop(aon,aoff);
		break;
		case 6 : aon=[2,5,9,10]; /*moveFilledContainer()*/
				 aoff=[1,3,4,6,7,8,11,12,13];
				 onStop(aon,aoff);
		break;
		case 7 : aon=[2,5,9,10]; /*endProcees()*/
				 aoff=[1,3,4,6,7,8,11,12,13];
				 onStop(aon,aoff);
		break;
	}
}

function onStop(aon,aoff)
{
	for(i=0;i<aon.length;i++)
	{
		document.getElementById("bit"+aon[i]).style.backgroundColor="#009900";
	}
	for(i=0;i<aoff.length;i++)
	{
		document.getElementById("bit"+aoff[i]).style.backgroundColor="#FF0000";
	}
	document.getElementById("start").onclick=function()
	{
		document.getElementById("w1").style.animation="waterFlow 0.5s linear infinite";
		reStart();
	}
}

function reStart()
{
	document.getElementById("stop").disabled=false;
	document.getElementById("start").disabled=true;
	if(position==1 && container.offsetLeft<210)
	{
		start();
	}
	if(position==1 && container.offsetLeft == 210)
	{
		fill();
	}
	if(position==2)
	{
		startFilling();
	}
	if(position==3)
	{
		startFilling();
	}
	if(position==4 && level<5)
	{
		filling();
	}
	if(position==4 && level==5)
	{
		containerFull();
	}
	if(position==5)
	{
		containerFull();
	}
	if(position==6 && container.offsetLeft<315)
	{
		moveFilledContainer();
	}
	if(position==6 && container.offsetLeft == 315)
	{
		endProcees();
	}
	if(position==7 && document.getElementById("con5").style.visibility=="visible")
	{
		endProcees();
	}
	if(position==7 && document.getElementById("con5").style.visibility=="hidden")
	{
		resetPos();
	}
}

function displayOutput(opOn,opOff)
{
	for(i=0;i<opOn.length;i++)
	{
		document.getElementById("op"+opOn[i]).style.background="radial-gradient(#009900 15%, #000000)";
		document.getElementById("op"+opOn[i]).style.transformOrigin="50% 50%";
		document.getElementById("op"+opOn[i]).style.animation="popup 0.75s linear infinite";
	}
	for(i=0;i<opOff.length;i++)
	{
			document.getElementById("op"+opOff[i]).style.background="radial-gradient(#FF0000 15%, #000000)";
			document.getElementById("op"+opOff[i]).style.transformOrigin="";
			document.getElementById("op"+opOff[i]).style.animation="";
	}
}

function displayInstruction(aon,aoff)
{
	for(i=0;i<aon.length;i++)
	{
		document.getElementById("bit"+aon[i]).style.backgroundColor="#009900";
	}
	for(i=0;i<aoff.length;i++)
	{
		document.getElementById("bit"+aoff[i]).style.backgroundColor="#FF0000";
	}
}

function statRolling(rolling)
{
	if(rolling)
	{
		for(i=1;i<=13;i++)
		{
			document.getElementById("roller"+i).style.animation="rotateRoller 1.25s linear infinite";
		}
	}
	if(!rolling)
	{
		for(i=1;i<=13;i++)
		{
			document.getElementById("roller"+i).style.animation="";
		}
	}
}