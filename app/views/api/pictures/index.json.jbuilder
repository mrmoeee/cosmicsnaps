@pictures.each do |picture|
  json.set! picture.id do
    json.extract! picture, :id, :title, :description
    json.photoUrl url_for(picture.photo)
  end
end
