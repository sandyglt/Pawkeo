class Spot < ApplicationRecord
  has_many :spot_searches
  validates :lng, :lat, :used, presence: true
end
