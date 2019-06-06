class AddSearchAddressToSpotSearches < ActiveRecord::Migration[5.2]
  def change
    add_column :spot_searches, :search_address, :string

  end
end
