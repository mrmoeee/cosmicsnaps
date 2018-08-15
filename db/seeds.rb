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

user1 = User.create(username: "carlsagan", password: "123456");
user2 = User.create(username: "suiladicastronaut", password: "astronaut");

pic = Picture.new(title: 'This is an Astronaut', description: 'Floating through space', user_id: user1.user_id)
pic.photo.attach(io: File.open('./app/assets/images/astro.jpg'), filename: 'astro.jpg')
pic.save!

pic2 = Picture.new(title: 'This is an Astronaut', description: 'Floating through space', user_id: user2.user_id)
pic2.photo.attach(io: File.open('./app/assets/images/earthstar.jpg'), filename: 'astro.jpg')
pic2.save!
