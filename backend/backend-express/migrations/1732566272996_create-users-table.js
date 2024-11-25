
exports.up = (pgm) => {
    // Users
    pgm.createTable('users', {
      id: 'id',
      email: { type: 'varchar(255)', notNull: true },
      password: { type: 'varchar(255)', notNull: true }
    });
}
