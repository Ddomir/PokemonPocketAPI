export async function seedCards(prisma) {
  const grass = await prisma.type.findUnique({ where: { name: "Grass" } });
  const vineWhip = await prisma.move.findUnique({ where: { name: "Vine Whip" } });
  const razorLeaf = await prisma.move.findUnique({ where: { name: "Razor Leaf" } });
  const megaDrain = await prisma.move.findUnique({ where: { name: "Mega Drain" } });
  const giantBloom = await prisma.move.findUnique({ where: { name: "Giant Bloom" } });

  const cards = [
    // ----------------- GRASS -----------------
    {
        cardIdentifier: "A1-001",
        name: "Bulbasaur",
        type: grass.id,
        ability: undefined,
        move1: vineWhip ? { connect: { id: vineWhip.id } } : undefined,
        move2: undefined,
        retreatCost: 1,
        gen: "A1",
        packs: ["Mewtwo"],
        hp: 70,
        is_ex: false,
        rarity: 1,
        stage: 1,
        art: "https://img.game8.co/3998332/91c4f79b2b3b4206205bf69db8dd3d1e.png/original"
    },
    {
        cardIdentifier: "A1-002",
        name: "Ivysaur",
        type: grass.id,
        ability: undefined,
        move1: razorLeaf ? { connect: { id: vineWhip.id } } : undefined,
        move2: undefined,
        retreatCost: 2,
        packs: ["Mewtwo"],
        gen: "A1",
        hp: 90,
        is_ex: false,
        rarity: 2,
        stage: 2,
        art: "https://img.game8.co/4006820/34e0ae3e3a08bf4586263f804fd42d06.png/original"
    },
    {
        cardIdentifier: "A1-003",
        name: "Venusaur",
        type: grass.id,
        ability: undefined,
        move1: megaDrain ? { connect: { id: megaDrain.id } } : undefined,
        move2: undefined,
        retreatCost: 3,
        gen: "A1",
        packs: ["Mewtwo"],
        hp: 160,
        is_ex: false,
        rarity: 3,
        stage: 3,
        art: "https://img.game8.co/4003548/e62b9303f29d5360acfef5c9a1d8c6d3.png/original"
    },
    {
        cardIdentifier: "A1-004",
        name: "VenusaurEX",
        type: grass.id,
        ability: undefined,
        move1: razorLeaf ? { connect: { id: razorLeaf.id } } : undefined,
        move2: giantBloom ? { connect: { id: giantBloom.id } } : undefined,
        retreatCost: 3,
        gen: "A1",
        packs: ["Mewtwo"],
        hp: 190,
        is_ex: true,
        rarity: 3,
        stage: 3,
        art: "https://img.game8.co/3995580/151d2c9455f83899618147d85881a75e.png/original"
    }
  ]

  for (const card of cards) {
    await prisma.card.upsert({
      where: { cardIdentifier: card.cardIdentifier },
      update: {},
      create: {
        cardIdentifier: card.cardIdentifier,
        name: card.name,
        retreatCost: card.retreatCost,
        gen: card.gen,
        packs: card.packs,
        hp: card.hp,
        is_ex: card.is_ex,
        rarity: card.rarity,
        stage: card.stage,
        art: card.art,
        ...(card.type ? { type: { connect: { id: card.type } } } : {}),
        ...(card.ability ? { ability: card.ability } : {}),
        ...(card.move1 ? { move1: card.move1 } : {}),
        ...(card.move2 ? { move2: card.move2 } : {}),
      },
    });
  }
  console.log("✅ Cards seeded");
}