<?php snippet('header') ?>

<main role="main">
  <article class="intro container">
      <?php echo $page->text()->kirbytext() ?>
  </article>
</main>

<section class="index">
	<?php 
	$blog = $site->find('blog');

	foreach($blog->children() as $article): ?>
	<a href="<?php echo $article->url(); ?>" class="index__item">
		<article class="container icon--arrow">
			<h2 class="index__item__title"><?php echo $article->title(); ?></h2>
			<time datetime="<?php echo $article->date('c'); ?>" class="index__item__meta" pubdate><?php echo $article->date('jS F Y'); ?></time>
		</article>	
	</a>
	<?php endforeach; ?>
</section>

<?php snippet('footer') ?>