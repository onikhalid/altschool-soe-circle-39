

//post id = p-AuthorInitials-id-firstThreeWords-
const posts = [
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    {
        id: 1,
        uid: "pJ4M1wAT",
        author: "joker4mas",
        content: "What are the jobs you think won't be affected by AI?",
        media: null,
        created_at: "2024-03-30T14:30:00Z",
        retweets: ["faith2020, joker4mas"],
        bookmarks: ["faith2020, joker4mas"],
        likes: ["faith2020, joker4mas"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "tweet",
        parent_post_id: null,
    },
    {
        id: 2,
        uid: "pM2stLa",
        author: "meenotek",
        content: "software testing",
        media: null,
        created_at: "2024-03-30T14:32:00Z",
        retweets: ["faith2020", "joker4mas"],
        bookmarks: ["faith2020", "joker4mas"],
        likes: ["faith2020", "joker4mas", "meenotek"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pJ4M1wAT",
    },
    {
        id: 3,
        uid: "pJ4M3wTB",
        author: "joker4mas",
        content: "wouldn't testing be one of the first things that gets replaced by AI? 🤔",
        media: null,
        created_at: "2024-03-30T14:35:00Z",
        retweets: [],
        bookmarks: [],
        likes: ["meenotek"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pM2stLa",
    },
    {
        id: 4,
        uid: "pM4aCG",
        author: "meenotek",
        content: "AI can't give proper human feedbacks of a software",
        media: null,
        created_at: "2024-03-30T14:40:00Z",
        retweets: [],
        bookmarks: [],
        likes: ["meenotek", "joker4mas"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pJ4M3wTB",
    },
    {
        id: 5,
        uid: "pFO5ciIH",
        author: "faruqolaide_",
        content: "Careers in healthcare, education, and creative industries will continue to thrive and require human expertise.",
        media: null,
        created_at: "2024-03-30T14:41:00Z",
        retweets: [],
        bookmarks: [],
        likes: ["meenotek", "joker4mas"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pJ4M1wAT",
    },
    {
        id: 6,
        uid: "pRP6iWS",
        author: "ruby_phena",
        content: "I will suggest not to fear any AI technologies but to Learn how to use this technology to perform any tasks efficiently. This practice will help you not to get replaced or laid off, believe me.",
        media: null,
        created_at: "2024-03-30T14:41:00Z",
        retweets: ["joker4mas"],
        bookmarks: [],
        likes: ["ruby_phena", "joker4mas"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pJ4M1wAT",
    },
    {
        id: 7,
        uid: "pRP7mCE",
        author: "ruby_phena",
        content: "Management, cloud engineering and management",
        media: null,
        created_at: "2024-03-30T14:41:00Z",
        retweets: [],
        bookmarks: [],
        likes: ["ruby_phena"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pJ4M1wAT",
    },
    {
        id: 8,
        uid: "pLS8tSK",
        author: "linakrystof",
        content: "Trade skills.",
        media: null,
        created_at: "2024-03-30T14:35:00Z",
        retweets: [],
        bookmarks: [],
        likes: ["meenotek", "joker4mas", "linakrystof", "faruqolaide_", "ruby_phena"],
        hashtags: ["#programming", "#coding", "#learning"],
        post_type: "reply",
        parent_post_id: "pJ4M1wAT",
    },




    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    {
        id: 23,
        uid: "pRP23lBG",
        author: "ruby_phena",
        content: "Lemurs be in the jungle gettin high off millipedes lmao",
        media: [
            {
                "type": "video",
                "url": "https://example.com/media/hawaii-beach.jpg"
            }
        ],
        created_at: "2024-02-29T12:15:00Z",
        bookmarks: [],
        likes: [],
        retweets: ["ruby_phena",],
        hashtags: ["#random", "#lemur", "#meme"],
        post_type: "tweet",
        parent_post_id: null,
    },
    {
        id: 24,
        uid: "pJM24mBF",
        author: "joker4mas",
        content: "my boi **FOLDED**",
        media: [
            {
                "type": "image",
                "url": "pJM24mBF-1"
            }
        ],
        created_at: "2024-02-29T12:15:00Z",
        bookmarks: [],
        likes: ["ruby_phena", "meenotek", "faruqolaide_"],
        retweets: [],
        hashtags: ["#lemur", "#meme"],
        post_type: "quote",
        parent_post_id: "pRP23lBG",
    },

    {
        id: 25,
        uid: "pABD26aBD",
        author: "meenotek",
        content: "🤣🤣🤣",
        media: null,
        created_at: "2024-02-29T12:19:00Z",
        bookmarks: [],
        likes: ["meenotek", "ruby_phena"],
        retweets: [],
        hashtags: ["#meme"],
        post_type: "reply",
        parent_post_id: "pJM24mBF",
    },
    {
        id: 26,
        uid: "pXB25sCA",
        author: "xx__bella__xx",
        content: "Somebody call him an Uber 🤣",
        media: null,
        created_at: "2024-02-29T12:16:00Z",
        bookmarks: [],
        likes: ["joker4mas", "xx__bella__xx", "mojiesola", "ruby_phena", "meenotek", "linakrystof"],
        retweets: [],
        hashtags: ["#laugh", "#meme"],
        post_type: "reply",
        parent_post_id: "pJM24mBF",
    },
    {
        id: 27,
        uid: "pABC27aBC",
        author: "ruby_phena",
        content: "🤣🤣🤣",
        media: null,
        created_at: "2024-02-29T12:19:00Z",
        bookmarks: [],
        likes: ["xx__bella__xx", "ruby_phena"],
        retweets: [],
        hashtags: ["#meme"],
        post_type: "reply",
        parent_post_id: "pXB25sCA",
    },
    {
        id: 28,
        uid: "pFO28bTF",
        author: "faruqolaide_",
        content: "bro totally fried!",
        media: [
            {
                "type": "image",
                "url": "pJM24mBF-1"
            }
        ],
        bookmarks: [],
        created_at: "2024-02-29T12:19:00Z",
        likes: ["faruqolaide_", "ruby_phena"],
        retweets: [],
        hashtags: ["#meme"],
        post_type: "reply",
        parent_post_id: "pRP23lBG",
    },

    {
        id: 29,
        uid: "pDX29bIA",
        author: "deyji_xoxo",
        content: "Bros in a whole other dimension.",
        media: null,
        bookmarks: [],
        created_at: "2024-02-29T12:19:00Z",
        likes: ["faruqolaide_", "deyji_xoxo"],
        retweets: [],
        hashtags: ["#meme"],
        post_type: "reply",
        parent_post_id: "pRP23lBG",
    },






    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    {
        id: 30,
        post_type: "tweet",
        uid: "pCO30Jus",
        author: "chef_olusola",
        content: "Check out this mouthwatering Nigerian dish I whipped up! -Jollof rice and tomato sauce🍲🍲- Get the recipe on my blog. 🍽️ #nigeriancuisine #foodblogger #yummy",
        media: [
            {
                type: "image",
                url: "https://example.com/media/nigerian-dish.jpg",
            },
            {
                type: "image",
                url: "https://example.com/media/nigerian-dish.jpg",
            },

        ],
        created_at: "2024-03-05T13:45:00Z",
        bookmarks: ["iya_kemi_kitchen", "simithetastebuddoctor"],
        likes: ["iya_kemi_kitchen", "adesviands", "lola_flavorguru", "just_tobi", "faruqolaide_", "simithetastebuddoctor", "xx__bella__xx", "faith2020", "ruby_phena"],
        retweets: ["adesviands", "iya_kemi_kitchen",],
        hashtags: ["#nigeriancuisine", "#foodblogger", "#yummy"],
        is_nested_reply: false,
        parent_post_id: null,
    },
    {
        id: 39,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pNK9RLa",
        author: "just_tobi",
        content: "That looks amazing! Can't wait to try the recipe.",
        likes: ["iya_kemi_kitchen", "adesviands", "lola_flavorguru"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T14:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 310,
        post_type: "reply",
        parent_post_id: "pAA312Thi",
        uid: "pIO310Whi",
        author: "adesviands",
        content: "Yum! Absolutely in love with the vibrant colors and flavors.",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T14:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 311,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pUO311Jus",
        author: "faruqolaide_",
        content: "Any tips for getting that perfect texture?",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T14:30:00Z",
        is_nested_reply: true,
    },
    {
        id: 312,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pAA312Thi",
        author: "iya_kemi_kitchen",
        content: "This looks so good! Your can I find the recipe? you didnt link your blog",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T14:45:00Z",
        is_nested_reply: true,
    },
    {
        id: 313,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pKK313Jus",
        author: "xx__bella__xx",
        content: "I'm drooling! Can't wait to try this at home.",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T15:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 314,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pMM314Whi",
        author: "xx__bella__xx",
        content: "@joker4mas Just take a look at this man!, compare this to the rubbish you cooked for me this morning 🌚.",
        likes: ["faruqolaide_", "joker4mas"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T15:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 315,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pNO315Thi",
        author: "chioma_chioma",
        content: "I can almost taste it through the screen! Well done.",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T15:30:00Z",
        is_nested_reply: true,
    },
    {
        id: 316,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pPP316Jus",
        author: "simithetastebuddoctor",
        content: "Any chance you'll be sharing more Nigerian recipes soon?",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T15:45:00Z",
        is_nested_reply: true,
    },
    {
        id: 317,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pQQ317Whi",
        author: "joker4mas",
        content: "Shey ano go switch careers like this??",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T16:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 317,
        post_type: "reply",
        parent_post_id: "pQQ317Whi",
        uid: "pQZ37Whi",
        author: "iamchuks",
        content: "Who wan chop the rubbish wey you dey cook? 😂",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T16:01:00Z",
        is_nested_reply: true,
    },
    {
        id: 318,
        post_type: "reply",
        parent_post_id: "pCO30Jus",
        uid: "pRR318Thi",
        author: "simithetastebuddoctor",
        content: "This is making me miss home! Definitely trying this soon.",
        likes: ["faruqolaide_", "adetootoo", "chef_olusola"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T16:15:00Z",
        is_nested_reply: true,
    },

    {
        id: 319,
        post_type: "quote",
        uid: "pSS319Jus",
        author: "chef_olusola",
        content: "Sorry guys! Here's the recipe https://www.ggogle.com . Can't wait to to see the result of what you guys make with it👌🏾.\nSubscribe to my youtube channel for more recipes, link in my bio",
        created_at: "2024-03-05T16:30:00Z",
        likes: ["chef_olusola", "iya_kemi_kitchen", "adesviands", "lola_flavorguru", "just_tobi", "faruqolaide_", "simithetastebuddoctor", "xx__bella__xx", "faith2020", "ruby_phena", "linakrystof", "iamchuks", "adetootoo"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO30Jus"
    },
    {
        id: 320,
        post_type: "quote",
        uid: "pTT320Whi",
        author: "deyji_xoxo",
        content: "The colors alone are making my mouth water! Thanks for sharing, @chef_olusola",
        created_at: "2024-03-05T16:45:00Z",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO30Jus"
    },
    {
        id: 321,
        post_type: "quote",
        uid: "pUU321Thi",
        author: "zaidu_footwears",
        content: "Adding this to my must-try list! Nigerian cuisine never disappoints. 😋 @chef_olusola",
        created_at: "2024-03-05T17:00:00Z",
        likes: ["faruqolaide_"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO30Jus"
    },
    {
        id: 322,
        post_type: "quote",
        uid: "pVV322Jus",
        author: "kene_flavourtrail",
        content: "This is making me so hungry! Definitely giving this a try soon. @chef_olusola",
        created_at: "2024-03-05T17:15:00Z",
        likes: ["faruqolaide_", "chef_olusola"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO30Jus"
    },
    {
        id: 323,
        post_type: "quote",
        uid: "pWW323Whi",
        author: "linakrystof",
        content: "Nigerian cuisine is truly a work of art! Everytime I visit, I simply can't get enough of these flavors. @chef_olusola",
        created_at: "2024-03-05T17:15:00Z",
        likes: ["chef_olusola"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO30Jus"
    },

    {
        id: 341,
        post_type: "tweet",
        uid: "pCO41Jus",
        author: "just_tobi",
        content: "Just discovered a new coding technique! It's mind-blowing. #coding #programming",
        media: [
            {
                type: "image",
                url: "https://example.com/media/coding-technique.jpg"
            }

        ],
        created_at: "2024-03-05T17:15:00Z",
        bookmarks: [],
        likes: ["adebanjotoheeb", "adesviands", "lola_flavorguru", "joker4mas", "faruqolaide_", "xx__bella__xx", "faith2020", "ruby_phena", "simithetastebuddoctor", "iya_kemi_kitchen", "anittta", "ayo_mide", "deyji_xoxo", "urhobo_devil", "zaidu_footwears"],
        retweets: [],
        hashtags: ["#coding", "#programming"],
        is_nested_reply: false,
        parent_post_id: null,
    },
    {
        id: 342,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pAA342Thi",
        author: "deyji_xoxo",
        content: "Wow! That looks amazingly simple. Could you share more details?",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T17:30:00Z",
        is_nested_reply: true,
    },

    {
        id: 344,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pCC344Whi",
        author: "adesviands",
        content: "Sounds interesting! Can't wait to learn more about this coding technique.",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T18:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 345,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pDD345Thi",
        author: "iya_kemi_kitchen",
        content: "Gbobgo awon tech bro yii gan",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T18:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 346,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pEE346Jus",
        author: "just_tobi",
        content: "Hmm let's see.",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T18:30:00Z",
        is_nested_reply: true,
    },
    {
        id: 347,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pFF347Whi",
        author: "faruqolaide_",
        content: "I'm always up for learning new coding techniques. Tell me more!",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T18:45:00Z",
        is_nested_reply: true,
    },
    {
        id: 348,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pGG348Thi",
        author: "xx__bella__xx",
        content: "I want to be a tech sis too bruh. Enough of the oppression!.",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T19:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 349,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pHH349Jus",
        author: "faith2020",
        content: "I'm excited to learn about this coding technique. Share more details!",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T19:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 350,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pII350Whi",
        author: "ruby_phena",
        content: "Coding techniques that blow the mind are always worth exploring. Tell me more!",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T19:30:00Z",
        is_nested_reply: true,
    },
    {
        id: 351,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pJJ351Thi",
        author: "joker4mas",
        content: "Mind-blowing coding techniques? Count me in! Can't wait to hear more.",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T19:45:00Z",
        is_nested_reply: true,
    },
    {
        id: 352,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pKK352Jus",
        author: "lola_flavorguru",
        content: "I'm always excited to learn new coding techniques. Share the details!",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T20:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 353,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pLL353Whi",
        author: "altschoolafrica",
        content: "Coding techniques that blow the mind? We'm all ears. Tell us more!",
        likes: ["iamchuks", "zaidu_footwears", "altschoolafrica", "adanna"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T20:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 354,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pMM354Thi",
        author: "adesviands",
        content: "I'm intrigued! Can't wait to learn about this mind-blowing coding technique.",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T20:30:00Z",
        is_nested_reply: true,
    },
    {
        id: 356,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pOO356Whi",
        author: "just_tobi",
        content: "I'm excited to learn about this coding technique. Tell me more!",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T21:00:00Z",
        is_nested_reply: true,
    },
    {
        id: 357,
        post_type: "reply",
        parent_post_id: "pCO41Jus",
        uid: "pPP357Thi",
        author: "faruqolaide_",
        content: "I watched this guy grow from struggling with HTML and CSS to this, I'm sooo happy for him!",
        likes: ["just_tobi"],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T21:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 358,
        post_type: "quote",
        uid: "pQQ358Jus",
        author: "adebanjotoheeb",
        content: "I don't know about 'mind-blowing', looks very half-baked. Nothing spectucular, why ona dey famz this shit talmabout 'I can't wait to try it out'",
        created_at: "2024-03-05T21:30:00Z",
        likes: ["", ""],
        retweets: ["iya_kemi_kitchen", "adesviands"],
        bookmarks: ["lola_flavorguru", "just_tobi"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 3570,
        post_type: "reply",
        parent_post_id: "pQQ358Jus",
        uid: "pPP3589Thi",
        author: "faruqolaide_",
        content: "So much bad blood and he doesn't even know you o! Dimwit!",
        likes: ["just_tobi", "faruqolaide_"],
        retweets: ["just_tobi"],
        bookmarks: [],
        created_at: "2024-03-05T21:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 35700,
        post_type: "reply",
        parent_post_id: "pPP3589Thi",
        uid: "pPP3570Thi",
        author: "adebanjotoheeb",
        content: "gawk gawk gawk! get off that dick",
        likes: [],
        retweets: [],
        bookmarks: [],
        created_at: "2024-03-05T21:15:00Z",
        is_nested_reply: true,
    },
    {
        id: 359,
        post_type: "quote",
        uid: "pRR3590Whi",
        author: "ayo_mide",
        content: "Why is everybody saying 'I'm blown away by this coding technique!', 'It's amazing', 'a game changer' 'It's truly revolutionary', This is just shit code bruh, there's absolutely NOTHING revolutionary about this",
        created_at: "2024-03-05T21:50:00Z",
        likes: ["adebanjotoheeb", "ayo_mide"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 3759,
        post_type: "quote",
        uid: "pRR3590Whi",
        author: "adebanjotoheeb",
        content: "They called me a hater 😭😭, WTH is that code??. Even people wey no sabi anything about code dey talk 'amazing'",
        created_at: "2024-03-05T21:57:00Z",
        likes: ["adebanjotoheeb", "ayo_mide"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 360,
        post_type: "quote",
        uid: "pSS360Thi",
        author: "lola_flavorguru",
        content: "This coding technique is a game-changer! Is there any way to apply this to cooking my samosa?? 🌚.",
        created_at: "2024-03-05T22:00:00Z",
        likes: ["faruqolaide_", "iya_kemi_kitchen", "lola_flavorguru", "simithetastebuddoctor"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 1060,
        post_type: "reply",
        uid: "pSS360TDi",
        author: "lola_flavorguru",
        content: "What's wrong with you and @iya_kemi_kitchen 🤣😂😂.",
        created_at: "2024-03-05T22:02:00Z",
        likes: ["iya_kemi_kitchen", "lola_flavorguru", "simithetastebuddoctor"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pSS360Thi",
    },
    {
        id: 361,
        post_type: "quote",
        uid: "pTT361Jus",
        author: "iamchuks",
        content: "Brilliant!, just brilliant! I'm actually in awe! It's truly remarkable.",
        created_at: "2024-03-05T22:15:00Z",
        likes: ["iamchuks", "sammie"],
        retweets: ["lola_flavorguru", "simithetastebuddoctor"],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 362,
        post_type: "quote",
        uid: "pUU362Whi",
        author: "just_tobi",
        content: "This coding technique is mind-blowing! I can't wait to dive into it.",
        created_at: "2024-03-05T22:30:00Z",
        likes: ["faruqolaide_", "iya_kemi_kitchen"],
        retweets: ["adesviands", "lola_flavorguru"],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 363,
        post_type: "quote",
        uid: "pVV363Thi",
        author: "ruby_phena",
        content: "I'm blown away by this coding technique! It's truly impressive.",
        created_at: "2024-03-05T22:45:00Z",
        likes: ["faruqolaide_", "just_tobi", "iya_kemi_kitchen"],
        retweets: ["adesviands", "lola_flavorguru"],
        bookmarks: ["simithetastebuddoctor"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 364,
        post_type: "quote",
        uid: "pWW364Jus",
        author: "faruqolaide_",
        content: "This coding technique is a game-changer! I'm so excited to try it out.",
        created_at: "2024-03-05T23:00:00Z",
        likes: ["iya_kemi_kitchen", "adesviands"],
        retweets: ["lola_flavorguru", "simithetastebuddoctor"],
        bookmarks: ["just_tobi", "ruby_phena"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 365,
        post_type: "quote",
        uid: "pXX365Whi",
        author: "iya_kemi_kitchen",
        content: "I'm in awe of this coding technique! (I don't know anything about coding 😂😂)",
        created_at: "2024-03-05T23:15:00Z",
        likes: ["faruqolaide_", "adesviands"],
        retweets: ["lola_flavorguru", "simithetastebuddoctor"],
        bookmarks: ["just_tobi", "ruby_phena"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 465,
        post_type: "reply",
        uid: "pXX365Whi",
        author: "joker4mas",
        content: "😂😂😂😂",
        created_at: "2024-03-05T23:15:00Z",
        likes: ["faruqolaide_", "adesviands", "iya_kemi_kitchen"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pXX365Whi",
    },
    {
        id: 466,
        post_type: "reply",
        uid: "pXX365Whi",
        author: "just_tobi",
        content: "You play too much 😂😂",
        created_at: "2024-03-05T23:15:00Z",
        likes: ["just_tobi", "iya_kemi_kitchen"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pXX365Whi",
    },

    {
        id: 367,
        post_type: "quote",
        uid: "pZZ367Jus",
        author: "simithetastebuddoctor",
        content: "'I'm blown away by this coding technique! It's truly groundbreaking'\n-Person wey no sabi anything about coding",
        created_at: "2024-03-05T23:45:00Z",
        likes: ["ayo_mide", "sammie", "adebanjotoheeb", "ayo_mide"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 37599,
        post_type: "reply",
        uid: "pRR359990Whi",
        author: "adebanjotoheeb",
        content: "people wey dey craze 😭😭, ona dey muzz me for this country",
        created_at: "2024-03-05T23:57:00Z",
        likes: ["adebanjotoheeb", "ayo_mide"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pZZ367Jus",
    },
    {
        id: 37588,
        post_type: "reply",
        uid: "pRR359880Whi",
        author: "faruqolaide_",
        content: "you're everywhere antagonizing him, what a waste you are",
        created_at: "2024-03-05T23:58:00Z",
        likes: [],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pRR359990Whi",
    },
    {
        id: 37500,
        post_type: "reply",
        uid: "pRR359990Whi",
        author: "adebanjotoheeb",
        content: "and here you are again, on his dvck, you're a waste too",
        created_at: "2024-03-05T23:57:00Z",
        likes: ["adebanjotoheeb", "ayo_mide"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pRR359880Whi",
    },
    {
        id: 369,
        post_type: "quote",
        uid: "pBB369Thi",
        author: "adesviands",
        content: "I'm in awe of this coding technique! It's truly remarkable.",
        created_at: "2024-03-06T00:15:00Z",
        likes: ["faruqolaide_", "iya_kemi_kitchen"],
        retweets: ["lola_flavorguru", "simithetastebuddoctor"],
        bookmarks: ["just_tobi", "ruby_phena"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 370,
        post_type: "quote",
        uid: "pCC370Jus",
        author: "chioma_chioma",
        content: "This is just mind-blowing! How do people even think about these things.. o ga o.",
        created_at: "2024-03-06T00:30:00Z",
        likes: ["faruqolaide_", "iya_kemi_kitchen", "chioma_chioma"],
        retweets: ["adesviands", "lola_flavorguru"],
        bookmarks: ["simithetastebuddoctor", "ruby_phena"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 371,
        post_type: "quote",
        uid: "pDD371Whi",
        author: "ruby_phena",
        content: "I'm blown away by this coding technique! It's truly impressive.",
        created_at: "2024-03-06T00:45:00Z",
        likes: ["faruqolaide_", "iya_kemi_kitchen"],
        retweets: ["adesviands", "lola_flavorguru"],
        bookmarks: ["just_tobi", "simithetastebuddoctor"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    {
        id: 372,
        post_type: "quote",
        uid: "pEE372Thi",
        author: "faruqolaide_",
        content: "This coding technique is a game-changer! I'm so excited to try it out.",
        created_at: "2024-03-06T01:00:00Z",
        likes: ["iya_kemi_kitchen", "adesviands"],
        retweets: ["lola_flavorguru", "simithetastebuddoctor"],
        bookmarks: ["just_tobi", "ruby_phena"],
        is_nested_reply: false,
        parent_post_id: "pCO41Jus",
    },
    

    {
        id: 373,
        post_type: "quote",
        uid: "pFF373Jus",
        author: "xx__bella__xx",
        content: "What do y'all think about @odinakchukwu new single, my man;s going to be a superstar soon",
        created_at: "2024-03-07T01:15:00Z",
        likes: ["faruqolaide_", "iya_kemi_kitchen", "odinakchukwu", "xx__bella__xx"],
        retweets: ["adesviands", "lola_flavorguru", "meenotek"],
        bookmarks: ["just_tobi", "ruby_phena", "odinakchukwu"],
        is_nested_reply: false,
        parent_post_id: null,
    },
    {
        id: 374,
        post_type: "quote",
        uid: "pGG374Whi",
        author: "odinakchukwu",
        content: "I'm so excited to share my new single with you all! It's been a long time coming. 🎶🎵 ANTICIPATE...",
        created_at: "2024-03-07T01:30:00Z",
        likes: ["faruqolaide_", "meenotek", "odinakchukwu", "xx__bella__xx"],
        retweets: ["adesviands", "zaidu_footwears"],
        bookmarks: ["zaidu_footwears",],
        is_nested_reply: false,
        parent_post_id: "pFF373Jus",
    },
    {
        id: 375,
        post_type: "reply",
        uid: "pHH375Thi",
        author: "zaidu_footwears",
        content: "I can't wait to hear it! I'm sure it's going to be amazing.",
        created_at: "2024-03-07T01:45:00Z",
        likes: ["faruqolaide_", "odinakchukwu", "xx__bella__xx"],
        retweets: [ "lola_flavorguru"],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pGG374Whi",
    },
    {
        id: 376,
        post_type: "reply",
        uid: "pII376Jus",
        author: "faruqolaide_",
        content: "Yooo can't waittt!",
        created_at: "2024-03-07T02:00:00Z",
        likes: ["faruqolaide_", "odinakchukwu", "xx__bella__xx"],
        retweets: ["adesviands", "lola_flavorguru"],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pGG374Whi",
    },
    {
        id: 377,
        post_type: "reply",
        uid: "pJJ377Whi",
        author: "adanna",
        content: "Mid, Please never release the song, you'll damage my eardrums",
        created_at: "2024-03-07T02:15:00Z",
        likes: ["ayo_mide"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pGG374Whi",
    },
    {
        id: 378,
        post_type: "reply",
        uid: "pKK378Thi",
        author: "xx__bella__xx",
        content: "You are very stupid for this comment, you know that right?",
        created_at: "2024-03-07T02:30:00Z",
        likes: ["xx__bella__xx", "odinakchukwu", "faruqolaide_"],
        retweets: [],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pJJ377Whi",
    },
    {
        id: 379,
        post_type: "reply",
        uid: "pLL379Jus",
        author: "ayo_mide",
        content: "This one don come again with hin pangolo noise wey hin dey call music",
        created_at: "2024-03-07T02:45:00Z",
        likes: ["ayo_mide", "adanna"],
        retweets: ["adanna", "ayo_mide", "zaidu_footwears"],
        bookmarks: [],
        is_nested_reply: true,
        parent_post_id: "pGG374Whi",
    },
    {
        id: 380,
        post_type: "quote",
        uid: "pMM380Whi",
        author: "adanna",
        content: "Like!! what's bro singing??",
        created_at: "2024-03-07T03:00:00Z",
        likes: ["ayo_mide", "adanna"],
        retweets: ["adanna", "ayo_mide", ],
        bookmarks: [],
        is_nested_reply: false,
        parent_post_id: "pLL379Jus",
    },

]



const userz = [


    "just_tobi",
    "adesviands",
    "iya_kemi_kitchen",
    "simithetastebuddoctor",
    "lola_flavorguru",
    "chioma_chioma",
    "ruby_phena",
    "joker4mas",
    "xx__bella__xx",
    "faruqolaide_",
    "mojiesola",
    "linakrystof",
    "meenotek",
    "faith2020",
    "deyji_xoxo",
    "ayo_mide",
    "sammie",
    "mijin_updates",
    "adebanjotoheeb",
    "pastor_daiveed",
    "sukayyna",
    "afrobeatstotheworld",
    "adanna",
    "oyinbo",
    "urhobo_devil",
    "musa12345",
    "zeebaby",
    "adetootoo",
    "murewaboy",
    "odinakchukwu",
    "ini_love",
    "shadebadmus",
    "munagee",
    "etim__",
    "iamchuks",
    "zaidu_footwears",
    "moriya",
    "anittta",
    "altschoolafrica",
    "therealmadam",

]