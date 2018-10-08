# Frontend routes
Our components are organized as follows

* `Root`
  *  `App`
    * `Navbar`
    * `Main components`
    * `Footer`

Main components
* `/`
  * `Home Feed`
* `/signin`
  * `SessionForm`
* `/signup`
  * `SessionForm`
* `/photos/new`
  * `UploadPhotoForm`
* `/photos/:p_id`
  * `PhotosShow`
  * `CommentIndex`
  * `CommentIndexItems`
  * `UserIndex`
  * `UserIndexItems`
* `/users/:u_id`
  * `Profile Page`
    * `InformationIndex`
    * `InformationIndexItems`
    * `PicturesContainer`
      * `Pictures`
        * `PictureItem`
    * `PicturesForm`
* `/comments/new`
  * `CommentForm`
* `/comments/:comment_id`
  * `CommentShow`
* `/comments/:comment_id`
  * `CommentForm`
