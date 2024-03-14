import { PrismaClient } from '@prisma/client';

function getRandomRegionId(regions: { id: string }[]) {
  const randomIndex = Math.floor(Math.random() * regions.length);
  return regions[randomIndex].id;
}

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    prisma.region.deleteMany(),
    prisma.contact.deleteMany(),
    prisma.case.deleteMany(),
    prisma.status.deleteMany(),
    prisma.caseAttachment.deleteMany(),
    prisma.caseCaller.deleteMany(),
  ]);

  await Promise.all([
    prisma.region.createMany({
      data: [
        {
          region: 'Vancouver Island',
        },
        {
          region: 'South Fraser',
        },
        {
          region: 'Vancouver Coastal',
        },
        {
          region: 'Southern Interior',
        },
        {
          region: 'North/Thompson Cariboo',
        },
        {
          region: 'Outside of BC',
        },
      ],
    }),

    prisma.status.createMany({
      data: [
        {
          status: 'Open',
        },
        {
          status: 'Pending Information',
        },
        {
          status: 'In Progress',
        },
        {
          status: 'Closed',
        },
      ],
    }),
  ]);

  const regions = await prisma.region.findMany();
  console.log('🚀 ~ main ~ regions:', regions);

  await prisma.contact.createMany({
    data: [
      {
        id: 'f41ccfd2-89bd-4174-8f0c-d38b0586ab9e',
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@example.com',
        phone: '+1234567890',
        address: '123 Main Street',
        postalCode: '12345',
        city: 'Anytown',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
      {
        id: '13a13e9f-63bd-4f87-8b47-14c1bb19f832',
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
        email: 'jane.smith@example.com',
        phone: '+1987654321',
        address: '456 Oak Street',
        postalCode: '54321',
        city: 'Smalltown',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
      {
        id: 'c7e2c394-b489-44c5-a5bb-96ef42c37494',
        firstName: 'Emily',
        lastName: 'Johnson',
        age: 35,
        email: 'emily.johnson@example.com',
        phone: '+1122334455',
        address: '789 Pine Street',
        postalCode: '98765',
        city: 'Metroville',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
      {
        id: '7df6bbf7-73b3-456e-ae62-f57edcc8b55a',
        firstName: 'Michael',
        lastName: 'Brown',
        age: 45,
        email: 'michael.brown@example.com',
        phone: '+3344556677',
        address: '101 Elm Street',
        postalCode: '11223',
        city: 'Rivertown',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
      {
        id: '2b497413-c5b7-458d-90f2-095be2bb4a2e',
        firstName: 'Sophia',
        lastName: 'Martinez',
        age: 28,
        email: 'sophia.martinez@example.com',
        phone: '+9988776655',
        address: '222 Maple Street',
        postalCode: '33445',
        city: 'Villageton',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
      {
        id: 'eda9b597-32a0-4b7f-9e0a-8d4ed85b4b73',
        firstName: 'William',
        lastName: 'Taylor',
        age: 40,
        email: 'william.taylor@example.com',
        phone: '+5566778899',
        address: '333 Oak Street',
        postalCode: '55443',
        city: 'Greenville',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
      {
        id: 'c065ee6a-020d-421d-8a46-7f0cfb85b98d',
        firstName: 'Olivia',
        lastName: 'Rodriguez',
        age: 32,
        email: 'olivia.rodriguez@example.com',
        phone: '+1122334455',
        address: '456 Pine Street',
        postalCode: '66778',
        city: 'Harbortown',
        regionId: getRandomRegionId(regions),
        regionOther: null,
        createdAt: '2024-03-14T12:00:00Z',
      },
    ],
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
