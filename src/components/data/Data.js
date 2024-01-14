 import image1 from "../images/guitar.jpg"
 import image2 from "../images/luvre.avif"
 import image3 from "../images/qanon.webp"
 import image4 from "../images/roman1.webp"
 import image5 from "../images/womeninGold.jpg"
 import user1 from "../images/user1.avif"
 import user2 from "../images/user2.avif"
 import user3 from "../images/user3.avif"
 
 
 
 export const CardPosts =[
    {
        id:1,
        img: image2,
        category: "architecture",
        title:"Louvre Museum",
        desc:"The Louvre building complex underwent a major remodeling in the 1980s and ’90s in order to make the old museum more accessible and accommodating to its visitors. To this end, a vast underground complex of offices, shops, exhibition spaces, storage areas, and parking areas, as well as an auditorium, a tourist bus depot, and a cafeteria, was constructed underneath the Louvre’s central courtyards of the Cour Napoléon and the Cour du Carrousel. The ground-level entrance to this complex was situated in the centre of the Cour Napoléon and was crowned by a controversial steel-and-glass pyramid designed by the American architect I.M. Pei. The underground complex of support facilities and public amenities was opened in 1989. In 1993, on the museum’s 200th anniversary, the rebuilt Richelieu wing, formerly occupied by France’s Ministry of Finance, was opened; for the first time, the entire Louvre was devoted to museum purposes. The new wing, also designed by Pei, had more than 230,000 square feet (21,368 square metres) of exhibition space, originally housing collections of European painting, decorative arts, and Islamic art. Three glass-roofed interior courtyards displayed French sculpture and ancient Assyrian artworks. The museum’s expanding collection of Islamic art later moved into its own wing (opened 2012), for which Italian architects Mario Bellini and Rudy Ricciotti enclosed another interior courtyard beneath an undulating gold-coloured roof made of glass and steel.",
        authorId:3
    },
    {
        id:2,
        img: image1,
        category: "musical instruments",
        title:"Guitar",
        desc:"Guitar, plucked stringed musical instrument that probably originated in Spain early in the 16th century, deriving from the guitarra latina, a late-medieval instrument with a waisted body and four strings. The early guitar was narrower and deeper than the modern guitar, with a less pronounced waist. It was closely related to the vihuela, the guitar-shaped instrument played in Spain in place of the lute.The guitar originally had four courses of strings, three double, the top course single, that ran from a violin-like pegbox to a tension bridge glued to the soundboard, or belly; the bridge thus sustained the direct pull of the strings. In the belly was a circular sound hole, often ornamented with a carved wooden rose. The 16th-century guitar was tuned C–F–A–D′, the tuning of the centre four courses of the lute and of the vihuela.",
        authorId:1
    },
    {
        id:3,
        img: image3,
        category: "musical instruments",
        title:"Qanon",
        desc:"Another popular and interesting Armenian music instrument is qanon which is also called kanon. It has 24 strings and is made of wood. The qanon is also popular in the Middle East, Southeastern Europe and Central Asia.",
        authorId:2
    },
    {
        id:4,
        img: image4,
        category: "architecture",
        title:"Colosseum",
        desc:"The Colosseum in Rome, Italy, is a large amphitheater that hosted events like gladiatorial games. Design Pics Inc. The Colosseum, also named the Flavian Amphitheater, is a large amphitheater in Rome. It was built during the reign of the Flavian emperors as a gift to the Roman people.",
        authorId:4
    },
    {
        id:5,
        img: image5,
        category:"art",
        title:"Women in Gold",
        desc:" The painting measures 138 by 138 cm (54 by 54 in); it is composed of oil paint and silver and gold leaf on canvas. The portrait shows Adele Bloch-Bauer sitting on a golden throne or chair, in front of a golden starry background. Around her neck is the same jewelled choker Klimt included in the Judith painting. She wears a tight golden dress in a triangular shape, made up of rectilinear forms.[44][45] In places the dress merges into the background so much so that the museum curator Jan Thompson writes that one comes across the model almost by accident, so enveloped is she in the thick geometric scheme. Peter Vergo, writing for Grove Art, considers that the painting marks the height of  gold-encrusted manner of painting",
        authorId:5
    }
]



export const authorsData=[
    {
        id:1,
        img:user1,
        name:"Juan Sym",
        posts:1
    },
    {
        id:2,
        img:user2,
        name:"Lily Sym",
        posts:2
    },
    {
        id:3,
        img:user3,
        name:"John Smith",
        posts:1
    }
]