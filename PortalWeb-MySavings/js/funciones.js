$(function (){
	$('#cantidad').on('keyup', function(){
		formatNumber(this);
	});
	$('#cantidad').on('keydown', function(){
		formatNumber(this);
	});
	
	$('#convertir').on('click', function(){
		var de = $('#de').val();
		var a = $('#a').val();
		var cantidad = $('#cantidad').val();
		if(de == '' || a == '' || cantidad == ''){
			alert('Por favor rellene los campos');
		}else{
			if(de == 'pesos'){
				if(a == 'pesos'){
					alert('No es posible convertir de pesos a pesos');
				}else if(a == 'dolares'){
					var can = parseInt(cantidad);
					var resul = can * 0.0002583;
					$('#resultConver').val(resul+' Dólares Estadounidenses');
				}else if(a == 'yenes'){
					var can = parseInt(cantidad);
					var resul = can * 0.02704;
					$('#resultConver').val(resul+' Yenes');
				}else if(a == 'euro'){
					var can = parseInt(cantidad);
					var resul = can * 0.0002219;
					$('#resultConver').val(resul+' Euros');
				}
			}else if(de == 'dolares'){
				if(a == 'pesos'){
					var can = parseInt(cantidad);
					var resul = can * 38870;
					$('#resultConver').val(resul+' Pesos Colombianos');
				}else if(a == 'dolares'){
					alert('No es posible convertir de Dolares a Dolares');
				}else if(a == 'yenes'){
					var can = parseInt(cantidad);
					var resul = can * 104.67;
					$('#resultConver').val(resul+' Yenes');
				}else if(a == 'euro'){
					var can = parseInt(cantidad);
					var resul = can * 0.85;
					$('#resultConver').val(resul+' Euros');
				}
			}else if(de == 'yenes'){
				if(a == 'pesos'){
					var can = parseInt(cantidad);
					var resul = can * 36.9860;
					$('#resultConver').val(resul+' Pesos Colombianos');
				}else if(a == 'dolares'){
					var can = parseInt(cantidad);
					var resul = can * 0.009555;
					$('#resultConver').val(resul+' Dólares Estadounidenses');
				}else if(a == 'yenes'){
					alert('No es posible convertir de Yenes a Yenes');
				}else if(a == 'euro'){
					var can = parseInt(cantidad);
					var resul = can * 0.008206;
					$('#resultConver').val(resul+' Euros');
				}
			}else if(de == 'euro'){
				if(a == 'pesos'){
					var can = parseInt(cantidad);
					var resul = can * 4507.00;
					$('#resultConver').val(resul+' Pesos Colombianos');
				}else if(a == 'dolares'){
					var can = parseInt(cantidad);
					var resul = can * 1.1642;
					$('#resultConver').val(resul+' Dólares Estadounidenses');
				}else if(a == 'yenes'){
					var can = parseInt(cantidad);
					var resul = can * 121.83;
					$('#resultConver').val(resul+' Yenes');
				}else if(a == 'euro'){
					alert('No es posible convertir de Euros a Euros');
				}
			}
		}
	});

});



function formatNumber(input){
	var filtro = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNñÑoOpPqQrRsStTuUvVwWxXyYzZ°|!#$%&/)(=?'¡¿¨´*+~][}[^`;,:._-";
	var valor = $(input).val();
				
	for (var i = 0; i < valor.length; i++) {
		if(filtro.indexOf(valor.charAt(i)) != -1){
			$(input).val($(input).val().replace(/[^\d\.]*/g,''));
		}
	}
}