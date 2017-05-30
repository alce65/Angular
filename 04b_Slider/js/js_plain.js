﻿	<script>
		$(function() {
            // se crean los objetor Image asociados a determinados ficheros

		    var domImg = $("img");
		    var domBtnBack = $("#back");
		    var domBtnNext = $("#next");

		    var aFotos = new Array(4)
		    var iFoto = 0;
		    for (var i = 0; i < aFotos.length; i++) {
                aFotos[i] = new Image();
		    }

		    aFotos[0].src = "images/diana_of_bitru_300.jpeg";
		    aFotos[0].alt = "Diana of Bitru - Luis Royo"
		    aFotos[0].title = "Diana of Bitru - Luis Royo"
		    aFotos[1].src = "images/eyes_300.jpeg";
		    aFotos[1].alt = "Eyes - Luis Royo"
		    aFotos[1].title = "Eyes - Luis Royo"
		    aFotos[2].src = "images/fissures_of_the_breeze_300.jpeg";
		    aFotos[2].alt = "Fissures of the Breeze - Luis Royo"
		    aFotos[2].title = "Fissures of the Breeze - Luis Royo"
		    aFotos[3].src = "images/golden_kabala_300.jpeg";
		    aFotos[3].alt = "Golden Kabala - Luis Royo"
		    aFotos[3].title = "Golden Kabala - Luis Royo"

		    aFotos[0].onload = function () {		      
		        domImg.attr("src", aFotos[0].src);
		        domImg.attr("alt", aFotos[0].alt);
		        domImg.attr("title", aFotos[0].title);
		    }
		    domBtnBack.attr('disabled', true);


		    $("button").on("click", function (oEvent) {
		        var hayCambio = false;
		        if (oEvent.target.id == "next" && iFoto < aFotos.length) {
		            iFoto++;
		            hayCambio = true;
		        } else if (iFoto != 0) {
		            iFoto--;
		            hayCambio = true;
		        }
		        if (hayCambio){
		            domImg.attr("src", aFotos[iFoto].src);
		            domImg.attr("alt", aFotos[iFoto].alt);
		            domImg.attr("title", aFotos[iFoto].title);

		            if (iFoto == 0) {
		                domBtnBack.attr('disabled', true);
		                domBtnNext.attr('disabled', false);
                    } else if (iFoto == aFotos.length - 1) {
		                domBtnBack.attr('disabled', false);
		                domBtnNext.attr('disabled', true);
                    } else {
                        domBtnNext.attr('disabled', false);
                        domBtnBack.attr('disabled', false);
                    }
                }

		    }) // fin del on click
		    
		});
	</script>  

