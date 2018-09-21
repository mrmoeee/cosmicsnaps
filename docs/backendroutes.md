
Comments
POST api/photos/photo_id/comment - comment on a current photo
DELETE api/photos/photo_id/comment - delete comment on a current photo

### HTML
* `GET StaticPagesController#root`
---
### API Endpoints
#### `users`
* `GET /api/users/:id` - returns users information and photos (profile page)
* `POST /api/users` - create a new user
---
#### `session`
* `POST /api/session` - sign in
* `DELETE /api/session` - sign out
---
#### `photos`
* `GET /api/photos` - photos index, possibly home feed (might include /:uid)
* `GET /api/photos/:p_id` - one photo index page displaying all its information
* `POST /api/photos` - upload a photo
* `DELETE /api/photos/:p_id` - delete a photo
* `PATCH /api/photos/:p_id` - update a photo's information
---
### `comments`
* `POST /api/photos/:p_id/comments` - displays photos comments, and allow for commenting
* `DELETE /api/photos/:p_id/comments` - delete a comment on current p_id
---
