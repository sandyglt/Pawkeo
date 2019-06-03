class SpotSearch < ApplicationRecord
  belongs_to :user
  belongs_to :spot
  validates :start_time, :orig_lng, :orig_lat, :dest_lng, :dest_lat, presence: true
end
