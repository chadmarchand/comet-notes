/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable('note', {
    id: 'id',
    content: { type: 'varchar(1000)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  })
};
