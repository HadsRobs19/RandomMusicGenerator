
function generateRandomSong(genre)
// used to call code many time without worrying about repetiton errors of variables assigned to seperate code blocks
{
    let userName = '';
    userName ? console.log(`Hello, ${userName}! Your music type is ${genre}`) : console.log('Hello!');
    const randomAltMusic = `Show me new ${genre} music.`; 
    // console.log(randomAltMusic);
    // i frame (load webpage in webpage)
    let alternative = 
    [
    "So Soldier (feat Ainslie Wills) by #1 Dads" ,
    "Airliner by Cheers Elephant" ,
    "Tungs by The Frights" ,
    "Shiny Happy People by R.E.M." ,
    "Now or Never by Metric" , 
    "Memories Elephant by Crywank" ,
    "Just by Radiohead" ,
    "Ayawa 'Kya by Cayucas" ,
    "You Are Going to Hate This by The Frights" ,
    "The Ghost Inside by Broken Bells" ,
    "The Zephyr Song by Red Hot Chili Peppers" , 
    "Kissing the Lipless by The Shins" ,
    "Hi Dan How R U Miss U by Crywank" ,
    "The Indicator by The Cobra Lamps" ,
    "Crumpledbigskin by Crywank" ,
    "Song for Dan Treacy by MGMT" ,
    "Gwen by wilt" ,
    "Elephant Gun by Beirut" ,
    "The Purple Bottle by Animal Collective" ,
    "Moved Along by wilt" ,
    "Wake Bake Skate by FIDLAR" ,
    "Memento Mori by Crywank" ,
    "Gb Eating Gb Whilst Listening to Gb by Crywank" ,
    "Haunted by The Frights" ,
    "She Got Dressed by Fleet Foxes" ,
    "Summer Holiday by Wild Nothing" ,
    "2 + 2 = 5 by Radiohead" ,
    "Disarm by Empire of the Sun" ,
    "Sticky Fruitman Has Faith by White Fence" ,
    "All I Need by The Frights" ,
    "Puberty by wilt" ,
    "Leech Boy by Crywank" ,
    "One Thing Left to Try by MGMT" ,
    "Bishops Knife Trick by Fall Out Boy" ,
    "Waiting Around For Grace by POND" ,
    "I Am Shit by Crywank" ,
    "Clay Pigeons by Michael Cera" ,
    "Forest Green by Wolf Parade" ,
    "Julia Take Your Man Home by Wolf Parade" ,
    "Just a Snail by Crywank" ,
    "Trades and Tariffs by The Dodos" ,
    "Fools by The Dodos" ,
    "Nothing Special by wilt" ,
    "Deep Down I'm American Werewolf by Crywank" ,
    "Afraid of the Dark by The Frights" ,
    ]

    let rap =
    [
        "Frick Park Market by Mac Miller" ,
        "Buttons by Mac Miller" ,
        "SWEET/I THOUGHT YOU WANTED TO DANCE (feat. Brent Faiyaz & Fana Hues)" ,
        "Les by Childish Gambino" , 
        "PRIDE. by Kendrick Lamar" , 
        "Money Trees (feat. Jay Rock)" , 
        "Sabotage by Beastie Boys" , 
        "Luv(sic), Pt. 2 by Nujabes" ,
        "Revofev by Kid Cudi" ,
        "Count Me Out by Kendrick Lamar" ,
        "Do for Love by 2Pac" , 
        "Rebirth of Slick by Digable Planets" ,
        "Time by AKINYEMI & Birocratic" ,
        "Jazz (We've Got) by A Tribe Called Quest" ,
        "We (feat. CeeLo Green) by Mac Miller" ,
        "F.I.L.O. (feat. Shing02) by Nujabes" ,
        "Millennials Anthem by Tenn Buick" ,
        "Hot Damn (feat. Method Man) by Blimes Brixton & Blimes" ,
    ]

    let rock = 
    [
        "(Don't Fear)The Reaper by Blue Oyster Cult" ,
        "Scum by Lovejoy" ,
        "Fantasy by Sinning Gods" ,
        "Closer to the Heart by Rush" ,
        "1979 by The Smashing Pumkins" ,
        "Luna by The Smashing Pumpkins" ,
        "Jump by Van Halen" ,
        "Come Together by The Beatles" ,
        "Abracadabra by Steve Miller Band" ,
        "Video Killed the Radio Star by The Buggles" ,
        "Don't Bring Me Down by Electric Light Orchestra" ,
        "A Horse With No Name by Americ" ,
        "Crawling After You by Bass Drum of Death" ,
        "Living On Venus by Sinning Gods" ,
        "Cause for Concern by Lovejoy" ,
        "Taunt by Lovejoy" ,
        "Deliver Me by Sinning Gods" ,
        "Portrait of a Blank Slate by Lovejoy" ,
        "I Could by Sinning Gods",
        "Antarctica by Black Tie Dynasty" ,
        "Hymn for a Droid by Psychedelic Porn Crumpets" ,
        "White Fright by Bass Drum of Death" ,
        "Venus by Shocking Blue" ,
        "Statue of Misery by Sinning Gods" ,
        "Karma Chameleon by Boy George" ,
        "Don't Feel Quite Right by Palaye Royale" ,
        "No Demons by Bass Drum of Death" ,
        "Call Me What You Like by Lovejoy" ,
        "Harness Your Hopes(B-side) by Pavement" ,
        "3's & 7's by Queens of the Stone Age" ,
        "Evil Women by Electric Light Orchestra" ,
        "Consequences by Lovejoy" ,
        "It's Golden Hour Somewhere by Lovejoy" ,
        "Fahrradsattel by Pisse" ,
        "Bye Bye Babylon by Bryan Scary" ,
        "Open-Mindedness by Aura Blaze" ,
        "Oh Yeah, You Gonna Cry? by Lovejoy" ,
        "Johnny Boy by twenty one pilots" ,
        "If I Ever Feel Better by Phoenix" ,
        "Ghost by nelward" ,
        "Shattered Me by Bass Drum of Death" ,
        "Warsaw by Lovejoy" ,
        "Love U More by Sinning Gods" ,
    ]

    let soul =
    [
        "In Your Eyes by The Weeknd" ,
        "After The Storm (feat. Tyler, The Creator & Bootsy Collins) by Kali Uchis" ,
        "The Best by Tina Turner" ,
        "I Try by Angela Bofill" ,
        "Tightrope (feat. Big Boi) by Janelle Monae" ,
        "Redbone by Childish Gambino" ,
        "C U Girl by Steve Lacy" ,
        "Got to Be Real by Cheryl Lynn" ,
        "Drew Barrymore by SZA" ,
        "Upside Down by Diana Ross" ,
        "Show Me by Mac Ayres" ,
        "Baby Girl by Matt Martians" ,
        "Them Changes by Thundercat" ,
        "Fly As Me by Silk Sonic, Bruno Mars & Anderson .Paak" ,
        "Fantastic Voyage by Lakeside" ,
        "For Once in My Life by Stevie Wonder" ,
        "Liberty by AMNESTY" ,
        "A Night to Remeber by Shalamar" ,
        "Bad Habit by Steve Lacy" ,
        "Gravity (feat. Tyler, The Creator) by Brent Faiyaz & DJ Dahi" ,
        "Soldier of Love by Sade" ,
        "Dark Red by Steve Lacy" ,
        "Under the Boardwalk by The Drifters" ,
        "Rasputin by Boney M." ,
        "Why by Carly Simon" ,
        "Didn't I by Darondo" ,
    ]

    let indie =
    [
        "Back Home Old Buddy by Butter Bath" ,
        "Call Me What You Like by Lovejoy" ,
        "Clementine by T. Evann" ,
        "Boy by The Frights" ,
        "girlfriend by Hemlocke Springs" ,
        "Cure For Me by AURORA" ,
        "Clovers by Barrie" ,
        "French Navy by Camera Obscura" ,
        "You and I by Papooz" ,
        "On the Line by Caraml" ,
        "Push Me Away by Jordana & Magdalena Bay" ,
        "Why Didn't You Stop Me? by Mitski" ,
        "Blue Wings by Wild Nothing" ,
        "Delivery Me by Sinning Gods" ,
        "Forks and Knives (La Fete) by Beirut" ,
        "Postcards from Italy by Beirut" ,
        "Candy Wrappers by Summer Salt" ,
        "Safe by Surf Curse" ,
        "Flawed Translation by Wild Nothing" ,
        "Blue Lips by Her's" ,
        "Glasgow by The Maplewaves" ,
        "Put on Fun by The Maplewaves" ,
        "Its Ok by The Maplewaves" ,
        "Fall Down by Crumb" ,
        "Foyer by Wild Nothing" ,
        "What Once Was by Her's" ,
        "On the Level by Mac DeMarco" ,
        "My Smile Is Extinct by Kane Strang" ,
        "America's Cup by Pond" ,
        "Element by Deerhunter" ,
        "Ghostride by Crumb" ,
        "Rounder II by Fever the Ghost" ,
    ]

    let electronic =
    [
        "D.A.N.C.E. by DJ Vibe Inc. & Max Barbaria" ,
        "Rose Quartz by Toro y Moi" ,
        "As You Move Through the World by MGMT" ,
        "I Can Tell by Yung Bae" ,
        "Xleepy by Machine Girl" ,
        "Electricity by Orchestral Manoeuvres In the Dark" ,
        "Into Happiness by Phantogram" ,
        "Throwaway by SG Lewis" ,
        "The Difference (feat. Toro y Moi) by Flume" ,
        "Monument by Royksopp & Robyn" ,
        "Crave You (feat. Giselle) by Flight Facilities" ,
        "Aah! Sealife by Various Artists" ,
        "The Bay by Metronomy" ,
        "Feel It All Around by Washed Out" ,
        "Nothing Better by The Postal Service" ,
        "Land of the Blind by Information Society" ,
        "Midnight City by M83" ,
        "Sometimes by Miami Horror" ,
        "Far Away by Cut Copy" , 
        "Strangers in the Wind by Cut Copy" , 
        "Go! (feat. Mai Lan) by M83" ,
        "Bibi the Dog (feat. Mai Lan) by M83" ,
        "Worlds Within Worlds by Hot Chip" ,
        "Seventeen by Ladytron" ,
        "Ready for the Floor by Hot Chip" ,
        "Melody by Plustwo" ,
        "Horsey (feat. Sarah Bonito) by Macross 82-99" ,
        "4AM by Grimes" ,
        "Burn Out Blues by Washed Out" ,
        "As Above So Below by Klaxons" ,
        "Delt Bay by Empire of the Sun" ,
        "Ghosts by Ladytron" ,
        "Such Great Heights by The Postal Service" ,
        "With You In My Head (feat. The Black Angels) by UNKLE" ,
        "Hey Moon by John Maus" ,
        "Standing On the Shore by Empire of the Sun" , 
        "Young Lovers (Sam Sparro Edit) by Love Grenades" ,
        "Goth by Sidewalks and Skeletons" ,
        "Whistling Through the Graveyard by MGMT" ,
        "Unfriend by MGMT" ,
        "Test & Recognize by Seekae" ,
    ]

    let dance =
    [
        "The Veldt (feat. Chris James) by deadmau5" ,
        "Since You've Asked by Birocratic" , 
        "Sombre, Green by Birocratic" ,
        "Disco Dan Adjusts to Suburban Life  by Birocratic" ,
        "He's the Greatest Dancer by Sister Sledge" ,
        "A Pimp Named Slickback by Lakim" ,
        "Dancin (feat. Luvli) [Krono Remix] by Aaron Smith" , 
        "Feels (feat. Pharrell Williams, Katy Perry & Big Sean) by Calvin Harris" ,
        "Acceptable In The 80's by Clavin Harris" ,
        "B-Boy on Wax (feat. Speech Defect) by Wax Tailor" ,
        "What's On Your Mind (Pure Energy) by Information Society" ,
        "In for the Kill by La Roux" ,
        "Remind Me by Royksopp" ,
        "Nowhere Girl by B-Movie" ,
        "Camel by Camle by Sandy Marton" ,
        "Que Sera by Wax Tailor" ,
        "We Are the People by Empire of the Sun" ,
        "Feel so Close (Radio Edit) by Calvin Harris" ,
        "Instant Crush (feat. Julian Casablancas) by Daft Punk" ,
        "Favela Beat by Birocratic" ,
    ]

    let pop = 
  [
        "Gimme! Gimme! Gimme! (A Man After Midnight) by ABBA" ,
        "Puttin' on the Ritz by Taco" ,
        "Watch That Man by David Bowie",
        "Halcyon Age by Vansire",
        "Same Ol' Mistakes by Rihanna",
        "Anything You Want by JAWNY" , 
        "Souvenir by Orchestral Manoeuvres In the Dark",
        "Applause by Lady Gaga",
        "Rock Lobster by The B-52's",
        "Baby Hotline by Jack Stauber's Micropop",
        "Jabberjaw by The Buttertones",
        "Tea Errors by Jack Stauber's Micropop" ,
        "Beach Walk by Whitewoods",
        "We Got the Beat by The Go-Go's",
        "American Pie by Don Mclean",
        "Little Sad Eyes by The Castells",
        "Big Sis by SALES",
        "Cico Buff by Cocteau Twins",
        "Government Hooker by Lady Gaga",
        "Goth Babe by Surf Curse",
        "Dreamin' Wild by Surf Curse",
        "Nice Boys by TEMPOREX",
        "Lost in a Flower Field by TEMPOREX",
        "Devil Town by Cavetown",
        "Fighter by Jack Stauber's Micropop",
        "Nada (feat. Bunbury) by Zoe",
        "Cheri Cheri Lady by Modern Talking",
        "First Love by The Maccabees",
        "Move Your Feet by Junior Senior",
        "Ma Baker by Boney M.",
        "Wild Child by Enya",
        "Boat Behind by Kings of Convenience",
        "You Showed Me by The Lightning Seeds",
        "Suspended In Gaffa by Kate Bush", 
        "Enjoy the Silence by Depeche Mode",
        "Just Dropped In (To See What Condition My Condition Was In) by The First Edition",
        "fool around by strongboi",
        "Birds Don't Sing by TV Girl",
        "Hate Yourself by TV Girl",
        "Lovers Rock by TV Girl",
        "Bust by Vundabar",
        "PLW by Leon Thomas",
        "She Blinded Me With Science by Thomas Dolby",
        "Grapejuice by Harry Styles",
        "Cinema by Harry Styles",
        "Heybb! by binki",
        "Beird by Jack Stauber",
        "Love is the Cure by Autoheart",
        "Christmas Kids by Roar",
        "Heaven Can Wait by Charlotte Gainsbourg",
        "Kim & Jessie by M83",
        "Eighth Wonder by Lemon Demon",
        "Let's Call It Off by Peter Bjorn and John",
        "Getting it On by SALES",
        "Chinese New Year by SALES",
        "Atlantis Is Calling (S.O.S. for Love) by Modern Talking",
   ]

    let jazz = 
    [
        "Baby Did You Hear by Dinah Washington" ,
        "Cantaloop (Flip Fantasia) by Us3" ,
        "Time Moves Slow by BADBADNOTGOOD" ,
        "Baby Come to Me by Eliane Elias" ,
        "Stay by Datfootdive" ,
        "Shout Sister Shout by Madeleine Peyroux" ,
        "Nite Owl (A.K.A. Night Owl) by Various Artists" ,
        "Therapy pt. 2 (feat. Mac Miller) by Robert Glasper" ,
        "Messages from the Stars by The Rah Band" ,
        "Poxa by Cortex" ,
        "What You Won't Do for Love by Bobby Caldwell" ,
        "It's You by Lin Rountree" , 
        "Snooze by Terrace Martin" ,
        "Magic Mirror by Carol Albert" ,
        "Just Like That by Nick Colionne" ,
        "Change the World by Chris Stabdring" ,
        "Shadow Dancer by Vincent Ingala" ,
        "Release by Lin Rountree" ,
        "Forbidden Fruit by Pamela Williams" ,
        "Blame It On The Night by Finis Henderson" ,
        "Play Back by Isabelle Antena" ,
        "It is What is is by Vincent Ingala" ,
        "My Romance by The Rah Band, Kat Drake" ,
        "Shadow of Your Love by The Rah Band" ,
        "Counter Strike by Lyn" ,
        "Feel Like Makin' Love by Roberta Flack" ,
        "Cupid by FIFTY FIFTY" ,
        "Mimosa by George Benson, Earl Klugh" ,
        "Return of the Mack by Mark Morrison" ,
        "Disco Yes by Tom Misch, Poppy Ajudha" ,
        "ON THE MOVE by Jun Fukamachi" ,
        "One Wish by Hiroshima" ,
        "I've Got My Second Wind by Al Johnson" ,
        "Easy Lovers by Piero Piccioni" ,
        "I Don't Worry 'bout A Thing by Jeff Golub" ,
        "Lowdown by Boz Scaggs" ,
        "Never Too Much by Luther Vandross" ,
        "I'm Every Woman by Chaka Khan" ,
        "Walking In Rhythm by Joe McBride" ,
        "Love Season by Alex Bugnon" ,
        "Latin Haze by Oil Silk" ,
        "Cinnamon Sugar by Fourplay" ,
        "Flight of The Angels by Keiko Matsui" ,
        "Who? by Richard Elliot" ,
        "Colibri by Incognito" ,
        "Tickle Time by Herb Alpert" ,
        "You're The One For Me by Urban Knights" ,
        "Groovelatino by Hiroshima" ,
        "Spice by Fattburger" ,
        "Cruisin' J-Town by Hiroshima" ,
        "Highland Park by Joe McBride" ,
        "Gentle Shower by PIPER" ,
        "So Far So What by Fattburger" ,
        "Say Hey! by Thom Rotella, Gregg Karukas" ,
        "Touch and Go by The Jazzmasters" ,
        "Out to Lunch by Oil Silk" ,
        "Do You Feel What I'm Feeling? by Warren Hill" ,
        "Play Lady Play by Fourplay" ,
        "Kaleidoscope by Chris Standring" ,
        "Broken Heart by Mariya Takeuchi" ,
        "Invitation to Freedom by Lyn" ,
        "Storyteller by Crystal Waters" ,
        "Are You Satisfied by The Rah Band" ,
        "Max-O-Man by Fourplay" ,
        "THE GATES OF LOVE by Akira Jimbo" ,
        "Freak Jack by CASIOPEA" ,
        "Morning by Azymuth" ,
        "Follow Me by Pat Metheny Group" ,
        "Dream Seeker by Keiko Matsui" ,
        "Caipi by Kurt Rosenwinkel, Pedro Martins" ,
        "Attitude by luxury elite" ,
        "CHARCOAL BREAK by NANIWA EXPRESS" ,
    ]

    
    /* var myVideo = document.getElementsByTagName('video')[0]
    myVideo.innerHtml = '';
    videoSources[currentIndex].foeEach(url => {
        const source = document.createElement('source');
        source.src = url;
        myVideo.appendChild(source); 
    }) */
    let randomNum = Math.floor(Math.random() * (alternative.length));
    // .length used to randomize the number of things (songs) in side each array
    let selectedSong;
    // Switch statement uased to create randomNums of all genres to use Math.floor(Math.random) method for all arrays (music genres)
    switch (genre)
    {
        case "Alternative":
            selectedSong = alternative[randomNum];
            break;
        case "Rap":
            selectedSong = rap[randomNum];
            break;
        case "Rock":
            selectedSong = rock[randomNum];
            break;
        case "Soul" :
            selectedSong = soul[randomNum];
            break;    
        case "Indie":
            selectedSong = indie[randomNum];
            break;   
        case "Electronic":
            selectedSong = electronic[randomNum];
            break;     
        case "Dance":
            selectedSong = dance[randomNum];
            break;   
        case "Pop":
            selectedSong = pop[randomNum];
            break;      
        case "Jazz":
            selectedSong = jazz[randomNum];
            break;                                                           
    }

setElementsText(`Your new ${genre} song for the day is ${selectedSong}! Enjoy!`);
// prints on website selectedSong and genre title
}
// links to elements p tag to shuffle through each js array
const setElementsText = (innerHTML) => {
    document.getElementById("elements").innerHTML= innerHTML;
}



/*
generateRandomSong("Alternative");
generateRandomSong("Rap");
generateRandomSong("Rock");
generateRandomSong("Soul");
generateRandomSong("Indie");
generateRandomSong("Electronic");
generateRandomSong("Dance");
generateRandomSong("Pop");
generateRandomSong("Jazz");
*/

// generateRandomSong used to pull from each titles array and run them through all console.logs at the same time
