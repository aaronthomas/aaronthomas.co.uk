<?php if(!$page->isHomepage()): ?>
	<footer class="footer" role="contentinfo">
		<div class="container container--wide">
			<small class="credit">&copy; <?php echo date("Y"); ?> Aaron Thomas</small>
		</div>
	</footer>
<?php endif; ?>
<?php echo js('assets/js/min/main.min.js') ?>
</body>
</html>