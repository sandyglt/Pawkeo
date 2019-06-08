class Spot < ApplicationRecord
  has_many :spot_searches
  reverse_geocoded_by :lat, :lng
  validates :lng, :lat, presence: true
end
