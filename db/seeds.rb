profile_picture = "http://res.cloudinary.com/andoo/image/upload/c_crop,h_175,r_100,w_173,x_74,y_0/v1484764852/vonrulf1kpsuhqlxobir.png"
User.create!({username: "Pusheen", password:"password", profile_picture: profile_picture})
User.create!({username: "andoo1007", password:"password", profile_picture: profile_picture})
User.create!({username: "mona-chan", password:"password", profile_picture: profile_picture})
User.create!({username: "bamflame97", password:"password", profile_picture: profile_picture})
User.create!({username: "ilovedogs8", password:"password", profile_picture: profile_picture})
User.create!({username: "pikachu", password:"password", profile_picture: profile_picture})
User.create!({username: "DjJason", password:"password", profile_picture: profile_picture})
User.create!({username: "Artemis", password:"password", profile_picture: profile_picture})
User.create!({username: "peralta", password:"password", profile_picture: profile_picture})
User.create!({username: "Kasey", password:"password", profile_picture: profile_picture})
User.create!({username: "spadesofaces", password:"password", profile_picture: profile_picture})
User.create!({username: "JupiterHero", password:"password", profile_picture: profile_picture})
User.create!({username: "GonazaAmX", password:"password", profile_picture: profile_picture})
User.create!({username: "admired32", password:"password", profile_picture: profile_picture})
User.create!({username: "Mordecai65", password:"password", profile_picture: profile_picture})
User.create!({username: "OutNerdMe", password:"password", profile_picture: profile_picture})
User.create!({username: "Violeta", password:"password", profile_picture: profile_picture})
User.create!({username: "guc-chi", password:"password", profile_picture: profile_picture})
User.create!({username: "allisonkao", password:"password", profile_picture: profile_picture})
User.create!({username: "saitama", password:"password", profile_picture: profile_picture})
User.create!({username: "KaliSymn", password:"password", profile_picture: profile_picture})
User.create!({username: "Don352", password:"password", profile_picture: profile_picture})
# you used a super hacky way of letting you create stuff. fix it later
g = Board.create!({id: 1, user_id: 1, name:"Fellow Felines"})

pin_images = [
  "http://res.cloudinary.com/andoo/image/upload/v1486826048/e66ddbe6925551552200514fe8d114bc_fxuyn8.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826194/7670360c4c619b9214bb719fb49e0076_pxtkey.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826295/ea5e99e70a6682016fc8ed05c9a4705f_kxx3wb.png",
  "http://res.cloudinary.com/andoo/image/upload/v1486826436/c30e9bbaef3532e9b5b8964024f25a71_rwuih1.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826518/1938759c9c5c889a59fe60b1a48b43fd_ycunct.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826635/enhanced-buzz-1931-1374789664-0_ojgecm.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826717/a54497574fc65243dc57b0a0b97b6582_oc7lz3.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826817/image_ocxdso.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486826938/7c979fcfa51d2eccf1eaabd0d15884fb_babus1.jpg"
]

pin_title = [
  "A Bengal Cat",
  "A towel, obviously",
  "Cat Police Costume",
  "Princess Aurora",
  "I'm Not Single I Have a Cat",
  "A GORGEOUS Cat",
  "Christmas",
  "The Sink REALLY Belongs To Them",
  "Cats: It’s their world"
]

pin_body = [
  "A Belgian Bengal Cat Whose Deep Green Eyes and Unique Markings Make Him a Very Handsome Boy ",
  "",
  "Halloween plans",
  "A Photogenic Cat Royalty ",
  "I'm Not Single I Have a Cat The perfect mug for any crazy cat lovers.",
  "You know things are bad when a cat is prettier than you.",
  "",
  "The Dodo shares adorable pictures of cats who think the sink is their home.",
  "We’re just living in it "

]

pin_body.each_index do |idx|
  Pin.create!({user_id: 1, board_id: 1, title: pin_title[idx], body: pin_body[idx], image_url:pin_images[idx]})
end

g = Board.create!({id: 2, user_id: 3, name: "Free!"})

pins = [
  "http://res.cloudinary.com/andoo/image/upload/v1486827398/c2f99629bbcbf1e2765f6c89dbf2c7e1_cnxkyu.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827594/large_na79wd.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827690/04bf9ee4d854169ec7ed1a0fc77f6312_dhdsz7.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827690/04bf9ee4d854169ec7ed1a0fc77f6312_dhdsz7.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827906/e30f9c94bf2746c1fbd6057f39efff48_bq6e2t.jpg",
  "https://cloudinary.com/console/media_library#/dialog/image/upload/9ac230696dfe6e930e5c2bc4c3eff4a7_zkyuty",

]

titles = [
  "Just finished :(",
  "Free: the boy band??",
  "Free! - Iwatobi Swim Club",
  "Such great years",
  "My boys!!!",
  "They grow up so fast"
]

body = [
  "Just finished this anime, i want more episodes! Luckily the next season comes out in the summer!! ",
  "The Backstroke Boys. I would listen to this band ALL the time!!!!!!!!!!!!!!",
  "haruka nanase, haru nanase, haru, nanase, haruka, dolphin, free!, iwatobi",
  "I cANt BREatH << anime 2017 free! iwatobi swimm club haikyuu!! yuri on ice!! killing stalking",
  "They don't want the milkshake in your yard. XD ",
  "Free! ~~ They grow up so fast :: Rei, Rin, Nagisa, Makoto and Haruka "
]

pins.each_index do |idx|
  Pin.create!({user_id: 3, board_id: 2, title: titles[idx], body: body[idx], image_url:pins[idx]})
end


g = Board.create!({id: 3, user_id: 3, name: "Black butler"})

image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486828301/6309af01a0817328b8fc580b0719db6c_knrb2c.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828379/082a1983a0d9881c1ab31575e5b73c77_qvbour.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828472/02fc1f9c8843c5809cc6f35eb786f225_nqmiqa.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828570/7600eb15ae9538d2ca6933c9e6428ca2_knyfdi.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828652/8a3fff5c8e8076863b1d0e62ed0b0721_tcyprw.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828787/4f53032f621b15bce5543e4aca266533_gvitrn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828855/6d308f612b23e22a92e187ddfdb05212_h6mmq7.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828916/e0a6c9b29d8d86ce178777f81a6372f4_ifkmn8.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829078/7f0a40d65430d29e1dbb0075c2855603_gcmyn5.jpg"
]

title = [
  "I came here for Sebastian, not feels",
  "YES!",
  "Ciel and Sebastian",
  "Awesome cosplay",
  "LOL",
  "NG Sims 3",
  "A+",
  "Story of my life",
  "Watercolor"
]

body = [
  "And that's why I believe that Sebastian has at least some sort of feeling of love towards ceil because after all the pain he's gone through he's still kinder then alois or alot of other people.",
  "",
  "Ciel phantomhive sebastian michaelis kuroshitsuji ",
  "More proof that girls make the cosplayers",
  "",
  "wow undertaker looks perfect and sebastian ofc too",
  "Cieling... I AM DOING THIS TO THE ART ROOM ABSOLUTELY NO CHOICE I WILL HAVE MY CIELING ",
  "",
  "Black Butler Anime Manga Watercolor Print Poster Kuroshitsuji Ciel Phantomhive Sebastian Michaelis "
]

image.each_index do |idx|
  Pin.create!({user_id: 3, board_id: 3, title: title[idx], body: body[idx], image_url:image[idx]})
end

g = Board.create!({id: 4, user_id: 3, name: "Reborn"})

image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486829391/4c7c0a013f8688c1a74e8a7d7a8ba49f_xnss8q.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829487/77b15f6344adae617e50e8ecb3cf6783_krgbbr.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829532/86bc99649b56f9f71530f0de29c234e8_r47mku.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829663/7d945f11d02e4bbe14602435c41992dc_pfpdml.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829705/903174c3aaa3c6a259b7035c54b5d9b5_ezsh6j.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829803/c22220fbb0624d5a82c98162e62aec51_pjjbxu.jpg"
]

title = [
  "Katekyo",
  "My favsies",
  "Hibari",
  "",
  "",
  "Gilbird & Hibird XD"
]

body = [
  "",
  "",
  "Katekyo Hitman Reborn one of the best anime ever!!!! ",
  "",
  "",
  "Hibari (Katekyo Hitman Reborn!) Don't know why but for some reason I feel that Prussia (Gilbert) & Hibari could be great friends due to their similar partners in crime: Gilbird & Hibird. XD "
]

image.each_index do |idx|
  Pin.create!({user_id: 3, board_id: 4, title: title[idx], body: body[idx], image_url:image[idx]})
end

g = Board.create!({id: 5, user_id: 3, name: "tokyo ghoul"})

image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486830287/301fa63c666d6b66e80e86600af1c846_yh7llo.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486830342/de4634681ca318d17ac0f706201d1767_fly1sn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486830420/8d28ffe859509bcf7abc5a7dbe1e9003_b1ndjl.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486830478/fe88b7cc892ab3140285da73d82a4815_zkgdds.jpg"
]

title = [
  "Kaneki Ken",
  "",
  "kuro and shiro - Tim voi",
  ""
]

body = [
  "Tokyo Ghoul | Toukyou Kushu - Kaneki Ken ",
  "unravel - Tokyo Ghoul by randyhuang",
  "",
  ""
]

image.each_index do |idx|
  Pin.create!({user_id: 3, board_id: 5, title: title[idx], body: body[idx], image_url:image[idx]})
end

g = Board.create!({id: 6, user_id: 1, name: "star wars"})
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486830722/101f4e42b041c22ae8eccf45f4b2e31d_p17zes.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486830820/5f1ec2c8fe7c1bbb430dc9ae9e2b51a8_rsxbqi.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918490/guillem-h-pongiluppi-501-st-legion-vader-s-fist-vs-space-cockroaches-7-guillemhp_vtrqcn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918488/ed3313d88e3d66499f1703108b55c469_or1uug.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918488/c74176b662dbce095f19dbeb56c19d69_i0il3k.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918489/2578005d06193c9411c4b88941acfd05_xtmeri.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918488/614668cb4a1279a746de621ef0fa881f_tw4bjf.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918488/303726a9fbff20073a3115c7d6ccc2b2_peaxmz.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918487/030c4a5300bfc448ffd3bdb06cfd012f_jjvyuq.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918487/35f051be4e5f9ace286398d40f2b705d_houxfe.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918488/624ae36b528c24bcf93c89de7ca8ed5e_dwcxs0.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918487/02e3ebf534ee41ccf6a9b2639512bef7_mw7abj.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831020/2ee9a1ec53b6429ab595294a49e2112d_eiwbyc.jpg"
  ]

title = [
  "Star Wars Force of Darkness Art Print",
  "Darth Vader",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "New movie!"
]

body = [
  "Iconic characters from the Star Wars universe who have been lured to the Dark Side unleash their evil on the Star Wars Force of Darkness Art… ",
  "Darth Vader... Lord of the Sith More Mehr ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "The Title For ‘Star Wars: Episode VIII’ Has Been Revealed "
]

image.each_index do |idx|
  Pin.create!({user_id: 1, board_id: 6, title: title[idx], body: body[idx], image_url:image[idx]})
end

g = Board.create!({id: 7, user_id: 1, name: "funny"})

image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486831270/225edde5ce454be6d79b65657f9d7fe9_u05onp.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831353/fe693fdd25004815677dd6d5304a746d_anl0d0.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831393/8bab46e118515257dcafb665c0f753f8_d70qog.jpg",
  "https://cloudinary.com/console/media_library#/dialog/image/upload/7696d8440bc9b47b6beb755832c0b967_uxhboh",
  "http://res.cloudinary.com/andoo/image/upload/v1486831506/07f63a6b66f18387d409cdd0342f55b8_v51oaz.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831592/807afadbf3a1bc619828c9a15f6a32ab_nztows.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831721/62e4703e2e395a42d91d993a11da1ab6_gz8ahf.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831804/d0ec0e1dd46013b3017b497c88416a67_jcwwtq.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831895/249d0d8060020bdffc3680072c790a4a_exalxn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831945/02d546fe72c5d1b9feb2490d39652a05_xyk4yr.jpg"
]

title = [
  "Make your day better",
  "Did someone say bacon?",
  "",
  "Why I can't sleep at night",
  "Happy Monday",
  "worst seal ever",
  "Best love story ever",
  "",
  "definitely fabs",
  "Happy Friday"
]

body = [
  "",
  "",
  "",
  "Everybody else has this problem... right?",
  "my favorite day of the week",
  "Pretty cute though.. I GUESS",
  "Like the notebook",
  "",
  "",
  "the ACTUAL best day of the week"
]

image.each_index do |idx|
  Pin.create!({user_id: 1, board_id: 7, title: title[idx], body: body[idx], image_url:image[idx]})
end



img = [
  "http://res.cloudinary.com/andoo/image/upload/v1484591800/dogs/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591797/dogs/adoptable-size.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591796/dogs/dog-650299.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591796/dogs/860-header-dog-breeds.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591796/dogs/Common-dog-behaviors-explained.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591797/dogs/Shake-shiver-and-tremble-Why-dogs-do-it.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591798/dogs/dog-candy-junk-food-599x340.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591807/dogs/Introducing-puppy-to-older-dogs.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591820/dogs/original.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591806/dogs/The_16_Dogs_That_Won8217t_Make_You_Sneeze_2060_2848.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591810/dogs/puppy-1.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591805/dogs/_1.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591803/dogs/dogs.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591804/dogs/bear-dogs-310__605.jpg",
  "https://cloudinary.com/console/media_library#/dialog/image/upload/dogs/15_Tiniest_Dog_Breeds_1718_3083",
  "http://res.cloudinary.com/andoo/image/upload/v1484591807/dogs/puppy-1_680-453.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484591799/dogs/b054f9bf75fe74a38995cb0ccc240af5.jpg"
]

g = Board.create!({id: 8, user_id: 1, name: "Dogs"})

img.each_index do |idx|
  x = Pin.new({user_id: 1, board_id:8, title:"", body:"",
    image_url:img[idx]}
  )
  x.save
end


img6 = [
  "http://res.cloudinary.com/andoo/image/upload/v1484916345/Tex-Mex_Bacon_Cheeseburgers_f69d_sm0yre.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916345/Pomegranate_Feta_Bison_Burgers_nr9seh.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916345/Pepper_Crusted_Bacon_Cheeseburgers_6ea9_gu3h1f.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916345/Michael_Symon_s_Fat_Doug_c_jwneds.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916345/d6ad79e959b39e3e23a200b03d343d2d_mdjyus.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916344/Cheddar_Stuffed_Apple_Slaw_Burger_f9cc3_mpqixo.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916344/Apple_Cheddar_Turkey_Burgers_chhfid.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916344/Bacon_Brie_Burger_ek3v4c.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916344/Beef_Chorizo_Sliders_n7nn3b.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916344/Bourbon_Burgers_f01yop.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484916345/Cheddar_chicken_burgers_80_gm5ltu.jpg"
]

title6 = [
  "Tex-Mex Bacon Cheeseburgers",
  "Pomegranate Feta Bison Burgers",
  "Pepper Crusted Bacon Cheeseburgers",
  "Michael Symon's Fat Doug",
  "Cheddar Stuffed Apple Slaw Burger",
  "Apple Cheddar Turkey Burgers",
  "Bacon Brie Burger",
  "Beef Chorizo Sliders",
  "Bourbon Burgers",
  "Cheddar chicken burgers"
]

Board.create!({user_id: 2, id: 9, name: "Burgers"})

img6.each_with_index do |pic, idx|
  Pin.create!({user_id: 2, board_id: 9, title: title6[idx], body:"",
    image_url: pic})
end

img8 = [
  "http://res.cloudinary.com/andoo/image/upload/v1484918949/e29b255b4aba7f51a5b02a25b758aed2_1_utub6u.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918949/d455518235eaaf43d69105925a04c3cf_merj38.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918947/cc162156e16348ba8f728f6f0240f854_jdysmh.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918946/c3cf306b7f1e8a9986589681bc802eaa_tcelji.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918946/b1f2195e7b2d9d903ec46a85074e1d52_pknmpd.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918947/adda56e5b0c19b73df664b081f57b3c1_ysix6z.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918941/9dea13259e9189bf414e806f2dd83b1b_y0yfji.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918942/73c2a371b1bb080b10f3b4116863d629_dthv6b.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918943/380b78c078b617ae850764431141ffb1_tkubvo.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918944/9342a1375c0c26b31bc495d9cadd0e39_xttaya.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918944/80306ca820723ce524217c74fa468043_hxblrr.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918944/277662384af4e81a1b2933c2b18bda6d_j1f2hh.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918944/7391863170be07a072ffeb3e7605db2a_yvfr4p.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918940/8f14b3a5bb42b8de002879f65c06e7c6_jk6een.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918940/6f00a85a6baa99e121c27e95737e3e49_f3onh8.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918938/6e36e8a856b73d01e68eddae94807c86_hi3n3p.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918936/1ca94a99f9ebe281b84844d3e4b791ef_pydqhh.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1484918936/0d7d59232066c0f25702f77644807b75_twrc4p.jpg"
]
Board.create!({user_id: 1, id: 10, name: "Cute Animals"})

img8.each do |img|
  Pin.create!({user_id: 1, board_id: 10, title: "", body: "",
    image_url: img})
end
