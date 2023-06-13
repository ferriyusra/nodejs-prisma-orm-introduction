import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "1",
        customer_id: "2",
        balance: 6000,
      },
      include: {
        customer: true,
      }
    });

    console.log(wallet)
  });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "9",
        name: "widya",
        email: "widya@gmail.com",
        phone: "213213959599",
        wallet: {
          create: {
            id: "2",
            balance: 7000,
          }
        }
      },
      include: {
        wallet: true,
      }
    });

    console.log(customer)
  });

  it("should can find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "9"
      },
      include: {
        wallet: true,
      }
    });

    console.log(customer)
  });

  it("should be able to find many one to one - spesific", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        }
      },
      include: {
        wallet: true,
      }
    });

    console.log(customer)
  });
});