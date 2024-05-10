function generateSeed(name) {
  //take user's name, use length to generate a random seed.
  name = name.substr(0, 6);
  var seed = Math.random() * name.length + 1;
  return seed;
}

function selectMessageTemplate(seed, durationWord, feelingWord) {
  var selection = Math.floor(seed);

  var message = [
    `Spilled your coffee this morning? Don't worry, this ${durationWord} can still be ${feelingWord}. Just remember, even a broken pizza is still pizza (and delicious)!`,
    `Feeling like your brain is running on dial-up this ${feelingWord}? Hit the snooze button on your worries and unleash your inner rockstar later! ${feelingWord} things are coming your way.`,
    `Adulting is hard. This ${durationWord} might feel like you're herding cats, but remember, even a messy bun can have a crown! You've got this, and you're going to look ${feelingWord} doing it.`,
    `Feeling like your to-do list is longer than a CVS receipt this ${durationWord}? Just tackle it one hilarious cat video break at a time! You'll be feeling ${feelingWord} and accomplished in no time.`,
    `This ${durationWord} might be a dumpster fire, but hey, even garbage trucks get to honk their horns! Find your joy in the little things. There's still time to turn this into an ${feelingWord} week.`,
    `Feeling like your social battery is on low this ${durationWord}? Recharge and come back stronger than a toddler with a juice box! You'll be feeling ${feelingWord} and ready to take on the world again soon.`,
  ];
  return message[selection - 1];
}
//use seed to select a random message template.

function durationWord(seed) {
  var selection = Math.floor(30 / seed);

  var durationWord = [
    "monkey sneeze",
    "gnat's nap",
    "eternity in a waiting room",
    "squirrel's attention span",
    "one commercial break",
    "euphoria-induced coma",
    "existential crisis",
    "during a particularly long sneeze",
    "while your shoelace is untied",
    "it takes a sloth to cross the street",
    "a particularly dramatic movie trailer",
    "while you're stuck in the elevator with a mime",
    "the time it takes to name all the Jonas Brothers",
    "a particularly long elevator ride with bad music",
    "while your phone is searching for a signal",
    "a particularly enthusiastic interpretive dance",
    "one particularly juicy gossip session",
    "while your internet is buffering",
    "a particularly long winded acceptance speech",
    "the time it takes to count all the sprinkles on a cupcake",
    "a particularly philosophical cat video",
    "while you're trying to explain the offside rule",
    "a particularly dramatic opera scene",
    "the time it takes to untangle a pair of headphones",
    "a particularly long traffic jam caused by a rogue tumbleweed",
    "while you're trying to remember your neighbor's name",
    "the time it takes to perfect the art of the pancake flip",
    "a particularly long existential poem",
    "a particularly enthusiastic dog greeting its owner",
  ];
  return durationWord[selection - 1];
}
//use seed to select a random word

function feelingWord(seed) {
  var selection = Math.floor(30 / seed);

  var feelingWord = [
    "swaggerlicious",
    "cheesy-grinning",
    "triumphant",
    "glitterbomb-fabulous",
    "audacious",
    "unstoppable",
    "sunshine-and-rainbows",
    "mind-blown",
    "fireworks-worthy",
    "boss-level",
    "victory-dancing",
    "cloud-nine",
    "dreamboat",
    "starry-eyed",
    "unfazed",
    "zen-like",
    "champion-worthy",
    "glitter-dipped",
    "unabashedly-happy",
    "relentlessly-optimistic",
    "warrior-queen",
    "unflappable",
    "cosmic-powered",
    "limitless",
    "unstoppable",
    "legendary",
    "trailblazing",
    "unabashedly-awesome",
    "unicorn-sparkling",
  ];
  return feelingWord[selection - 1];
}
//use seed to select a random word

var seed = generateSeed("Sam");

console.log(selectMessageTemplate(seed, durationWord(seed), feelingWord(seed)));
