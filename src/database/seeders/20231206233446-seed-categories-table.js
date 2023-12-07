'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      console.log('Start seeding categories...');
      const [categoriesBefore] = await queryInterface.sequelize.query('SELECT * FROM categories;');
      console.log('Categories before seeding:', categoriesBefore);

      await queryInterface.bulkInsert('categories', [
        { name: 'Tecnologias Back-end', position: 10, created_at: new Date(), updated_at: new Date() },
        { name: 'Tecnologias Front-end', position: 20, created_at: new Date(), updated_at: new Date() },
        { name: 'Ferramentas de Desenvolvimento', position: 30, created_at: new Date(), updated_at: new Date() },
        { name: 'Soft-skills', position: 40, created_at: new Date(), updated_at: new Date() },
        { name: 'Carreira', position: 50, created_at: new Date(), updated_at: new Date() },
      ]);

      const [categoriesAfter] = await queryInterface.sequelize.query('SELECT * FROM categories;');
      console.log('Categories after seeding:', categoriesAfter);

      console.log('Categories seeded successfully.');
    } catch (error) {
      console.error('Seeder error:', error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
