import db from '@/app/services/db';

async function main() {
  await db.category.deleteMany();
  await db.product.deleteMany();

  const category1 = await db.category.create({
    data: {
      name: 'Electrónicos',
    },
  });

  console.log(category1);

  // Crear productos
  const product1 = await db.product.create({
    data: {
      name: 'Teléfono',
      description: 'Un teléfono inteligente',
      price: 599.99,
      categoryId: category1.id,
      image: 'https://ideogram.ai/api/images/direct/XT24feCCTl21PnMkPqSSFw.jpg',
    },
  });

  const product2 = await db.product.create({
    data: {
      name: 'Camiseta',
      description: 'Una camiseta cómoda',
      price: 29.99,
      categoryId: category1.id,
      image: 'https://ideogram.ai/api/images/direct/L3IjMW0eQSuVELcBXQYj0Q.jpg',
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    console.log('Seeding finalizado');
    await db.$disconnect();
  });
