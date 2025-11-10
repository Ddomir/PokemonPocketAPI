export async function seedTypes(prisma) {
  const types = ["Colorless", "Fire", "Water", "Grass"];
  for (const name of types) {
    await prisma.type.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log("✅ Types seeded");
}