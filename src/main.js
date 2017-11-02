var modelos = {
    "c1": [
        {
           "nome": "Classic 01",
           "preco": "1.501,00"
        },
        {
           "nome": "Classic 02",
           "preco": "1.502,00"
        }
    ],
    "c2": [
        {
           "nome": "Moderno 01",
           "preco": "1.601,00"
        },
        {
           "nome": "Moderno 02",
           "preco": "1.602,00"
        }
    ],
    "c3": [
        {
           "nome": "Lancha 01",
           "preco": "1.701,00"
        },
        {
           "nome": "Lancha 02",
           "preco": "1.702,00"
        }
    ],
    "c4": [
        {
           "nome": "Helicóptero 01",
           "preco": "1.801,00"
        },
        {
           "nome": "Helicóptero 02",
           "preco": "1.802,00"
        }
    ]
};


document.querySelector('.modal-close').onclick = function() {
  document.getElementsByClassName("modal")[0].removeAttribute("style");
  document.getElementsByClassName("modal")[0].classList.add("modal-hide");
}


var galleries = document.querySelectorAll(".img-gallery")
for (i = 0; i < galleries.length; i++) {
  galleries[i].addEventListener('click', function() {
    document.getElementById("legend").innerHTML = this.getAttribute('data-caption');
    document.getElementById("modal-img").setAttribute('src', this.getAttribute('src'));
    document.getElementsByClassName("modal")[0].classList.remove("modal-hide");
  });
}

// Calculadora
$("#categoria").change(function() {
    $("#modelos").removeAttr("disabled");
    $("#modelos").html("<option value=''>Selecione</option>");

   $.each(modelos[$(this).val()], function(k,v) {
        $("#modelos").append("<option value='"+v.preco+"'>" + v.nome +"</option>");
   });
});


$("#modelos").on("change", function() {
   $("#preco").text($(this).val());
   $("#preco").show();
});
