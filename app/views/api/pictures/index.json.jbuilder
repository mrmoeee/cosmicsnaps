json.array! @pictures do |picture|
  json.extract! picture, :id, :title, :description
  json.photoUrl url_for(picture.photo)
end
