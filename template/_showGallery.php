<?php  
function displayImage($pathToImage, $pathToImageThumb){

	if ( is_dir($pathToImage) && file_exists($pathToImage) ) {
		$arrayImage = scandir($pathToImage);
		foreach ($arrayImage as $oneImage) {
			if(is_file($pathToImage.$oneImage)):
			?>

			<a href="<?php echo $pathToImage.$oneImage; ?>" title="">
				<img src="<?php echo $pathToImageThumb.$oneImage; ?>" alt="gallery image" />
			</a>
			<?php
			endif;
		}

	}
}

?>