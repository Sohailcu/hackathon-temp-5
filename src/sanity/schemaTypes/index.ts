import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './productSchema'
import { Shippment } from './shipmentSchema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product, Shippment],
}
