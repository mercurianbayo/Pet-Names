// 🐾 PetNameIt: Gender-based Pet Name Generator with Confetti

const generateBtn = document.getElementById("generateBtn");
const nameList = document.getElementById("nameList");

const maleNames = [
  "Milo", "Cooper", "Finn", "Bear", "Zeus", "Simba", "Baxter", "Max", "Buddy", "Charlie", "Cooper", "Rocky", "Toby", "Duke", "Bear", "Lucky", "Leo",
  "Jack", "Milo", "Oscar", "Finn", "Teddy", "Rusty", "Zeus", "Apollo", "Hunter", "Thor",
  "Shadow", "Diesel", "Ollie", "Baxter", "Bandit", "Ace", "Simba", "Rex", "Bruno", "Gizmo",
  "Chase", "Moose", "Winston", "Murphy", "Bentley", "Arlo", "Casper", "Scooby", "Cody", "Jake",
  "Archie", "Copper", "Jasper", "Maverick", "Riley", "Koda", "Tank", "Blaze", "Ranger", "Bolt",
  "Ziggy", "Remy", "Louie", "Rocco", "Hank", "Atlas", "Titan", "Odin", "Spike", "Dexter",
  "Chico", "Dash", "Prince", "Skipper", "Bruce", "King", "Diesel", "Cosmo", "Comet", "Goose",
  "Buster", "Pablo", "Smokey", "Beau", "Shadow", "Flint", "Phoenix", "Storm", "Hugo", "Rustle",
  "Frost", "Knight", "Rolo", "Echo", "Hawk", "Zephyr", "Jet", "Dax", "Blue", "Axel", "Neo",
  "Saber", "Tango", "Rocket", "Draco", "Bandit", "Whiskey", "Rascal", "Blitz", "Indie", "Gunner", 
    'Pixel','Orbit','Cosmo','Neo','Riot','Onyx','Jupiter','Zorro','Nimbus','Tango',
    'Zenon','Rogue','Knight','Shadowfax','Lynx','Turbo','Vortex','Zero','Drift','Kairo',
    'Fable','Rune','Comet','Arlo','Mochi','Taro','Ashen','Indie','Echo','Blitz',
    'Nova','Zuko','Taz','Miso','Frost','Rumble','Obi','Saber','Kael','Riddle',
    'Cricket','Volt','Wisp','Rexar','Tango','Yoshi','Orbitz','Skipper','Storm','Zen',
    'Astro','Phantom','Nimbus','Rogue','Quest','Matrix','Talon','Pixelton','Rexley','Halo',
    'Fynn','Whisker','Marz','Cypher','Tempo','Rune','Bolt','Loki','Rocket','Dusty',
    'Vader','Sonic','Atlas','Nero','Riff','Ajax','Omen','Titan','Rascal','Argo',
    'Spike','Juno','Echoe','Mango','Dusk','Draco','Zoro','Hubble','Kairox','Tazzy',
    'Flint','Rubble','Jetson','Turboon','Ozzy','Crimson','Kodaq','Driftwood','Nimbuson','Fennec',
    'Pixelby','Brix','Orbiton','Hux','Echoar','Novael','Lyric','Zephyr','Riddon','Aero',
    'Draco','Vex','Runeon','Wolfe','Ozric','Tracer','Cometix','Kairoon','Axion','Roguee',
    'Mylo','Tempoon','Coda','Skye','Nash','Ollix','Ardyn','Talonix','Vox','Rexor',
    'Pippin','Remix','Stormix','Blip','Froston','Kiro','Zyro','Nugget','Rockett','Biscuit',
    'Bongo','Cobalt','Ashur','Neoan','Driftix','Pixelar','Zeek','Onyxon','Auron','Blazeon',
    'Rift','Mojo','Nimbusy','Cosmix','Tazko','Echoid','Kairoz','Zephyro','Sonicx','Frodo',
    'Argoon','Boltic','Haloid','Runeir','Jetir','Fynnix','Aeroon','Tobyn','Ashin','Cometron',
    'Rexic','Nox','Vexar','Stormir','Driftar','Orion','Tempoid','Axionz','Crux','Wispir',
    'Maverix','Zenith','Fenn','Quill','Echoen','Blitzar','Novaq','Frostic','Nimbusar','Saberon',
    'Dray','Haven','Mochin','Jinx','Rover','Tobi','Axen','Sparx','Duston','Roguex',
    'Whisk','Runez','Zephyron','Cyphex','Blaize','Orionz','Flare','Mynx','Rexen','Tazir',
    'Zenonix','Blazer','Nuggetz','Airi','Jazzy','Echozen','Riddex','Auronix','Cometon','Kaelix',
    'Baxteron','Zephyrin','Tobix','Astroix','Haloen','Kairoir','Nimbuson','Driftin','Vortexon','Axelix',
    'Rumblez','Spikeon','Jetirx','Orbitir','Pixelor','Runeen','Echoin','Novaon','Voxen','Tazzen',
    'Riddonx','Auronar','Nimbusix','Driftor','Vexon','Stormen','Rogueir','Ashir','Cometir','Zephyren',
    'Kairoen','Fynnor','Haloix','Boltix','Sonicor','Maveron','Runeor','Nimbusir','Orbiten','Axionix',
    'Driftzen','Echozenx','Zephyrix','Rogueon','Talonar','Cometixx','Nimbusirx','Haloirx','Axenon','Kairoix',
    'Novaen','Tobior','Orbitenx','Echoor','Runeix','Nimbusonx','Pixelir','Zephyronx','Rogueix','Auronor',
    'Driftirx','Vexir','Fynnir','Sonicix','Boltirx','Nimbusixx','Cometor','Haloir','Echoorx','Axionor',
    'Kairoxx','Runeirx','Rogueonx','Orbitix','Zephyrox','Novaix','Nimbusirz','Echoenx','Pixelix','Auronixx',
    'Driftzenx','Halozen','Runezen','Vexzen','Orbitzen','Kairozen','Nimbuszen','Echozenz','Cometzen','Zephyrzen',
    'Shadowzen','Tobizen','Axionzen','Roguezen','Pixelzen','Novazen','Halozenx','Fynnzen','Nimbuszenx','Runezenx',
    'Driftzenz','Orbitzenx','Kairozenx','Echozenix','Zephyrzenx','Cometzenx','Vexzenx','Halozenix','Nimbuszenix','Runezenix'
    ];
    
];

const femaleNames = [
  "Sadie", "Zoe", "Willow", "Ruby", "Chloe", "Penny", "Minnie", "Bella", "Luna", "Lucy", "Daisy", "Molly", "Lola", "Sadie", "Bailey", "Stella", "Maggie",
  "Chloe", "Sophie", "Rosie", "Ruby", "Zoey", "Roxy", "Coco", "Gracie", "Ellie", "Nala",
  "Penny", "Lily", "Mia", "Millie", "Willow", "Hazel", "Harper", "Olive", "Dixie", "Ginger",
  "Sasha", "Minnie", "Winnie", "Lady", "Abby", "Belle", "Maya", "Lexi", "Honey", "Lulu",
  "Emma", "Layla", "Pepper", "Ivy", "Holly", "Skye", "Nova", "Mocha", "Trixie", "Poppy",
  "Queenie", "Stormy", "Pearl", "Misty", "Cookie", "Kona", "Athena", "Mochi", "Sandy", "Freya",
  "Angel", "Pumpkin", "Biscuit", "Dottie", "Cupcake", "Pixie", "Juno", "Snowy", "Blossom", "Cleo",
  "Cherry", "Echo", "Lacey", "Zara", "Sunny", "Nikki", "Suki", "Foxy", "Peach", "Velvet",
  "Cinnamon", "Kira", "Amber", "Sage", "Daisy Mae", "Muffin", "Jellybean", "Buttercup", "Gigi", "Rosita",
  "Star", "Twinkle", "Nori", "Peppa", "Pudding", "Bambi", "Dewdrop", "Marble", "Shimmer", "Petal",
    'Pixie','Nova','Echo','Lyra','Artemis','Nyx','Ember','Fae','Astra','Halo',
    'Luma','Indie','Vega','Sable','Zinnia','Opal','Karma','Nimbus','Cinder','Seren',
    'Lilo','Kiko','Zephyr','Aura','Meadow','Nixie','Zelda','Whisper','Stormy','Juniper',
    'Lynxie','Cricket','Zora','Aster','Marzipan','Eclipse','Vivi','Velvet','Starla','Mochin',
    'Locket','Mistyx','Arwen','Runa','Frostine','Twix','Petal','Galaxy','Blossom','Azura',
    'Nyra','Venus','Snowdrop','Echoa','Clover','Runea','Breezy','Haloa','Zerra','Lyric',
    'Dreamy','Auri','Pixa','Nirra','Tazzie','Kiora','Meeka','Sundae','Flora','Wynna',
    'Cloudy','Ciri','Driftie','Amara','Onya','Roxi','Nimboo','Twila','Aurae','Velra',
    'Eluna','Mistra','Puffin','Sablee','Lunara','Oceana','Mavie','Stellae','Feather','Nyani',
    'Rainy','Tizzy','Sunnie','Petunie','Moxie','Flit','Junia','Fayra','Lunelle','Seraph',
    'Elaria','Zephyra','Auriella','Cindara','Velara','Rivka','Saphie','Nymra','Emberlyn','Vixie',
    'Whimsy','Aurix','Zazzy','Tindra','Saphira','Fiora','Calypso','Noelie','Zira','Bloomie',
    'Lunelle','Ravena','Mistral','Twilia','Celest','Shira','Saria','Echolette','Kallie','Drifta',
    'Marzi','Opala','Nyelle','Zerelle','Trixara','Arielle','Featherlyn','Cindrix','Aurorae','Nixelle',
    'Blossi','Starra','Moonie','Dreama','Lilira','Zephyrella','Solei','Tindrax','Petalyn','Nympha',
    'Aurette','Velina','Elariel','Wynx','Aeris','Driftelle','Lyriel','Haloen','Saphirra','Ciriella',
    'Zinnelle','Celeste','Astraea','Virelle','Lunessa','Mistrel','Nyxia','Viora','Elaris','Auryn',
    'Pixelle','Zephyla','Florie','Viona','Naria','Haloira','Lunelia','Embera','Saphina','Tindrae',
    'Cleoelle','Aurayne','Oceania','Nivra','Velixa','Rivella','Starixa','Dreamelle','Petalira','Mistrielle',
    'Faylen','Zeressa','Zephyella','Auriara','Nixira','Saphirielle','Haloara','Velaris','Cindelle','Aurielle',
    'Lunessae','Astraelle','Zephyana','Mistara','Echoira','Ciriara','Pixina','Driftae','Vynessa','Nyxa',
    'Fiorael','Aelira','Zephyta','Aurina','Haloena','Nivelle','Elarielle','Velixa','Saphara','Zoraya',
    'Dreamira','Nyrielle','Tindraira','Cindira','Lunelix','Auranelle','Pixaria','Zinnira','Veliana','Emberelle',
    'Nixara','Aelindra','Celestira','Haloenne','Auriellae','Saphinae','Mistelle','Zephyara','Auriria','Lunaira',
    'Nyara','Rivielle','Petalix','Dreamix','Velaria','Ciriellae','Echoina','Haloina','Saphielle','Aurelia',
    'Vynara','Zephyanna','Aurilix','Mistarae','Pixellea','Lunaira','Velirra','Emberra','Cindrisa','Fayra',
    'Zorielle','Haloessa','Aurienne','Elarixa','Zephyxia','Aelirra','Nymissa','Auriarae','Driftaea','Saphirra',
    'Mistralyn','Petalirae','Velirra','Haloirae','Zinnirra','Lunirra','Echoarra','Cindrella','Auriellea','Nyxelle',
    'Floriala','Zephyrea','Veliona','Aurisa','Aelora','Luniria','Saphirya','Haloesia','Elariana','Mistalia',
    'Viorina','Petalisa','Dreamona','Nyxiaa','Zoriella','Aurisia','Cindarae','Zephyrena','Lunessae','Haloanna',
    'Velistra','Elarisia','Aelinna','Aurishka','Saphinna','Pixella','Zinnessa','Cirianna','Driftaena','Velorina',
    'Rivellae','Nixarie','Haloenia','Aurista','Lunisia','Zephyrose','Elarisse','Mistora','Saphirelle','Nyrella',
    'Velionna','Petalisse','Auriella','Dreamirae','Haloise','Zephyannae','Aurirra','Elarenia','Velisse','Lunisha',
    'Pixaris','Saphina','Zephyiri','Haloetta','Ciriellaa','Aelaria','Mistavia','Aurinae','Velania','Driftera',
    'Zinnaris','Elarissea','Haloera','Aurilisse','Nymelle','Pixirra','Sapharra','Velionae','Lunisha','Zephyessa',
    'Dreamassa','Aurialle','Cindellia','Haloira','Velairra','Zinnarae','Lunisiae','Aurellia','Elarith','Mistira',
    'Zephyrella','Pixirielle','Haloettae','Velirissa','Aurietta','Cindrella','Dreamarie','Nixirae','Saphirra','Luniriae',
    'Zephyela','Velorie','Haloisia','Auristae','Pixira','Mistanna','Ciriellae','Zinnara','Sapharia','Lunelina',
    'Auriera','Veliryn','Haloenna','Driftra','Zephyrette','Petallia','Nymirra','Echoarra','Aurien','Vynora',
    'Saphinnia','Haloene','Lunisiax','Velariel','Aelissa','Zephyina','Pixessa','Aurisiax','Cindalyn','Dreamaria',
    'Velariax','Elariv','Haloannae','Lunissia','Auristra','Mistrell','Zephyelle','Nymissa','Saphiriax','Pixiryn',
    'Driftaera','Haloenna','Velissia','Aurisse','Elariah','Zinnirax','Petalina','Dreamellee','Lunirielle','Zephyira'
    ];
    
];

// 🧠 Random helper
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🎊 Confetti effect by color
function burstConfetti(color) {
  const duration = 800;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: [color],
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: [color],
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// 📋 Copy to clipboard
function copyName(name) {
  navigator.clipboard.writeText(name);
  alert(`Copied "${name}" to clipboard!`);
}

// 🚀 Generate pet name
function generatePetName() {
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    alert("Please select Male or Female 🐶🐱");
    return;
  }

  const name =
    gender.value === "male"
      ? pick(maleNames)
      : pick(femaleNames);

  const color = gender.value === "male" ? "#4A90E2" : "#FF69B4"; // blue or pink
  nameList.innerHTML = `
    <div class="name-item">
      <h2>${name}</h2>
      <button onclick="copyName('${name}')">📋 Copy</button>
    </div>
  `;

  burstConfetti(color);
}

// 🪄 Bind button
generateBtn.addEventListener("click", generatePetName);
