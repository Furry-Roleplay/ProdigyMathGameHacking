//Use this script before very battle to DESTROY your enemies.(intended for wizard battles)
Phaser.GAMES[0].prodigy.debugMisc.setBattleEnergy(10); // Fills your combat energy!
Phaser.GAMES[0].prodigy.debugMisc.easyMode(); // You dont have to do math problems anymore!
Phaser.GAMES[0].prodigy.player.modifiers.barrier=true; // This dosent really help, but makes you look cool whenever you get atacked!
Phaser.GAMES[0].prodigy.player.modifiers.maxHearts=1000; // Damage modifiers dont work for wizard battles but health does!
Phaser.GAMES[0].prodigy.player.heal(Infinity); // Completly heals your player!

// Bookmarklet:
// javascript:Phaser.GAMES[0].prodigy.debugMisc.setBattleEnergy(10)%3BPhaser.GAMES[0].prodigy.debugMisc.easyMode()%3BPhaser.GAMES[0].prodigy.player.modifiers.barrier%3D!0%3BPhaser.GAMES[0].prodigy.player.modifiers.maxHearts%3D1E3%3BPhaser.GAMES[0].prodigy.player.heal(Infinity)%3Bvoid+0
