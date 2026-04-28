// src/data/connections.ts
export interface ConnectionNode {
  id: string;
  label: string;
  category: string;
  image?: string;
  description?: string;
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
      id: "alenhay", 
      label: "AlenHay", 
      category: "friend",
      description: "Сооснователь сообщества Dislace",
      image: "./images/avatars/alenhay.webp"
    },
    { 
      id: "mike_lisetskiy", 
      label: "Михаил Лисецкий", 
      category: "friend",
      description: "Директор фестивалей Стримфест и GAMEДНИ, медиа и ивент-продюсер",
      image: "./images/avatars/mike_lisetsky.webp"
    },
    { 
      id: "ultimate", 
      label: "Ultimate.gg", 
      category: "agency",
      image: "./images/avatars/ultimate.webp",
      description: "Digital-агентство, продакшн в гейминге, стриминге и киберспорте"
    },
    { 
      id: "vlad_shain", 
      label: "Влад Шейн", 
      category: "friend",
      description: "Аниматор, делал ролики для крупных ютуберов",
      image: "./images/avatars/vlad_shain.webp",
    },

    // === СООБЩЕСТВА ===
    { 
      id: "dislace", 
      label: "Dislace", 
      category: "discord",
      description: "Закрытое сообщество для разработчиков, авторов контента",
      image: "./images/avatars/dislace.webp"
    },

    // === КОМПАНИИ ===
    { 
      id: "betboom_esports", 
      label: "BetBoom Esports", 
      category: "company",
      image: "./images/avatars/betboom_esports.webp"
    },
    { 
      id: "betboom", 
      label: "BetBoom", 
      category: "company",
      description: "Букмекерская компания",
      image: "./images/avatars/betboom.webp"
    },
    { 
      id: "fonbet", 
      label: "Fonbet", 
      category: "company",
      description: "Букмекерская компания",
      image: "./images/avatars/fonbet.webp"
    },
    { 
      id: "betboom_headsmm", 
      label: "Head SMM BetBoom Esports", 
      category: "betboom",
      description: "Администратор Telegram каналов по Dota 2 & CS2"
    },
    { 
      id: "donatov", 
      label: "Donatov.net", 
      category: "company",
      image: "./images/avatars/donatov.webp",
      description: "Магазин цифровых товаров"
    },
    { 
      id: "gamedni", 
      label: "GAMEДни", 
      category: "company",
      image: "./images/avatars/gamedni.webp",
      description: "Фестиваль по видеоиграм"
    },
    { 
      id: "tnt_online", 
      label: "TNT_online", 
      category: "company",
      description: "ТНТ в мире стриминга и гейминга",
      image: "./images/avatars/tnt_online.webp"
    },

    // === ЛЮДИ ===
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
    { 
      id: "vadimchik", 
      label: "Вадимчик", 
      category: "friend",
      description: "Организатор мероприятий Donatov.net",
      image: "./images/avatars/vadimchik.webp",
    },
    { 
      id: "studio115", 
      label: "Студия 115", 
      category: "agency",
      image: "./images/avatars/studio115.webp",
      description: "Проектный менеджер и коммуникация, совместные проекты с BetBoom и Fonbet"
    },

    // === КЛАСТЕРЫ ===
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
      image: "./images/avatars/telegram.webp"
    },
    { 
      id: "discord_admins", 
      label: "Discord админы", 
      category: "discord",
      image: "./images/avatars/discord.webp"
    },
    { 
      id: "minecraft_admins", 
      label: "Minecraft админы", 
      category: "minecraft",
      image: "./images/avatars/minecraft.webp"
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
    }
  ],

  links: [
    // === ПРЯМЫЕ СВЯЗИ ОТ МЕНЯ ===
    { source: "roman", target: "kirill" },
    { source: "roman", target: "alenhay" },
    { source: "roman", target: "mike_lisetskiy" },
    { source: "roman", target: "betboom_esports" },
    { source: "roman", target: "betboom_headsmm" },
    { source: "roman", target: "5opka" },
    { source: "roman", target: "yulik" },
    { source: "roman", target: "studio115" },
    { source: "roman", target: "vadimchik" },
    { source: "roman", target: "vlad_shain" },
    { source: "roman", target: "gamedni" },
    { source: "roman", target: "dislace" },

    // === КЛАСТЕРЫ ОТ МЕНЯ ===
    { source: "roman", target: "designers" },
    { source: "roman", target: "motion_video" },
    { source: "roman", target: "programmers" },
    { source: "roman", target: "producers" },
    { source: "roman", target: "telegram_admins" },
    { source: "roman", target: "discord_admins" },
    { source: "roman", target: "minecraft_admins" },
    { source: "roman", target: "event_orgs" },

    // === КИРИЛЛ И DISLACE ===
    { source: "kirill", target: "ultimate" },
    { source: "kirill", target: "mike_lisetskiy" },
    { source: "kirill", target: "dislace" },
    { source: "alenhay", target: "dislace" },

    // === BETBOOM ESports ===
    { source: "betboom_esports", target: "betboom_headsmm" },
    { source: "betboom_headsmm", target: "telegram_admins" },

    // === ULTIMATE.GG → BETBOOM & FONBET ===
    { source: "ultimate", target: "betboom_esports" },
    { source: "ultimate", target: "betboom" },
    { source: "ultimate", target: "fonbet" },

    // === СТУДИЯ 115 ===
    { source: "studio115", target: "kirill" },
    { source: "studio115", target: "ultimate" },
    { source: "studio115", target: "betboom_esports" },
    { source: "studio115", target: "betboom" },
    { source: "studio115", target: "fonbet" },
    { source: "studio115", target: "alenhay" },

    // === DONATOV.NET ===
    { source: "donatov", target: "telegram_admins" },
    { source: "donatov", target: "shop_admins" },
    { source: "donatov", target: "vadimchik" },
    { source: "donatov", target: "gamedni" },
    { source: "vadimchik", target: "telegram_admins" },
    { source: "vadimchik", target: "gamedni" },

    // === GAMEДНИ ===
    { source: "mike_lisetskiy", target: "gamedni" },
    { source: "mike_lisetskiy", target: "vadimchik" },
    { source: "gamedni", target: "vadimchik" },

    // === ПЯТЁРКА ===
    { source: "5opka", target: "shop_admins" },
    { source: "5opka", target: "minecraft_admins" },
    { source: "5opka", target: "tnt_online" },
    { source: "vlad_shain", target: "5opka" },

    // === КЛАСТЕРНЫЕ ПЕРЕКРЁСТКИ ===
    { source: "dislace", target: "discord_admins" },
    { source: "discord_admins", target: "shop_admins" },
    { source: "minecraft_admins", target: "shop_admins" },
    { source: "telegram_admins", target: "shop_admins" }
  ]
};