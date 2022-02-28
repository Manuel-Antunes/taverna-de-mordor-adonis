import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sessions extends BaseSchema {
  protected tableName = 'sessions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('event_board_id')
        .notNullable()
        .references('id')
        .inTable('event_boards')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.integer('time').notNullable()
      table.dateTime('date').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
