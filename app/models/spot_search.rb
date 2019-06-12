class SpotSearch < ApplicationRecord
  belongs_to :user
  belongs_to :spot, optional: true
  geocoded_by :search_address
  after_validation :geocode, if: :will_save_change_to_search_address?
  validates :start_time, :orig_lng, :orig_lat, presence: true
end
