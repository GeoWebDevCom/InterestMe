pusheen = "http://res.cloudinary.com/andoo/image/upload/c_crop,h_175,r_100,w_173,x_74,y_0/v1484764852/vonrulf1kpsuhqlxobir.png"
profile_picture = "http://res.cloudinary.com/andoo/image/upload/c_crop,h_175,r_100,w_173,x_74,y_0/v1484764852/vonrulf1kpsuhqlxobir.png"
monachan = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486925093/Screenshot_from_2017-02-12_10-44-34_c0tvuz.png"
andrew1007 = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486926486/Screenshot_from_2017-02-12_11-07-50_ecwlbm.png"
bamflame97 = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486926676/Screenshot_from_2017-02-12_11-11-02_uduvu8.png"
pikachu = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486926870/Screenshot_from_2017-02-12_11-14-14_fnhnas.png"
djjason = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486927081/Screenshot_from_2017-02-12_11-17-41_zekvkr.png"
artemis = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486927000/Screenshot_from_2017-02-12_11-16-28_va2uox.png"
peralta = "http://res.cloudinary.com/andoo/image/upload/c_scale,h_180,r_max,w_180/v1486927257/Screenshot_from_2017-02-12_11-20-32_thyhxm.png"
User.create!({username: "Pusheen", password:"password", profile_picture: pusheen})
User.create!({username: "andoo1007", password:"password", profile_picture: profile_picture})
User.create!({username: "mona-chan", password:"password", profile_picture: monachan})
User.create!({username: "bamflame97", password:"password", profile_picture: bamflame97})
User.create!({username: "andrew1007", password:"password", profile_picture: andrew1007})
User.create!({username: "pikachu", password:"password", profile_picture: pikachu})
User.create!({username: "DjJason", password:"password", profile_picture: djjason})
User.create!({username: "Artemis", password:"password", profile_picture: artemis})
User.create!({username: "peralta", password:"password", profile_picture: peralta})
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
#1
g = Board.create!({user_id: 1, name:"Fellow Felines"})
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

#2
g = Board.create!({user_id: 3, name: "Free!"})
pins = [
  "http://res.cloudinary.com/andoo/image/upload/v1486827398/c2f99629bbcbf1e2765f6c89dbf2c7e1_cnxkyu.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827479/5e05846cc8b34cd1759dfa11ed1b41fd_qkgtrr.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827690/04bf9ee4d854169ec7ed1a0fc77f6312_dhdsz7.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827906/e30f9c94bf2746c1fbd6057f39efff48_bq6e2t.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486827975/9ac230696dfe6e930e5c2bc4c3eff4a7_zkyuty.jpg",

]
titles = [
  "Just finished :(",
  "Free: the boy band??",
  "Free! - Iwatobi Swim Club",
  "Such great years",
  "They grow up so fast"
]
body = [
  "Just finished this anime, i want more episodes! Luckily the next season comes out in the summer!! ",
  "The Backstroke Boys. I would listen to this band ALL the time!!!!!!!!!!!!!!",
  "haruka nanase, haru nanase, haru, nanase, haruka, dolphin, free!, iwatobi",
  "I cANt BREatH << anime 2017 free! iwatobi swimm club haikyuu!! yuri on ice!! killing stalking",
  "Free! ~~ They grow up so fast :: Rei, Rin, Nagisa, Makoto and Haruka "
]
pins.each_index do |idx|
  Pin.create!({user_id: 3, board_id: 2, title: titles[idx], body: body[idx], image_url:pins[idx]})
end

#3
g = Board.create!({user_id: 3, name: "Black Butler"})
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486828301/6309af01a0817328b8fc580b0719db6c_knrb2c.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828379/082a1983a0d9881c1ab31575e5b73c77_qvbour.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828570/7600eb15ae9538d2ca6933c9e6428ca2_knyfdi.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828652/8a3fff5c8e8076863b1d0e62ed0b0721_tcyprw.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828787/4f53032f621b15bce5543e4aca266533_gvitrn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828855/6d308f612b23e22a92e187ddfdb05212_h6mmq7.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486828916/e0a6c9b29d8d86ce178777f81a6372f4_ifkmn8.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486829078/7f0a40d65430d29e1dbb0075c2855603_gcmyn5.jpg"
]
title = [
  "I came here for Sebastian, not feels",
  "!!",
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

#4
g = Board.create!({user_id: 3, name: "Hitman Reborn"})
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
  "Katekyo Hitman Reborn one of the best animes ever!!!!",
  "",
  "",
  "Hibari. Don't know why but for some reason I feel that Prussia (Gilbert) & Hibari could be great friends due to their similar partners in crime: Gilbird & Hibird. XD "
]
image.each_index do |idx|
  Pin.create!({user_id: 3, board_id: 4, title: title[idx], body: body[idx], image_url:image[idx]})
end

#5
g = Board.create!({user_id: 3, name: "Tokyo Ghoul"})
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

#6
g = Board.create!({user_id: 1, name: "Star Wars"})
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
  "Great pic",
  "Fan art!",
  "More vader :)",
  "New order stormtrooper design",
  "Deathstart... I think?",
  "A kickback to the old movies",
  ":)",
  "New order!",
  "Final battle",
  "Obi-wan!!",
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

#7
g = Board.create!({user_id: 1, name: "Funny"})
  image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486831270/225edde5ce454be6d79b65657f9d7fe9_u05onp.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831353/fe693fdd25004815677dd6d5304a746d_anl0d0.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831393/8bab46e118515257dcafb665c0f753f8_d70qog.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486831447/7696d8440bc9b47b6beb755832c0b967_uxhboh.jpg",
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
"Doggies",
"Why I can't sleep at night",
"Happy Monday",
"worst seal ever",
"Best love story ever",
"Aww :(",
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

#board 8
Board.create!({user_id: 3,name:"Delish"})
  title = [
    "Mongolian Beef Ramen",
    "Buffalo popcorn chicken",
    "Pasta with Chicken Broth, Butter and Parmesan"
  ]
  body = [
    "
    Ingredients\n
    Meat:\n
    1 lb Sirloin streak\n
    Produce:\n
    1 large head Broccoli\n
    1 Carrot\n
    3 Garlic cloves\n
    1 tsp Ginger\n
    3 Green onions\n
    Canned Goods:\n
    1 cup Chicken broth\n
    Condiments:\n
    1/2 cup Soy sauce\n
    Baking & Spices:\n
    1/4 cup Brown sugar\n
    2 tbsp Corn starch\n
    1 pinch Red pepper flakes\n
    1 Sesame seeds, Toasted\n
    Oils & Vinegars:\n
    1 tbsp Sesame oil\n
    2 tbsp Vegetable oil\n
    Other:\n
    3 package Instant ramen, flavor pack discarded",
    "Instant ramen noodles never tasted so good.
    Ingredients:\n
    Meat:\n
    1 lb Sirloin streak\n
    Produce:\n
    1 large head Broccoli\n
    1 Carrot\n
    3 Garlic cloves\n
    1 tsp Ginger\n
    3 Green onions\n
    Canned Goods:\n
    1 cup Chicken broth\n
    Condiments:\n
    1/2 cup Soy sauce\n
    Baking & Spices:\n
    1/4 cup Brown sugar\n
    2 tbsp Corn starch\n
    1 pinch Red pepper flakes\n
    1 Sesame seeds, Toasted\n
    Oils & Vinegars\n
    1 tbsp Sesame oil\n
    2 tbsp Vegetable oil\n
    Other:\n
    3 package Instant ramen, flavor pack discarded",

    "Ingredients\n
    Meat:\n
    3 Chicken breasts, boneless skinless\n
    2 cups Frank's buffalo wing sauce\n
    Refrigerated:\n
    3 Eggs\n
    Baking & Spices\n
    1/2 cup Flour\n
    1 Salt and pepper\n
    Bread & Baked Goods:\n
    1/3 cup Bread crumbs, plain\n
    1 cup Panko bread crumbs",
    "This Pasta with Chicken Broth, Butter and Parmesan is pure comfort food!
    It is a bowl of wonderful, warming, healing amazingness. One…\n
    Ingredients:\n
    Produce:\n
    1 Basil, fresh\n
    Canned Goods:\n
    4 cups Chicken stock\n
    Pasta & Grains:\n
    2 cups Pasta shapes, small\n
    Baking & Spices:\n
    1 Black pepper\n
    1 Salt\n
    Dairy:\n
    60 g Butter\n
    1/4 cup Parmigiano cheese, grated"
  ]
  image = [
    "http://res.cloudinary.com/andoo/image/upload/v1486917898/3dea7ba6b6b8c23dfd97d88c28aa4737_qtcoug.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486917991/7f5ff0396db05cdab9344315c44ab2c9_bcdbuk.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486918087/39acfedbf4e07d268375121a86bd4478_u0acbx.jpg"
  ]
  image.each_index do |idx|
    Pin.create!({user_id: 4, board_id: 8, title: title[idx], body: body[idx], image_url:image[idx]})
  end
  title = [
    "Cinnamon Roasted Chickpeas",
    "Patty Melt",
    "Crack Slaw",
    "Chili Cheese Dog Pizza"
  ]
  body = [
    "These sweet, crunchy chickpeas deliver in the snack department! Only four ingredients needed for this healthy, high protein, gluten free and…
    Ingredients:
    2 cans of garbanzo beans, 15oz each (another name for chickpeas)
    2 Tbsp. olive oil
    4 Tbsp. brown or dark brown sugar
    2 Tbsp cinnamon
    ¼ tsp. salt, optional",
    "A griddled sandwich of ground beef, caramelized onions, cheese, and rye bread, the patty melt is a beloved staple of the burger lexicon.
    ",
    "Low Carb Crack Slaw – Persnickety Fitness by Mandy Jo",
    "Meat:
      1/2 tsp Better than bouillon beef base
      1 lb Ground beef, quality lean cooked and finely chopped
      4 Hotdogs, quality
      Produce:
      1/4 tsp Garlic powder
      Canned Goods
      1 (6 oz.) can Tomato paste
      Condiments:
      1/2 tsp Balsamic vinegar
      1/4 tsp Table mustard, spicy brown or regular
      1 1/2 tsp Worcestershire sauce
      Baking & Spices:
      1/4 tsp Black pepper, coarse ground
      1/4 tsp Brown sugar, dark
      1/4 tsp Cajun seasoning such as slap ya mama
      1/4 tsp Cayenne
      2 tbsp Chili powder
      1/2 tsp Paprika, sweet smoked
      1 lb Pizza dough
      1/4 tsp Red pepper flakes
      1/4 tsp Salt, smoked
      1/4 tsp Table salt, regular
      Nuts & Seeds:
      1 tbsp Cumin
      Liquids:
      1 1/4 cups Water
      Other:
      ½ of an 8 oz. bag Sargento Off the Block Mozzarella and Provolone Blend Traditional Cut shredded cheese, or your own preferred brand
      ½ cup V8 Spicy Hot Tomato Vegetable Juice"
  ]
  image = [
    "http://res.cloudinary.com/andoo/image/upload/v1486918542/23337f62163b7b224eeab59adf32444d_omp2hk.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486918713/0daa82daa34a2d6e6bf3cf7235e7b734_imfe8i.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486918818/a79407825fd87a8926d6dd5f79d20d4f_okyhxo.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486918920/94a81e6bfb937288fcd028c7abf3ecab_vufmvi.jpg"
  ]
  image.each_index do |idx|
    Pin.create!({user_id: 4, board_id: 8, title: title[idx], body: body[idx], image_url:image[idx]})
  end
  title = [
    "S'mores Waffle Sundaes",
    "Leprechaun Dessert Shooters",
    "Garlic Parmesan Mozzarella Alfredo (Skinny!)",
    "Oreo Chocolate Chip Cheesecake Cookie Bars"
  ]
  body = [
    "Mini waffles are topped with ice cream, toasted marshmallows and all the fixings to create epic S'mores Waffle Sundaes.
    Ingredients:
    1 large egg
    2 tablespoons light brown sugar
    1 cup milk
    1/4 cup vegetable oil
    1/2 teaspoon pure vanilla extract
    1 cup all-purpose flour
    1/2 cup graham cracker crumbs (about 4 full sheets)
    2 teaspoons baking powder
    pinch of salt
    ice cream
    homemade hot fudge sauce
    8 Campfire® Giant Roasters or Campfire regular marshmallows, toasted
    whipped cream
    sprinkles
    maraschino cherries",
    "Leprechaun Dessert Shooters, easy dessert recipes, easy recipes, st. patricks day, st patricks day food, st patricks day recipes, pudding…
    Ingredients:
    Vegetarian:
    Baking & Spices
    1 Chocolate chips, mini
    3 drops Food coloring, green
    1 Rainbow sprinkles
    1 Whipped cream
    Snacks:
    4 Oreo cookies
    Desserts
    1 package Vanilla pudding - prepared to package directions, instant",
    "I crave food that’s sweet and spicy. (Exhibit A, Exhibit B, Exhibit C) I crave food with a variety of textures. (Exhibit A, Exhibit B,…
    Ingredients:
    Produce:
    6 Garlic cloves
    1 tsp Onion pwdr
    Canned Goods
    1 1/2 cups Chicken broth, low sodium
    Pasta & Grains:
    1 lb Fettuccine
    Baking & Spices:
    1/4 cup All-purpose flour
    1/4 tsp Black pepper
    1/4 tsp Red pepper flakes
    1/2 tsp Salt
    Oils & Vinegars:
    2 tbsp Olive oil
    Dairy:
    1 1/2 cups Milk, lowfat
    3/4 cup Mozzarella cheese
    1/2 cup Parmesan cheese",
    "Oreo Chocolate Chip Cheesecake Cookie Bars"
  ]
  image = [
    "http://res.cloudinary.com/andoo/image/upload/v1486919035/3d9d81970685f08246dfc4850bc66e08_lvyjap.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486919143/abe8ec56ba00b43ce692fa6d4b383d47_vvigpg.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486919288/25ddb0dc68b4a42355a89d8efcaea622_qisll1.jpg",
    "http://res.cloudinary.com/andoo/image/upload/v1486919362/288c70e5c54b3e12815dd1664b43a749_q4r9nl.jpg"
  ]
  image.each_index do |idx|
    Pin.create!({user_id: 4, board_id: 8, title: title[idx], body: body[idx], image_url:image[idx]})
  end



#board 9
Board.create!({user_id: 4, name:"Men's Fashion"})
title = [
  "ZeusFactor",
  "What to Wear On A New Year's Eve?",
  "The dress shirt fit",
  "That jean jacket",

]
body = [
  "More fashion inspirations for men, menswear and lifestyle @ www.zeusfactor.com",
  "",
  "",
  ""
]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486920091/4893a5ea735a3750aaf36fd66c0206f4_t2gfd9.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920144/b05bf6a10a47419d2147f5bb11425dd1_nwf3cn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920207/1f1ad3706d3fa195e2e2d3672bffd942_zl0h4h.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920342/902dd97eb383d14b4a08f1c2dcfc78b0_xyyyt2.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 4, board_id: 9, title: title[idx], body: body[idx], image_url:image[idx]})
end

title = [
  "Every Guy Should Own A Camel Overcoat",
  "Great look",
  "Medium Hairstyles To Make You Look Younger",
  "So sharp",
  "Great scarf"
]
body = [
  "Overcoats are hugely in fashion this year and for good reason. They give off a sophisticated business friendly vibe but at the same time…",
  "hoodie // plaid shirt // joggers // tan sneakers",
  "Do you have a medium hairstyles? Are you planning to grow them longer or maintain them for a variety of hairstyle you can explore with?…",
  "Your groom will look sooooooo sharp! Get the S by Sebastian Dinner Jacket and you won't go wrong. Be Bold. "
]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486920618/ebe0cadbc16ce71c2308f9b6c030d490_aq2ltj.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920675/2b43c506998eb4fa7297c2ea264f3989_vlsyhu.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920729/9fa029841c6dd5ce5243dcf01005f461_tuztwb.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920781/a6e92268f91e84abb541e19e8f162b59_u4flp1.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486920894/45fca59db4b5bd920a8a6ae1e5732feb_epyfqs.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 4, board_id: 9, title: title[idx], body: body[idx], image_url:image[idx]})
end

#board 10
Board.create!({user_id: 5, name:"Zelda"})
title = [
  "Dark link in the water temple",
  "Young Link and Navi",
  "Navi... sooooo annoying",
  "So true LOL",
  "Cucco Fury",
  "Drop dead gorgous forest temple",
  "Twilight Princess",
  "SONG OF TIME T-Shirt"
]
body = [
  "One of my favorite fights",
  "Legend of Zelda by Conor Burke",
  "",
  "Worst reason ever",
  "Everybody learns their lesson at least once",
  "Illustrator/Legend of Zelda fan Jessica Smith, to celebrate Zelda Wii U coming out this year, painted this magnificent picture of what the…",
  "The Legend of Zelda: Twilight Princess watching this game is like watching a movie! (A GOOD movie :))",
  "SONG OF TIME T-Shirt"
]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486920993/3eac92deada76c095d8f6596665d1859_uipyms.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921104/ee14168cce175bb26fef3e7ebd18d66e_hpwy5x.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921164/57a60b7992c9befbf87bc0afddb5f18e_ck6ozf.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921245/cb16f47afd5826297c6cf70900449f65_pv8r60.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921303/c88986c49226db4ffee2eb4da005079c_gpr0cy.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921409/f5e0e7e644d817c048d5c1e7a4b7d0f2_bjqlld.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921455/25ca0beb814b6c125444828e70a01f33_hxciyv.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921519/f179a7b39588cf0b22a63d66d2171c01_eyxpx9.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 5, board_id: 10, title: title[idx], body: body[idx], image_url:image[idx]})
end
title = [
  "Now that you think about it...",
  "Gorgeous Shiek Fanart"
]
body = [
  "wut.",
  "Sheik (Princess Zelda's alter ego) ~ The Legend of Zelda: Ocarina of Time ~ Legend of Zelda Fan Art"
]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486921672/86b90495f58fc13714e5b8ccbebbdb70_lkrdd2.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486921785/067a765c276f3e51b91c82daabe3da27_aatpni.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 5, board_id: 10, title: title[idx], body: body[idx], image_url:image[idx]})
end

#board 11
Board.create({user_id: 5, name:"Dishonored"})
title = [
  "Dishonored 2!!!",
  "Corvo's shade"
]
body = [
  "Really intrigued, but knowing my computer, I can maybe just about handle the first game instead. Perhaps if I feel like a detour from the AC marathon...",
  "It is really fun to use game characters in RPG as NPCs... And really, really, REALLY fun to use them as villains... (Corvo from Dishonored by AJ Hateley)"
]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486921991/668cc69e5d32097ea84f92072f0c3561_hos5tj.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922049/65156b35789f72e84182a8c7113f8c56_pz3e4h.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 5, board_id: 11, title: title[idx], body: body[idx], image_url:image[idx]})
end

#board 12
Board.create({user_id: 6, name:"Pixar"})
title = [
  "Way too easy",
  "Gorgeous Wall-E",
  "One of my Favorites",
  "Here to take us to a better place...",
  "Up",
  "Monsters inc minimalist",
  "I love her"
]
body = [
  "",
  "Wall-E reminds me of one of my bff's he is so funny and does not talk much....wall-E",
  "Buzz & Woody, the leaders, try to save the toys while they overcome obstacles. Exactly what Odysseus did, which was also the leader in The Odyssey.",
  "The Claw by Danny Handke, Available in WonderGround Gallery in Downtown Disney District at the Disneyland Resort",
  "Austin's Mondo Gallery has partnered with Oh My Disney for a new art exhibit titled Nothing’s Impossible, which pays tribute to classic…",
  "",
  "I never look back, darling. It distracts from the now. -Edna Mode in 'The Incredibles', Pixar movie quotes"

]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486922210/cb60039057ce2efe6a9856d0069b4a08_mlcpee.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922267/552134ec3049f3adcd43fc38284cd67e_ou5cnb.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922343/0edec46280f825b6220026e87ec4f535_idz3dh.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922406/b1b1b2121c3d7895e3a880d871cd067b_azgd21.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922493/013be79bb1461d4440a39156d65515f1_mz6msn.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922557/8b3c44575d5303e713f098f0cb0c6bb1_u8lkbg.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922672/7524fa88a48afe2c4fb287e103166b20_hhy8f0.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 6, board_id: 12, title: title[idx], body: body[idx], image_url:image[idx]})
end
title = [
  "You look a little cold",
  "Pixar development process"
]
body = [
  "Remember to wrap up warm when outside in the snow.",
]
image = [
  "http://res.cloudinary.com/andoo/image/upload/v1486922739/3fe747f1e1073a3a6d68685a3980319f_h7ibop.jpg",
  "http://res.cloudinary.com/andoo/image/upload/v1486922843/95f6944d746ab0f53caf8a02ae9852c3_zwngp1.jpg"
]
image.each_index do |idx|
  Pin.create!({user_id: 6, board_id: 12, title: title[idx], body: body[idx], image_url:image[idx]})
end
