import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ===================================
// GET all Cards
// ===================================
export const getCards = async (req, res) => {
  try {
    const cards = await prisma.card.findMany({
      select: {
        id: true,
        cardIdentifier: true,
        name: true,
        type: { select: { id: true, name: true } },
        ability: true,
        move1: { select: { id: true, name: true } },
        move2: { select: { id: true, name: true } },
        retreatCost: true,
        gen: true,
        packs: true,
        hp: true,
        is_ex: true,
        rarity: true,
        stage: true,
        art: true,
      },
    });
    res.status(200).json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not get cards." });
  }
};

// ===================================
// POST a new Card
// ===================================
export const postCard = async (req, res) => {
  try {
    const {
      cardIdentifier,
      name,
      typeId,
      ability,
      move1Id,
      move2Id,
      retreatCost,
      gen,
      packs,
      hp,
      is_ex,
      rarity,
      stage,
      art,
    } = req.body;

    // Basic validation
    if (!cardIdentifier?.trim() || !name?.trim() || !typeId) {
      return res.status(400).json({ error: "cardIdentifier, name, and typeId are required." });
    }

    // Check for existing card
    const existingCard = await prisma.card.findUnique({
      where: { cardIdentifier: cardIdentifier.trim() },
    });
    if (existingCard) {
      return res.status(409).json({ error: "Card already exists." });
    }

    const card = await prisma.card.create({
      data: {
        cardIdentifier: cardIdentifier.trim(),
        name: name.trim(),
        type: { connect: { id: typeId } },
        ...(ability ? { ability } : {}),
        ...(move1Id ? { move1: { connect: { id: move1Id } } } : {}),
        ...(move2Id ? { move2: { connect: { id: move2Id } } } : {}),
        retreatCost: retreatCost || 0,
        gen: gen ? Array.isArray(gen) ? gen : [gen] : [],
        packs: packs || [],
        hp: hp || 0,
        is_ex: is_ex || false,
        rarity: rarity || 0,
        stage: stage || 0,
        ...(art ? { art } : {}),
      },
    });

    res.status(201).json(card);
  } catch (error) {
    console.error(error);
    if (error.code === "P2002") {
      return res.status(409).json({ error: `Card '${req.body.cardIdentifier}' already exists.` });
    }
    res.status(500).json({ error: "Could not create card." });
  }
};