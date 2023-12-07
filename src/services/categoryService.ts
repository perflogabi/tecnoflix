import { Category } from '../models'

export const categoryService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    console.log('Page:', page);
    console.log('PerPage:', perPage);

    const { count, rows } = await Category.findAndCountAll({
      attributes: ['id', 'name', 'position'],
      order: [['position', 'ASC']],
      limit: perPage,
      offset
    })


  console.log('Categories:', rows);
    return {
      categories: rows,
      page,
      perPage,
      total: count
    }
  }
}