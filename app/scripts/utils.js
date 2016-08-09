var Utils = {}
Utils.CpM2Level = {93:1, 94:1, 135:1.5, 166:2, 192:2.5, 215:3, 236: 3.5, 255: 4, 273: 4.5, 290:5,306:5.5, 321:6, 335:6.5, 349:7, 362:7.5, 375:8, 387:8.5, 399:9, 411:9.5, 422:10,432:10.5, 443:11, 453:11.5, 462:12, 472:12.5, 481:13, 490:13.5, 499:14, 508:14.5,517:15, 525:15.5, 534:16, 542:16.5, 550:17, 558:17.5, 566:18, 574:18.5, 582: 19,589:19.5, 597:20, 604:20.5, 612:21, 619:21.5, 626:22, 633: 22.5, 640:23, 647:23.5,654:24, 661:24.5, 667:25, 674:25.5, 681:26, 687:26.5, 694:27, 700:27.5, 706:28,713:28.5, 719:29, 725:29.5, 731:30, 734:30.5, 737:31, 740:31.5, 743:32, 746:32.5,749:33, 752:33.5, 755:34, 758:34.5, 761:35, 764:35.5, 767:36, 770:36.5, 773:37,776: 37.5, 778:38, 781:38.5, 784:39, 790:40}
Utils.baseStats = [[],[90,126,126],[120,156,158],[160,198,200],[78,128,108],[116,160,140],[156,212,182],[88,112,142],[118,144,176],[158,186,222],[90,62,66],[100,56,86],[120,144,144],[80,68,64],[90,62,82],[130,144,130],[80,94,90],[126,126,122],[166,170,166],[60,92,86],[110,146,150],[80,102,78],[130,168,146],[70,112,112],[120,166,166],[70,124,108],[120,200,154],[100,90,114],[150,150,172],[110,100,104],[140,132,136],[180,184,190],[92,110,94],[122,142,128],[162,204,170],[140,116,124],[190,178,178],[76,106,118],[146,176,194],[230,98,54],[280,168,108],[80,88,90],[150,164,164],[90,134,130],[120,162,158],[150,202,190],[70,122,120],[120,162,170],[120,108,118],[140,172,154],[20,108,86],[70,148,140],[80,104,94],[130,156,146],[100,132,112],[160,194,176],[80,122,96],[130,178,150],[110,156,110],[180,230,180],[80,108,98],[130,132,132],[180,180,202],[50,110,76],[80,150,112],[110,186,152],[140,118,96],[160,154,144],[180,198,180],[100,158,78],[130,190,110],[160,222,152],[80,106,136],[160,170,196],[80,106,118],[110,142,156],[160,176,198],[100,168,138],[130,200,170],[180,110,110],[190,184,198],[50,128,138],[100,186,180],[104,138,132],[70,126,96],[120,182,150],[130,104,138],[180,156,192],[160,124,110],[210,180,188],[60,120,112],[100,196,196],[60,136,82],[90,172,118],[120,204,156],[70,90,186],[120,104,140],[170,162,196],[60,116,110],[110,178,168],[80,102,124],[120,150,174],[120,110,132],[190,232,164],[100,102,150],[120,140,202],[100,148,172],[100,138,204],[180,126,160],[80,136,142],[130,190,198],[160,110,116],[210,166,160],[500,40,60],[130,164,152],[210,142,178],[60,122,100],[110,176,150],[90,112,126],[160,172,160],[60,130,128],[120,194,192],[80,154,196],[140,176,180],[130,172,134],[130,198,160],[130,214,158],[130,184,186],[150,148,184],[40,42,84],[190,192,196],[260,186,190],[96,110,110],[110,114,128],[260,186,168],[130,192,174],[130,238,178],[130,156,158],[70,132,160],[140,180,202],[60,148,142],[120,190,190],[160,182,162],[320,180,180],[180,198,242],[180,232,194],[180,242,194],[82,128,110],[122,170,152],[182,250,212],[212,284,202],[200,220,220]];
Utils.CpM=[0.094,0.16639787,0.21573247,0.25572005,0.29024988,0.3210876,0.34921268,0.37523559,0.39956728,0.42250001,0.44310755,0.46279839,0.48168495,0.49985844,0.51739395,0.53435433,0.55079269,0.56675452,0.58227891,0.59740001,0.61215729,0.62656713,0.64065295,0.65443563,0.667934,0.68116492,0.69414365,0.70688421,0.71939909,0.7317,0.73776948,0.74378943,0.74976104,0.75568551,0.76156384,0.76739717,0.7731865,0.77893275,0.78463697,0.79030001];
Utils.MoveList=["","Thunder Shock","Quick Attack","Scratch","Ember","Vine Whip","Tackle","Razor Leaf","Take Down","Water Gun","Bite","Pound","Double Slap","Wrap","Hyper Beam","Lick","Dark Pulse","Smog","Sludge","Metal Claw","Vice Grip","Flame Wheel","Megahorn","Wing Attack","Flamethrower","Sucker Punch","Dig","Low Kick","Cross Chop","Psycho Cut","Psybeam","Earthquake","Stone Edge","Ice Punch","Heart Stamp","Discharge","Flash Cannon","Peck","Drill Peck","Ice Beam","Blizzard","Air Slash","Heat Wave","Twineedle","Poison Jab","Aerial Ace","Drill Run","Petal Blizzard","Mega Drain","Bug Buzz","Poison Fang","Night Slash","Slash","Bubble Beam","Submission","Karate Chop","Low Sweep","Aqua Jet","Aqua Tail","Seed Bomb","Psyshock","Rock Throw","Ancient Power","Rock Tomb","Rock Slide","Power Gem","Shadow Sneak","Shadow Punch","Shadow Claw","Ominous Wind","Shadow Ball","Bullet Punch","Magnet Bomb","Steel Wing","Iron Head","Parabolic Charge","Spark","Thunder Punch","Thunder","Thunderbolt","Twister","Dragon Breath","Dragon Pulse","Dragon Claw","Disarming Voice","Draining Kiss","Dazzling Gleam","Moonblast","Play Rough","Cross Poison","Sludge Bomb","Sludge Wave","Gunk Shot","Mud Shot","Bone Club","Bulldoze","Mud Bomb","Fury Cutter","Bug Bite","Signal Beam","X Scissor","Flame Charge","Flame Burst","Fire Blast","Brine","Water Pulse","Scald","Hydro Pump","Psychic","Psystrike","Ice Shard","Icy Wind","Frost Breath","Absorb","Giga Drain","Fire Punch","Solar Beam","Leaf Blade","Power Whip","Splash","Acid","Air Cutter","Hurricane","Brick Break","Cut","Swift","Horn Attack","Stomp","Headbutt","Hyper Fang","Slam","Body Slam","Rest","Struggle","Scald Blastoise","Hydro Pump Blastoise","Wrap Green","Wrap Pink","Fury Cutter Fast","Bug Bite Fast","Bite Fast","Sucker Punch Fast","Dragon Breath Fast","Thunder Shock Fast","Spark Fast","Low Kick Fast","Karate Chop Fast","Ember Fast","Wing Attack Fast","Peck Fast","Lick Fast","Shadow Claw Fast","Vine Whip Fast","Razor Leaf Fast","Mud Shot Fast","Ice Shard Fast","Frost Breath Fast","Quick Attack Fast","Scratch Fast","Tackle Fast","Pound Fast","Cut Fast","Poison Jab Fast","Acid Fast","Psycho Cut Fast","Rock Throw Fast","Metal Claw Fast","Bullet Punch Fast","Water Gun Fast","Splash Fast","Water Gun Fast Blastoise","Mud Slap Fast","Zen Headbutt Fast","Confusion Fast","Poison Sting Fast","Bubble Fast","Feint Attack Fast","Steel Wing Fast","Fire Fang Fast","Rock Smash Fast"]
Utils.GetLevel = function(pkm) {
  return Utils.GetHalfLevel(pkm)*2;
}
Utils.GetHalfLevel = function(pkm) {
  var p = (pkm.CpMultiplier + pkm.AdditionalCpMultiplier)*1000;
  return Utils.CpM2Level[p|0];
}
Utils.CalculateMaxCp = function(pkm) {
  var bs = Utils.baseStats[pkm.PokemonId];
  return parseInt((bs[1] + pkm.IndividualAttack)
    *Math.sqrt(bs[2] + pkm.IndividualDefense) 
    *Math.sqrt(bs[0] + pkm.IndividualStamina)
    *Math.pow(0.79030001,2) / 10);
}
Utils.GetMoveName = function (id) {
  return Utils.MoveList[id];
}


