const params = new URLSearchParams(window.location.search);
const title = decodeURIComponent(params.get("title")).trim();

const movieData = {
  "Beast Of War": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/2xgDjVEOtu5LlbPEngxfbCqWEFg.jpg",
    desc: "Set during World War II, a group of Australian soldiers stranded at sea must battle exhaustion, enemy forces, and the terrifying presence of a great white shark. It’s a tense survival story blending war drama with primal fear."
  },
  "Valiant On": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/sT8Z14RDCAd6szzxzWFAU4xcMwg.jpg",
    desc: "After a U.S. military helicopter crashes deep in North Korean territory, the surviving crew must navigate hostile land, evade capture, and rely on courage and teamwork to make it out alive. A gripping tale of endurance and loyalty."
  },
  "Thunderbolts": {
    img: "https://static0.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2025/05/01685606_poster_w780.jpg",
    desc: "Marvel’s unconventional team of anti-heroes and reformed villains are brought together for a covert mission. With fractured trust and conflicting motives, they must prove whether redemption is possible or if chaos will consume them."
  },
  "Play Dirty": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ovZ0zq0NwRghtWI1oLaM0lWuoEw.jpg",
    desc: "A gritty crime thriller where betrayal lurks at every corner. In a world of corruption and double-crosses, the protagonist is forced into a violent struggle for survival, questioning who can truly be trusted."
  },
  "John Wick": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
    desc: "Legendary hitman John Wick is pulled back into the underworld after gangsters kill his beloved dog — the last gift from his late wife. His quest for vengeance ignites a brutal war against the Russian mob, showcasing relentless action and mythic intensity."
  },
  "Inception": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    desc: "Dom Cobb, a skilled thief of subconscious secrets, is offered redemption if he can perform the impossible: planting an idea inside someone’s mind. As dreams fold into dreams, reality blurs, creating a mind-bending exploration of memory, guilt, and imagination."
  },
  "Avatar": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    desc: "On the lush alien world of Pandora, Marine Jake Sully inhabits an avatar body to interact with the Na’vi people. Torn between duty to his military orders and his growing bond with the Na’vi, he faces a choice that will decide the fate of a planet."
  },
  "Top Gun": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    desc: "At the elite Top Gun flight school, hotshot pilot Maverick pushes the limits of aerial combat while clashing with rival Iceman. Beyond the adrenaline, he must confront personal fears, loss, and the meaning of true leadership."
  },
  "Fast & Furious 9": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/deEmLILTPejEb6OGsXRJ5MCvyDW.jpg",
    desc: "Dom Toretto’s quiet life is shattered when his estranged brother Jakob resurfaces, aligned with a dangerous terrorist. Packed with high-speed chases, daring stunts, and themes of family, the crew faces their most personal and explosive mission yet."
  },
  "The Dark Knight": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    desc: "Batman, Commissioner Gordon, and Harvey Dent wage war against Gotham’s crime — until the Joker emerges, a chaotic mastermind who thrives on moral dilemmas. The film explores sacrifice, corruption, and the thin line between heroism and vigilantism."
  },
  "Avengers: Infinity War": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    desc: "Thanos embarks on a ruthless quest to collect the six Infinity Stones, aiming to erase half of all life. The Avengers and their allies unite across galaxies in a desperate, large-scale battle that ends with devastating consequences."
  },
  "Spider-Man: No Way Home": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/e2LLmI5wKIrWGAy9Of3yyWu7Szn.jpg",
    desc: "Peter Parker’s identity revealed throws his life into chaos. Seeking Doctor Strange’s help, a spell gone wrong opens the multiverse, unleashing villains from other realities. With allies old and new, Spider-Man faces his greatest test of responsibility."
  },
  "Mad Max: Fury Road": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    desc: "In a scorched desert wasteland ruled by warlords, Furiosa rebels against Immortan Joe and escapes with his captives. Joined by Max, they race across the desert in a relentless pursuit, blending explosive action with themes of freedom and survival."
  },
  "Avengers: Endgame": {
    img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    desc: "After the catastrophic loss to Thanos, the Avengers devise a daring plan: time travel to reclaim the Infinity Stones. The saga culminates in an epic showdown, marked by sacrifice, closure, and Tony Stark’s ultimate act of heroism."
  },
  "Extraction": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
    desc: "Haunted mercenary Tyler Rake takes on a perilous mission to rescue a kidnapped boy from a city controlled by ruthless gangs. Brutal combat and emotional stakes collide in this relentless action thriller."
  },
  "The Matrix": {
    img: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    desc: "Computer hacker Neo discovers that reality is a simulated construct controlled by machines. Guided by Morpheus and Trinity, he must embrace his destiny as ‘The One’ to lead humanity’s fight for freedom against the system."
  },
  "Dunki": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/kPRb1mbVHGop0egQ7153y0lhzGL.jpg",
    desc: "A heartfelt Bollywood drama directed by Rajkumar Hirani, starring Shah Rukh Khan. It explores the struggles of Indians using illegal immigration routes called 'donkey flights' to reach foreign lands, blending humor, emotion, and social commentary."
  },
  "Hoppers": {
    img: "https://all.web.img.acsta.net/r_2500_x/img/b2/32/b232f3817e425d7b6d421ab2b6bb9040.jpg",
    desc: "A dramatic tale of resilience and community, focusing on individuals navigating challenges in a changing world. Themes of identity, belonging, and perseverance drive the narrative."
  },
  "Ninja Turtles": {
    img: "https://all.web.img.acsta.net/r_2500_x/img/01/03/01030982c860756a048f16b7c8fa0c9e.png",
    desc: "The Teenage Mutant Ninja Turtles rise from the sewers to protect New York City. With martial arts, humor, and brotherhood, they battle villains like Shredder while embracing their unique personalities."
  },
  "Jumanji": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
    desc: "A magical board game unleashes jungle dangers into the real world. Players must finish the game to survive, blending adventure, comedy, and fantasy with thrilling challenges."
  },
  "Pirates of the Caribbean": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
    desc: "Captain Jack Sparrow sails through treacherous seas filled with cursed treasure, rival pirates, and supernatural forces. A swashbuckling adventure mixing humor, fantasy, and epic battles."
  },
  "Harry Potter": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    desc: "The iconic saga of a young wizard at Hogwarts School of Witchcraft and Wizardry. Harry faces dark forces, friendships, and destiny in a magical world full of wonder and danger."
  },
  "The Jungle Book": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/2Epx7F9X7DrFptn4seqn4mzBVks.jpg",
    desc: "Raised by wolves, Mowgli embarks on a journey through the jungle, encountering friends like Baloo and Bagheera and enemies like Shere Khan. A timeless story of survival and belonging."
  },
  "Avatar": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg",
    desc: "On Pandora, Marine Jake Sully inhabits an avatar body to connect with the Na’vi people. Torn between duty and love, he must choose between exploiting the planet or defending it."
  },
  "Shrek": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    desc: "An ogre named Shrek embarks on a quest to rescue Princess Fiona, discovering friendship and love along the way. A witty fairy-tale parody filled with humor and heart."
  },
  "Shrek 2": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
    desc: "Shrek and Fiona visit her royal parents, facing disapproval and magical chaos. A hilarious sequel that expands the fairy-tale world with new characters and adventures."
  },
  "Coco": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
    desc: "Young Miguel journeys to the Land of the Dead to uncover his family’s secrets and pursue his dream of music. A vibrant Pixar film celebrating heritage, memory, and love."
  },
  "Finding Nemo": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    desc: "After his son Nemo is captured, Marlin embarks on an ocean-spanning quest with Dory. A heartfelt Pixar adventure about family, courage, and perseverance."
  },
  "Toy Story": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    desc: "Woody, Buzz Lightyear, and a group of toys come to life when humans aren’t around. A groundbreaking Pixar film exploring friendship, loyalty, and imagination."
  },
  "The Tony Alva Story": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/dUxZk4O4DiMwmSDHnDuhZl6IZUA.jpg",
    desc: "A documentary about Tony Alva, one of skateboarding’s pioneers. It traces his rebellious spirit, influence on the sport, and lasting cultural impact."
  },
  "Finding Dory": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
    desc: "Dory, the forgetful fish, sets out to find her long-lost family. A touching Pixar sequel about memory, identity, and the importance of home."
  },
  "Tangled": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    desc: "Rapunzel, a princess with magical long hair, escapes her tower with the help of Flynn Rider. A Disney adventure filled with humor, romance, and dazzling animation."
  },
  "Hereditary": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/hjlZSXM86wJrfCv5VKfR5DI2VeU.jpg",
    desc: "A chilling psychological horror where a family unravels dark secrets after the death of their grandmother. Grief, trauma, and supernatural forces collide in a terrifying descent into madness."
  },
  "Clown In A Cornfield": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cTa1gSyUrvByw2uILt8iyJHbcRb.jpg",
    desc: "Teenagers in a small town are hunted by a killer clown in the cornfields. A slasher tale mixing modern fears with classic horror tropes."
  },
  "The Nun": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    desc: "Set in the Conjuring universe, a priest and a novice investigate a haunted abbey in Romania, facing the demonic entity Valak in terrifying encounters."
  },
  "Chucky": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/x9DzkDWp8O82Wzxk6otuD9bce9a.jpg",
    desc: "The infamous killer doll returns, possessed by the spirit of a murderer. Chucky wreaks havoc with dark humor and brutal killings."
  },
  "The Conjuring": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    desc: "Paranormal investigators Ed and Lorraine Warren help a family plagued by a dark presence in their farmhouse. Based on true events, it’s a cornerstone of modern supernatural horror."
  },
  "Annabelle": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg",
    desc: "The cursed doll Annabelle becomes a conduit for evil, terrorizing those who come into contact with her. A spine-chilling story tied to the Conjuring universe."
  },
  "It": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    desc: "In Derry, children are hunted by Pennywise the Dancing Clown, a shape-shifting entity feeding on fear. A terrifying adaptation of Stephen King’s classic novel."
  },
  "A Quiet Place": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    desc: "In a post-apocalyptic world, a family must live in silence to avoid deadly creatures that hunt by sound. A tense, emotional survival horror."
  },
  "The Nun 2": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    desc: "The demonic nun Valak returns, spreading terror across Europe. Sister Irene faces her most dangerous battle against evil forces."
  },
  "Us": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
    desc: "A family’s vacation turns nightmarish when they are confronted by their sinister doppelgängers. Jordan Peele’s horror explores identity, society, and hidden darkness."
  },
  "Weapons": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
    desc: "A disturbing horror-thriller weaving together multiple stories of violence and paranoia, exploring the destructive power of fear and human cruelty."
  },
  "The Ritual": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/9022CYEGqYETCeXN1oE3uwYJWub.jpg",
    desc: "Four friends hiking in the Scandinavian wilderness encounter an ancient evil lurking in the forest. A folk horror blending psychological dread with mythological terror."
  },
  "The Invitation": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/otZMaGHWnKPgOODF6SSVNGqbI4X.jpg",
    desc: "A woman attends a dinner party that spirals into a sinister cult-like gathering. A slow-burn horror about trust, manipulation, and survival."
  },
  "Get Out": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/8oKNJEQjNNm1RGwhbFP9YqhxW9N.jpg",
    desc: "A young Black man visits his white girlfriend’s family estate, uncovering disturbing secrets. Jordan Peele’s acclaimed horror blends social commentary with psychological terror."
  },
  "Talk to Me": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    desc: "Teenagers discover a way to communicate with spirits using a cursed hand. What begins as a thrill spirals into possession and tragedy."
  },
  "Sinister": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/nzx10sca3arCeYBAomHan4Q6wa1.jpg",
    desc: "A true-crime writer finds disturbing home videos depicting murders, uncovering a demonic entity tied to the killings. A haunting mix of mystery and supernatural horror."
  },
  "Superbad": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    desc: "Two awkward high school friends set out to enjoy one last wild night before graduation. A hilarious coming-of-age comedy filled with misadventures, crude humor, and heartfelt friendship."
  },
  "Grown Ups": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cQGM5k1NtU85n4TUlrOrwijSCcm.jpg",
    desc: "Childhood friends reunite as adults after the death of their basketball coach. With families in tow, they rediscover fun, friendship, and the chaos of growing older."
  },
  "The Family Plan": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
    desc: "A suburban dad hides a secret past as a former assassin. When enemies resurface, he must protect his family while balancing comedy, action, and heartfelt moments."
  },
  "The Man from Toronto": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
    desc: "A case of mistaken identity forces a bumbling man to team up with a deadly assassin known as 'The Man from Toronto.' Action and comedy collide in this buddy adventure."
  },
  "The Mask": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/jPC2eYub74zwf2tPGVtzSlBW6Oy.jpg",
    desc: "A timid bank clerk discovers a magical mask that transforms him into a zany, cartoonish hero. Jim Carrey’s iconic performance blends slapstick humor with fantasy chaos."
  },
  "Mr. Bean's Holiday": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/bSSx9Sq6irWwN9NTQmoT9KE8kXn.jpg",
    desc: "Mr. Bean wins a trip to France, but his journey spirals into comedic disasters. A lighthearted adventure full of physical comedy and classic Bean antics."
  },
  "Home Alone": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
    desc: "Young Kevin McCallister is left behind when his family goes on vacation. He defends his home from bumbling burglars with clever traps and endless laughs."
  },
  "Home Alone 2": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    desc: "Kevin finds himself lost in New York City, facing the same burglars again. With wit and resourcefulness, he turns the city into his playground of pranks."
  },
  "Rush Hour": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/3WsLE6FtxEPRa6U9sbY1ckrn39s.jpg",
    desc: "A mismatched duo — Jackie Chan’s disciplined cop and Chris Tucker’s loud detective — team up to solve a kidnapping. Action-packed comedy with unforgettable banter."
  },
  "The Hangover": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/A0uS9rHR56FeBtpjVki16M5xxSW.jpg",
    desc: "Three friends wake up in Las Vegas with no memory of the previous night and a missing groom. A raunchy comedy of outrageous misadventures and shocking surprises."
  },
  "Jump Street 21": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    desc: "Two underachieving cops go undercover in a high school to bust a drug ring. A sharp mix of action, satire, and laugh-out-loud moments."
  },
  "Free Guy": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/dxraF0qPr1OEgJk17ltQTO84kQF.jpg",
    desc: "A video game NPC discovers he’s living in a simulation. With humor and heart, he becomes a hero in a digital world full of chaos."
  },
  "Let's Be Cops": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/pf4FoUr2phn5WyZjU7rLXSiW1Ve.jpg",
    desc: "Two friends dress up as cops for fun, only to get caught in real criminal chaos. A buddy comedy of mistaken identity and wild antics."
  },
  "Red One": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    desc: "A holiday-themed action-comedy where Santa Claus teams up with unlikely allies to save Christmas. A mix of festive cheer and explosive fun."
  },
  "Zombieland": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
    desc: "In a zombie apocalypse, a group of survivors navigates chaos with humor, quirky rules, and over-the-top action. A horror-comedy cult classic."
  },
  "Central Intelligence": {
    img: "https://media.themoviedb.org/t/p/w600_and_h900_face/hXQVMbRNpf7c93e8clMY4W5DRm6.jpg",
    desc: "A mild-mannered accountant reunites with a former classmate turned CIA agent. Together they stumble through espionage and comedy in a buddy adventure."
  },
};
const movie = movieData[title];
if (movie) {
  document.getElementById("movieTitle").textContent = title;
  document.getElementById("movieImg").src = movie.img;
  document.getElementById("movieDesc").textContent = movie.desc;
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
  window.open("#", "_blank");
});


