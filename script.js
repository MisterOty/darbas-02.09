let gameSpeed = 1

let objectives = [
    {
        distractCount: 0,
        doCtEnding: false
    },
    {
        bombEquipment: {
            ductTape: false,
            clock: false,
            c4: false
        },
        bombArm: {
            planted: false,
            craft: false,
            rewire: false
        },
        doTEnding: false
    },
    {
        hl3Knowledge: false
    },
    {
        smoking: [{
            doEnding: false,
            cigarette: false,
            lighter: false
        }]
    }
]

let endings = [
    {text: "Counter Terrorist Win! 1/3", image: "files/images/endings/ctwin.png ", music: "files/audio/endings/ctwin.mp3"},
    {text: "Terrorist Win! 2/3", image: "files/images/endings/twin.png", music: "files/audio/endings/twin.mp3"},
    {text: "WEED ENDING! 3/3", image: "files/images/endings/weedwin.gif", music: "files/audio/endings/weedwin.mp3"},
]

let encounter = [
        //---INCOUNTERS
    //BOMBSITE A
    {
        place: ["Bombsite A"],
        background: ["files/images/places/bombsiteA.png"],
        characters: [
            {id: 0, name: "You", image: "", font: "Arial", voice: "files/audio/buttonclick.wav"},
            {id: 0, name: "Aleksas", image: "", font: "Times New Roman", voice: ""},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `There seems to be no one here.`},
                {character: 0, tempo: [1, 50], text: `For now atleast.`},
                {character: 0, tempo: [1, 50], text: `All the sudden you notice a piece of duct tape laying on the ground.`},
                {character: 0, tempo: [1, 50], text: `You move on right after picking it up.`},
                {character: 1, tempo: [1, 250], text: `h   e   l   l   o   .   .   .`},
                {character: 0, tempo: [1, 50], text: `No one seems to be here...`},
            ]},
            {dialog: [
                {character: 0, tempo: [1, 250], text: `All alone..`},
            ]}]
    },
    //BOMBSITE B
    {
        place: ["Bombsite B"],
        background: ["files/images/places/bombsiteB.png"],
        characters: [
            {id: 0, name: "Ernestas", image: "files/images/characters/classmates/ernestas.png", font: "Papyrus", voice: "files/audio/characters/soul.mp3"},
            {id: 1, name: "Simona", image: "files/images/characters/classmates/simona.png", font: "DDLCFont", voice: "files/audio/characters/girl.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Hi, you part of terrorist team?`},
                {character: 1, tempo: [1, 50], text: `If you are give us bomb so we could set it up`},
                {character: 0, tempo: [1, 50], text: `Mr. Bonepart told us he will send only high honor person here`},
                {character: 1, tempo: [1, 50], text: `Only come here once you have bomb, primed and everything`}
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `Come here once you have bomb, primed and everything`},
                {character: 0, tempo: [1, 50], text: `You heard us..`}
            ]}]
    },
    //CT SPAWN
    {
        place: ["Christmas Team Spawn (Team)"],
        background: ["files/images/places/ctSpawn.png"],
        characters: [
            {name: "Justas CT", image: "files/images/characters/classmates/justas.png", font: "CSGOFont", voice: "files/audio/characters/speedy.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Hows a goin everyone, it's me, IShowNetic, and in today's video I will save christmas in CS2 Mirage`},
                {character: 0, tempo: [1, 50], text: `But before that let me read the comments on my most recent video`},
                {character: 0, tempo: [1, 50], text: `James says: "Speed please give me Mod perms, my mom is kinda homeless."`},
                {character: 0, tempo: [1, 100], text: `Uhh.. sure James. I will look into it,`},
                {character: 0, tempo: [1, 100], text: `Oh, Hello there.`},
                {character: 0, tempo: [1, 50], text: `Can you help me defeat the Terrorist by distracting them.`},
                {character: 0, tempo: [1, 100], text: `So that we can arrest them.`},
                {character: 0, tempo: [1, 100], text: `Come back to me when you succesfully distracted them.`}
            ]},
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Come back to me, when you distracted them.`}
            ]}]
    },
    //T SPAWN
    {
        place: ["Terrorist Spawn (Team)"],
        background: ["files/images/places/tSpawn.png"],
        characters: [
            {id: 0, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
            {id: 1, name: "Vasily Ruskinav", image: "files/images/characters/classmates/kajus.png", font: "Papyrus", voice: "files/audio/characters/bonepart.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 100], text: `...`},
                {character: 1, tempo: [1, 50], text: `Szdrasvidi, me Vasily, we need bomb to kill elf of christmas`},
                {character: 0, tempo: [1, 500], text: `...`},
                {character: 1, tempo: [1, 50], text: `All I need is: a clock, a C4, and duct tape`},
                {character: 1, tempo: [1, 50], text: `If you find, I promote you to high league postman`},
                {character: 0, tempo: [1, 50], text: `If you want to make yourself useful.`},
                {character: 0, tempo: [1, 50], text: `Find me a cigarette, please.`}
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `If you want high league postman honor.`},
                {character: 1, tempo: [1, 50], text: `Go find me: a clock, a C4, and duct tape`},
                {character: 0, tempo: [1, 100], text: `You know what to do..`}
            ]}]
    },
    //MIDDLE
    {
        place: ["Middle"],
        background: ["files/images/places/mid.png"],
        characters: [
            {id: 0, name: "Mr. Rottin", image: "files/images/characters/classmates/oskaras.png", font: "CSGOFont", voice: "files/audio/characters/rot.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Hello. Have you seen a guy in a fancy suit anywhere?`},
                {character: 0, tempo: [1, 50], text: `If you have please tell me where he is.`},
                {character: 0, tempo: [1, 50], text: `I need more information`},
                {character: 0, tempo: [1, 50], text: `It is near.`},
                {character: 0, tempo: [1, 50], text: `Just don't know when.`},
            ]},
            {dialog: [
                {character: 0, tempo: [1, 50], text: `If you find him, please tell me.`},
                {character: 0, tempo: [1, 50], text: `What did he say.`},
                {character: 0, tempo: [1, 50], text: `It is near.`},
                {character: 0, tempo: [1, 50], text: `Just don't know when.`},
            ]}]
    },
    //KITCHEN
    {
        place: ["Kitchen"],
        background: ["files/images/places/kitchen.png"],
        characters: [
            {id: 0, name: "The Electrician", image: "files/images/characters/classmates/naglis.png", font: "Segoe UI", voice: "files/audio/characters/electrician.mp3"},
            {id: 1, name: "Vamp", image: "files/images/characters/classmates/armandas.png", font: "Calibri", voice: "files/audio/characters/male.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Oh hello there`},
                {character: 1, tempo: [1, 50], text: `Hello stranger`},
                {character: 0, tempo: [1, 50], text: `You can come to me if you need any electrical help`},
                {character: 0, tempo: [1, 50], text: `I am the only electrican the terrorist could hire`},
                {character: 1, tempo: [1, 50], text: `He fixed my pc in 2 days`},
                {character: 1, tempo: [1, 50], text: `I dont think we could find anyone better`},
                {character: 0, tempo: [1, 50], text: `Yeah, if you need any help, come to me..`},
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `(playing with his pc)`},
                {character: 1, tempo: [1, 50], text: `(you notice he is playing)`},
                {character: 1, tempo: [1, 200], text: `(Kitsune on CS: Source)`},
                {character: 1, tempo: [1, 50], text: `(Thats pretty cool)`},
                {character: 1, tempo: [1, 50], text: `(You turn to the electrician)`},
                {character: 0, tempo: [1, 50], text: `Hello again!`},
                {character: 0, tempo: [1, 50], text: `If you need any help, come to me`}
            ]},
            {dialog: [
                {character: 0, tempo: [1, 50], text: `If you need any help, come to me`},
            ]}]
    },
    //APARTMENTS
    {
        place: ["Apartments"],
        background: ["files/images/places/aps.png"],
        characters: [
            {id: 0, name: "Saulius", image: "files/images/characters/classmates/saulius.png", font: "Cursive", voice: "files/audio/characters/agent.mp3"},
            {id: 1, name: "Saulius (faintly)", image: "", font: "Cursive", voice: "files/audio/characters/agent.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 150], text: `Oh, Hello`},
                {character: 0, tempo: [1, 50], text: `Just a normal terrorist`},
                {character: 0, tempo: [1, 150], text: `Doin my job`},
                {character: 0, tempo: [1, 150], text: `Actually you do it`},
                {character: 0, tempo: [1, 50], text: `Take this C4`},
                {character: 0, tempo: [1, 50], text: `You need it more than me`},
                {character: 0, tempo: [1, 50], text: `Alright, you get goin now`}
            ]},
            {dialog: [
                {character: 1, tempo: [1, 100], text: `Look I got this under control`},
                {character: 1, tempo: [1, 100], text: `I gave one idiot the fake C4`},
                {character: 1, tempo: [1, 100], text: `I bet he won't even know how to control that thing`},
                {character: 1, tempo: [1, 100], text: `Anyways, I should try talking with the head chief`},
                {character: 0, tempo: [1, 200], text: `Over and ou-- WHA..`},
                {character: 0, tempo: [1, 50], text: `(cough) what are you doing here`},
                {character: 0, tempo: [1, 25], text: `I though you were already long gone by now`},
                {character: 0, tempo: [1, 50], text: `Just look, I have an important meeting to attend`},
                {character: 0, tempo: [1, 50], text: `You best get goin now.`}
            ]},
            {dialog: [
                {character: 0, tempo: [1, 100], text: `Didn't you hear me`}, 
                {character: 0, tempo: [1, 100], text: `Get goin!`}
            ]}]
    },
    //SHORT
    {
        place: ["Short"],
        background: ["files/images/places/short.png"],
        characters: [
            {id: 0, name: "Heavy tf2", image: "files/images/characters/classmates/eimantas.png", font: "TF2Font", voice: "files/audio/characters/heavy.mp3"},
            {id: 1, name: "Mhittkmfh The IInd", image: "files/images/characters/classmates/giedrius.png", font: "Kaijuz", voice: "files/audio/characters/cough.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 100], text: `Hello there`},
                {character: 1, tempo: [1, 200], text: `HELLO HUMAN...`},
                {character: 0, tempo: [1, 50], text: `Me and my friend here where exploring this here town`},
                {character: 0, tempo: [1, 50], text: `And we have lost one of our friends`},
                {character: 0, tempo: [1, 50], text: `He is was seen near Palace, but last we checked`},
                {character: 0, tempo: [1, 50], text: `He was nowhere to be seen`},
                {character: 1, tempo: [1, 100], text: `If you want to speed up the game, or slow down`},
                {character: 1, tempo: [1, 100], text: `Press = or - on your keyboard`},
                {character: 1, tempo: [1, 100], text: `Check bottom left corner`},
                {character: 0, tempo: [1, 50], text: `Yeah, he does that...`},
                {character: 0, tempo: [1, 50], text: `Anyways, he will probably show up again`},
                {character: 0, tempo: [1, 50], text: `Its hard to get lost here`},
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `Press Enter to progress dialog`},
                {character: 1, tempo: [1, 50], text: `Check bottom left corner`},
                {character: 1, tempo: [1, 50], text: `Press = or - to speed up the game`},
                {character: 0, tempo: [1, 50], text: `Yeahhhh`},
            ]}]
    },
    //PALACE
    {
        place: ["Palace"],
        background: ["files/images/places/palace.png"],
        characters: [
            {id: 0, name: "Antanas", image: "files/images/characters/classmates/antanas.png", font: "Hanalei", voice: "files/audio/characters/jamaican.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 100], text: `Wah gwaan, mi name Shamar`},
                {character: 0, tempo: [1, 100], text: `Mi come from Jamaica, yuh know`},
                {character: 0, tempo: [1, 100], text: `Real talk, mi nah even know how mi end up yah, bredda`},
                {character: 0, tempo: [1, 100], text: `Eh, nuh worry bout it… yuh waan a smoke?`},
                {character: 0, tempo: [1, 100], text: `Here man, tek a cigarette`},
                {character: 0, tempo: [1, 100], text: `If yuh feelin fi someting stronger, just hail mi later…`},
            ]},
            {dialog: [
                {character: 0, tempo: [1, 100], text: `If yuh feelin fi someting stronger, just hail mi later…`},
            ]}]
    },
    //HL3 EASTER EGG
    {
        place: ["Stasis"],
        background: ["files/images/places/stasis.png"],
        characters: [
            {id: 0, name: "G-Man", image: "files/images/characters/gman.png", font: "Roboto", voice: "files/audio/characters/gman.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 250], text: `Ahh, greetings..`},
                {character: 0, tempo: [1, 100], text: `I see you a thing for website easter eggs.`},
                {character: 0, tempo: [1, 100], text: `Quite a keen eye you have, I am impressed.`},
                {character: 0, tempo: [1, 150], text: `But, the thing is..`},
                {character: 0, tempo: [1, 100], text: `You are not suppost to be here.`},
                {character: 0, tempo: [1, 150], text: `However, have this piece of intelect.`},
                {character: 0, tempo: [1, 500], text: `Half-Life 3`},
                {character: 0, tempo: [1, 250], text: `Coming 2026.`}
        ]}]
    },
        //---INNER INCOUNTERS
    //T SPAWN CIGARETTE
    {
        place: ["Terrorist Spawn (Cigarette)"],
        background: ["files/images/places/tSpawn.png"],
        characters: [
            {id: 0, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
            {id: 1, name: "Vasily Ruskinav", image: "files/images/characters/classmates/kajus.png", font: "Papyrus", voice: "files/audio/characters/bonepart.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Man, I really need a freaking smoke right now..`},
                {character: 0, tempo: [1, 150], text: `Oh, you actually found one`},
                {character: 0, tempo: [1, 100], text: `Big thanks man...`},
                {character: 0, tempo: [1, 1500], text: `Ahhhh...`},
                {character: 0, tempo: [1, 50], text: `Here have one of my lighters`},
                {character: 0, tempo: [1, 50], text: `I think I can trust you..`},
                {character: 1, tempo: [1, 50], text: `So did you find it?`},
                {character: 0, tempo: [1, 50], text: `Thanks again`},
            ]}]
    },
    //T SPAWN DISTRACT
    {
        place: ["Terrorist Spawn (Distract)"],
        background: ["files/images/places/tSpawn.png"],
        characters: [
            {id: 0, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
            {id: 1, name: "Vasily Ruskinav", image: "files/images/characters/classmates/kajus.png", font: "Papyrus", voice: "files/audio/characters/bonepart.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Man, I really need a freaking smoke right now..`},
                {character: 0, tempo: [1, 150], text: `Oh, you have one`},
                {character: 0, tempo: [1, 100], text: `Hhhh..`},
                {character: 0, tempo: [1, 100], text: `I will trust you on this one`},
                {character: 0, tempo: [1, 100], text: `Fine, I will take a load off`},
                {character: 0, tempo: [1, 1500], text: `Ahhhh...`},
                {character: 0, tempo: [1, 50], text: `Here have one of my lighters`},
                {character: 0, tempo: [1, 50], text: `I think I can trust you..`},
                {character: 1, tempo: [1, 50], text: `So did you find it?`},
                {character: 0, tempo: [1, 50], text: `Thanks again`},
            ]}]
    },
    //T SPAWN BOMB CRAFT
    {
        place: ["Terrorist Spawn (Bomb Craft)"],
        background: ["files/images/places/tSpawn.png"],
        characters: [
            {id: 0, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
            {id: 1, name: "Vasily Ruskinav", image: "files/images/characters/classmates/kajus.png", font: "Papyrus", voice: "files/audio/characters/bonepart.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 1, tempo: [1, 50], text: `So you found all?`},
                {character: 1, tempo: [1, 50], text: `Awesome`},
                {character: 1, tempo: [1, 50], text: `Okay give me some time to make this thing`},
                {character: 1, tempo: [1, 1000], text: `..........`},
                {character: 1, tempo: [1, 50], text: `Okay, small problem`},
                {character: 1, tempo: [1, 50], text: `No idea on how to turn it on`},
                {character: 1, tempo: [1, 50], text: `Go to electrical, he will fix problem`},
                {character: 1, tempo: [1, 50], text: `And give bomb to people in B Site`},
                {character: 1, tempo: [1, 50], text: `Come back when you did it`},
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `Dont forget to give bomb to B Site`},
                {character: 1, tempo: [1, 50], text: `Come back when you did it`},
            ]}]
    },
    //BOMBSITE B ENEMY
    {
        place: ["Bombsite B (Enemy)"],
        background: ["files/images/places/bombsiteB.png"],
        characters: [
            {id: 0, name: "Ernestas", image: "files/images/characters/classmates/ernestas.png", font: "Papyrus", voice: "files/audio/characters/soul.mp3"},
            {id: 1, name: "Simona", image: "files/images/characters/classmates/simona.png", font: "DDLCFont", voice: "files/audio/characters/girl.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Hi`},
                {character: 1, tempo: [1, 50], text: `Wait a minute`},
                {character: 0, tempo: [1, 100], text: `You seem weird`},
                {character: 1, tempo: [1, 50], text: `I don't know if we can trust you`},
                {character: 0, tempo: [1, 100], text: `If you bring us a lighter maybe we will`},
                {character: 1, tempo: [1, 50], text: `Yeahhh`}
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `You know what to do`},
                {character: 0, tempo: [1, 50], text: `You heard us..`}
            ]}]
    },
    //BOMBSITE B DISTRACT
    {
        place: ["Bombsite B (Distract)"],
        background: ["files/images/places/bombsiteB.png"],
        characters: [
            {id: 0, name: "Ernestas", image: "files/images/characters/classmates/ernestas.png", font: "Papyrus", voice: "files/audio/characters/soul.mp3"},
            {id: 1, name: "Simona", image: "files/images/characters/classmates/simona.png", font: "DDLCFont", voice: "files/audio/characters/girl.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 1, tempo: [1, 50], text: `You found one`},
                {character: 0, tempo: [1, 50], text: `Okay fine, we will trust you on this`},
                {character: 1, tempo: [1, 50], text: `We can finally light dry leafs on fire`},
                {character: 0, tempo: [1, 50], text: `Anyways thats not the point..`},
                {character: 1, tempo: [1, 50], text: `Come back to us when you have the Bomb`},
                {character: 0, tempo: [1, 50], text: `Primed and ready`}
            ]}]
    },
    //CT SPAWN ENEMY
    {
        place: ["Christmas Team Spawn (Enemy)"],
        background: ["files/images/places/ctSpawn.png"],
        characters: [
            {name: "Justas CT", image: "files/images/characters/classmates/justas.png", font: "CSGOFont", voice: "files/audio/characters/speedy.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Hows a goin everyone, it's me, IShowNetic, and in today's video I will save christmas in CS2 Mirage`},
                {character: 0, tempo: [1, 50], text: `But before that let me read the comments on my most recent video`},
                {character: 0, tempo: [1, 50], text: `James says: "Speed please give me Mod perms, my mom is kinda homeless."`},
                {character: 0, tempo: [1, 100], text: `Uhh.. sure James. I will look into it,`},
                {character: 0, tempo: [1, 100], text: `Oh, Hello there.`},
                {character: 0, tempo: [1, 50], text: `Can you help me defeat the Terrorist by distracting them.`},
                {character: 0, tempo: [1, 100], text: `So that we can arrest them.`},
                {character: 0, tempo: [1, 100], text: `Come back to me when you succesfully distracted them.`}
            ]},
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Come back to me, when you distracted them.`}
            ]}]
    },
    //T SPAWN ENEMY
    {
        place: ["Terrorist Spawn (Enemy)"],
        background: ["files/images/places/tSpawn.png"],
        characters: [
            {id: 0, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
            {id: 1, name: "Vasily Ruskinav", image: "files/images/characters/classmates/kajus.png", font: "Papyrus", voice: "files/audio/characters/bonepart.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 100], text: `...`},
                {character: 1, tempo: [1, 50], text: `Szdrasvidi, me Vasily, we need bomb to kill elf of christmas`},
                {character: 0, tempo: [1, 500], text: `...`},
                {character: 1, tempo: [1, 50], text: `All I need is: a clock, a C4, and duct tape`},
                {character: 1, tempo: [1, 50], text: `If you find, I promote you to high league postman`},
                {character: 0, tempo: [1, 50], text: `...`}
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `If you want high league postman honor.`},
                {character: 1, tempo: [1, 50], text: `Go find me: a clock, a C4, and duct tape`}
            ]}]
    },
    //KITCHEN BOMB PRIME
    {
        place: ["Kitchen (Bomb Arming)"],
        background: ["files/images/places/kitchen.png"],
        characters: [
            {id: 0, name: "The Electrician", image: "files/images/characters/classmates/naglis.png", font: "Segoe UI", voice: "files/audio/characters/electrician.mp3"},
            {id: 1, name: "Vamp", image: "files/images/characters/classmates/armandas.png", font: "Calibri", voice: "files/audio/characters/male.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Oh hello there`},
                {character: 0, tempo: [1, 50], text: `You need to prime bomb?`},
                {character: 0, tempo: [1, 50], text: `Of course.`},
                {character: 0, tempo: [1, 1000], text: `.....`},
                {character: 0, tempo: [1, 50], text: `Ohhkay, it is finished`},
                {character: 0, tempo: [1, 50], text: `I will leave you to it`},
                {character: 1, tempo: [1, 50], text: `Good luck man..`},
            ]},
            {dialog: [
                {character: 0, tempo: [1, 50], text: `Good Luck!`},
                {character: 1, tempo: [1, 50], text: `Good Luck!`},
            ]}]
    },
    //B SITE BOMB PLANT
    {
        place: ["Bombsite B (Bomb Planting)"],
        background: ["files/images/places/bombsiteB.png"],
        characters: [
            {id: 0, name: "Ernestas", image: "files/images/characters/classmates/ernestas.png", font: "Papyrus", voice: "files/audio/characters/soul.mp3"},
            {id: 1, name: "Simona", image: "files/images/characters/classmates/simona.png", font: "DDLCFont", voice: "files/audio/characters/girl.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `You got it?`},
                {character: 1, tempo: [1, 50], text: `Okay lets set it up`},
                {character: 0, tempo: [1, 50], text: `Your right`},
                {character: 0, tempo: [1, 50], text: `You should announce that the Bomb has been planted`},
                {character: 0, tempo: [1, 50], text: `This is going to be soo goooood...`},
            ]},
            {dialog: [
                {character: 1, tempo: [1, 50], text: `Get out of here man`},
                {character: 0, tempo: [1, 50], text: `Its going to blow any second now`}
            ]}]
    },
    //MIDDLE COMPLETED
    {
        place: ["Middle (Completed)"],
        background: ["files/images/places/mid.png"],
        characters: [
            {id: 0, name: "Mr. Rottin", image: "files/images/characters/classmates/oskaras.png", font: "CSGOFont", voice: "files/audio/characters/rot.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `2026?`},
                {character: 0, tempo: [1, 50], text: `I hope so..`},
                {character: 0, tempo: [1, 500], text: `Hope`},
                {character: 0, tempo: [1, 50], text: `All of the others dwindled into insanity, I really hope we will get what we longed for after so many years`},
                {character: 0, tempo: [1, 150], text: `Here, have my clock..`},
                {character: 0, tempo: [1, 50], text: `I won't be needing it anymore`},
                {character: 0, tempo: [1, 50], text: `I will only need to wait one more year`},
            ]},
            {dialog: [
                {character: 0, tempo: [1, 50], text: `2026...`},
                {character: 0, tempo: [1, 500], text: `Hope...`},
            ]}]
    },
    //COUNTER TERRORIST ENDING 1/3
    {
        place: ["Christmas Team Spawn (CT ENDING 1/3)"],
        background: ["files/images/places/ctSpawn.png"],
        characters: [
            {name: "Justas CT", image: "files/images/characters/classmates/justas.png", font: "CSGOFont", voice: "files/audio/characters/speedy.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 50], text: `You did it?`},
                {character: 0, tempo: [1, 100], text: `Excellent!`},
                {character: 0, tempo: [1, 50], text: `We will take it from here`},
                {character: 0, tempo: [1, 50], text: `Thanks again for helping us out.`},
                {character: 0, tempo: [1, 200], text: `Merry Christmas.`},
            ]}]
    },
    //TERRORIST ENDING 2/3
    {
        place: ["Terrorist Spawn (T ENDING 2/3)"],
        background: ["files/images/places/tSpawn.png"],
        characters: [
            {id: 0, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
            {id: 1, name: "Vasily Ruskinav", image: "files/images/characters/classmates/kajus.png", font: "Papyrus", voice: "files/audio/characters/bonepart.mp3"}
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 1, tempo: [1, 50], text: `You made bomb for kill elf?`},
                {character: 1, tempo: [1, 100], text: `Very Good`},
                {character: 1, tempo: [1, 50], text: `Thank you for help друг`},
                {character: 0, tempo: [1, 50], text: `Looks like this is it`},
                {character: 0, tempo: [1, 50], text: `Thank you for helping`},
            ]}]
    },
    //WEED ENDING 3/3
    {
        place: ["Palace (WEED ENDING 3/3)"],
        background: ["files/images/places/palace.png"],
        characters: [
            {id: 0, name: "Antanas", image: "files/images/characters/classmates/antanas.png", font: "Hanalei", voice: "files/audio/characters/jamaican.mp3"},
            {id: 1, name: "Shirikas", image: "files/images/characters/classmates/gerardas.png", font: "ShrekFont", voice: "files/audio/characters/shrek.mp3"},
        ],
        dialogUses: 0,
        dialogs: [
            {dialog: [
                {character: 0, tempo: [1, 100], text: `Ahh wah gwaan, bredda!`},
                {character: 0, tempo: [1, 100], text: `One a yuh friends just pass through.`},
                {character: 1, tempo: [1, 50], text: `One hell of a blunt rotation..`},
                {character: 0, tempo: [1, 100], text: `Big up to 2026, yuh know nuff blessings ahead.`},
            ]}]
    },
]

//HTML AUDIO

const cursorNoise = document.querySelector('.cursor-noise')
//HTML ENDING
const endingDiv = document.querySelector('.ending')
const progressBar = document.querySelector('.progress')
const speedBar = document.querySelector('.speed-control')
const speedNum = document.querySelector('.speed-number')
//WAYPOINTS
const cTSpawnWP = document.querySelector('.ct-spawn')
const tSpawnWP = document.querySelector('.t-spawn')
const kitchenWP = document.querySelector('.kitchen')
const shortWP = document.querySelector('.short')
const midWP = document.querySelector('.mid')
const apartmentWP = document.querySelector('.apartment')
const palaceWP = document.querySelector('.palace')
const aSiteWP = document.querySelector('.bombsite-a')
const bSiteWP = document.querySelector('.bombsite-b')
const stasisWP = document.querySelector('.hl3-easter-egg')
//DIALOG
const encounterBox = document.querySelector('.encounter')
const hintBox = document.querySelector('.hint')
const count = document.querySelector('.count')
const characterImg = [document.querySelector('.character-1-image'), document.querySelector('.character-2-image')]
const characterText = document.querySelector('.character')
const dialogText = document.querySelector('.text')
const placeText = document.querySelector('.place-name')
//WAYPOINT AND DIALOG
let wayPoints = [cTSpawnWP, tSpawnWP, kitchenWP, shortWP, midWP, apartmentWP, palaceWP, aSiteWP, bSiteWP, stasisWP]
let enableClick = true
let enableHint = false
let enableDlg = false
let firstFade = false
let middleCheck = false
let lighterKnowledge = false
let tEnemyIntro = false
let randomTran = 0
let currentEnc = 0
let crntDlg = 0
let teamManager = 0
let hintTimer
let dlgDiv
let speedTimer

const doSpeed = (input) => {
    if(input == "Early"){
        gameSpeed = Math.round(gameSpeed * 100) / 100
        document.documentElement.style.setProperty('--timeSet', gameSpeed);
    }else{
        clearTimeout(speedTimer)
        speedBar.style.top = `0%`
        if (input == "="){
            if (gameSpeed > 0){
                gameSpeed -= 0.1
            }
        }else{
            if (gameSpeed < 2){
                gameSpeed += 0.1
            }
        }
        gameSpeed = Math.round(gameSpeed * 100) / 100
        document.documentElement.style.setProperty('--timeSet', gameSpeed);
        speedNum.textContent = `${200 - Math.round(gameSpeed * 100)}%`
        let maxSpeed = (gameSpeed / 0.01) / 2
        progressBar.style.background = `linear-gradient(-90deg,rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 1) ${maxSpeed}%, rgba(255, 255, 255, 1) ${maxSpeed}%, rgba(255, 255, 255, 0) 100%)`
        speedTimer = setTimeout(() => {
            speedBar.style.top = `-15%`
        }, 1000)
    }
}

const doEnding = (number) => {
    endingDiv.style.left = `0%`
    endingDiv.style.background = `url(${endings[number].image})`
    endingDiv.style.backgroundSize = `100% 100%`
    let audio = new Audio(endings[number].music)
    endingDiv.innerHTML = endings[number].text
    audio.play();
}

const clickCheck = (word) => {
    if(enableClick){
        if(teamManager == 0){
            if(word == "Terrorist Spawn (Team)"){
                teamManager = 1
            }else if(word == "Christmas Team Spawn (Team)"){
                teamManager = 2
                count.style.opacity = `100%`
                count.innerHTML = `${objectives[0].distractCount}/3`
            }else{
                return
            }
        }
        currentEnc = encounter.findIndex(e => e.place.includes(`${word}`));
        if(word == "Bombsite A" && encounter[currentEnc].dialogUses == 0){
            objectives[1].bombEquipment.ductTape = !objectives[1].bombEquipment.ductTape
        }else if(word == "Terrorist Spawn (Enemy)" && encounter[currentEnc].dialogUses == 0){
            tEnemyIntro = !tEnemyIntro
        }else if(word == "Terrorist Spawn (Bomb Craft)" && encounter[currentEnc].dialogUses == 0){
            objectives[1].bombArm.craft = !objectives[1].bombArm.craft
        }else if(word == "Kitchen (Bomb Arming)" && encounter[currentEnc].dialogUses == 0){
            objectives[1].bombArm.rewire = !objectives[1].bombArm.rewire
        }else if(word == "Bombsite B (Bomb Planting)" && encounter[currentEnc].dialogUses == 0){
            objectives[1].bombArm.planted = !objectives[1].bombArm.planted
        }else if(word == "Bombsite B (Enemy)" && encounter[currentEnc].dialogUses == 0){
            lighterKnowledge = !lighterKnowledge
        }else if(word == "Bombsite B (Distract)" && lighterKnowledge){
            objectives[3].smoking[0].lighter = !objectives[3].smoking[0].lighter
            objectives[0].distractCount += 1
            count.textContent = `${objectives[0].distractCount}/3`
        }else if(word == "Terrorist Spawn (T ENDING 2/3)" && encounter[currentEnc].dialogUses == 0){
            objectives[1].doTEnding = !objectives[1].doTEnding
        }else if(word == "Apartments" && encounter[currentEnc].dialogUses == 0){
            objectives[1].bombEquipment.c4 = !objectives[1].bombEquipment.c4
        }else if(word == "Palace" && encounter[currentEnc].dialogUses == 0){
            objectives[3].smoking[0].cigarette = !objectives[3].smoking[0].cigarette
        }else if(word == "Terrorist Spawn (Cigarette)" || word == "Terrorist Spawn (Distract)"){
            objectives[3].smoking[0].lighter = !objectives[3].smoking[0].lighter
            objectives[0].distractCount += 1
            count.textContent = `${objectives[0].distractCount}/3`
        }else if(word == "Middle (Completed)" && encounter[currentEnc].dialogUses == 0){
            objectives[1].bombEquipment.clock = !objectives[1].bombEquipment.clock
            objectives[0].distractCount += 1
            count.textContent = `${objectives[0].distractCount}/3`
        }else if(word == "Middle"){
            if(encounter[currentEnc].dialogUses == 0){
                middleCheck = !middleCheck
            }
        }
        doEnc()
    }
}

const disableWaypoints = (array, sound, power) => {
    if(power == 0){
        enableClick = false
        document.querySelector('body').classList.add('cursor-disable')
        for(let i = 0; i < array.length; i++){
            array[i].classList.add('invalid');
            array[i].classList.remove('hoverable');
        }
    }else{
        if(teamManager != 0){
            for(let i = 0; i < array.length; i++){
                array[i].classList.remove('invisible');
            }
        }
        if(objectives[0].doCtEnding && teamManager == 2){
            console.log("COUNTER TERRORIST WIN")
            //DO COUNTER TERRORIST WIN
            doEnding(0)
        }else if(objectives[1].doTEnding && teamManager == 1){
            console.log("TERRORIST ENDING")
            //DO TERRORIST ENDING
            doEnding(1)
        }else if(objectives[3].smoking[0].doEnding){
            console.log("WEED ENDING")
            //DO WEED ENDING
            doEnding(2)
        }else{
            enableClick = true
            sound.play()
            document.querySelector('body').classList.remove('cursor-disable')
            for(let i = 0; i < array.length; i++){
                array[i].classList.add('hoverable');
                array[i].classList.remove('invalid');
            }
        }
    }
}

const doTransition = (object, fade, randomNum) => {
    let fadeOption = [
        {
            fadein: [`0%`, `scale(1, 1)`],
            fadeout: [`100%`, `scale(0.5, 0.5)`]
        }
    ]
    if(fade == 0){
        randomTran = Math.floor(Math.random() * (4 - 0) + 0)
        if(randomNum == 0){
            object.style.left = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 1){
            object.style.right = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 2){
            object.style.top = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 3){
            object.style.bottom = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }
    }
    if(fade == 1){
        object.style.left = ``
        object.style.right = ``
        object.style.top = ``
        object.style.bottom = ``
        if(randomNum == 0){
            object.style.left = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 1){
            object.style.right = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 2){
            object.style.top = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 3){
            object.style.bottom = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }
        setTimeout(() => {
            if(randomNum == 0){
                object.style.left = fadeOption[0].fadein[0]
                object.style.transform = fadeOption[0].fadein[1]
            }else if(randomNum == 1){
                object.style.right = fadeOption[0].fadein[0]
                object.style.transform = fadeOption[0].fadein[1]
            }else if(randomNum == 2){
                object.style.top = fadeOption[0].fadein[0]
                object.style.transform = fadeOption[0].fadein[1]
            }else if(randomNum == 3){
                object.style.bottom = fadeOption[0].fadein[0]
                object.style.transform = fadeOption[0].fadein[1]
            }
        }, 0)
    }else if(fade == 2){
        if(randomNum == 0){
            object.style.left = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 1){
            object.style.right = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 2){
            object.style.top = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }else if(randomNum == 3){
            object.style.bottom = fadeOption[0].fadeout[0]
            object.style.transform = fadeOption[0].fadeout[1]
        }
    }
}

const doLetters = (letter, show, soundText, time, min, max) => {
    let timeText = 0;
    let randomNum = 0;
    let timeTotal = [];
    let audio = new Audio(soundText)
    show.textContent = ''
    if(crntDlg == 0){
        setTimeout(() => {
            for(let i = 0; i < letter.length; i++){
                randomNum = Math.floor(Math.random() * (max - min) + min)
                timeText += time * randomNum;
                timeTotal.push(timeText)
                setTimeout(() => {
                    if(letter[i] !== " "){
                        // audio.load();
                        audio.play();
                    }
                    show.innerHTML += letter[i]
                }, timeText);
            }
            setTimeout(() => {
                enableDlg = !enableDlg
            }, timeTotal[timeTotal.length - 1])
        }, 1000 * time)
    }else{
        enableDlg = false
        for(let i = 0; i < letter.length; i++){
            randomNum = Math.floor(Math.random() * (max - min) + min)
            timeText += time * randomNum;
            timeTotal.push(timeText)
            setTimeout(() => {
            if(letter[i] !== " "){
                    // audio.load();
                    audio.play();
                }
                show.innerHTML += letter[i]
                }, timeText);
            }
        setTimeout(() => {
        enableDlg = !enableDlg
        }, timeTotal[timeTotal.length - 1])
    }
}

const doEnc = () => {
    if(crntDlg < encounter[currentEnc].dialogs[encounter[currentEnc].dialogUses].dialog.length){
        //Creates values for each value used in function
        const chrGet = encounter[currentEnc].dialogs[encounter[currentEnc].dialogUses].dialog[crntDlg].character
        const characterName = encounter[currentEnc].characters[chrGet].name
        const characterFont = encounter[currentEnc].characters[chrGet].font
        const dialog = encounter[currentEnc].dialogs[encounter[currentEnc].dialogUses].dialog[crntDlg].text
        const voice = encounter[currentEnc].characters[chrGet].voice
        const speed = gameSpeed
        const tempoMin = encounter[currentEnc].dialogs[encounter[currentEnc].dialogUses].dialog[crntDlg].tempo[0]
        const tempoMax = encounter[currentEnc].dialogs[encounter[currentEnc].dialogUses].dialog[crntDlg].tempo[1]
        characterText.textContent = `${characterName}`
        dialogText.style.fontFamily = `${characterFont}`
        //Check if hint is enabled
        if(enableHint){
            clearTimeout(hintTimer)
            hintBox.classList.remove('visible');
            enableHint = !enableHint
        }
        //Check if this is first dialogue
        if(crntDlg == 0){
            //Removes the character image
            for(let i = 0; i < 2; i++){
                characterImg[i].style.backgroundImage = ``
            }
            //Set timer for hint
            hintTimer = setTimeout(() => {
                if(enableDlg && enableHint == false){
                    enableHint = true
                    hintBox.classList.add('visible');
                }
            }, 5000)
            //Creates a new value for fade effect, if this isn't first fade
            if(!firstFade){
                randomTran = Math.floor(Math.random() * (4 - 0) + 0)
            }
            //Disables waypoints and mouse, does the transition
            disableWaypoints(wayPoints, cursorNoise,  0)
            doTransition(encounterBox, 1, randomTran)
            //Changes the background of dialogue box
            encounterBox.style.backgroundImage = `url(${encounter[currentEnc].background})`
            //Changes the character image
            for(let i = 0; i < encounter[currentEnc].characters.length; i++){
                characterImg[i].style.backgroundImage = `url(${encounter[currentEnc].characters[i].image})`
            }
            //Changes the place name
            placeText.textContent = `${encounter[currentEnc].place}`
        }else{
            //Removes the hint timer
            clearTimeout(hintTimer)
        }
        //Does type-writer text effect
        doLetters(dialog, dialogText, voice, speed, tempoMin, tempoMax)
        //Check for character png paramaters
        if(encounter[currentEnc].characters[chrGet].id == 0){
            //Makes the first character visible
            characterImg[0].classList.remove('outOfFocus');
            characterImg[1].classList.add('outOfFocus');
        }else if(encounter[currentEnc].characters[chrGet].id == 1){
            //Makes the second character visible
            characterImg[0].classList.add('outOfFocus');
            characterImg[1].classList.remove('outOfFocus');
        }else{
            //Makes every character visible
            for(let i = 0; i < encounter[currentEnc].characters.length; i++){
                characterImg[i].classList.remove('outOfFocus')
            }
        }
        crntDlg++
    }else{
        //Check if its the first fade
        if(firstFade){
            firstFade = !firstFade
        }
        //Reset the current dialogue value, disables dialogue control
        crntDlg = 0
        enableDlg = !enableDlg
        //Enable mouse
        setTimeout(() => {
            disableWaypoints(wayPoints, cursorNoise,  1)
        }, 1000 * gameSpeed);
        //Fade out
        doTransition(encounterBox, 2, randomTran)
        //Disable hint
        if(enableHint){
            clearTimeout(hintTimer)
            hintBox.classList.remove('visible');
            enableHint = !enableHint
        }
        //Check for duplicate dialogue
        if(encounter[currentEnc].dialogUses !== encounter[currentEnc].dialogs.length - 1){  
            encounter[currentEnc].dialogUses += 1
        }
    }
}

doSpeed("Early")
doTransition(encounterBox, 0, randomTran)

aSiteWP.addEventListener("click", function() {
    clickCheck("Bombsite A")
});

bSiteWP.addEventListener("click", function() {
    if(objectives[3].smoking[0].lighter && lighterKnowledge){
        clickCheck("Bombsite B (Distract)")
    }else if(teamManager == 2){  
        clickCheck("Bombsite B (Enemy)")
    }else if(objectives[1].bombArm.rewire && objectives[1].bombArm.craft){
        clickCheck("Bombsite B (Bomb Planting)")
    }else{
        clickCheck("Bombsite B")
    }
});

cTSpawnWP.addEventListener("click", function() {
    if(teamManager == 1){  
        clickCheck("Christmas Team Spawn (Enemy)")
    }else if(objectives[0].distractCount == 3){
        objectives[0].doCtEnding = !objectives[0].doCtEnding
        clickCheck("Christmas Team Spawn (CT ENDING 1/3)")
    }else{
        clickCheck("Christmas Team Spawn (Team)")
    }
});

tSpawnWP.addEventListener("click", function() {
    if(teamManager == 2 && objectives[3].smoking[0].cigarette && tEnemyIntro){
        clickCheck("Terrorist Spawn (Distract)")
        objectives[3].smoking[0].cigarette = !objectives[3].smoking[0].cigarette
    }else if(teamManager == 2){  
        clickCheck("Terrorist Spawn (Enemy)")
    }else if(teamManager == 1 && objectives[3].smoking[0].cigarette){
        clickCheck("Terrorist Spawn (Cigarette)")
        objectives[3].smoking[0].cigarette = !objectives[3].smoking[0].cigarette
    }else if(objectives[1].bombArm.planted){
        clickCheck("Terrorist Spawn (T ENDING 2/3)")
    }else if(teamManager == 1 && objectives[1].bombEquipment.ductTape && objectives[1].bombEquipment.clock && objectives[1].bombEquipment.c4){
        clickCheck("Terrorist Spawn (Bomb Craft)")
    }else{
        clickCheck("Terrorist Spawn (Team)")
    }
});

midWP.addEventListener("click", function() {
    if(objectives[2].hl3Knowledge && middleCheck){
        clickCheck("Middle (Completed)")
    }else{
        clickCheck("Middle")
    }
});

palaceWP.addEventListener("click", function() {
    if(teamManager == 1 && objectives[3].smoking[0].lighter){
        clickCheck("Palace (WEED ENDING 3/3)")
        objectives[3].smoking[0].doEnding = !objectives[3].smoking[0].doEnding
    }else{
        clickCheck("Palace")
    }
});

kitchenWP.addEventListener("click", function() {
    if(objectives[1].bombArm.craft){
        clickCheck("Kitchen (Bomb Arming)")
    }else{
        clickCheck("Kitchen")
    }
});

shortWP.addEventListener("click", function() {
    clickCheck("Short")
});

apartmentWP.addEventListener("click", function() {
    clickCheck("Apartments")
});

stasisWP.addEventListener("click", function() {
    objectives[2].hl3Knowledge = !objectives[2].hl3Knowledge
    stasisWP.style.display = `none`
    clickCheck("Stasis")
});

document.addEventListener('keydown', function(event){
    if(enableDlg && event.key == "Enter"){
        doEnc()
    }else if(event.key == '-' || event.key == '='){
        doSpeed(event.key)
    }
})