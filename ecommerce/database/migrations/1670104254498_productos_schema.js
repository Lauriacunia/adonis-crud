'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.table('productos', (table) => {
      table.string("nombre", 80).notNullable().unique();
      table.string("descripcion", 254);
      table.integer("precio").notNullable();
      table.integer("stock");
    })
  }

  down () {
    this.table('productos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProductosSchema
