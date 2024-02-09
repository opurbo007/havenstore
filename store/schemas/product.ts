export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'image',
      type: 'array',
      title: 'Product images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'catagory',
      type: 'reference',
      to: {type: 'catagory'},
      title: 'Product Catagory',
    },
  ],
}
