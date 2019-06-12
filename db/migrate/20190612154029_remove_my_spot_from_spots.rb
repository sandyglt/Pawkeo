class RemoveMySpotFromSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :my_spot, :boolean, null: false, default: false
  end
end
