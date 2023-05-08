import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17250',
      name: 'White T-shirt',
      price: 15,
      images: 'white-tshirt-1.jpg, white-tshirt-2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17251',
      name: 'Black pants',
      price: 30,
      images: 'black-pants-1.jpg, black-pants-2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17252',
      name: 'Olive shorts',
      price: 25,
      images: 'olive-shorts-1.jpg, olive-shorts-2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam eros. Maecenas mollis dui non metus aliquam, semper commodo sem lobortis. Sed quam ligula, porta eget est sit amet.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17253',
      name: 'White shirt',
      price: 22,
      images: 'white-shirt-1.jpeg, white-shirt-2.jpeg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17254',
      name: 'Black shirt',
      price: 22,
      images: 'black-shirt-1.jpg, black-shirt-2.jpg, black-shirt-3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17255',
      name: 'White sweatpants',
      price: 20,
      images: 'white-sweatpants-1.jpg, white-sweatpants-2.jpg, white-sweatpants-3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam eros. Maecenas mollis dui non metus aliquam, semper commodo sem lobortis. Sed quam ligula, porta eget est sit amet.',
    },
  ]
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();