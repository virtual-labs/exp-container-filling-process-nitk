var aon=[],aoff=[];
var track,container,img;
var position=0,level=0;
var notReached1=false;
var notReached2=false;
var loop=0;
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
	for(i=1;i<=5;i++)
	{
		if(i==1 || i==2)
		{
			document.getElementById("op"+i).style.background="radial-gradient(#009900 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="50% 50%";
			document.getElementById("op"+i).style.animation="popup 0.75s linear infinite";
		}
		else
		{
			document.getElementById("op"+i).style.background="radial-gradient(#FF0000 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="";
			document.getElementById("op"+i).style.animation="";
		}
	}
	for(i=1;i<=13;i++)
	{
		if(i==2||i==3||i==4||i==5||i==7||i==9||i==10)
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		else
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
	}
	setTimeout(function()
	{
		moveEmptyContainer();
	},500);
}

function moveEmptyContainer()
{
	notReached1=false;
	container=document.getElementById("con");
	track=setInterval(function()
	{
		if(container.offsetLeft <= 210)
		{
			container.style.left=(container.offsetLeft + 2.5 )+"px";	
			for(i=1;i<=13;i++)
			{
				document.getElementById("roller"+i).style.animation="rotateRoller 1.25s linear infinite";
			}
		}
		if(container.offsetLeft == 210)
		{
			notReached1=true;
			fill();
		}
	},100);
}

function fill()
{
	position=2;
	clearInterval(track);
	container.style.animation="";
	for(i=1;i<=13;i++)
	{
		document.getElementById("roller"+i).style.animation="";
		if(i==2||i==3||i==4||i==7||i==8||i==9||i==10||i==12)
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		else
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
	}
	document.getElementById("sol").style.visibility="visible";
	for(i=1;i<=5;i++)
	{
		if(i==1 || i==3|| i==4)
		{
			document.getElementById("op"+i).style.background="radial-gradient(#009900 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="50% 50%";
			document.getElementById("op"+i).style.animation="popup 0.75s linear infinite";
		}
		else
		{
			document.getElementById("op"+i).style.background="radial-gradient(#FF0000 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="";
			document.getElementById("op"+i).style.animation="";
		}
	}
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
	for(i=1;i<=13;i++)
	{
		if(i==2||i==3||i==4||i==7||i==8||i==9||i==10||i==12)
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		else
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
	}
	document.getElementById("sol").style.visibility="visible";
	for(i=1;i<=5;i++)
	{
		if(i==1 || i==3|| i==4)
		{
			document.getElementById("op"+i).style.background="radial-gradient(#009900 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="50% 50%";
			document.getElementById("op"+i).style.animation="popup 0.75s linear infinite";
		}
		else
		{
			document.getElementById("op"+i).style.background="radial-gradient(#FF0000 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="";
			document.getElementById("op"+i).style.animation="";
		}
	}
	filling();
}

function filling()
{
	setTimeout(function()
	{
		position=4;
		document.getElementById("con").style.visibility="hidden";
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
				for(i=1;i<=4;i++)
				{
					document.getElementById("con"+i).style.visibility="hidden";	
				}
				containerFull();
			},500);
		}
	},750);
	// document.getElementById("con1").style.visibility="visible";
	// img=document.getElementById("con1");
	// setTimeout(function()
	// {
		// document.getElementById("con2").style.visibility="visible";
		// img=document.getElementById("con2");
		// setTimeout(function()
		// {
			// document.getElementById("con3").style.visibility="visible";
			// img=document.getElementById("con3");
			// setTimeout(function()
			// {
				// document.getElementById("con4").style.visibility="visible";
				// img=document.getElementById("con4");
				// setTimeout(function()
				// {
					// document.getElementById("con5").style.visibility="visible";
					
					// img=document.getElementById("con5");
					// document.getElementById("w2").style.animation="";
					// setTimeout(function()
					// {
						// for(i=1;i<=4;i++)
						// {
							// document.getElementById("con"+i).style.visibility="hidden";	
						// }
						// containerFull();
					// },500);
				// },750);
			// },750);
		// },750);
	// },750);
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
	for(i=1;i<=13;i++)
	{
		document.getElementById("roller"+i).style.animation="";
		if(i==2||i==3||i==4||i==6||i==7||i==8||i==11||i==12||i==13)
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		else
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
	}
	for(i=1;i<=5;i++)
	{
		if(i==1 || i==2 || i==5)
		{
			document.getElementById("op"+i).style.background="radial-gradient(#009900 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="50% 50%";
			document.getElementById("op"+i).style.animation="popup 0.75s linear infinite";
		}
		else
		{
			document.getElementById("op"+i).style.background="radial-gradient(#FF0000 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="";
			document.getElementById("op"+i).style.animation="";
		}
	}
	setTimeout(function()
	{
		moveFilledContainer();
	},500);
}

function moveFilledContainer()
{
	level=0;
	position=6;
	notReached2=false;
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
			for(i=1;i<=13;i++)
			{
				document.getElementById("roller"+i).style.animation="rotateRoller 1.25s linear infinite";
			}
		}
		if(container.offsetLeft == 315)
		{
			notReached2=true;
			endProcees();
		}
	},100);
}

function endProcees()
{
	position=7;
	clearInterval(track);
	container.style.animation="";
	for(i=1;i<=13;i++)
	{
		document.getElementById("roller"+i).style.animation="";
		
		if(i==2||i==3||i==4||i==5||i==7||i==9||i==10)
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		else
			document.getElementById("bit"+i).style.backgroundColor="#FF0000";
	}
	for(i=1;i<=5;i++)
	{
		if(i==1 || i==2)
		{
			document.getElementById("op"+i).style.background="radial-gradient(#009900 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="50% 50%";
			document.getElementById("op"+i).style.animation="popup 0.75s linear infinite";
		}
		else
		{
			document.getElementById("op"+i).style.background="radial-gradient(#FF0000 15%, #000000)";
			document.getElementById("op"+i).style.transformOrigin="";
			document.getElementById("op"+i).style.animation="";
		}
	}
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
	// console.log("stop",position);
	document.getElementById("start").disabled=false;
	clearInterval(track);
	container.style.animation="";
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
	// console.log(aon,aoff);
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
		// switch(position)
		// {
			// case 7 : start();
			// break;
			// case 1 : fill();
			// break;
			// case 2 : startFilling();
			// break;
			// case 3 : filling();
			// break;
			// case 4 : containerFull();
			// break;
			// case 5 : moveFilledContainer();
			// break;
			// case 6 : endProcees();
			// break;
		// }
		switch(position)
		{
			case 1 : reStart(position);
			break;
			case 2 : reStart();
			break;
			case 3 : reStart();
			break;
			case 4 : reStart();
			break;
			case 5 : reStart();
			break;
			case 6 : reStart();
			break;
			case 7 : reStart();
			break;
		}
	}
}

function reStart()
{
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
	
	//console.log(container.offsetLeft);
}