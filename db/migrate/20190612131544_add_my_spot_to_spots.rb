class AddMySpotToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :my_spot, :boolean, null: false, default: false
  end
end
