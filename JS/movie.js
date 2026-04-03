const params = new URLSearchParams(window.location.search);
const title = decodeURIComponent(params.get("title")).trim();
const genre = params.get("genre");
const movieData = {
 "Beast Of War": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/2xgDjVEOtu5LlbPEngxfbCqWEFg.jpg",
  desc: "A tense survival story where Australian soldiers face not only the perils of World War II but also the unforgiving power of nature. Stranded at sea, exhaustion and enemy threats pale compared to the relentless pursuit of a great white shark, turning survival into a battle between man and predator.",
  genre: "Action",
  rating: 5.4,
  duration: "1h 37m",
  trailer: "https://www.youtube.com/watch?v=QkzQvZpZp7g"
},
"Valiant On": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/sT8Z14RDCAd6szzxzWFAU4xcMwg.jpg",
  desc: "A gripping tale of courage under extreme circumstances. After a U.S. military helicopter crashes deep in North Korean territory, the surviving crew must rely on teamwork, trust, and difficult choices as every step toward freedom becomes a test of endurance and bravery.",
  genre: "Action",
  rating: 5.5,
  duration: "1h 45m",
  trailer: "https://www.youtube.com/watch?v=Q2z7hVvYcY8"
},
"Thunderbolts": {
  img: "https://static0.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2025/05/01685606_poster_w780.jpg",
  desc: "From the Marvel universe, an unconventional team of former villains and mercenaries is assembled for a covert mission. The film blends explosive action with psychological conflict, exploring loyalty, betrayal, and whether redemption is truly possible.",
  genre: "Action",
  rating: 7.1,
  duration: "2h 05m",
  trailer: "https://www.youtube.com/watch?v=JdZp9z7l2yM"
},
"Play Dirty": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ovZ0zq0NwRghtWI1oLaM0lWuoEw.jpg",
  desc: "A gritty crime thriller where betrayal lurks around every corner. Each character hides secrets, alliances crumble, and survival demands ruthless cunning. The film highlights the dark side of ambition and power in a world where trust is a luxury.",
  genre: "Action",
  rating: 5.9,
  duration: "1h 50m",
  trailer: "https://www.youtube.com/watch?v=JjQ0zQvZp7g"
},
"John Wick": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
  desc: "An iconic revenge saga sparked by personal loss. Legendary hitman John Wick is forced back into the underworld after gangsters destroy what he loves most. Stylish action sequences and meticulously choreographed combat make this film a modern classic.",
  genre: "Action",
  rating: 7.4,
  duration: "1h 41m",
  trailer: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ"
},
"Inception": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
  desc: "A mind-bending fusion of action and science fiction. Dom Cobb and his team infiltrate dreams to plant an idea in someone’s subconscious. The film explores the boundaries of reality, love, and loss, with stunning visuals that blur the line between imagination and truth.",
  genre: "Action",
  rating: 8.8,
  duration: "2h 28m",
  trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
},
"Avatar": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
  desc: "A breathtaking journey to Pandora, where Marine Jake Sully inhabits an avatar body to live among the Na’vi people. The film combines thrilling action with themes of belonging, harmony with nature, and the clash between humanity and the environment.",
  genre: "Action",
  rating: 7.9,
  duration: "2h 42m",
  trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
},
"Top Gun": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  desc: "A classic story of ambition and rivalry. Maverick, a hotshot pilot, pushes the limits at the elite Top Gun flight school. The film blends high-octane aerial combat with human drama and romance, cementing its place as an action staple.",
  genre: "Action",
  rating: 6.9,
  duration: "1h 50m",
  trailer: "https://www.youtube.com/watch?v=qAfbp3YX9F0"
},
"Fast & Furious 9": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/deEmLILTPejEb6OGsXRJ5MCvyDW.jpg",
  desc: "The adrenaline-fueled saga continues as Dom Toretto faces his estranged brother Jakob. Packed with over-the-top stunts and explosive action, the film explores themes of family, loyalty, and redemption amidst chaos.",
  genre: "Action",
  rating: 5.2,
  duration: "2h 23m",
  trailer: "https://www.youtube.com/watch?v=FUK2kdPsBws"
},
"The Dark Knight": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  desc: "A cinematic masterpiece where Batman confronts the unpredictable Joker. The film raises profound questions about justice and chaos, delivering intense action and psychological depth that redefine the superhero genre.",
  genre: "Action",
  rating: 9.0,
  duration: "2h 32m",
  trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
},
"Avengers: Infinity War": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  desc: "An epic Marvel showdown as heroes unite against Thanos, who seeks the six Infinity Stones to reshape the universe. The film balances massive action with emotional stakes, ending in a shocking climax that left audiences stunned.",
  genre: "Action",
  rating: 8.4,
  duration: "2h 29m",
  trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
},
"Spider-Man: No Way Home": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/e2LLmI5wKIrWGAy9Of3yyWu7Szn.jpg",
  desc: "Peter Parker’s life spirals into chaos after his identity is revealed. The film delivers thrilling action and heartfelt drama, with multiverse surprises that bring together heroes and villains from across Spider-Man’s cinematic history.",
  genre: "Action",
  rating: 8.2,
  duration: "2h 28m",
  trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
},
"Mad Max: Fury Road": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  desc: "A relentless chase across a scorched wasteland. Furiosa rebels against tyrant Immortan Joe, sparking a revolution filled with explosive action and stunning visuals. The film symbolizes freedom and defiance in a brutal world.",
  genre: "Action",
  rating: 8.1,
  duration: "2h 00m",
  trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8"
},
"Avengers: Endgame": {
  img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
  desc: "The grand finale of the Marvel saga. After devastating losses, the Avengers devise a daring plan involving time travel to undo Thanos’s destruction. The film blends action, emotion, and heartfelt farewells to beloved characters, making it a historic cinematic event.",
  genre: "Action",
  rating: 8.4,
  duration: "3h 01m",
  trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
},
"Extraction": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
  desc: "Haunted mercenary Tyler Rake embarks on a dangerous mission to rescue a kidnapped boy. The film delivers intense combat sequences while exploring the bond that forms between the hardened soldier and the child amidst relentless danger.",
  genre: "Action",
  rating: 6.8,
  duration: "1h 57m",
  trailer: "https://www.youtube.com/watch?v=L6P3nI6VnlY"
},
"The Matrix": {
  img: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  desc: "A groundbreaking sci-fi action film where computer hacker Neo discovers that the world around him is a simulated reality controlled by machines. Guided by Morpheus and Trinity, he must embrace his destiny as 'The One' to free humanity. The film blends philosophy, cyberpunk aesthetics, and revolutionary action sequences, redefining the genre and raising profound questions about reality and freedom.",
  genre: "Action",
  rating: 8.7,
  duration: "2h 16m",
  trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
},
"Dunki": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/kPRb1mbVHGop0egQ7153y0lhzGL.jpg",
  desc: "A heartfelt Bollywood drama directed by Rajkumar Hirani, starring Shah Rukh Khan. The film explores themes of friendship, migration, and the pursuit of dreams, blending humor, emotion, and social commentary in Hirani’s signature style.",
  genre: "Entertainment",
  rating: 6.5,
  duration: "2h 30m",
  trailer: "https://www.youtube.com/watch?v=8FkLRUJjGjc"
},
"Hoppers": {
  img: "https://all.web.img.acsta.net/r_2500_x/img/b2/32/b232f3817e425d7b6d421ab2b6bb9040.jpg",
  desc: "A dramatic tale of resilience and community, focusing on individuals who overcome adversity by relying on solidarity and hope. The film highlights the strength of human connection in the face of hardship.",
  genre: "Entertainment",
  rating: 7.5,
  duration: "1h 55m",
  trailer: "https://www.youtube.com/watch?v=example"
},
"Ninja Turtles": {
  img: "https://all.web.img.acsta.net/r_2500_x/img/01/03/01030982c860756a048f16b7c8fa0c9e.png",
  desc: "The Teenage Mutant Ninja Turtles rise from the sewers to protect New York City. Combining martial arts, humor, and brotherhood, the film showcases their battle against villains while embracing themes of teamwork and identity.",
  genre: "Entertainment",
  rating: 6.8,
  duration: "1h 41m",
  trailer: "https://www.youtube.com/watch?v=fmzWlPZf5dQ"
},
"Jumanji": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
  desc: "A magical board game unleashes jungle dangers into the real world. The film blends fantasy adventure with humor and suspense, as players must finish the game to restore order.",
  genre: "Entertainment",
  rating: 7.1,
  duration: "1h 44m",
  trailer: "https://www.youtube.com/watch?v=2U76x2fD_tE"
},
"Pirates of the Caribbean": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
  desc: "Captain Jack Sparrow sails through treacherous seas filled with curses, rival pirates, and supernatural forces. The film combines swashbuckling adventure, witty humor, and unforgettable characters in a thrilling journey.",
  genre: "Entertainment",
  rating: 8.1,
  duration: "2h 23m",
  trailer: "https://www.youtube.com/watch?v=naQr0uTrH_s"
},
"Harry Potter": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
  desc: "The iconic saga of a young wizard at Hogwarts. Harry Potter discovers his magical heritage, faces dark forces, and learns about friendship, courage, and destiny across a legendary fantasy series.",
  genre: "Entertainment",
  rating: 8.1,
  duration: "2h 32m",
  trailer: "https://www.youtube.com/watch?v=VyHV0BRtdxo"
},
"The Jungle Book": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/2Epx7F9X7DrFptn4seqn4mzBVks.jpg",
  desc: "Raised by wolves, Mowgli embarks on a journey of self-discovery in the jungle. Guided by Baloo and Bagheera, he faces Shere Khan while learning about belonging and survival.",
  genre: "Entertainment",
  rating: 7.3,
  duration: "1h 48m",
  trailer: "https://www.youtube.com/watch?v=5mkm22yO-bs"
},
"Avatar": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg",
  desc: "On Pandora, Marine Jake Sully inhabits an avatar body to live among the Na’vi people. The film blends breathtaking visuals, thrilling action, and themes of environmentalism and cultural respect.",
  genre: "Entertainment",
  rating: 7.9,
  duration: "2h 42m",
  trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
},
"Shrek": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
  desc: "An ogre named Shrek embarks on a quest to rescue Princess Fiona. Filled with humor, satire, and heart, the film redefines fairy tales with its unique blend of comedy and adventure.",
  genre: "Entertainment",
  rating: 7.9,
  duration: "1h 30m",
  trailer: "https://www.youtube.com/watch?v=CwXOrW2OelA"
},
"Shrek 2": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
  desc: "Shrek and Fiona visit her royal parents, leading to comedic chaos and unexpected challenges. The film expands the fairy tale world with new characters, witty humor, and heartfelt themes of acceptance.",
  genre: "Entertainment",
  rating: 7.4,
  duration: "1h 33m",
  trailer: "https://www.youtube.com/watch?v=xBgSfhp5Fxo"
},
"Coco": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
  desc: "Young Miguel journeys to the Land of the Dead to uncover his family’s legacy. The film celebrates music, memory, and cultural heritage, delivering a touching story about love and remembrance.",
  genre: "Entertainment",
  rating: 8.4,
  duration: "1h 45m",
  trailer: "https://www.youtube.com/watch?v=Ga6RYejo6Hk"
},
"Finding Nemo": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
  desc: "After his son Nemo is captured, Marlin embarks on an ocean-spanning quest with Dory. The film blends humor, adventure, and heartfelt emotion, highlighting themes of family and perseverance.",
  genre: "Entertainment",
  rating: 8.2,
  duration: "1h 40m",
  trailer: "https://www.youtube.com/watch?v=wZdpNglLbt8"
},
"Toy Story": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
  desc: "Woody, Buzz Lightyear, and a group of toys come to life when humans aren’t around. The film explores friendship, loyalty, and imagination, becoming a groundbreaking animated classic.",
  genre: "Entertainment",
  rating: 8.3,
  duration: "1h 21m",
  trailer: "https://www.youtube.com/watch?v=KYz2wyBy3kc"
},
"The Tony Alva Story": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/dUxZk4O4DiMwmSDHnDuhZl6IZUA.jpg",
  desc: "A documentary about Tony Alva, one of skateboarding’s pioneers. The film traces his influence on the sport, his rebellious spirit, and the cultural revolution he helped ignite.",
  genre: "Entertainment",
  rating: null,
  duration: "1h 30m",
  trailer: "https://www.youtube.com/watch?v=example"
},
"Finding Dory": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
  desc: "Dory, the forgetful fish, sets out to find her long-lost family. With humor and heart, the film explores themes of memory, belonging, and the importance of never giving up.",
  genre: "Entertainment",
  rating: 7.2,
  duration: "1h 37m",
  trailer: "https://www.youtube.com/watch?v=3JNLwlcPBPI"
},
"Tangled": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ym7Kst6a4uodryxqbGOxmewF235.jpg",
  desc: "Rapunzel, a princess with magical long hair, escapes her tower with the help of Flynn Rider. The film blends adventure, romance, and comedy, celebrating freedom and self-discovery.",
  genre: "Entertainment",
  rating: 7.7,
  duration: "1h 40m",
  trailer: "https://www.youtube.com/watch?v=JYKJrcQm7mw"
},
"Hereditary": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/hjlZSXM86wJrfCv5VKfR5DI2VeU.jpg",
  desc: "A chilling psychological horror where a grieving family unravels terrifying secrets after the death of their grandmother. As sinister forces close in, the film explores themes of trauma, fate, and the inescapable darkness within family bonds.",
  genre: "Horror",
  rating: 7.3,
  duration: "2h 07m",
  trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M"
},
"Clown In A Cornfield": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cTa1gSyUrvByw2uILt8iyJHbcRb.jpg",
  desc: "Teenagers in a small town are hunted by a killer clown lurking in the cornfields. The film mixes slasher thrills with social commentary, turning a rural setting into a nightmare of survival and fear.",
  genre: "Horror",
  rating: 6.0,
  duration: "1h 38m",
  trailer: "https://www.youtube.com/watch?v=example"
},
"The Nun": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
  desc: "Set in the Conjuring universe, a priest and a novice investigate a haunted abbey in Romania. They uncover the demonic entity Valak, leading to terrifying encounters in a gothic atmosphere filled with dread.",
  genre: "Horror",
  rating: 5.3,
  duration: "1h 36m",
  trailer: "https://www.youtube.com/watch?v=pzD9zGcUNrw"
},
"Chucky": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/x9DzkDWp8O82Wzxk6otuD9bce9a.jpg",
  desc: "The infamous killer doll returns, possessed by the spirit of a murderer. Combining dark humor with brutal horror, Chucky wreaks havoc while exploring themes of possession, fear, and twisted innocence.",
  genre: "Horror",
  rating: 6.6,
  duration: "1h 27m",
  trailer: "https://www.youtube.com/watch?v=9tZfXz2U2pA"
},
"The Conjuring": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
  desc: "Paranormal investigators Ed and Lorraine Warren help a family plagued by a dark presence in their farmhouse. The film blends supernatural terror with emotional stakes, becoming a modern classic in horror cinema.",
  genre: "Horror",
  rating: 7.5,
  duration: "1h 52m",
  trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o"
},
"Annabelle": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg",
  desc: "The cursed doll Annabelle becomes a conduit for evil, unleashing chaos and terror on those who encounter it. The film explores demonic possession and the dangers of objects tied to dark forces.",
  genre: "Horror",
  rating: 5.4,
  duration: "1h 39m",
  trailer: "https://www.youtube.com/watch?v=jbSkIvOQy9c"
},
"It": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
  desc: "In the town of Derry, children are hunted by Pennywise the Dancing Clown, a shape-shifting entity feeding on fear. The film combines supernatural horror with themes of friendship and courage against evil.",
  genre: "Horror",
  rating: 7.3,
  duration: "2h 15m",
  trailer: "https://www.youtube.com/watch?v=xKJmEC5ieOk"
},
"A Quiet Place": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  desc: "In a post-apocalyptic world, a family must live in silence to avoid deadly creatures that hunt by sound. The film delivers suspenseful tension while exploring themes of family, sacrifice, and resilience.",
  genre: "Horror",
  rating: 7.6,
  duration: "1h 30m",
  trailer: "https://www.youtube.com/watch?v=WR7cc5t7tv8"
},
"The Nun 2": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
  desc: "The demonic nun Valak returns, spreading terror across Europe. The sequel intensifies the gothic horror atmosphere, with chilling visuals and escalating supernatural threats.",
  genre: "Horror",
  rating: 5.6,
  duration: "1h 50m",
  trailer: "https://www.youtube.com/watch?v=QF-oyCwaArU"
},
"Us": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
  desc: "A family’s vacation turns nightmarish when they are confronted by their sinister doppelgängers. Jordan Peele’s horror explores identity, duality, and societal fears through unsettling imagery and psychological terror.",
  genre: "Horror",
  rating: 6.8,
  duration: "2h 01m",
  trailer: "https://www.youtube.com/watch?v=hNCmb-4oXJA"
},
"Weapons": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
  desc: "A disturbing horror-thriller weaving together multiple stories of violence, paranoia, and human cruelty. The film explores how fear and brutality manifest in different forms, creating an atmosphere of dread.",
  genre: "Horror",
  rating: 6.2,
  duration: "1h 42m",
  trailer: "https://www.youtube.com/watch?v=example"
},
"The Ritual": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/9022CYEGqYETCeXN1oE3uwYJWub.jpg",
  desc: "Four friends hiking in the Scandinavian wilderness encounter an ancient evil tied to Norse mythology. The film blends psychological tension with supernatural horror, highlighting guilt, grief, and survival.",
  genre: "Horror",
  rating: 6.3,
  duration: "1h 34m",
  trailer: "https://www.youtube.com/watch?v=Vfugwq2uoa0"
},
"The Invitation": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/otZMaGHWnKPgOODF6SSVNGqbI4X.jpg",
  desc: "A woman attends a dinner party that spirals into a sinister cult-like gathering. The film builds slow-burning tension, exploring paranoia, manipulation, and the horrors hidden beneath social facades.",
  genre: "Horror",
  rating: 6.0,
  duration: "1h 40m",
  trailer: "https://www.youtube.com/watch?v=5bL1ftuxgOE"
},
"Get Out": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/8oKNJEQjNNm1RGwhbFP9YqhxW9N.jpg",
  desc: "A young Black man visits his white girlfriend’s family estate, uncovering disturbing secrets beneath their hospitality. Jordan Peele’s acclaimed horror blends social commentary with psychological terror, exposing hidden racism and exploitation.",
  genre: "Horror",
  rating: 7.7,
  duration: "1h 44m",
  trailer: "https://www.youtube.com/watch?v=sRfnevzM9kQ"
},
"Talk to Me": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
  desc: "Teenagers discover a way to communicate with spirits using a cursed hand. The film delivers intense scares while exploring grief, temptation, and the dangerous allure of the supernatural.",
  genre: "Horror",
  rating: 7.1,
  duration: "1h 35m",
  trailer: "https://www.youtube.com/watch?v=aLAKJu9aJys"
},
"Sinister": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/nzx10sca3arCeYBAomHan4Q6wa1.jpg",
  desc: "A true-crime writer finds disturbing home videos depicting murders, leading him into a deadly connection with a demonic entity. The film blends investigative mystery with supernatural horror, creating an atmosphere of dread and inevitability.",
  genre: "Horror",
  rating: 6.8,
  duration: "1h 50m",
  trailer: "https://www.youtube.com/watch?v=_kbQAJR9YWQ"
},
"Superbad": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
  desc: "Two awkward high school friends set out to enjoy one last wild night before graduation. Filled with outrageous humor, teenage misadventures, and heartfelt moments, the film captures the chaos and excitement of growing up.",
  genre: "Comedy",
  rating: 7.6,
  duration: "1h 53m",
  trailer: "https://www.youtube.com/watch?v=4eaZ_48ZYog"
},
"Grown Ups": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cQGM5k1NtU85n4TUlrOrwijSCcm.jpg",
  desc: "Childhood friends reunite as adults after the death of their basketball coach. The film blends slapstick humor with themes of friendship, family, and nostalgia, showing how growing older doesn’t mean growing up.",
  genre: "Comedy",
  rating: 6.9,
  duration: "1h 42m",
  trailer: "https://www.youtube.com/watch?v=e01NVCveGkg"
},
"The Family Plan": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
  desc: "A suburban dad hides a secret past as a former assassin. When his old life resurfaces, he must protect his family while juggling everyday suburban chaos, blending action with comedic family dynamics.",
  genre: "Comedy",
  rating: 6.0,
  duration: "1h 50m",
  trailer: "https://www.youtube.com/watch?v=example"
},
"The Man from Toronto": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
  desc: "A case of mistaken identity forces a bumbling man to team up with a deadly assassin. The film mixes action and comedy, delivering laughs through mismatched personalities and chaotic situations.",
  genre: "Comedy",
  rating: 5.8,
  duration: "1h 52m",
  trailer: "https://www.youtube.com/watch?v=urqy8DrcGBs"
},
"The Mask": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/jPC2eYub74zwf2tPGVtzSlBW6Oy.jpg",
  desc: "A timid bank clerk discovers a magical mask that transforms him into a zany, unstoppable trickster. The film combines slapstick comedy, romance, and fantasy with Jim Carrey’s iconic performance.",
  genre: "Comedy",
  rating: 6.9,
  duration: "1h 41m",
  trailer: "https://www.youtube.com/watch?v=hz1lFJJJpYA"
},
"Mr. Bean's Holiday": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/bSSx9Sq6irWwN9NTQmoT9KE8kXn.jpg",
  desc: "Mr. Bean wins a trip to France, but his journey spirals into comedic disasters. With physical humor and silent antics, the film showcases Bean’s misadventures in a charming, family-friendly style.",
  genre: "Comedy",
  rating: 6.4,
  duration: "1h 30m",
  trailer: "https://www.youtube.com/watch?v=ljEMhFv7dXk"
},
"Home Alone": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
  desc: "Young Kevin McCallister is left behind when his family goes on vacation. He hilariously defends his home against burglars with clever traps, blending slapstick comedy with heartwarming family themes.",
  genre: "Comedy",
  rating: 7.7,
  duration: "1h 43m",
  trailer: "https://www.youtube.com/watch?v=jEDaVHmw7r4"
},
"Home Alone 2": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
  desc: "Kevin finds himself lost in New York City, facing the same burglars again. The film delivers comedic chaos with inventive traps, city adventures, and holiday spirit.",
  genre: "Comedy",
  rating: 6.8,
  duration: "2h 01m",
  trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
},
"Rush Hour": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/3WsLE6FtxEPRa6U9sbY1ckrn39s.jpg",
  desc: "A mismatched duo — Jackie Chan’s disciplined cop and Chris Tucker’s loud detective — team up to solve a kidnapping. The film blends martial arts action with sharp comedic banter.",
  genre: "Comedy",
  rating: 7.0,
  duration: "1h 38m",
  trailer: "https://www.youtube.com/watch?v=JMiFsFQcFLE"
},
"The Hangover": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/A0uS9rHR56FeBtpjVki16M5xxSW.jpg",
  desc: "Three friends wake up in Las Vegas with no memory of the previous night. As they retrace their steps, the film delivers outrageous comedy, shocking twists, and unforgettable misadventures.",
  genre: "Comedy",
  rating: 7.7,
  duration: "1h 40m",
  trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M"
},
"Jump Street 21": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
  desc: "Two underachieving cops go undercover in a high school to bust a drug ring. The film mixes action with sharp comedy, poking fun at teen culture and buddy-cop clichés.",
  genre: "Comedy",
  rating: 7.2,
  duration: "1h 49m",
  trailer: "https://www.youtube.com/watch?v=RLoKtb4c4W0"
},
"Free Guy": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/dxraF0qPr1OEgJk17ltQTO84kQF.jpg",
  desc: "A video game NPC discovers he’s living in a simulation. With humor, action, and heart, the film explores free will, identity, and love inside a colorful digital world.",
  genre: "Comedy",
  rating: 7.1,
  duration: "1h 55m",
  trailer: "https://www.youtube.com/watch?v=X2m-08cOAbc"
},
"Let's Be Cops": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/pf4FoUr2phn5WyZjU7rLXSiW1Ve.jpg",
  desc: "Two friends dress up as cops for fun, only to get caught in real criminal chaos. The film delivers buddy comedy with absurd situations and hilarious misunderstandings.",
  genre: "Comedy",
  rating: 6.4,
  duration: "1h 44m",
  trailer: "https://www.youtube.com/watch?v=5s4nQ_M0E4c"
},
"Red One": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
  desc: "A holiday-themed action-comedy where Santa Claus teams up with unlikely allies to save Christmas. The film blends festive cheer with explosive action and lighthearted humor.",
  genre: "Comedy",
  rating: 6.7,
  duration: "2h 02m",
  trailer: "https://www.youtube.com/watch?v=example"
},
"Zombieland": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
  desc: "In a zombie apocalypse, a group of quirky survivors navigates chaos with humor and inventive rules for survival. The film mixes horror with comedy, delivering laughs and thrills in equal measure.",
  genre: "Comedy",
  rating: 7.6,
  duration: "1h 28m",
  trailer: "https://www.youtube.com/watch?v=8m9EVP8X7N8"
},
"Central Intelligence": {
  img: "https://media.themoviedb.org/t/p/w600_and_h900_face/hXQVMbRNpf7c93e8clMY4W5DRm6.jpg",
  desc: "A mild-mannered accountant reunites with a former classmate turned CIA agent. The film blends action and comedy, highlighting friendship, trust, and the hilarity of mismatched partners in dangerous missions.",
  genre: "Comedy",
  rating: 6.3,
  duration: "1h 47m",
  trailer: "https://www.youtube.com/watch?v=MxEw3elSJ8M"
}
};
if (genre) {
  const relatedContainer = document.getElementById("related-container");

  const relatedMovies = Object.entries(movieData).filter(([key, m]) => m.genre === genre && key !== title);

  relatedMovies.forEach(([key, m]) => {
    const card = document.createElement("div");
    card.classList.add("related-card");
    card.setAttribute("data-title", key);

    card.innerHTML = `
      <img src="${m.img}" alt="${key}">
      <h3 class="h">${key}</h3>
    `;

    card.addEventListener("click", () => {
      window.location.href = `movie.html?title=${encodeURIComponent(key)}&genre=${encodeURIComponent(m.genre)}`;
    });

    relatedContainer.appendChild(card);
  });
}
const movie = movieData[title];
if (movie) {
  document.getElementById("movieTitle").textContent = title;
  document.getElementById("movieImg").src = movie.img;
  document.getElementById("movieDesc").textContent = movie.desc;
  document.getElementById("movieRating").textContent = `IMDb Rating: ${movie.rating}/10`;
  renderStars(movie.rating);
} else {
  document.getElementById("movieTitle").textContent = "Movie Not Found ❌";
  document.getElementById("movieDesc").textContent = "No description available.";
}
document.querySelector(".save-btn").addEventListener("click", () => {
  const title = document.getElementById("movieTitle").textContent;
  const desc = document.getElementById("movieDesc").textContent;
  const img = document.getElementById("movieImg").src;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.some(movie => movie.title === title)) {
    favorites.push({ title, desc, img });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("The movie has been saved to favorites ❤️");
  } else {
    alert("The movie is already in my favorites");
  }
});
document.querySelector(".watch-btn").addEventListener("click", () => {
  if (movie.trailer) {
    window.open(movie.trailer, "_blank");
  } else {
    alert("Trailer not available 🎥");
  }
});
document.querySelector(".download-btn").addEventListener("click", () => {
  const imgUrl = document.getElementById("movieImg").src;
  const link = document.createElement("a");
  link.href = imgUrl;
  link.download = "movie-poster.jpg"; 
  link.click();
});

const from = params.get("from");

if (from === "favorites") {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const relatedContainer = document.getElementById("related-container");

  const relatedMovies = favorites.filter(movie => movie.title !== title);

  relatedMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("related-card");
    card.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <h3 class="h">${movie.title}</h3>
    `;
    card.addEventListener("click", () => {
      window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}&from=favorites`;
    });
    relatedContainer.appendChild(card);
  });
}
function renderStars(rating) {
  const starsContainer = document.getElementById("stars");
  starsContainer.innerHTML = "";

  const starCount = Math.round(rating / 2);

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.textContent = "★";
    star.style.fontSize = "24px";
    star.style.color = i <= starCount ? "gold" : "gray";
    starsContainer.appendChild(star);
  }
}
document.getElementById("movieDuration").textContent = `Movie Duration : ${movie.duration}`;
