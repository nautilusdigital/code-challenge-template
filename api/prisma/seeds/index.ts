import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await Promise.all([
    prisma.userType.deleteMany(),
    prisma.user.deleteMany(),
    prisma.exmapleSelectUtils.deleteMany(),
  ]);

  await Promise.all([
    prisma.userType.createMany({
      data: [
        {
          name: 'admin',
        },
        {
          name: 'user',
        },
      ],
    }),

    prisma.exmapleSelectUtils.createMany({
      data: [
        { name: 'Alberta' },
        { name: 'British Columbia' },
        { name: 'Manitoba' },
        { name: 'New Brunswick' },
        { name: 'Newfoundland and Labrador' },
        { name: 'Northwest Territories' },
        { name: 'Nova Scotia' },
        { name: 'Nunavut' },
        { name: 'Ontario' },
        { name: 'Prince Edward Island' },
        { name: 'Quebec' },
        { name: 'Saskatchewan' },
        { name: 'Yukon' },
      ],
    }),
  ]);

  const adminUserType = await prisma.userType.findFirst({
    where: {
      name: 'admin',
    },
  });

  await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      firstName: 'Aurora',
      lastName: 'Admin-Smith',
      password: '$2b$10$B/.DBv708VckPTbwCCj7UuKCCWibcWjFOR13ivDJmIEaJ/GJ4p6ZS',
      userTypeId: adminUserType!.id,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
