export async function seedMoves(prisma) {
  const colorless = await prisma.type.findUnique({ where: { name: "Colorless" } });
  const fire = await prisma.type.findUnique({ where: { name: "Fire" } });
  const water = await prisma.type.findUnique({ where: { name: "Water" } });
  const grass = await prisma.type.findUnique({ where: { name: "Grass" } });

  const moves = [
    // Bulbasaur A1 001
    {
        name: "Vine Whip",
        damage: 40,
        cost: [grass.id, colorless.id],
        status: undefined,
        description: "",
    },

    // Ivysaur A1 002
    {
        name: "Razor Leaf",
        damage: 60,
        cost: [grass.id, colorless.id, colorless.id],
        status: undefined,
        description: "",
    },

    // Venusaur A1 003
    {
        name: "Mega Drain",
        damage: 80,
        cost: [grass.id, grass.id, colorless.id, colorless.id],
        status: undefined,
        description: "Heal 30 Damage from this Pokémon.",
    },

    // VenusaurEX A1 004
    // Razor Leaf
    {
        name: "Giant Bloom",
        damage: 100,
        cost: [grass.id, grass.id, colorless.id, colorless.id],
        status: undefined,
        description: "Heal 30 Damage from this Pokémon.",
    }
  ];

  for (const move of moves) {
    await prisma.move.upsert({
      where: { name: move.name },
      update: {},
      create: move,
    });
  }

  console.log("✅ Moves seeded");
}
