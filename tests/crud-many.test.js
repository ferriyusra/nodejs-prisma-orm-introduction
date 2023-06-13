import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "6",
          name: "perper",
          email: "perper@gmail.com",
          phone: "0888828382382"
        },
        {
          id: "7",
          name: "usrousro",
          email: "usrousro@gmail.com",
          phone: "0888828381222"
        }
      ]
    });

    expect(count).toBe(2);
  });

  it("should can execute update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data:
      {
        email: "perperupdate@gmail.com",
      },
      where: {
        name: "perper"
      }
    });

    expect(count).toBe(1);
  });

  it("should can execute delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "tidak ada"
      }
    });

    expect(count).toBe(0);
  });

  it("should can execute read many records", async () => {
    const customers = await prismaClient.customer.findMany({});

    expect(customers.length).toBe(6);
  });
});