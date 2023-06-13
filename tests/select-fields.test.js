import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can do create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "8",
        name: "banu",
        email: "banu@gmail.com",
        phone: "123213213211233333",
      },
      select: {
        id: true,
        name: true,
      }
    });

    expect(customer.id).toBe("8");
    expect(customer.name).toBe("banu");
    expect(customer.email).toBe(undefined);
    expect(customer.phone).toBe(undefined);
  });

  it("should can read select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      }
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBe(undefined);
      expect(customer.phone).toBe(undefined);
    }
  });

});