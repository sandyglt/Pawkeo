class CreateSpotSearches < ActiveRecord::Migration[5.2]
  def change
    create_table :spot_searches do |t|
      t.datetime :start_time
      t.decimal :orig_lng
      t.decimal :orig_lat
      t.decimal :dest_lng
      t.decimal :dest_lat
      t.references :user, foreign_key: true
      t.references :spot, foreign_key: true

      t.timestamps
    end
  end
end
