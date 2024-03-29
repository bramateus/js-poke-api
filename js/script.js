// $(document).ready(function() {
//   $("#loader").hide();
//   $("#button").click(function() {
//     $(".container").hide();
//     $("#loader").fadeIn();
//     $.ajax({
//       type: "GET",
//       url: "https://pokeapi.co/api/v2/pokemon/" + randomNumber(),
//       data: {limit: 5, order: 'desc'},
//       success: function(data) {
//         console.log(data);
//         $("#name").html(data.name.toUpperCase());
//         $("#pokemon_id").html(data.id);
//         $("#experience").html(data.base_experience);
//         $("#img").attr("src", data.sprites.front_default);
//         $("#loader").hide();
//         $(".container").fadeIn();
//       }
//     })
//   }) 
// });

var page = 0,
  offset = 10,
  totalrecord = 0;

  $(".prev-btn").on("click", function(){
    if (page > 0) {
      page--;
      show();
    }
    console.log("Prev Page: " + page);
  });

  $(".next-btn").on("click", function(){
    if (page * offset < totalrecord) {
      page += 10;
      show();
    }
    console.log("Next Page: " + page);
  });

function randomNumber() {  
    return Math.floor((Math.random() * 500) + 1);  // I have no idea how many Pokemon exist...
}

function show() {
  $.ajax({
      type: "GET",
      dataType: "json",
      // url: "https://pokeapi.co/api/v2/pokemon/" + randomNumber(),
      url: "https://pokeapi.co/api/v2/pokemon/",
      data: {offset: page, limit: offset},
      success: function(data) {
        $("#loading").remove();
        $(".modal-backdrop").remove();
        totalrecord = 30000000;
        $(data['results']).each(function(index, item) {
          var name = capitalizeFirstLetter(data['results'][index]['name']);
          buscar(data['results'][index]['name']);
        });
        setTimeout(function() { 
          $("li").on("click", function(){
          var index = $(this).attr('id');
          details(index);
         });
        }, 1000);
      },
      beforeSend: function() {
          $("#loading").modal();
          $(".modal-body-loading").html("<img src='img/loading.gif'>");
      }
    }) //ajax end.
} // end function show()

function beforeBuscar() {
  var nameInclude = "";
  $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://pokeapi.co/api/v2/pokemon/",
       data: {limit: 365, order: 'desc'},
      success: function(data) {
        $(data['results']).each(function(index, item){
          var name = data['results'][index]['name'];
          nameInclude += name;
          nameInclude += " ";
        });
        console.log(nameInclude);
      },
    }); //ajax end
    setTimeout(function(){
      var array = nameInclude.split(" ");
      console.log(array);
      var resultado = [""];
      $( function() {
      var availableTags = array;
      $( "#tags" ).autocomplete({
        source: availableTags
      });
      } );
    }, 1000);
}

function buscar(nomepokemon) {

  $.ajax({
      type: "GET",
      dataType: "json",
      // url: "https://pokeapi.co/api/v2/pokemon/" + randomNumber(),
      url: "https://pokeapi.co/api/v2/pokemon/"+ nomepokemon,
      success: function(data) {
        var imageUrl = data['sprites']['front_default'];
        var name = capitalizeFirstLetter(data['forms'][0]['name']);
        var id = (data['id'] - 1);

        $(data).each(function(index, item){
          $('ul').append('<li class="li-custom" id="'+id+'"><img id="img" class="toggleHideShow" src="'+ imageUrl +'"></img> <h3><br><span id="name">'+ name  +'</span></h3><hr><h4>Ver Detalhes</h4></li>');
        });

        setTimeout(function(){ 
          $("li").on("click", function(){
          var index = $(this).attr('id');
          details(index);
         });
        }, 1000);
       $('button[name=pesquisarName').html('Pesquisar');  
      },
      error: function(){
       alert('request failed');
       $('button[name=pesquisarName').html('Pesquisar');
      },
      beforeSend: function() {
        $('button[name=pesquisarName').html('Processando...');
      },
    }); //ajax end
}


function details(index) {
  var index = (parseInt(index) + 1);
  $("#loading").modal();
  $(".modal-body-loading").html("<img src='img/loading.gif'>");
  $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://pokeapi.co/api/v2/pokemon/" + index,
      success: function(data) {
        var imageUrl = data['sprites']['front_default'];
        var name = capitalizeFirstLetter(data['forms'][0]['name']);
        var weight = data['weight'];
        var types = data['types'];
        var experience = data['base_experience'];
        var typesConcat = [];

      for (var i = 0; i < types.length; i++) {
        typesConcat[i] = capitalizeFirstLetter(types[i]['type']['name']);
      }
      var typesConcat = typesConcat.join('/');
        $("#exampleModalCenter").modal();
        $('.modal-body').html('<div class="infoWrap"> <div class="monsterData"> <span>ID: </span> <h2>0'+index+'</h2> <div class="circleWrap"> <div class="frontCircle"></div><div class="backCircle"></div></div></div><div class="monsterInfo"> <img src="'+imageUrl+'" alt="pokeMon" class="pokemon"/> <div class="pokemonLevel"> <h2 class="greenWord pokemonName">'+name+'</h2> <div class="levelBar"></div><div class="HP"> <span>100</span>/<span>100</span>HP </div></div><div class="pokemonInfo"> <div class="infoBox"> <h3 class="greenWord">'+weight+' Kg</h3> <span class="grayWord">PESO</span> </div><div class="infoBox-50"> <h3 class="greenWord">'+typesConcat+'</h3><span class="grayWord">TIPO</span> </div><div class="infoBox"> <h3 class="greenWord">'+experience+'</h3> <span class="grayWord">NÍVEL</span> </div></div><div class="roundBox"> <button class="upgradeBtn">POWER UP</button> </div><div class="roundBox"> <button class="upgradeBtn">EVOLVE</button> </div> </div></div>');
      },
       beforeSend: function() {
        $("#loading").modal();
        $(".modal-body-loading").html("<img src='img/loading.gif'>");
      }
    }) //ajax end.
} // end function show()

  $(document).ready(function(){
    $('#pesquisarNome').click(function() {
      var pokemonNome = $('input[name=pokemonNome').val().toLowerCase();
      if (pokemonNome != '') {
        $('ul li').remove();
        buscar(pokemonNome);
      } else {
        show();
      } 
      console.log('Botão id="pesquisarId" clicado e função disparada');
    });

    // Dispara AutoComplete
    $("input[name='pokemonNome']").click(function(){
      beforeBuscar();
    });
  });

  function capitalizeFirstLetter(string) {
    return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  setTimeout(function(){ 
   $("li").on("click", function(){
    var index = $(this).attr('id');
    details(index);
   });
  }, 1000);








  

