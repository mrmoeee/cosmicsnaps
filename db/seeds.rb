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

useradmin = User.create(username: "suiladicastronaut", password: "astronaut");

user1 = User.create(username: "astroadrift", password: "123456");
pic = Picture.new(title: 'Astronaut', description: 'Floating through space', user_id: user1.id)
pic.photo.attach(io: File.open('./app/assets/images/earthstar.jpg'), filename: 'earthstar.jpg')
pic.save!

pic2 = Picture.new(title: 'Purple Sky', description:'Star filled purple sky. Thinking of you', user_id: user1.id)
file2 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/abstract.jpg')
pic2.photo.attach(io: file2, filename: 'abstract.jpg')
pic2.save!

pic3 = Picture.new(title: 'So Close To Landing', description: 'Mixed emotions, mainly confusion and emptiness', user_id: user1.id)
file3 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/abstract2.jpg')
pic3.photo.attach(io: file3, filename: 'abstract2')
pic3.save!

pic4 = Picture.new(title: 'Cloudy Sky', description: 'Cloudy sky, thinking of bettering myself', user_id: user1.id)
file4 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/air.jpg')
pic4.photo.attach(io: file4, filename: 'air.jpg' )
pic4.save!

pic5 = Picture.new(title: 'Saturday Night Lights', description: 'Almost dropped it to make you jealous' , user_id: user1.id)
file5 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/astro2.jpg')
pic5.photo.attach(io: file5, filename: 'astro2.jpg' )
pic5.save!

pic6 = Picture.new(title: 'Barred Spiral', description: 'Blackhole? Colorful Blackhole maybe?', user_id: user1.id)
file6 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/barredspiral.jpg')
pic6.photo.attach(io: file6, filename: 'barredspiral.jpg' )
pic6.save!

pic7 = Picture.new(title: 'Space, Or Oraganism?', description: 'Questions I ask myself all the time. Whats going on?', user_id: user1.id)
file7 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/bioorganism.jpg')
pic7.photo.attach(io: file7, filename: 'bioorganism.jpg')
pic7.save!

pic8 = Picture.new(title: 'Pale Blue' , description: 'Reminds me of the blues. Oh, and also your black heart', user_id: user1.id)
file8 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/bluedot.jpeg')
pic8.photo.attach(io: file8, filename: 'bluedot.jpeg' )
pic8.save!

pic9 = Picture.new(title: 'Standing Strong', description: 'In the clouds all by myself', user_id: user1.id)
file9 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/building.jpg')
pic9.photo.attach(io: file9, filename: 'building.jpg' )
pic9.save!

pic10 = Picture.new(title: 'Galaxy Butterfly', description: 'A cosmic blend of colors. Reminds me of my youthful days', user_id: user1.id)
file10 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/butterfly.jpg')
pic10.photo.attach(io: file10, filename: 'butterfly.jpg' )
pic10.save!

pic11 = Picture.new(title: 'Carina Nebula', description: 'A long time ago I was here', user_id: user1.id)
file11 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/carinanebula.jpg')
pic11.photo.attach(io: file11, filename: 'carinanebula.jpg')
pic11.save!

pic12 = Picture.new(title: 'Caverns', description: 'Not spacy, still saucey. Check out the deer', user_id: user1.id)
file12 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/caverns.jpg')
pic12.photo.attach(io: file12, filename: 'caverns.jpg')
pic12.save!

pic13 = Picture.new(title: 'Violet Fire', description: 'Almost a flower in the sky', user_id: user1.id)
file13 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/cloudes.jpeg')
pic13.photo.attach(io: file13, filename:'cloudes.jpeg' )
pic13.save!

pic14 = Picture.new(title: 'Sadness', description: 'Metaphor for how I feel. Just driftin away', user_id: user1.id)
file14 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/cos12.jpg')
pic14.photo.attach(io: file14, filename: 'cos12.jpg')
pic14.save!

pic15 = Picture.new(title: 'Reflections', description: "You cant see me. Maybe I'm John Cena", user_id: user1.id)
file15 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/cosmo.jpg')
pic15.photo.attach(io: file15, filename: 'cosmo.jpg')
pic15.save!

pic16 = Picture.new(title: 'Astro Selfie', description: 'Its about time I showed my handsome face. Oh wait. . .', user_id: user1.id)
file16 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/cosmoo.jpg')
pic16.photo.attach(io: file16, filename: 'cosmoo.jpg' )
pic16.save!

pic17 = Picture.new(title: 'Views from the six', description: 'A little atmosphere never hurt nobody', user_id: user1.id)
file17 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/cosmos.jpg')
pic17.photo.attach(io: file17, filename: 'cosmos.jpg')
pic17.save!

pic18 = Picture.new(title: 'Galaxy Cup', description: 'The galaxy is at orion-.. wait it is in the cup I am holding', user_id: user1.id)
file18 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/cupstar.jpg')
pic18.photo.attach(io: file18, filename: 'cupstar.jpg')
pic18.save!

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

pic25 = Picture.new(title: 'Eruption', description: 'Its what happens when you bottle up emotions. They will blow up soon', user_id: user2.id)
file25 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/eruption.jpeg')
pic25.photo.attach(io: file25, filename: 'eruption.jpeg')
pic25.save!

pic26 = Picture.new(title: 'Flare', description: 'Flareon! Go! Oh wait I meant to say this is a cool star', user_id: user2.id)
file26 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/flare.jpeg')
pic26.photo.attach(io: file26, filename: 'flare.jpeg')
pic26.save!

pic27 = Picture.new(title: 'Extreme Star', description: 'Star dust clouds, just random words put together', user_id: user2.id)
file27 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/extremestar.jpg')
pic27.photo.attach(io: file27, filename: 'extremestar.jpg')
pic27.save!

pic28 = Picture.new(title: 'We Are Not Alone', description: 'So many galaxies around us, although they might be dead', user_id: user2.id)
file28 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/galaxies.jpg')
pic28.photo.attach(io: file28, filename: 'galaxies.jpg' )
pic28.save!

pic29 = Picture.new(title: 'Bright Lights', description: 'Keep me awake at night', user_id: user2.id)
file29 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/galaxy1.jpg')
pic29.photo.attach(io: file29, filename: 'galaxy1.jpg')
pic29.save!

pic30 = Picture.new(title: 'Spooky', description: 'Ghostly star captured through hubble telescope', user_id: user2.id)
file30 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/ghostlystar.jpg')
pic30.photo.attach(io: file30, filename: 'ghostlystar.jpg')
pic30.save!

pic31 = Picture.new(title: 'Floral Shaped Galaxy', description: 'Got me feeling nostalgia like when you look at me', user_id: user2.id)
file31 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/glaxy2.jpg')
pic31.photo.attach(io: file31, filename: 'glaxy2.jpg')
pic31.save!

pic32 = Picture.new(title: 'Hand of God', description: 'Or thanos, with all the infinity stones, reaching for your soul', user_id: user2.id)
file32 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/handofgod.jpg')
pic32.photo.attach(io: file32, filename: 'handofgod.jpg')
pic32.save!

pic33 = Picture.new(title: 'We Got History', description: 'Thinking about what coulda happened', user_id: user2.id)
file33 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/huajai.jpg')
pic33.photo.attach(io: file33, filename: 'huajai.jpg')
pic33.save!

pic34 = Picture.new(title: 'Hurricane Spotted', description: 'Be safe everyone!', user_id: user2.id)
file34 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/hurricane.jpeg')
pic34.photo.attach(io: file34, filename: 'hurricane.jpeg')
pic34.save!

pic35 = Picture.new(title: 'James Irwin', description: 'Or I think that is him. What a lad', user_id: user2.id)
file35 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/jamesirwin.jpeg')
pic35.photo.attach(io: file35, filename: 'jamesirwin.jpeg')
pic35.save!

pic36 = Picture.new(title: 'Deadly Splash of Colors', description: 'Would you dare touch this jellyfish?', user_id: user2.id)
file36 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/jellyfish.jpg')
pic36.photo.attach(io: file36, filename: 'jellyfish.jpg')
pic36.save!

pic37 = Picture.new(title: 'Jupiter Looking Like a Snack', description: "I'd eat this if you told me it was a candy", user_id: user2.id)
file37 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/jupiter.jpg')
pic37.photo.attach(io: file37, filename: 'jupiter.jpg')
pic37.save!

pic38 = Picture.new(title: 'Lion', description: 'Not for the weak willed', user_id: user2.id)
file38 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/lagoon.jpg')
pic38.photo.attach(io: file38, filename: 'lagoon.jpg')
pic38.save!

pic39 = Picture.new(title: 'Retrowave', description: 'Lights Lights and more Lights', user_id: user2.id)
file39 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/light.jpg')
pic39.photo.attach(io: file39, filename: 'light.jpg')
pic39.save!

pic40 = Picture.new(title: 'Merging Galaxy', description: 'What could have been created when they collide', user_id: user2.id)
file40 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/merginggalaxy.jpg')
pic40.photo.attach(io: file40, filename: 'merginggalaxy.jpg')
pic40.save!

pic41 = Picture.new(title: 'Rainbow Star', description: 'Once in a life time experience, or use the right lens', user_id: user2.id)
file41 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/milky.jpg')
pic41.photo.attach(io: file41, filename: 'milky.jpg')
pic41.save!

pic42 = Picture.new(title: 'Starry Starry Night', description: 'Dark blue, almost like an ocean', user_id: user2.id)
file42 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/milkyway2.jpg')
pic42.photo.attach(io: file42, filename: 'milkyway2.jpg')
pic42.save!

user3 = User.create(username: "astronaut1", password: "123456");

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

pic46 = Picture.new(title: 'Roads', description: 'Not the crossroad where he sold his soul', user_id: user3.id)
file46 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/nature.jpeg')
pic46.photo.attach(io: file46, filename: 'nature.jpeg')
pic46.save!

pic47 = Picture.new(title: 'Astronaughty', description: 'Nauty nauty nauty', user_id: user3.id)
file47 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/nauty.jpg')
pic47.photo.attach(io: file47, filename: 'nauty.jpg')
pic47.save!

pic48 = Picture.new(title: 'Flashlight Saber', description: 'Looking for who I am', user_id: user3.id)
file48 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/nightstar.jpeg')
pic48.photo.attach(io: file48, filename: 'nightstar.jpeg')
pic48.save!

pic49 = Picture.new(title: 'Star Dust', description: 'Dusty window? OR Dusty sky', user_id: user3.id)
file49 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/nky.jpeg')
pic49.photo.attach(io: file49, filename: 'nky.jpeg')
pic49.save!

pic50 = Picture.new(title: 'Smokey', description: 'Orion Nebula, purple edition', user_id: user3.id)
file50 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/orionnebula.jpg')
pic50.photo.attach(io: file50, filename: 'orionnebula.jpg')
pic50.save!

pic51 = Picture.new(title: 'OutFlow', description: 'Outer flow of energy, channel it into positivity', user_id: user3.id)
file51 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/outflow.jpg')
pic51.photo.attach(io: file51, filename: 'outflow.jpg')
pic51.save!

pic52 = Picture.new(title: 'Trees', description: 'No not that kind, its not broccoli', user_id: user3.id)
file52 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p1-.jpeg')
pic52.photo.attach(io: file52, filename: 'p1-.jpeg')
pic52.save!

pic53 = Picture.new(title: 'Imaginary Lands', description: 'I think this might be photoshopped', user_id: user3.id)
file53 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p1.jpeg')
pic53.photo.attach(io: file53, filename: 'p1.jpeg')
pic53.save!

pic54 = Picture.new(title: 'AI Overlords', description: 'Not space related, but what if one day AI took over?', user_id: user3.id)
file54 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p2.jpeg')
pic54.photo.attach(io: file54, filename: 'p2.jpeg')
pic54.save!

pic55 = Picture.new(title: 'Satellite', description: 'Searching for a transmission home', user_id: user3.id)
file55 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p2.jpg')
pic55.photo.attach(io: file55, filename: 'p2.jpg')
pic55.save!

pic56 = Picture.new(title: 'Satellite pt2.', description: 'Come in houston, it is cold and lonely up here', user_id: user3.id)
file56 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p3.jpg')
pic56.photo.attach(io: file56, filename: 'p3.jpg')
pic56.save!

pic57 = Picture.new(title: 'Blue Skies', description: 'Its the blue sky blues', user_id: user3.id)
file57 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p3.jpeg')
pic57.photo.attach(io: file57, filename: 'p3.jpeg')
pic57.save!

pic58 = Picture.new(title: 'Goodnight Moon', description: 'Goodmorning sun', user_id: user3.id)
file58 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p4.jpeg')
pic58.photo.attach(io: file58, filename: 'p4.jpeg')
pic58.save!

pic59 = Picture.new(title: 'Existential Crisis', description: 'What am I doing up here for that rock??', user_id: user3.id)
file59 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p5.jpeg')
pic59.photo.attach(io: file59, filename: 'p5.jpeg')
pic59.save!

pic60 = Picture.new(title: 'Star Cabin', description: 'Cabin underneath a star-filled sky', user_id: user3.id)
file60 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p6.jpeg')
pic60.photo.attach(io: file60, filename: 'p6.jpeg')
pic60.save!

pic61 = Picture.new(title: 'Saturday Night Lights pt2.', description: 'She got jealous', user_id: user3.id)
file61 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p7.jpeg')
pic61.photo.attach(io: file61, filename: 'p7.jpeg')
pic61.save!

pic62 = Picture.new(title: 'Gods toe', description: 'Just kidding. Reverse Eclipse', user_id: user3.id)
file62 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p8.jpeg')
pic62.photo.attach(io: file62, filename: 'p8.jpeg')
pic62.save!

pic63 = Picture.new(title: 'Purple Traveller', description: 'All these bright lights, not one UFO in sight', user_id: user3.id)
file63 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/p9.jpeg')
pic63.photo.attach(io: file63, filename: 'p9.jpeg')
pic63.save!

user4 = User.create(username: "insaneastronautposse", password: "123456");

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

pic67 = Picture.new(title: 'Rockets', description: 'Rockets? How do they work?', user_id: user4.id)
file67 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel3.jpg')
pic67.photo.attach(io: file67, filename: 'pexel3.jpg')
pic67.save!

pic68 = Picture.new(title: 'Milky Way', description: 'Justify-content center of the stars', user_id: user4.id)
file68 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel4.jpeg')
pic68.photo.attach(io: file68, filename: 'pexel4.jpeg')
pic68.save!

pic69 = Picture.new(title: 'Superman', description: 'Its a bird, no! A plane, no! A Rocket, look at the thrusters stupid!', user_id: user4.id)
file69 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel5.jpeg')
pic69.photo.attach(io: file69, filename: 'pexel5.jpeg')
pic69.save!

pic70 = Picture.new(title: 'Long Exposure', description: 'Long exposure shot overnight at my aunt mays back yard desert', user_id: user4.id)
file70 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel6.jpeg')
pic70.photo.attach(io: file70, filename: 'pexel6.jpeg')
pic70.save!

pic71 = Picture.new(title: 'Cloud King', description: 'Peace can be achieved within', user_id: user4.id)
file71 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel7.jpeg')
pic71.photo.attach(io: file71, filename: 'pexel7.jpeg')
pic71.save!

pic72 = Picture.new(title: 'Moon Man', description: 'Moon man moon exposed', user_id: user4.id)
file72 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel8.jpeg')
pic72.photo.attach(io: file72, filename: 'pexel8.jpeg')
pic72.save!

pic73 = Picture.new(title: 'Moon', description: 'Close up of the moon, you can see it has dimples', user_id: user4.id)
file73 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel10.jpeg')
pic73.photo.attach(io: file73, filename: 'pexel10.jpeg')
pic73.save!

pic74 = Picture.new(title: 'Light Speed Ahead!', description: 'Long exposure 360 degree shot', user_id: user4.id)
file74 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel11.jpeg')
pic74.photo.attach(io: file74, filename: 'pexel11.jpeg')
pic74.save!

pic75 = Picture.new(title: 'Sunset Boulevard', description: 'Boulevard of unbroken dreams', user_id: user4.id)
file75 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel12.jpeg')
pic75.photo.attach(io: file75, filename: 'pexel12.jpeg')
pic75.save!

pic76 = Picture.new(title: 'Hidden Space', description: 'Shy space underneath the clouds', user_id: user4.id)
file76 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel14.jpeg')
pic76.photo.attach(io: file76, filename: 'pexel14.jpeg')
pic76.save!

pic77 = Picture.new(title: 'Lift Off!', description: 'One Small Step for man, one giant leap for mankind', user_id: user4.id)
file77 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel15.jpeg')
pic77.photo.attach(io: file77, filename: 'pexel15.jpeg')
pic77.save!

pic78 = Picture.new(title: 'Airplane or Rocket?', description: 'Thoughts?', user_id: user4.id)
file78 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel16.jpeg')
pic78.photo.attach(io: file78, filename: 'pexel16.jpeg')
pic78.save!

pic79 = Picture.new(title: 'Lonely is The Night', description: 'Your demons come to light and your mind is not your own', user_id: user4.id)
file79 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel17.jpeg')
pic79.photo.attach(io: file79, filename: 'pexel17.jpeg')
pic79.save!

pic80 = Picture.new(title: 'Adventure', description: 'Date take this trip with me?', user_id: user4.id)
file80 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel18.jpeg')
pic80.photo.attach(io: file80, filename: 'pexel18.jpeg')
pic80.save!

pic81 = Picture.new(title: 'Minivan of Love', description: 'Spent the night under the surreal star', user_id: user4.id)
file81 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel19.jpeg')
pic81.photo.attach(io: file81, filename: 'pexel19.jpeg')
pic81.save!

pic82 = Picture.new(title: 'Full Exposure', description: 'Yellow moon because of the sun', user_id: user4.id)
file82 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel20.jpeg')
pic82.photo.attach(io: file82, filename: 'pexel20.jpeg')
pic82.save!

pic83 = Picture.new(title: 'Dark Side of the Moon', description: 'Runnin out of time!', user_id: user4.id)
file83 = EzDownload.open('https://s3-us-west-1.amazonaws.com/cosmicsnaps-dev/picdb/pexel21.jpeg')
pic83.photo.attach(io: file83, filename: 'pexel21.jpeg')
pic83.save!
