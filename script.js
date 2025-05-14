const predefinedChampions = [
  /* Top */
  {
    name: 'Darius',
    lane: 'Top', //optional
    developer: 'unsigned.long.long',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Aatrox',
    developer: '!EatingCereal',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Gwen',
    developer: '!EatingCereal',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Jayce',
    developer: 'altx0',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Mordekaiser',
    developer: '!EatingCereal',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Olaf',
    developer: 'altx0',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Riven',
    developer: 'Alchenda',
    description: 'Supported spells: Q, W, E, R' //optional
  },

  /* Jungle */
  {
    name: 'Amumu',
    developer: 'altx0',
    description: 'Supported spells: Q, R' //optional
  },
  {
    name: 'Diana',
    developer: 'altx0',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Hecarim',
    developer: '!EastingCereal',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'MasterYi',
    developer: 'Alchenda',
    description: 'Supported spells: Q, W, E, R' //optional
  },
  {
    name: 'Wukong',
    developer: 'altx0',
    description: 'Supported spells: Q, W, E, R' //optional
  },

  /* Mid */
  {
    "name": "Ahri",
    "lane": "Mid",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Brand",
    "lane": "Mid",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Cassiopeia",
    "lane": "Mid",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Corki",
    "lane": "Mid",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Kassadin",
    "lane": "Mid",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Lux",
    "lane": "Mid",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Orianna",
    "lane": "Mid",
    "developer": "Muffin",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Sylas",
    "lane": "Mid",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Swain",
    "lane": "Mid",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Sylas",
    "lane": "Mid",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Syndra",
    "lane": "Mid",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Veigar",
    "lane": "Mid",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Vel'Koz",
    "lane": "Mid",
    "developer": "sx",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Viktor",
    "lane": "Mid",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Xerath",
    "lane": "Mid",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Yasuo",
    "lane": "Mid",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Yone",
    "lane": "Mid",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Zed",
    "lane": "Mid",
    "developer": "Muffin",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Zoe",
    "lane": "Mid",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },

  /* Bot */
  {
    "name": "Ashe",
    "lane": "Bot",
    "developer": "unsigned.long.long",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Caitlyn",
    "lane": "Bot",
    "developer": "Muffin",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Ezreal",
    "lane": "Bot",
    "developer": "sx",
    "description": "Supported spells: Q, W, R"
  },
  {
    "name": "Jinx",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Kogmaw",
    "lane": "Bot",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Lucian",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Miss Fortune",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Nilah",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, R"
  },
  {
    "name": "Samira",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Sivir",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, W"
  },
  {
    "name": "Tristana",
    "lane": "Bot",
    "developer": "sx",
    "description": "Supported spells: Q, E, R"
  },
  {
    "name": "Twitch",
    "lane": "Bot",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Xayah",
    "lane": "Bot",
    "developer": "Muffin",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Zeri",
    "lane": "Bot",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },

  /* Support */ 
  {
    "name": "Blitzcrank",
    "lane": "Support",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Karma",
    "lane": "Support",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Lulu",
    "lane": "Support",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Morgana",
    "lane": "Support",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Nami",
    "lane": "Support",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Senna",
    "lane": "Support",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Swain",
    "lane": "Support",
    "developer": "altx0",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Thresh",
    "lane": "Support",
    "developer": "!EatingCereal",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Vel'Koz",
    "lane": "Support",
    "developer": "sx",
    "description": "Supported spells: Q, W, E"
  },
  {
    "name": "Xerath",
    "lane": "Support",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Zoe",
    "lane": "Support",
    "developer": "sx",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Pyke",
    "lane": "Support",
    "developer": "unsigned.long.long",
    "description": "Supported spells: Q, W, E, R"
  },
  {
    "name": "Viego",
    "developer": "unsigned.long.long",
    "description": "Supported spells: Q, W, E, R, Passive (Souls)"
  }
];

const predefinedRoles = {
  Annie : "Mid",
  Olaf : "Top",
  Galio : "Mid",
  TwistedFate : "Mid",
  XinZhao : "Jungle",
  Urgot : "Top",
  Leblanc : "Mid",
  Vladimir : "Mid",
  FiddleSticks : "Jungle",
  Kayle : "Top",
  MasterYi : "Jungle",
  Alistar : "Support",
  Ryze : "Mid",
  Sion : "Top",
  Sivir : "Bot",
  Soraka : "Support",
  Teemo : "Top",
  Tristana : "Mid",
  Warwick : "Jungle",
  Nunu : "Jungle",
  MissFortune : "Bot",
  Ashe : "Bot",
  Tryndamere : "Top",
  Jax : "Top",
  Morgana : "Support",
  Zilean : "Support",
  Singed : "Top",
  Evelynn : "Jungle",
  Twitch : "Bot",
  Karthus : "Jungle",
  Chogath : "Top",
  Amumu : "Jungle",
  Rammus : "Jungle",
  Anivia : "Mid",
  Shaco : "Jungle",
  DrMundo : "Top",
  Sona : "Support",
  Kassadin : "Mid",
  Irelia : "Mid",
  Janna : "Support",
  Gangplank : "Top",
  Corki : "Mid",
  Karma : "Support",
  Taric : "Support",
  Veigar : "Mid",
  Trundle : "Top",
  Swain : "Support",
  Caitlyn : "Bot",
  Blitzcrank : "Support",
  Malphite : "Top",
  Katarina : "Mid",
  Nocturne : "Jungle",
  Maokai : "Support",
  Renekton : "Top",
  JarvanIV : "Jungle",
  Elise : "Jungle",
  Orianna : "Mid",
  MonkeyKing : "Jungle",
  Brand : "Support",
  LeeSin : "Jungle",
  Vayne : "Bot",
  Rumble : "Top",
  Cassiopeia : "Mid",
  Skarner : "Top",
  Heimerdinger : "Top",
  Nasus : "Top",
  Nidalee : "Jungle",
  Udyr : "Jungle",
  Poppy : "Support",
  Gragas : "Top",
  Pantheon : "Support",
  Ezreal : "Bot",
  Mordekaiser : "Top",
  Yorick : "Top",
  Akali : "Mid",
  Kennen : "Top",
  Garen : "Top",
  Leona : "Support",
  Malzahar : "Mid",
  Talon : "Mid",
  Riven : "Top",
  KogMaw : "Bot",
  Shen : "Top",
  Lux : "Support",
  Xerath : "Support",
  Shyvana : "Jungle",
  Ahri : "Mid",
  Graves : "Jungle",
  Fizz : "Mid",
  Volibear : "Top",
  Rengar : "Jungle",
  Varus : "Bot",
  Nautilus : "Support",
  Viktor : "Mid",
  Sejuani : "Jungle",
  Fiora : "Top",
  Ziggs : "Mid",
  Lulu : "Support",
  Draven : "Bot",
  Hecarim : "Jungle",
  Khazix : "Jungle",
  Darius : "Top",
  Jayce : "Top",
  Lissandra : "Mid",
  Diana : "Jungle",
  Quinn : "Top",
  Syndra : "Mid",
  AurelionSol : "Mid",
  Kayn : "Jungle",
  Zoe : "Mid",
  Zyra : "Support",
  Kaisa : "Bot",
  Seraphine : "Support",
  Gnar : "Top",
  Zac : "Jungle",
  Yasuo : "Mid",
  Velkoz : "Support",
  Taliyah : "Jungle",
  Camille : "Top",
  Akshan : "Mid",
  Belveth : "Jungle",
  Braum : "Support",
  Jhin : "Bot",
  Kindred : "Jungle",
  Zeri : "Bot",
  Jinx : "Bot",
  TahmKench : "Top",
  Briar : "Jungle",
  Viego : "Jungle",
  Senna : "Support",
  Lucian : "Bot",
  Zed : "Mid",
  Kled : "Top",
  Ekko : "Jungle",
  Qiyana : "Mid",
  Vi : "Jungle",
  Aatrox : "Top",
  Nami : "Support",
  Azir : "Mid",
  Yuumi : "Support",
  Samira : "Bot",
  Thresh : "Support",
  Illaoi : "Top",
  RekSai : "Jungle",
  Ivern : "Jungle",
  Kalista : "Bot",
  Bard : "Support",
  Rakan : "Support",
  Xayah : "Bot",
  Ornn : "Top",
  Sylas : "Mid",
  Neeko : "Support",
  Aphelios : "Bot",
  Rell : "Support",
  Pyke : "Support",
  Vex : "Mid",
  Yone : "Mid",
  Sett : "Top",
  Lillia : "Jungle",
  Gwen : "Top",
  Renata : "Support",
  Nilah : "Bot",
  KSante : "Top",
  Smolder : "Bot",
  Milio : "Support",
  Hwei : "Mid",
  Naafiri : "Mid",
  Mel: "Mid",
  Aurora: "Mid",
  Ambessa: "Top"
}

const roles = ['Top', 'Jungle', 'Mid', 'Bot', 'Support'];

const sectionsContainer = document.getElementById('champion-sections');
const searchInput = document.getElementById('searchInput');

// Modal
const modal = document.getElementById('championModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalDeveloper = document.getElementById('modalDeveloper');
const modalLink = document.getElementById('modalLink');
const modalLinkOPGG = document.getElementById('modalLink2');
const closeModal = document.getElementById('closeModal');
const toggleSupported = document.getElementById('toggleSupported');

closeModal.addEventListener('click', () => {
  const modalContent = document.querySelector('.modal-content');
  modalContent.classList.add('closing');

  setTimeout(() => {
    modal.classList.add('hidden');
    modalContent.classList.remove('closing');
  }, 300);
});

searchInput.addEventListener('input', renderAllSections);
toggleSupported.addEventListener('change', renderAllSections);

const roleIcons = {
  Top: 'https://static.bigbrain.gg/assets/lol/roles/top.svg',
  Jungle: 'https://static.bigbrain.gg/assets/lol/roles/jung.svg',
  Mid: 'https://static.bigbrain.gg/assets/lol/roles/mid.svg',
  Bot: 'https://static.bigbrain.gg/assets/lol/roles/bot.svg',
  Support: 'https://static.bigbrain.gg/assets/lol/roles/supp.svg',
};

let allChampions = [];

fetch('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js')
  .then(response => response.json())
  .then(data => {
    allChampions = data.hero.map(hero => ({
      name: hero.alias,
      image: `https://game.gtimg.cn/images/lol/act/img/champion/${hero.alias}.png`
    }));
    renderAllSections();
  })
  .catch(error => {
    console.error('Error fetching champion data:', error);
    renderAllSections();
  });

function renderAllSections() {
  const searchTerm = searchInput.value.toLowerCase();
  sectionsContainer.innerHTML = '';

  const combinedChampions = allChampions.map(champion => {
    const predefined = predefinedChampions.find(pc => pc.name.toLowerCase() === champion.name.toLowerCase());
    return {
      ...champion,
      lane: (predefined && predefined.lane != null) ? predefined.lane : (predefinedRoles[champion.name] || 'Unknown'),
      description: predefined ? ( predefined.description ? predefined.description : "" ) : '',
      developer: predefined ? predefined.developer : '',
      isPredefined: !!predefined
    };
  });

  const hideUnsupported = toggleSupported.checked;

  const grouped = roles.reduce((acc, role) => {
    acc[role] = combinedChampions
      .filter(c =>
        c.lane === role &&
        c.name.toLowerCase().includes(searchTerm) &&
        (!hideUnsupported || c.isPredefined)
      );
    return acc;
  }, {});

  grouped['Unknown'] = combinedChampions.filter(c =>
    c.lane === 'Unknown' &&
    c.name.toLowerCase().includes(searchTerm) &&
    (!hideUnsupported || c.isPredefined)
  );

  Object.entries(grouped).forEach(([role, champions]) => {
    if (champions.length === 0) return;

    const section = document.createElement('section');
    section.className = 'champion-section';

    const header = document.createElement('div');
    header.className = 'section-header';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'lane-header';
    if (roleIcons[role]) {
      headerLeft.innerHTML = `
        <img src="${roleIcons[role]}" alt="${role}" />
        <span>${role}</span>
      `;
    } 

    champions.sort((a, b) => {
      // Sort supported (isPredefined) first
      if (a.isPredefined !== b.isPredefined) {
        return a.isPredefined ? -1 : 1;
      }
      // Then alphabetically
      return a.name.localeCompare(b.name);
    });

    const toggleBtn = document.createElement('span');
    toggleBtn.textContent = '▼';
    toggleBtn.style.cursor = 'pointer';

    const row = document.createElement('div');
    row.className = 'champion-row';

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      row.classList.toggle('collapsed');
      toggleBtn.textContent = row.classList.contains('collapsed') ? '►' : '▼';
    });

    header.appendChild(headerLeft);
    header.appendChild(toggleBtn);
    section.appendChild(header);
    section.appendChild(row);

    champions.forEach(c => {
      const item = document.createElement('div');
      item.className = 'champion-card';
      if (!c.isPredefined) {
        item.classList.add('grayscale');
      }
      item.innerHTML = `
        <img src="${c.image}"">
        <h3>${c.name}</h3>
      `;
      if (c.isPredefined) {
        item.addEventListener('click', () => {
          modalImage.src = c.image;
          modalName.textContent = c.name;
          modalDescription.textContent = c.description;
          modalDeveloper.textContent = c.developer;
          modalLink.href = `https://u.gg/lol/champions/${c.name.toLowerCase()}/build`;
          modalLinkOPGG.href = `https://op.gg/lol/champions/${c.name.toLowerCase()}/build`; //https://op.gg/lol/champions/smolder/build
          modal.classList.remove('hidden');
        });
      }
      row.appendChild(item);
    });

    sectionsContainer.appendChild(section);
  });
}
