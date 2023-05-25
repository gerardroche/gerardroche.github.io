---
tags: apache
title: Apache Rewrite
---

Many applications today use rewrite rules to redirect all requests to a single "bootstrap" file, or a "front controller". Typically they may look something like this (Apache):

    # Rewrite engine rules.
    # https://httpd.apache.org/docs/rewrite/
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} -s [OR]
    RewriteCond %{REQUEST_FILENAME} -l [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^.*$ - [NC,L]
    RewriteRule ^.*$ /index.php [NC,L]

In this post I will break down what the rewrite rules mean, and how to use the knowledge to improve and optimise the rules for *your* application, because usually the configurations provided by frameworks, etc. are an 80+% use-case.

## Documentation

Always read the manual GIF.

Documentation should always be the first thing to read. It's amazing how much time people spend googling how to do something, and are never willing to spend the time reading the documentation. If you want to know how something works go to the documentation:

https://httpd.apache.org/docs/rewrite/

## Did you try turning it off and on?

Enabling Apache rewrite rules may require a number of steps:

To use rewrite rules, the Apache `mod_rewrite` module needs to be enabled:

    $ sudo a2enmod rewrite
    Enabling module rewrite.
    To activate the new configuration, you need to run:
     systemctl restart apache2

As I hope you can see, you'll need to restart Apache for the changes to take effect.

You can disable modules too using `a2dismod`:

    $ sudo a2dismod rewrite

Once the rewrite module is enabled you use the `RewriteEngine` directive to enable/disable it:

    RewriteEngine On

## Dude, Where's My Car?

Rewrite rules can be defined in a number of locations:

* `.htaccess` file
* Vistual host configurations

Disabling `.htaccess` file processing increases performance, and I'm going to suggest that you disable it and move your rewrite rules to the Apache configurations e.g. Virtual Host container. See [Apache Performance Tuning](https://httpd.apache.org/docs/current/misc/perf-tuning.html#htaccess).


## I just dropped in to see what condition my condition was in

Generally, you only need to know two directives: `RewriteCond` and `RewriteRule`.

The [`RewriteCond`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritecond) defines the condition under which one or ore [`RewriteRule`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriterule)'s will apply. Think of it like this:

    if condition
        do rewrite(s)
    else
        goto to next condition

For example to rewrite non-www requests to www:

    RewriteCond %{HTTP_HOST} ^abc\.com$
    RewriteRule (.*) http://www.abc.com/$1 [R=301,L]
