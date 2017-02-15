
var calculate = function(){

	// var r = ['wg', 'foi','avGel','shampoo','pTea','sTea','bodyWash','bodyLotion','redivit'];
	var p = [400, 450, 60, 60, 85, 80, 80, 90, 200];
	var q = [];
	q[0] = document.getElementById('wg').value;
	q[1] = document.getElementById('foi').value;
	q[2] = document.getElementById('avGel').value;
	q[3] = document.getElementById('shampoo').value;
	q[4] = document.getElementById('pTea').value;
	q[5] = document.getElementById('sTea').value;
	q[6] = document.getElementById('bodyWash').value;
	q[7] = document.getElementById('bodyLotion').value;
	q[8] = document.getElementById('redivit').value;

	var x = 0;
	for(var i=0; i<9; i++){
		x+= p[i]*q[i];
	}
	document.getElementById('totalAmount').value = x;
	document.getElementById('bv').value = x/2;
}

var validateForm = function(){
	
	document.getElementById('mainForm').submit();
}

var submitForm = function(){
	calculate();
	validateForm();
	// document.getElementById('mainForm').submit();
}