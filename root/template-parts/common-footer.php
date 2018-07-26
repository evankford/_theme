<footer>
  <div class="footer-inner">
    <nav class="footer-menu">
      <?php
          //Get main menu (Desktop)
          wp_nav_menu(array(
            'theme_location' => 'main'
          ));
        ?>

    </nav>
    <div class="footer-socials socials-wrap">
      <?php get_template_part('inc/parts/common-socials');?>
    </div>
    <div class="footer-text">
      <?php 
        $year =  date('Y');
      if (get_theme_mod('cpub_footer_text') != '') {

        echo '<p>&copy; ' .  $year . ' ' . get_theme_mod('cpub_footer_text');
      } else {
        echo '<p>&copy; ' .  $year . ' Centricity Publishing. All Rights Reserved.';
      }
      if (get_theme_mod('cpub_footer_text') != '') {
        echo '<p class="ekf-link">an <a href="http://evankerrickford.com" rel="nofollow" target="_blank">evankerrickford.com</a> site.';
      } 
      ?>
    </div>
  </div>
</footer>