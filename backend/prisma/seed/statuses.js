export async function seedStatuses(prisma) {
  const statuses = ["Burned", "Paralyzed", "Poisoned", "Frozen", "Asleep"];
  for (const name of statuses) {
    await prisma.status.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log("✅ Statuses seeded");
}