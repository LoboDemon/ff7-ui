<?php
	require __DIR__ . '/src/dialogue.php';
	$dialogue = new dialogue();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css?v=10">
</head>
<body>
	<?= $dialogue->generateHTML(); ?>

	<div id ="timer">
		<div id="didget1" class="didget number-0"></div>
		<div id="didget2" class="didget number-1"></div>
		<div id="colon"></div>
		<div id="didget3" class="didget number-0"></div>
		<div id="didget4" class="didget number-0"></div>
	</div>

	<audio id="audio" controls style="display:none">
  		<source src="media/000.mp3" type="audio/mpeg">
  		<source src="media/000.wav" type="audio/wav">
	</audio>
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
	<script src="scripts.js?v=10"></script>
</body>
</html>