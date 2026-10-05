const media = (file) => `${import.meta.env.BASE_URL}media/${file}`;
//==========ABOUT=======
export const PROFILE = {
  name: "Hania Hany",
  photo: media("me.jpg"),
  email: "haniahussien007@gmail.com",
  github: "https://github.com/haniahany222",
  linkedin: "www.linkedin.com/in/hania-hany-459350398",
  roles: ["Front-End Developer", "Pixel Perfectionist", "Bug Squasher 🐛", "Animation Enthusiast"],
};
//===========SKILLS===========
export const SKILLS = ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Git & GitHub", "Accessibility"];
export const SKILL_COLORS = ["#ffb703", "#ff9ec4", "#9be7de", "#c3b5ff", "#ffd6a5", "#b5e48c", "#a0c4ff", "#fdffb6"];

//=============PROJECTS===========
export const PROJECTS = [
  {
    //===========SWEET CORNER================
    id: "bakery", title: "Sweet Corner", emoji: "🥐", kind: "Online Bakery Shop",
    cardBg: "linear-gradient(135deg,#fde7d3,#e8557a)", video: media("sweet-corner.mp4"),
    description: "A cozy online bakery where visitors browse oriental sweets, bakery items, cakes and catering by category.",
    tags: ["Responsive", "E-commerce UI", "Categories"],
    features: ["🍰 Browse by category", "🛒 Easy ordering flow", "📱 Works on every screen"],
    floaters: ["🥐", "🍰", "🧁", "🍩", "🥖", "🍪"],
  },
  
  
  { //==============DEYARA===============
    id: "deyara", title: "Deyara", emoji: "🛋️", kind: "Home & Furniture Store (Arabic, RTL)",
    cardBg: "linear-gradient(135deg,#e4ddcc,#7d9470)", video: media("deyara.mp4"),
    description: "An elegant furniture and home-decor store with a full Arabic right-to-left interface, product cards and a calm, warm look.",
    tags: ["Arabic / RTL", "Product listing", "Clean layout"],
    features: ["🛋️ Furniture catalog", "🌍 Right-to-left support", "✨ Calm, elegant style"],
    floaters: ["🪴", "🛋️", "🖼️", "💡", "🪑"],
  },


  {//=================SHOPEASE=====================
    id: "shop", title: "ShopEase", emoji: "🛍️", kind: "E-commerce Web App",
    cardBg: "linear-gradient(135deg,#6d5dfc,#2a1e8f)", video: media("shop-ease.mp4"),
    description: "A modern shopping app with a friendly login screen, a smooth shopping experience and a clean indigo interface.",
    tags: ["Auth UI", "Web app", "Modern design"],
    features: ["🔐 Login & welcome flow", "🛒 Smooth shopping", "⚡ Snappy interface"],
    floaters: ["🛍️", "🛒", "💳", "🏷️", "📦", "⭐"],
  },
];
