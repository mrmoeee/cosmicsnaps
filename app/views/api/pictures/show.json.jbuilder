#picture
json.extract! @picture, :title, :description, :user_id
json.photoUrl url_for(@picture.photo)
