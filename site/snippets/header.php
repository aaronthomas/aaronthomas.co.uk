<!DOCTYPE html>
<!--[if lt IE 9]><html class="no-js ie lt-ie9 " lang="en"><![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html class="no-js " lang="en"><!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php if(!$page->isHomepage()): ?><?php echo $page->title()->html(); ?> | <?php endif; ?><?php echo $site->title()->html() ?> | Web Design and Front-end Developer</title>
    <meta name="description" content="<?php echo $site->description()->html() ?>">
    <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

    <!--[if lte IE 8]>
    <?php echo css('assets/css/ie.css') ?>
    <![endif]-->
    <!--[if gt IE 8]><!-->
    <?php echo css('assets/css/styles.css') ?>
    <!--<![endif]-->
    <?php echo js('assets/js/min/head.min.js"') ?>
    <noscript><?php echo css('assets/grunticon/icons.fallback.css') ?></noscript>
</head>

<body>

    <header class="header container" role="banner">
        <h1 class="site-title gamma"><a href="/"><?php echo $site->title()->html() ?></a></h1>
    </header> 
