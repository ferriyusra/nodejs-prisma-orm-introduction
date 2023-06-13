import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {

    const customer = await prismaClient.customer.create({
      data: {
        id: "1",
        name: "feri",
        email: "feri@gmail.com",
        phone: "08123123"
      }
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("feri");
    expect(customer.email).toBe("feri@gmail.com");
    expect(customer.phone).toBe("08123123");
  });

  it("should be able to update customer", async () => {

    const customer = await prismaClient.customer.update({
      data: {
        name: "feri update",
      },
      where: {
        id: "1",
      }
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("feri update");
    expect(customer.email).toBe("feri@gmail.com");
    expect(customer.phone).toBe("08123123");
  });

  it("should be able to read customer", async () => {

    // find unique must be unique field
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "1",
        // email: "feri@gmail.com",
      }
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("feri update");
    expect(customer.email).toBe("feri@gmail.com");
    expect(customer.phone).toBe("08123123");
  });

  it("should be able to delete customer", async () => {

    const customer = await prismaClient.customer.delete({
      where: {
        id: "1",
      }
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("feri update");
    expect(customer.email).toBe("feri@gmail.com");
    expect(customer.phone).toBe("08123123");
  });
});