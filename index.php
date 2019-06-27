<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
	<title>Pokemon API</title>
</head>
<body onload="show();">

<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/modal.css">
<link rel="stylesheet" type="text/css" href="css/ui.css">
<link rel="stylesheet" type="text/css" href="css/style.css">

<h1>Pokemon Generator</h1>
<!-- <h2 id="loader">Carregando...</h2> -->

<!-- <input type="submit" value="o_nome_do_Botão" onClick="calcular()"> -->
<!-- <div class="nav-btn-container">
	<button class="prev-btn">Prev</button>
	<button class="next-btn">Next</button>
</div> -->


<div class="container">

	<div class="row">
		<div class="col-xl-8 col-xs-6">
			<div class="form-group">
				<input style="width: 60%;float: right;" type="text" id="tags" class="form-control" name="pokemonNome" placeholder="Ex: pikachu">
			</div>
		</div>
		<div class="col-xl-4 col-xs-6" style="padding-left: 0">
			&nbsp<button style="float: left;" type="button" class="btn btn-info" name="pesquisarName" id="pesquisarNome">Pesquisar</button>
		</div>
	</div>
	
	<div class="row">
		<div class="col-xl-12 col-xs-12">
			<ul class="ul-custom">
			</ul>
		</div>
	</div>

	<div class="row">
		<button style="width: 30%; text-align: center; margin: 0 auto; height: 60px; font-size: 26px; font-weight: bold; margin-bottom: 50px" type="button" class="next-btn btn btn-success">Ver Mais</button>
	</div>
	
</div>

<!-- Modal Struture -->
<!-- Modal Struture -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="loading" tabindex="-1" role="dialog" aria-labelledby="loadingTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body-loading" style="text-align: center;">	
      </div>
    </div>
  </div>
</div>


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="js/script.js"></script>

</body>
</html>