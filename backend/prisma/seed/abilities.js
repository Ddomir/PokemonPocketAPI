export async function seedAbilities(prisma) {
  const burnStatus = await prisma.status.findUnique({
    where: { name: "Burned" },
  });

  const abilities = [
    {
      name: "Flame Body",
      description: "Has a chance to burn opponents on contact.",
      statusID: burnStatus?.id,
    },
    {
      name: "Torrent",
      description: "Boosts water moves when HP is low.",
      statusID: null,
    },
  ];

  for (const ability of abilities) {
    await prisma.ability.upsert({
      where: { name: ability.name },
      update: {},
      create: ability,
    });
  }

  console.log("✅ Abilities seeded");
}