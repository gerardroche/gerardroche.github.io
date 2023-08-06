---
tags: mysql
title: MySQL Modes
---

If strict SQL mode is not enabled and you assign a value to a CHAR or VARCHAR column that exceeds the column's maximum length, the value is truncated to fit, and a warning is generated. For truncation of non-space characters, you can cause an error to occur (rather than a warning) and suppress insertion of the value by using strict SQL mode. See Section 6.1.7, “Server SQL Modes”.

[MySQL CHAR and VARCHAR](https://dev.mysql.com/doc/refman/5.7/en/char.html)

## Abstract

Modes are a way of switching between different types of behaviors. Modes are often a means to add new behaviors without breaking compatibility with older versions. Some behaviors are as much about clarifying fuzzy specifications as they are about adding new ones.

## Introduction

MySQL has become a widespread language and is especially used a lot for developing web applications. The downside of this is that every Tom, Dick, and Harry with an internet connection can set up a database-driven web application by following simple steps.

In this article, I'll explain MySQL modes, how, and why you may want to enable some.

## Validation rules and syntax

Modes affect the SQL syntax MySQL supports and the data validation checks it performs.

## Defaults

| Mode                       | 5.6.5 | 5.6.6              | 5.7.5              | 5.7.7              | 5.8.0              |
| -------------------------- | ----- | ------------------ | ------------------ | ------------------ | ------------------ |
| NO_ENGINE_SUBSTITUTION     |       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| ONLY_FULL_GROUP_BY         |       |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| STRICT_TRANS_TABLES        |       |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| NO_AUTO_CREATE_USER        |       |                    |                    | :heavy_check_mark: | :heavy_check_mark: |
| NO_ZERO_IN_DATE            |       |                    |                    |                    | :heavy_check_mark: |
| NO_ZERO_DATE               |       |                    |                    |                    | :heavy_check_mark: |
| ERROR_FOR_DIVISION_BY_ZERO |       |                    |                    |                    | :heavy_check_mark: |

*TRADITIONAL is equivalent to STRICT_TRANS_TABLES, STRICT_ALL_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER, and NO_ENGINE_SUBSTITUTION.*

## Deprecations

Mode | Since
---- | -----
NO_ZERO_IN_DATE | 5.8.0
NO_ZERO_DATE | 5.8.0
ERROR_FOR_DIVISION_BY_ZERO | 5.8.0

    # SQL modes define what SQL syntax MySQL should support and what kind of data
    # validation checks it should perform.
    # https://dev.mysql.com/doc/refman/5.6/en/sql-mode.html
    # Defaults by MySQL version:
    # * Up to MySQL 5.6.5 the default sql mode was "".
    # * As of MySQL 5.6.6 the default was "NO_ENGINE_SUBSTITUTION".
    # * As of MySQL 5.7.5 the default was "NO_ENGINE_SUBSTITUTION, ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES".
    # * As of MySQL 5.7.7 the default was "NO_AUTO_CREATE_USER, NO_ENGINE_SUBSTITUTION, ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES".
    # Notes:
    # * TRADITIONAL is equivalent to STRICT_TRANS_TABLES, STRICT_ALL_TABLES, NO_ZERO_IN_DATE, NO_ZERO_DATE, ERROR_FOR_DIVISION_BY_ZERO, NO_AUTO_CREATE_USER, and NO_ENGINE_SUBSTITUTION.
    # * ERROR_FOR_DIVISION_BY_ZERO is deprecated and will be removed in a future release.
    # * NO_ZERO_DATE is deprecated and will be removed in a future release.
    # * NO_ZERO_IN_DATE is deprecated and will be removed in a future release.
    sql_mode = NO_AUTO_VALUE_ON_ZERO,ONLY_FULL_GROUP_BY,TRADITIONAL

## NO_ENGINE_SUBSTITUTION

> Control automatic substitution of the default storage engine when a statement such as CREATE TABLE or ALTER TABLE specifies a storage engine that is disabled or not compiled in.
>
> By default, NO_ENGINE_SUBSTITUTION is enabled.
>
> Because storage engines can be pluggable at runtime, unavailable engines are treated the same way:
>
> With NO_ENGINE_SUBSTITUTION disabled, for CREATE TABLE the default engine is used and a warning occurs if the desired engine is unavailable. For ALTER TABLE, a warning occurs and the table is not altered.
>
> With NO_ENGINE_SUBSTITUTION enabled, an error occurs and the table is not created or altered if the desired engine is unavailable.

What does it mean?

Storage engines might not be available for a variety of reasons: they not be installed, they might be disabled.

Consider two storage engines: MyISAM and InnoDB.

Suppose MyISAM was the default engine and InnoDB was disabled. What will happen when you try to create table for the InnoDB engine?

    CREATE TABLE `categories` (
      `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
      `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

The InnoDB is not available, so there are two situations:

1. NO_ENGINE_SUBSTITUTION is enabled (default in MySQL 8)

   An error occurs and MySQL does nothing i.e. does not create the table.

2. NO_ENGINE_SUBSTITUTION is disabled

   The default engine is used (in this case MyISAM) and a warning occurs.

## Further reading

* https://dev.mysql.com/doc/refman/en/common-errors.html
* https://dev.mysql.com/doc/refman/en/constraint-invalid-data.html
* https://dev.mysql.com/doc/refman/en/innodb-best-practices.html
* https://dev.mysql.com/doc/refman/en/secure-client-programming.html
* https://dev.mysql.com/doc/refman/en/show-warnings.html
* https://dev.mysql.com/doc/refman/en/sql-mode.html
* https://dev.mysql.com/doc/refman/en/time-zone-support.html
