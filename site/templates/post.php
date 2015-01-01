<?php snippet('header') ?>

<article class="post container container--wide">
	<header class="post__head">
		<h1 class="post__title"><?php echo $page->title()?></h1>
	</header>
    <?php echo $page->text()->kirbytext() ?>
</article>


<?php snippet('footer') ?>



