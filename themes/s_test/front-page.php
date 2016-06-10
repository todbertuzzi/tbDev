<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/page', 'header'); ?>
  <h2>test front-page.php</h2>
  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>


