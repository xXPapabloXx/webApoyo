$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children("ul").slideToggle("200");
  $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
});

// Mostrar campo foto
function OcultarMostrarFoto() {
	var foto, check;
	
	foto = document.getElementById("foto");
	check = document.getElementById("flexSwitchCheckDefault");
	
	if (check.checked == true) // Si la checkbox de mostrar cambiar foto está activada
	{
		foto.type = "file";
	} else // Si no está activada 
	{
		foto.type = "hidden";
	}
	}