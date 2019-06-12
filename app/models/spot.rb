class Spot < ApplicationRecord
  has_many :spot_searches
  reverse_geocoded_by :lat, :lng
  validates :lng, :lat, presence: true

  def self.gathered_spots
    spots = self.where.not(lat: nil, lng: nil, used: true)
    results = []

    spots.each do |spot|
      unless results.flatten.include?(spot)
        cloud = Spot.near([spot.lat, spot.lng], 0.01, units: :km)
        results << cloud
      end
    end

    sample = results.map { |group| group.sample }
    

    sample.map { |spot| spot.id } 

    self.where(id: sample)
  end
  
end
