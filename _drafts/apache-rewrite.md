---
tags: apache
title: Apache Rewrite
---

Many applications today utilize rewrite rules to redirect all requests to a single "bootstrap" file or a "front controller." These rules often appear like the following example for Apache:

```apache
# Rewrite engine rules.
# https://httpd.apache.org/docs/rewrite/
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]
RewriteRule ^.*$ /index.php [NC,L]
```

In this post, I will break down the meaning of these rewrite rules and explain how to use this knowledge to enhance and optimize the rules for *your* application. This is important because configurations provided by frameworks, etc., often cover about 80% or more of common use cases.

## Documentation

![Chris O'Dowd in the IT Crowd (2006)](/assets/2023-05-14-chris-o-dowd-in-the-it-crowd.webp)

The first thing to read should always be the documentation. It's astonishing how much time people spend searching for how to do something without being willing to invest time in reading the documentation. If you want to understand how something works, refer to the [documentation](https://httpd.apache.org/docs/rewrite/).

## Did You Try Turning It Off and On?

Enabling Apache rewrite rules may involve several steps:

To utilize rewrite rules, you need to enable the Apache `mod_rewrite` module:

```bash
$ sudo a2enmod rewrite
Enabling module rewrite.
To apply the new configuration, you must run:
systemctl restart apache2
```

As you can see, Apache needs to be restarted for the changes to take effect:

```bash
$ sudo systemctl restart apache2
```

You can also disable modules using `a2dismod`:

```bash
$ sudo a2dismod rewrite
Module rewrite disabled.
To apply the new configuration, you must run:
systemctl restart apache2
```

After enabling the rewrite module, you use the `RewriteEngine` directive to enable or disable it:

```apache
RewriteEngine On
```

## Dude, Where's My Car?

Rewrite rules can be defined in several locations:

- `.htaccess` file
- Virtual host configurations

Disabling `.htaccess` file processing enhances performance. I suggest you disable it and relocate your rewrite rules to Apache configurations, such as the Virtual Host container. For more information, refer to [Apache Performance Tuning](https://httpd.apache.org/docs/current/misc/perf-tuning.html#htaccess).

## I Just Dropped In to See What Condition My Condition Was In

In general, you only need to be familiar with two directives: `RewriteCond` and `RewriteRule`.

The [`RewriteCond`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewritecond) directive defines the condition under which one or more [`RewriteRule`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html#rewriterule)s will apply. You can think of it like this:

```plaintext
if condition
    apply rewrite(s)
else
    proceed to the next condition
```

For instance, to rewrite non-www requests to www:

```apache
RewriteCond %{HTTP_HOST} ^abc\.com$
RewriteRule (.*) http://www.abc.com/$1 [R=301,L]
```

This example demonstrates how to achieve this kind of conditional redirection.
