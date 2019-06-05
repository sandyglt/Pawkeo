class Spot < ApplicationRecord
  has_many :spot_searches
  validates :lng, :lat, presence: true
end
