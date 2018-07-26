<?php 
	//RUN THROUGH SOCIALS

	if (filter_var(get_theme_mod('fb_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('fb_url') . '" target="_blank" rel="nofollow"><i class="fab fa-facebook-f"></i></a>';
	}
	if (filter_var(get_theme_mod('tw_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('tw_url') . '" target="_blank" rel="nofollow"><i class="fab fa-twitter"></i></a>';
	}
	if (filter_var(get_theme_mod('insta_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('insta_url') . '" target="_blank" rel="nofollow"><i class="fab fa-instagram"></i></a>';
	}
	if (filter_var(get_theme_mod('youtube_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('youtube_url') . '" target="_blank" rel="nofollow"><i class="fab fa-youtube"></i></a>';
	}
	if (filter_var(get_theme_mod('spotify_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('spotify_url') . '" target="_blank" rel="nofollow"><i class="fab fa-spotify"></i></a>';
	}
	if (filter_var(get_theme_mod('apple_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('apple_url') . '" target="_blank" rel="nofollow"><i class="fab fa-apple"></i></a>';
	}
?>