# Database Schema
----
# users
----
| column name   |data type|details|
| ------------- |:-------------:| -----:|
| `id`    | integer | not null, primary key |
| `username`|  string | not null, indexed, unique|
| `email` | string | not null, indexed, unique |
|`description` | string | not null|
| `password_digest`| string| not null|
| `session_token`| string | not null, indexed, unique|
|`picture_id`| integer | indexed, foreign key|
|`gallery_id`| integer | indexed, foreign key|
|`group_id`| integer | indexed, foreign key |
|`about_id`| integer | indexed, foreign key|

* index on username, unique: true
* index on session_token, unique: true
--------
<!-- view ids?? view table?? -->
 pictures
--------
|column name | data type| details|
|------------|:---------:|--------:|
|`id`|integer|not null, primary key|
|`title`| string | not null|
|`description`| string |not null|
|`category`| string | not null|
|`location`| string | not null|
|`taken date`| datetime | not null|
|`upload date`| datetime | not null|
|`user_id`| integer | not null, indexed, foreign key|
|`comment_id`| integer| indexed, foreign key|
|`like_id`| integer | not null, indexed, foreign key|
|`gallery_id`| integer| not null, indexed, foreign key|

* index on user_id, unique: true
* like_id references how many likes a picture has
* comment_id references comments of the picture
* gallery_id references what gallery it belongs to
---
likes
-----
|column name | data type| details|
|------------|:---------:|--------:|
|`id`| integer | not null, primary key|
|`user_id`| integer| not null, indexed, foreign key|
|`picture_id`|integer|not null, indexed, foreign key|
* user_id references what user that liked
* picture_id references corresponding picture of the like
---
gallery
-------
|column name | data type| details|
|------------|:---------:|--------:|
|`id`| integer | not null, primary key|
|`title`|string|not null|
|`user_id`|integer| indexed, foreign key|
|`picture_id`| integer|not null, indexed, foreign|
* user_id references user who created gallery
* picture_id references pictures in it
---
about
-------
|column name | data type| details|
|------------|:---------:|--------:|
|`id`| integer | not null, primary key|
|`view_id`| integer | not null, foreign key|
|`like_id`| integer | not null, foreign key|
---
<!-- groups have posts that are pictures! -->
groups
------
|column name | data type| details|
|------------|:---------:|--------:|
|`id`| integer | not null, primary key|
|`title`| string | not null|
|`description`| string | not null|
|`user_id`| integer | not null, indexed, foreign key|
|`mod_id`| integer | not null, indexed, foreign key|
* user_id references users in the group
* mod_id references users who are moderators
---
comments
------
|column name | data type| details|
|------------|:---------:|--------:|
|`id`| integer | not null, primary key|
|`body`| string | not null|
|`user_id`| integer | not null, indexed, foreign key|
|`time posted`| datetime | not null|
* user_id references user who posted the comment
