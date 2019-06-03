class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.decimal :lng
      t.decimal :lat
      t.boolean :used
      t.string :size
      t.datetime :taken_at
      t.datetime :freed_at

      t.timestamps
    end
  end
end
