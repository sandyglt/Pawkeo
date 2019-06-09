class SpotsController < ApplicationController
  def create
    @spot = Spot.new
    @spot.lng = params[:spot][:lng]
    @spot.lat = params[:spot][:lat]
    @spot.save
  end

  def update
  end

  def around
    @spots = Spot.near([params[:spot][:lat], params[:spot][:lng]], 0.5, units: :km).limit(3)
    @waypoints = @spots.map do |spot|
      {
        lat: spot.lat,
        lng: spot.lng
      }
    end
  end
end
