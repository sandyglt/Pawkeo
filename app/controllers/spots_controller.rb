class SpotsController < ApplicationController
  def create
    @spot = Spot.new
    @spot.lng = params[:spot][:lng]
    @spot.lat = params[:spot][:lat]
    @spot.save
  end

  def update
    @spot.used = false
    @spot.freed_at = Time.new.to_i
    # démarre le compteur temps
    @spot.save
  end

  def destroy_cloud
    @spot_search = SpotSearch.find(params[:spot_search_id])
    @cloud = Spot.near([params[:spot][:lat], params[:spot][:lng]], 0.01, units: :km)
    @cloud.destroy
    create
    @spot.used = true
    @spot.taken_at = Time.new.to_i
    @spot.save
    render json: @spot
  end

  def around
    @spot_search = SpotSearch.find(params[:spot_search_id])
    @spots = Spot.near([params[:spot][:lat], params[:spot][:lng]], 0.5, units: :km).limit(3)
    @waypoints = @spots.map do |spot|
      {
        lat: spot.lat,
        lng: spot.lng
      }
    end
    render json: @waypoints
  end
end
