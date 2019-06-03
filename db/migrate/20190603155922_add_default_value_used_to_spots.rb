class AddDefaultValueUsedToSpots < ActiveRecord::Migration[5.2]
  def change
    change_column :spots, :used, :boolean, null: false, default: false
  end
end
