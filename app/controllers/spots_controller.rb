class SpotsController < ApplicationController
  def create
    @spot = Spot.new ()

    @spot.lng = params[:spot][:lng]
    @spot.lat = params[:spot][:lat]
    
    @spot.save
      
  end

  def update
  end
end
