class SpotsController < ApplicationController
  def create
    @spot = Spot.new
    @spot.freed_at = Time.new
    @spot.lng = params[:spot][:lng]
    @spot.lat = params[:spot][:lat]
    @spot.save
  end

  def update
    @spot = Spot.find(params[:spot_search_id])
    @spot.used = false
    @spot.freed_at = Time.new
    # démarre le compteur temps
    @spot.save!
    render json: @spot
  end

  def destroy_cloud
    @spot_search = SpotSearch.find(params[:spot_search_id])
    @cloud = Spot.near([params[:spot][:lat], params[:spot][:lng]], 0.5, units: :km)
    @cloud.destroy_all
    create
    @spot.used = true
    @spot.taken_at = Time.new
    @spot.save!
    render json: @spot
  end

  def around
    @spot_search = SpotSearch.find(params[:spot_search_id])
    @spots = Spot.gathered_spots.near([params[:spot][:lat], params[:spot][:lng]], 0.5, units: :km).limit(3)
    @waypoints = @spots.map do |spot|
      {
        lat: spot.lat,
        lng: spot.lng
      }
    end
    render json: @waypoints
  end
end
