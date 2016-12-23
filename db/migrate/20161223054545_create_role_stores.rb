class CreateRoleStores < ActiveRecord::Migration[5.0]
  def change
    create_table :role_stores do |t|
      t.string :role

      t.timestamps
    end
  end
end
