
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
#### `comments`
* `GET /api/comments` - return relevant comments (filtered by `data`/`params`)
* `GET /api/comments/:id` - returns comment
* `POST /api/photos/:p_id/comments` - displays photos comments, and allow for commenting
* `PATCH /api/comments:id` - edit a comment
* `DELETE /api/photos/:p_id/comments` - delete a comment on current p_id
---
#### `likes`
`POST /api/photos/:photo_id/likes` - like a photo
`DELETE /api/photos/:photo_id/likes` - unlike a photo
