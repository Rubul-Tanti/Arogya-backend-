const mongoose =require("mongoose")
const blogsSchema=new mongoose.Schema({
    title: {
    type: String,
    required: true,
    trim: true
  },
  blog: {
    type: String,
    required: true
  },
  images: {
    type: [String], // Array of image URLs
    default: []
  },
  video: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'yoga',
    enum: ['yoga'] // You can extend this later if needed
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
const blogsModel=mongoose.model("blogs",blogsSchema)
let c=[
  {
    "title": "Boost Your Immunity Naturally with Yoga",
    "blog": "Bhujangasana, or Cobra Pose, is a gentle back-bend that lifts your chest while keeping hips and legs grounded. It improves posture, digestion, and boosts immunity. To practice it, lie on your stomach, place your hands under your shoulders, and lift your chest while keeping your pelvis grounded. Hold for a few breaths and release. This pose strengthens your back, opens the chest, and stimulates digestion. It’s ideal for stress relief and boosting your body’s defenses. Avoid it if you’re pregnant or have recent abdominal surgery.",
    "images": ["https://yogaselection.com/wp-content/uploads/2020/05/Bhujangasana-Cobra-pose.jpg"],
    "video": "https://www.youtube.com/watch?v=n6jrC6WeF84",
    "category": "yoga"
  },
  {
    "title": "Yoga for Mental Clarity and Focus",
    "blog": "Trataka and Child’s Pose are powerful tools to sharpen focus and relax the mind. Trataka involves gazing at a candle without blinking, which strengthens concentration and calms anxiety. Child’s Pose, on the other hand, allows the nervous system to reset. Kneel down, bend forward, and rest your forehead on the mat. Stay for a few deep breaths. Together, these poses improve memory, reduce mental fatigue, and bring clarity in stressful moments.",
    "images": ["https://i.ytimg.com/vi/0fDyY8DgRKI/maxresdefault.jpg"],
    "video": "https://www.youtube.com/watch?v=0fDyY8DgRKI",
    "category": "yoga"
  },
  {
    "title": "Sleep Better with These Evening Yoga Poses",
    "blog": "Viparita Karani (Legs-Up-the-Wall) and Supta Baddha Konasana are gentle restorative poses perfect for winding down. For Viparita Karani, lie down and extend your legs up against a wall. For Supta Baddha Konasana, lie on your back with soles of your feet touching and knees apart. Support your body with cushions or pillows. These poses activate your parasympathetic nervous system, calm the mind, and prepare the body for restful sleep. Practice them 30 minutes before bed for best results.",
    "images": ["https://www.yogajournal.com/wp-content/uploads/2021/04/Legs-up-the-Wall.jpg"],
    "video": "https://www.youtube.com/watch?v=v7SN-d4qXx0",
    "category": "yoga"
  },
  {
    "title": "Yoga for a Healthy Heart",
    "blog": "Gentle poses like Tadasana (Mountain Pose) and Ardha Matsyendrasana (Half Spinal Twist) help improve circulation and oxygen flow, which supports heart health. Tadasana aligns posture and enhances breathing, while twists massage internal organs and reduce stress. Practicing these poses regularly can reduce hypertension, balance blood pressure, and improve cardiovascular performance naturally.",
    "images": ["https://www.yogabasics.com/yoga-class/poses/images/half-lord-fishes.jpg"],
    "video": "https://www.youtube.com/watch?v=wzsmDswPguM",
    "category": "yoga"
  },
  {
    "title": "Yoga for Better Digestion",
    "blog": "Pavanamuktasana (Wind Relieving Pose) is excellent for supporting digestion and reducing bloating. To practice, lie on your back, hug your knees to your chest, and gently rock side to side. This pose helps stimulate the intestines, relieve gas, and improve gut motility. It’s great to do after meals or as part of a morning routine to support healthy digestion.",
    "images": ["https://www.yogajournal.com/wp-content/uploads/2020/04/Pawanmuktasana.jpg"],
    "video": "https://www.youtube.com/watch?v=HZlup3Wl2eY",
    "category": "yoga"
  },
  {
    "title": "Yoga to Relieve Anxiety",
    "blog": "Anulom Vilom Pranayama (Alternate Nostril Breathing) calms the nervous system and balances the mind. Sit comfortably, close your right nostril and inhale through the left, then switch. Continue for 5–10 minutes. This breathing practice helps reduce anxiety, promotes clarity, and balances energy. It’s often paired with gentle seated poses like Sukhasana to create a sense of peace and control.",
    "images": ["https://cdn.sanity.io/images/0vv8moc6/yogajournal/f174c236e7c59b510d9773e758a705e37d8b137b-1800x1012.jpg"],
    "video": "https://www.youtube.com/watch?v=nQZB8Rn3zGk",
    "category": "yoga"
  },
  {
    "title": "Yoga for Flexibility",
    "blog": "Paschimottanasana (Seated Forward Bend) is a classic flexibility pose. Sit with your legs extended and reach forward towards your feet. This pose stretches the hamstrings, calves, and spine. It also calms the mind and is a great way to wind down after intense activity. With regular practice, it improves flexibility and reduces the risk of injuries.",
    "images": ["https://www.yogajournal.com/wp-content/uploads/2021/10/Paschimottanasana_292_35443_cmyk.jpg"],
    "video": "https://www.youtube.com/watch?v=FrUfgmY_jVI",
    "category": "yoga"
  },
  {
    "title": "Yoga to Improve Posture",
    "blog": "Marjaryasana-Bitilasana (Cat-Cow Pose) strengthens the spine, improves posture, and increases mobility. Begin on all fours, alternate between arching and rounding the back. Coordinate the movement with breath. This gentle spinal flow releases tension in the neck and back, making it perfect for desk workers or anyone with poor posture.",
    "images": ["https://www.yogajournal.com/wp-content/uploads/2021/10/Cat-Cow.png"],
    "video": "https://www.youtube.com/watch?v=kqnua4rHVVA",
    "category": "yoga"
  },
  {
    "title": "Yoga for Strength and Balance",
    "blog": "Virabhadrasana II (Warrior II Pose) builds strength in legs and core while improving stability and focus. Stand with feet wide, bend one knee and stretch arms outward. This pose improves stamina, opens the hips, and enhances physical endurance. It’s great for building both physical and mental resilience.",
    "images": ["https://www.yogajournal.com/wp-content/uploads/2021/10/Warrior-II.jpg"],
    "video": "https://www.youtube.com/watch?v=5oPQe50nJrQ",
    "category": "yoga"
  },
  {
    "title": "Yoga for a Calm Morning",
    "blog": "Surya Namaskar (Sun Salutation) is a complete sequence of poses that energize the body and clear the mind. Done at sunrise, this flow enhances flexibility, boosts metabolism, and sets a positive tone for the day. Just 5–10 rounds daily can improve your strength, coordination, and overall mood.",
    "images": ["https://www.yogajournal.com/wp-content/uploads/2020/03/Sun-Salutation.jpg"],
    "video": "https://www.youtube.com/watch?v=73sjIxG1Y0Y",
    "category": "yoga"
  }
]
// const title=c[0].title
// const blog=c[0].blog
// const images=c[0].images
// const video=c[0].video
// const category=c[0].category
// async function ab(){
// await blogsModel.create(title,blog,images,video,category)
// }
// module.exports=ab