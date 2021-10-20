import prismaClient from "@prisma/index";

class GetMessagesService {
  async execute(limit: number) {
    const messages = await prismaClient.message.findMany({
      take: limit,
      orderBy: {
        created_at: "desc"
      },
      include: {
        user: true
      }
    });

    return messages;
  }
}

export { GetMessagesService };
