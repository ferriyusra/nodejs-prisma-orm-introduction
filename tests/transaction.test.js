import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [peri, dandan] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "2",
          name: "peri",
          email: "per@gmail.com",
          phone: "082132223",
        }
      }),
      prismaClient.customer.create({
        data: {
          id: "3",
          name: "dandan",
          email: "dandan@gmail.com",
          phone: "082132113",
        }
      })
    ], {
      timeout: 5,
    });

    expect(peri.name).toBe("peri")
    expect(dandan.name).toBe("dandan")
  });

  it("should can execute interactive transaction", async () => {
    const [usro, usri] = await prismaClient.$transaction(async (prisma) => {
      const usro = await prisma.customer.create({
        data: {
          id: "4",
          name: "usro",
          email: "usro@gmail.com",
          phone: "082139993",
        }
      })
      const usri = await prisma.customer.create({
        data: {
          id: "5",
          name: "usri",
          email: "usri@gmail.com",
          phone: "082182763",
        }
      })
      return [usro, usri];
    }, {
      timeout: 5
    });

    expect(usro.name).toBe("usro")
    expect(usri.name).toBe("usri")
  });
});