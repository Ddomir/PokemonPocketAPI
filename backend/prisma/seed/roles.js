export async function seedRoles(prisma) {
  const roles = ["admin", "user"];
  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log("✅ Roles seeded");
}