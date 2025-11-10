import { PrismaClient } from "@prisma/client";

import { seedRoles } from "./seed/roles.js";
import { seedUsers } from "./seed/users.js";
import { seedStatuses } from "./seed/statuses.js";
import { seedTypes } from "./seed/types.js";
import { seedAbilities } from "./seed/abilities.js";
import { seedMoves } from "./seed/moves.js";
import { seedCards } from "./seed/cards.js";

const prisma = new PrismaClient();

async function main() {
  await seedRoles(prisma);
  await seedUsers(prisma);

  await seedTypes(prisma);

  await seedStatuses(prisma);
  await seedAbilities(prisma);
  await seedMoves(prisma);
  
  await seedCards(prisma);
}

main()
  .then(() => {
    console.log("🌱 Seeding complete!");
  })
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });