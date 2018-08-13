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

User.create(username: "carlsagan", password: "123456");

pic = Picture.create(title: 'This is an Astronaut', description: 'Floating through space', user_id: 6)
# pic.photo.attach(io: File.open('./app/assets/images/astro.jpg'), filename: 'astro.jpg')
