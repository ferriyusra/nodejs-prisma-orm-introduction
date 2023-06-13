import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  // it("should can insert and include", async () => {
  //   const comment = await prismaClient.comment.create({
  //     data: {
  //       customer_id: "2",
  //       title: "test comment insert",
  //       description: "description comment"
  //     },
  //     include: {
  //       customer: true,
  //     }
  //   });

  //   console.log(comment)
  // });

  // it("should can insert and many relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "10",
  //       name: "eka",
  //       email: "eka@gmail.com",
  //       phone: "3932993293920",
  //       comments: {
  //         createMany: {
  //           data: [
  //             {
  //               title: "comment 1 dari eka",
  //               description: "description 1 dari eka",
  //             },
  //             {
  //               title: "comment 2 dari eka",
  //               description: "description 2 dari eka",
  //             },
  //           ]
  //         }
  //       }
  //     },
  //     include: {
  //       comments: true
  //     }
  //   });
  //   console.log(customer)
  // });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "comment"
            }
          }
        }
      },
      include: {
        comments: true,
      }
    });
    console.log(JSON.stringify(customers))
  });
});