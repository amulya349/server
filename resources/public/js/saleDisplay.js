// var row = '<tr><td>'+Mark+'</td><td>'+Otto+'</td><td>'+@mdo+'</td></tr>'
function populateTable(data){
	console.log(data);
	var c = '';
	for(var i=0; i<data.length; i++){
		c+='<tr><td>'+data[i].customerId+'</td><td>'+data[i].customerName+'</td><td>'+data[i].bv+'</td></tr>'
	}
	document.getElementById('myTable').innerHTML = c;
}

function showStats(data){
	let s = [];
	
	var p = ['bodyLotion','bodyWash', 'foimune', 'gel', 'premiumTea', 'redivit', 'shampoo', 'spclTea','wheatgrass']
	for(let i=0; i<9; i++){
		s[i]=0;
		for(let j=0; j<data.length; j++){
			s[i]+=data[j].description[p[i]];
		}
	}

	for(let j=0; j<s.length; j++){
		document.getElementById('c'+j).innerHTML = s[j];
	}
}

function getData(){
	$.get("/sale", 
		{},
		function(data, status){
			// console.log(data);
			populateTable(data);
			showStats(data);
		});
}

getData();