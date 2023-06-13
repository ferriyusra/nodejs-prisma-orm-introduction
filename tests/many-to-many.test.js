import { prismaClient } from "../src/prisma-client";

describe("Prisma client", () => {
  // it("should can insert many to many relation", async () => {
  //   const like = await prismaClient.like.create({
  //     data: {
  //       customer_id: "9",
  //       product_id: "P0001"
  //     },
  //     include: {
  //       customer: true,
  //       product: true
  //     }
  //   });

  //   console.log(like)
  // });

  // it("should can find one with many to many relation", async () => {
  //   const customer = await prismaClient.customer.findUnique({
  //     where: {
  //       id: "9"
  //     },
  //     include: {
  //       likes: {
  //         include: {
  //           product: true,
  //         }
  //       }
  //     }
  //   });

  //   console.log(JSON.stringify(customer))
  // });

  // it("should can find many with many to many relation", async () => {
  //   const customer = await prismaClient.customer.findMany({
  //     where: {
  //       likes: {
  //         some: {
  //           product: {
  //             name: {
  //               contains: "A"
  //             }
  //           }
  //         }
  //       }
  //     },
  //     include: {
  //       likes: {
  //         include: {
  //           product: true,
  //         }
  //       }
  //     }
  //   });

  //   console.log(JSON.stringify(customer))
  // });

  // it('should create implicit relation', async () => {
  //   const customer = await prismaClient.customer.update({
  //     where: {
  //       id: "9"
  //     },
  //     data: {
  //       loves: {
  //         connect: [
  //           {
  //             id: "P0001"
  //           },
  //           {
  //             id: "P0002"
  //           }
  //         ]
  //       }
  //     },
  //     include: {
  //       loves: true
  //     }
  //   })

  //   console.log(customer);
  // });

  it('should find many implicit relation', async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A"
            }
          }
        }
      },
      include: {
        loves: true
      }
    });

    console.log(JSON.stringify(customers));
  });
});