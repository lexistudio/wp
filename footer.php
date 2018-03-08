<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zem
 */

?>

  </div><!-- #content -->

  <div class="push"></div>

  <footer class="foot">
    <div class="container">
      <div class="site-info">
        <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'zem' ) ); ?>">
          <?php
          /* translators: %s: CMS name, i.e. WordPress. */
          printf( esc_html__( 'Proudly powered by %s', 'zem' ), 'WordPress' );
          ?>
        </a>
        <span class="sep"> | </span>
          <?php
          /* translators: 1: Theme name, 2: Theme author. */
          printf( esc_html__( 'Theme: %1$s by %2$s.', 'zem' ), 'zem', '<a href="http://underscores.me/">Underscores.me</a>' );
          ?>
      </div><!-- .site-info -->
    </div>
  </footer>

<?php wp_footer(); ?>

</body>
</html>