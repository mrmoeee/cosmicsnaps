# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ADD FIRST NAME AND LAST NAME TO FORM SHEET?
User.destroy_all
Picture.destroy_all

user1 = User.create(username: "astroadrift", password: "123456");
user1.profile_pic.attach(io: File.open("./app/assets/images/star3.jpg"), filename: "star3.jpg")

pic = Picture.new(title: 'Astronaut', description: 'Floating through space', user_id: user1.id)
pic.photo.attach(io: File.open('./app/assets/images/earthstar.jpg'), filename: 'earthstar.jpg')
pic.save!


pic19 = Picture.new(title: 'Dark Skies' , description: 'We are but a rock in a sea of rocks', user_id: user1.id)
file19 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/dark.jpg')
pic19.photo.attach(io: file19, filename: 'dark.jpg' )
pic19.save!

pic20 = Picture.new(title: 'Bright Lights', description: 'Shine bright like a star', user_id: user1.id)
file20 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/darkgalaxy.jpg')
pic20.photo.attach(io: file20, filename: 'darkgalaxy.jpg')
pic20.save!

pic21 = Picture.new(title: 'Rising Eagle', description: 'Almost a pheonix, but a cool eagle nonetheless', user_id: user1.id)
file21 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/eaglenebula.jpg')
pic21.photo.attach(io: file21, filename: 'eaglenebula.jpg' )
pic21.save!

user2 = User.create(username: "emc2", password: "123456");
user2.profile_pic.attach(io: File.open("./app/assets/images/star4.jpg"), filename: "star4.jpg")

pic22 = Picture.new(title: 'Deep Blue', description: 'Red eye in the sky. Wishin I could fly', user_id: user2.id)
file22 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/eclipse.jpg')
pic22.photo.attach(io: file22, filename: 'eclipse.jpg')
pic22.save!

pic23 = Picture.new(title: 'Parallax', description: 'Do not give in to fear. Defeat parallax!', user_id: user2.id)
file23 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/emergence.jpeg')
pic23.photo.attach(io: file23, filename: 'emergence.jpeg')
pic23.save!

pic24 = Picture.new(title: 'Red Maiden', description: 'Goddess in red, mesmerizing', user_id: user2.id)
file24 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/emergence.jpg')
pic24.photo.attach(io: file24, filename: 'emergence.jpg' )
pic24.save!

user3 = User.create(username: "astronaut1", password: "123456");
user3.profile_pic.attach(io: File.open("./app/assets/images/star1.jpg"), filename: "star1.jpg")


pic43 = Picture.new(title: 'Astronaut in Action!', description: 'Spacing out for this picture. Might wonder how I took it', user_id: user3.id)
pic43.photo.attach(io: File.open('./app/assets/images/astro.jpg'), filename: 'astro.jpg')
pic43.save!

pic44 = Picture.new(title: 'Earth', description: 'Space also exists in earth, only when you look up though', user_id: user3.id)
file44 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/milkyy.jpeg')
pic44.photo.attach(io: file44, filename: 'milkyy.jpeg')
pic44.save!

pic45 = Picture.new(title: 'Space Warriors', description: 'Warning, blood bath incoming', user_id: user3.id)
file45 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/mystic.jpg')
pic45.photo.attach(io: file45, filename: 'mystic.jpg')
pic45.save!

user4 = User.create(username: "insaneastronautposse", password: "123456");
user4.profile_pic.attach(io: File.open("./app/assets/images/star2.jpg"), filename: "star2.jpg")


pic64 = Picture.new(title: 'SpaceX', description: 'Hope this one does not fail', user_id: user4.id)
file64 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p23.jpeg')
pic64.photo.attach(io: file64, filename: 'p23.jpeg')
pic64.save!

pic65 = Picture.new(title: 'Shade of Blues', description: 'Star filled sky atop a blue mountain', user_id: user4.id)
file65 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel1.jpeg')
pic65.photo.attach(io: file65, filename: 'pexel1.jpeg')
pic65.save!

pic66 = Picture.new(title: 'Wilderness', description: 'Let me be crazy', user_id: user4.id)
file66 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel2.jpeg')
pic66.photo.attach(io: file66, filename: 'pexel2.jpeg')
pic66.save!

