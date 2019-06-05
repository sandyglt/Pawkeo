class DecimalsToFloats < ActiveRecord::Migration[5.2]
  def change
    change_column :spots, :lng, :float
    change_column :spots, :lat, :float
    change_column :spot_searches, :orig_lng, :float
    change_column :spot_searches, :orig_lat, :float
    change_column :spot_searches, :dest_lng, :float
    change_column :spot_searches, :dest_lat, :float
    change_column :addresses, :latitude, :float
    change_column :addresses, :longitude, :float
  end
end
