import { prismaClient } from "../src/prisma-client";

describe("Prisma client", () => {
  it("should be able to crete with auto increment primary key", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "food"
      }
    });

    console.log(category)
    expect(category).toHaveProperty("id")
  })
})