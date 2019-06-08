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
    @spots = Spot.near([params[:spot][:lat], params[:spot][:lng]], 0.1, units: :km).limit(3)
    @waypoints = Array.new
    @spots.each do |spot|
      @waypoints << "#{spot.lat}%2C#{spot.lng}"
    end
    raise
  end
end
