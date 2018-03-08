<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package zem
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header class="head <?php echo is_front_page() && !is_home() ? '' : 'head--work'; ?>">
    <div class="container">
      <div class="head__elem">
        <div class="head__item">
          <a href="/" class="head__logo"></a>
          <?php the_custom_logo(); ?>
        </div>
        <div class="head__item">
          <a href="tel:+74957976369" class="head__phone">
            +7 (495) 797-63-69
          </a>
          <?php
            wp_nav_menu( array(
              'theme_location' => 'default',
              'menu_id'        => 'primary-menu',
              'menu_class' => '11112222'
            ) );
          ?>
        </div>
      </div>
    </div>
  </header>

  <div id="content" class="site-content">
