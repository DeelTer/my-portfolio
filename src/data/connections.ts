// src/data/connections.ts
export interface ConnectionNode {
  id: string;
  label: string;
  category: string;
  image?: string;           // аватарка или лого
  description?: string;     // тултип при наведении (можно добавить позже)
}

export interface ConnectionLink {
  source: string;
  target: string;
}

export const connectionsData = {
  nodes: [
    { 
      id: "roman", 
      label: "Я", 
      category: "me",
      image: "./images/avatars/me.webp"
    },

    // === КОНКРЕТНЫЕ ЗНАЧИМЫЕ СВЯЗИ ===
    { 
      id: "kirill", 
      label: "Кирилл (NeverCookFirst)", 
      category: "friend",
      image: "./images/avatars/nevercook.webp"
    },
    { 
      id: "mike_lisetskiy", 
      label: "Михаил Лисицкий", 
      category: "friend",
      "description": "Директор фестивалей Стримфест и GAMEДНИ, медиа и ивент-продюсер",
      image: "./images/avatars/mike_lisetsky.webp"
    },
    { 
      id: "ultimate", 
      label: "Ultimate.gg", 
      category: "agency",
      image: "./images/avatars/ultimate.webp",
      "description": "Digital-агентство, продакшн трансляций и видеопродакшн в гейминге, стриминге и киберспорте"
    },

    { 
      id: "betboom_esports", 
      label: "BetBoom Esports", 
      category: "company",
      image: "./images/avatars/betboom_esports.webp"
    },
    { 
      id: "betboom_headsmm", 
      label: "Head of SMM", 
      category: "betboom",
      description: "BetBoom Esports"
    },

    { 
      id: "5opka", 
      label: "Пятёрка", 
      category: "streamer",
      image: "./images/avatars/5opka.webp",
      description: "Стример"
    },
    { 
      id: "yulik", 
      label: "Юлик", 
      category: "streamer",
      image: "./images/avatars/yulik.webp",
      description: "Ютубер, стример"
    },

    // === НОВЫЕ УЗЛЫ ===
    { 
      id: "donatov", 
      label: "Donatov.net", 
      category: "company",
      image: "./images/avatars/donatov.webp",
      description: "Магазин цифровых товаров"
    },
    { 
      id: "vadimchik", 
      label: "Вадимчик", 
      category: "friend",
      description: "Организатор мероприятий Donatov.net"
    },
    { 
      id: "studio115", 
      label: "Студия 115", 
      category: "agency",
      image: "./images/avatars/studio115.webp",
      description: "Студия по разработке сайтов и приложений"
    },
    { 
      id: "gamedni", 
      label: "GAMEДни", 
      category: "company",
      image: "./images/avatars/gamedni.webp",
      description: "Фестиваль по видеоиграм"
    },

    // === КЛАСТЕРЫ (обобщённые группы — создают объём) ===
    { 
      id: "designers", 
      label: "Дизайнеры & художники", 
      category: "freelance" 
    },
    { 
      id: "motion_video", 
      label: "Моушены & видеомонтажёры", 
      category: "freelance" 
    },
    { 
      id: "programmers", 
      label: "Программисты", 
      category: "freelance" 
    },
    { 
      id: "producers", 
      label: "Продюсеры", 
      category: "freelance" 
    },
    { 
      id: "telegram_admins", 
      label: "Telegram админы", 
      category: "tg",
      image: "./images/avatars/telegram.webp",
    },
    { 
      id: "discord_admins", 
      label: "Discord админы", 
      category: "discord",
      image: "./images/avatars/discord.webp",
    },
    { 
      id: "minecraft_admins", 
      label: "Minecraft админы", 
      category: "minecraft",
      image: "./images/avatars/minecraft.webp",
    },
    { 
      id: "event_orgs", 
      label: "Организаторы ивентов", 
      category: "event" 
    },
    { 
      id: "shop_admins", 
      label: "Владельцы цифровых магазинов", 
      category: "discord" 
    },
  ],

  links: [
    // Прямые связи от тебя
    { source: "roman", target: "kirill" },
    { source: "roman", target: "mike_lisetskiy" },
    { source: "kirill", target: "ultimate" },     
    { source: "kirill", target: "mike_lisetskiy" },          

    { source: "roman", target: "betboom_esports" },
    { source: "betboom_esports", target: "betboom_headsmm" },

    { source: "roman", target: "5opka" },
    { source: "roman", target: "yulik" },
    
    // Donatov.net связки
    { source: "donatov", target: "telegram_admins" },
    { source: "donatov", target: "shop_admins" },
    { source: "donatov", target: "gamedni" },
    
    // Вадимчик связки
    { source: "donatov", target: "vadimchik" },
    { source: "vadimchik", target: "telegram_admins" },
    { source: "vadimchik", target: "gamedni" },

    // Лисецкий связи
    { source: "mike_lisetskiy", target: "gamedni" },
    { source: "mike_lisetskiy", target: "kirill" },
    { source: "mike_lisetskiy", target: "vadimchik" },
    
    // Студия 115 связки
    { source: "roman", target: "studio115" },
    { source: "studio115", target: "kirill" },
    { source: "studio115", target: "ultimate" },
    { source: "studio115", target: "betboom_esports" },

    // Кластеры от меня
    { source: "roman", target: "designers" },
    { source: "roman", target: "motion_video" },
    { source: "roman", target: "programmers" },
    { source: "roman", target: "producers" },
    { source: "roman", target: "telegram_admins" },
    { source: "roman", target: "discord_admins" },
    { source: "roman", target: "minecraft_admins" },
    { source: "roman", target: "event_orgs" },

    // Дополнительные связи для объёма
    { source: "ultimate", target: "betboom_esports" },
    { source: "discord_admins", target: "shop_admins" },
    { source: "minecraft_admins", target: "shop_admins" },
    { source: "telegram_admins", target: "shop_admins" },
    { source: "5opka", target: "shop_admins" },
    { source: "5opka", target: "minecraft_admins" },
    { source: "betboom_headsmm", target: "telegram_admins" }
  ]
};