import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ===================================
// GET all Moves
// ===================================
export const getMoves = async (req, res) => {
    try {
      const moves = await prisma.move.findMany({
        select: {
          id: true,
          name: true,
          damage: true,
          cost: true,
          description: true,
          status: { select: { id: true, name: true } }, // optional
        },
      });
      res.status(200).json(moves);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Could not get moves." });
    }
  };
  

// ===================================
// POST a new Move
// ===================================
export const postMove = async (req, res) => {
  try {
    const { name, typeId, damage, cost, description } = req.body;

    if (!name?.trim() || !typeId) {
      return res
        .status(400)
        .json({ error: "Move name and typeId are required." });
    }

    const existingMove = await prisma.move.findFirst({
      where: { name: { equals: name.trim(), mode: "insensitive" } },
    });
    if (existingMove) {
      return res.status(409).json({ error: "Move already exists." });
    }

    const move = await prisma.move.create({
      data: {
        name: name.trim(),
        type: { connect: { id: typeId } },
        damage: damage || 0,
        cost: cost || 0,
        ...(description ? { description } : {}),
      },
    });

    res.status(201).json(move);
  } catch (error) {
    console.error(error);
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ error: `Move '${req.body.name}' already exists.` });
    }
    res.status(500).json({ error: "Could not create move." });
  }
};
