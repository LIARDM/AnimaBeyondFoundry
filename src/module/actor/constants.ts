import { ABFActorDataSourceData } from '../types/Actor';

export const INITIAL_ACTOR_DATA: ABFActorDataSourceData = {
  general: {
    modifiers: {
      physicalActions: {
        value: 0
      },
      allActions: {
        value: 0
      },
      naturalPenalty: {
        value: 0
      }
    },
    aspect: {
      hair: {
        value: ''
      },
      eyes: {
        value: ''
      },
      height: {
        value: ''
      },
      weight: {
        value: ''
      },
      age: {
        value: ''
      },
      genre: {
        value: ''
      },
      race: {
        value: ''
      },
      appearance: {
        value: 0
      },
      size: {
        value: 0
      }
    },
    advantages: [],
    contacts: [],
    description: {
      value: ''
    },
    disadvantages: [],
    elan: [],
    experience: {
      current: { value: 0 },
      next: { value: 0 }
    },
    fatigue: {
      value: 0,
      max: 0
    },
    languages: {
      base: {
        value: ''
      },
      others: []
    },
    levels: [],
    notes: [],
    titles: []
  },

  characteristics: {
    primaries: {
      agility: {
        value: 0,
        mod: 0
      },
      constitution: {
        value: 0,
        mod: 0
      },
      dexterity: {
        value: 0,
        mod: 0
      },
      strength: {
        value: 0,
        mod: 0
      },
      intelligence: {
        value: 0,
        mod: 0
      },
      perception: {
        value: 0,
        mod: 0
      },
      power: {
        value: 0,
        mod: 0
      },
      willPower: {
        value: 0,
        mod: 0
      }
    },
    secondaries: {
      lifePoints: {
        value: 0,
        max: 0
      },
      initiative: {
        base: {
          value: 0
        }
      },
      fatigue: {
        value: 0,
        max: 0
      },
      movement: {
        value: 0
      },
      resistances: {
        physical: {
          value: 0
        },
        disease: {
          value: 0
        },
        poison: {
          value: 0
        },
        magic: {
          value: 0
        },
        psychic: {
          value: 0
        }
      }
    }
  },

  secondaries: {
    athletics: {
      acrobatics: {
        value: 0
      },
      athleticism: {
        value: 0
      },
      ride: {
        value: 0
      },
      swim: {
        value: 0
      },
      climb: {
        value: 0
      },
      jump: {
        value: 0
      },
      piloting: {
        value: 0
      }
    },
    vigor: {
      composure: {
        value: 0
      },
      featsOfStrength: {
        value: 0
      },
      withstandPain: {
        value: 0
      }
    },
    perception: {
      notice: {
        value: 0
      },
      search: {
        value: 0
      },
      track: {
        value: 0
      }
    },
    intellectual: {
      animals: {
        value: 0
      },
      science: {
        value: 0
      },
      law: {
        value: 0
      },
      herbalLore: {
        value: 0
      },
      history: {
        value: 0
      },
      tactics: {
        value: 0
      },
      medicine: {
        value: 0
      },
      memorize: {
        value: 0
      },
      navigation: {
        value: 0
      },
      occult: {
        value: 0
      },
      appraisal: {
        value: 0
      },
      magicAppraisal: {
        value: 0
      }
    },
    social: {
      style: {
        value: 0
      },
      intimidate: {
        value: 0
      },
      leadership: {
        value: 0
      },
      persuasion: {
        value: 0
      },
      trading: {
        value: 0
      },
      streetwise: {
        value: 0
      },
      etiquette: {
        value: 0
      }
    },
    subterfuge: {
      lockPicking: {
        value: 0
      },
      disguise: {
        value: 0
      },
      hide: {
        value: 0
      },
      theft: {
        value: 0
      },
      stealth: {
        value: 0
      },
      trapLore: {
        value: 0
      },
      poisons: {
        value: 0
      }
    },
    creative: {
      art: {
        value: 0
      },
      dance: {
        value: 0
      },
      forging: {
        value: 0
      },
      runes: {
        value: 0
      },
      alchemy: {
        value: 0
      },
      animism: {
        value: 0
      },
      music: {
        value: 0
      },
      sleightOfHand: {
        value: 0
      },
      ritualCalligraphy: {
        value: 0
      },
      jewelry: {
        value: 0
      },
      tailoring: {
        value: 0
      }
    },
    secondarySpecialSkills: []
  },

  combat: {
    attack: {
      value: 0
    },
    block: {
      value: 0
    },
    dodge: {
      value: 0
    },
    wearArmor: {
      value: 0
    },
    totalArmor: {
      at: {
        cut: {
          value: 0
        },
        impact: {
          value: 0
        },
        thrust: {
          value: 0
        },
        heat: {
          value: 0
        },
        electricity: {
          value: 0
        },
        cold: {
          value: 0
        },
        energy: {
          value: 0
        }
      }
    },
    combatSpecialSkills: [],
    combatTables: [],
    ammo: [],
    weapons: [],
    armors: []
  },

  mystic: {
    act: {
      main: {
        value: 0
      },
      alternative: {
        value: 0
      }
    },
    zeon: {
      accumulated: 0,
      value: 0,
      max: 0
    },
    zeonRegeneration: {
      base: {
        value: 0
      },
      final: {
        value: 0
      }
    },
    innateMagic: {
      main: {
        value: 0
      },
      alternative: {
        value: 0
      }
    },
    magicProjection: {
      final: {
        value: 0
      },
      imbalance: {
        offensive: {
          value: 0
        },
        defensive: {
          value: 0
        }
      }
    },
    magicLevel: {
      spheres: {
        essence: {
          value: 0
        },
        water: {
          value: 0
        },
        earth: {
          value: 0
        },
        creation: {
          value: 0
        },
        darkness: {
          value: 0
        },
        necromancy: {
          value: 0
        },
        light: {
          value: 0
        },
        destruction: {
          value: 0
        },
        air: {
          value: 0
        },
        fire: {
          value: 0
        },
        illusion: {
          value: 0
        }
      },
      total: {
        value: 0
      },
      used: {
        value: 0
      }
    },
    summoning: {
      summon: {
        value: 0
      },
      banish: {
        value: 0
      },
      bind: {
        value: 0
      },
      control: {
        value: 0
      }
    },
    spells: [],
    spellMaintenances: [],
    selectedSpells: [],
    summons: [],
    metamagics: []
  },

  domine: {
    kiSkills: [],
    nemesisSkills: [],
    arsMagnus: [],
    martialArts: [],
    creatures: [],
    specialSkills: [],
    techniques: [],
    seals: {
      minor: {
        earth: {
          isActive: false
        },
        metal: {
          isActive: false
        },
        wind: {
          isActive: false
        },
        water: {
          isActive: false
        },
        wood: {
          isActive: false
        }
      },
      major: {
        earth: {
          isActive: false
        },
        metal: {
          isActive: false
        },
        wind: {
          isActive: false
        },
        water: {
          isActive: false
        },
        wood: {
          isActive: false
        }
      }
    },
    martialKnowledge: {
      used: {
        value: 0
      },
      max: {
        value: 0
      }
    },
    kiAccumulation: {
      strength: {
        accumulated: {
          value: 0
        },
        current: {
          value: 0
        },
        total: {
          value: 0
        }
      },
      agility: {
        accumulated: {
          value: 0
        },
        current: {
          value: 0
        },
        total: {
          value: 0
        }
      },
      dexterity: {
        accumulated: {
          value: 0
        },
        current: {
          value: 0
        },
        total: {
          value: 0
        }
      },
      constitution: {
        accumulated: {
          value: 0
        },
        current: {
          value: 0
        },
        total: {
          value: 0
        }
      },
      willPower: {
        accumulated: {
          value: 0
        },
        current: {
          value: 0
        },
        total: {
          value: 0
        }
      },
      power: {
        accumulated: {
          value: 0
        },
        current: {
          value: 0
        },
        total: {
          value: 0
        }
      },
      generic: {
        value: 0,
        max: 0
      }
    }
  },

  psychic: {
    psychicPotential: {
      value: 0
    },
    psychicProjection: {
      value: 0
    },
    psychicPoints: {
      value: 0,
      max: 0
    },
    psychicPowers: [],
    psychicDisciplines: [],
    mentalPatterns: [],
    innatePsychicPower: {
      amount: {
        value: 0
      }
    },
    innatePsychicPowers: []
  }
};