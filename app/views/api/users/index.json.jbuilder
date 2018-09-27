@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.profile_pic url_for(user.profile_pic)
  end
end
