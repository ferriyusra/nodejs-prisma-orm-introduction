import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "feri";

    const impected = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES(${id}, ${name})`;

    expect(impected).toBe(1);
  });
});