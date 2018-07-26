<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package {%= name%}
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">
			<?php if (get_theme_mod('{%= name %}_footer_menu') != false) {?>
				<nav class="footer-menu">
					<?php
							//Get main menu (Desktop)
							wp_nav_menu(array(
								'theme_location' => 'menu-1'
							));
						?>

				</nav>
			<?php }?>
			<?php if (get_theme_mod('{%= name %}_footer_socials') != false) {?>
			<div class="footer-socials socials-wrap">
				<?php get_template_part('template-parts/socials.php');?>
			</div>
			<?php }?>
			<div class="footer-text">
				<?php 
					$year =  date('Y');
				if (get_theme_mod('cpub_footer_text') != '') {

					echo '<p>&copy; ' .  $year . ' ' . get_theme_mod('{%= name %}_footer_text');
				} 
				if (get_theme_mod('cpub_footer_text') != '') {
					echo '<p class="ekf-link">an <a href="http://evankerrickford.com" rel="nofollow" target="_blank">evankerrickford.com</a> site.';
				} 
				?>
			</div>
		
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
