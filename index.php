<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
	<title>David Chun Te Wu's Portfolio</title>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-102143840-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-102143840-1');
	</script>

	<!-- build:css styles/styles.min.css -->
	<link rel="stylesheet" href="styles/styles.css">
	<link rel="shortcut icon" href="favicon.ico"/>
	<!-- endbuild -->
</head>
<body>

	<main class = "page-wrapper">

		<div class="slidAnimation"></div>
		<div class="animation-wrap">
			
			<div class="animation-cover"></div>
			<?php 
				include('template/_logoSVG.php'); 
			?>
		</div>

		<?php 
		include('template/_nav.php'); 
		?>

		<div class="mainheader">

			<div class="mainLogo">
				<?php 
				include('template/_logoSVG.php'); 
				?>
			</div>
		</div>

		<div class="intro">
			<div class="introText">
				<h2>The Portfolio of</h2>
				<h1>David</h1>
				<h1>Chun Te Wu</h1>
				<h3>Front-end Developer</h3>
			</div>
		</div>


		<span id="link-to-project">Projects</span>

		<?php 
		include('template/_projectIcons.php'); 
		?>

		<?php 
		include('template/_projectSections.php'); 
		?>

		<footer class="mobile-footer">
			<div class="socialIcons">
				<a href=""><img src="images/icons/linkedin.png" alt="linkedin icon"></a>
				<a href=""><img src="images/icons/email.png" alt="email icon"></a>
				<a href=""><img src="images/icons/git.png" alt="github icon"></a>			
			</div>

			<p>&copy; 2017 Chun Te Wu</p>
		</footer>
	</main>






	<!--build:js scripts/main.min.js -->
	<script src="scripts/jquery-3.2.1.min.js"></script>
	<script src="scripts/pace.js"></script>
	<script src="scripts/parallaxify.js"></script>
	<script src="scripts/anime.min.js"></script>
	<script src="scripts/nicescroll.min.js"></script>
	<script src="scripts/jquery.lazyload.min.js"></script>
	<script src="scripts/simpleLightbox.min.js"></script>
	<script src="scripts/masonry.min.js"></script>
	<script src="scripts/protfolio.js"></script>
	<!-- endbuild -->
</body>
</html>