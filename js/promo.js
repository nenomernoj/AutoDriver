
$('#promoForm').on('submit', function(e) {
	 e.preventDefault();
	  $.post(baseUrl + 'auth/promo.php', {code:$("#code").val(),userId:localStorage.getItem('userId')}).done(function(data) {
	  	var result=JSON.parse(data);
	  	if(result.answer==true){
	  		localStorage.setItem('userStatus',1);
	  		alert("Вы активировали полную версию");
	  		$("#app").load('wrapper.html');
	  	}else{
	  		alert('Неверный промокод');
	  	}
	  });
});
