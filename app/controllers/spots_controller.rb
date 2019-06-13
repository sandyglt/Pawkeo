class SpotsController < ApplicationController
  def create
    @spot = Spot.new
    @spot.freed_at = Time.new
    @spot.lng = params[:spot][:lng]
    @spot.lat = params[:spot][:lat]
    @spot.save
  end

  def update
    @spot = Spot.find(params[:id])
    @spot.used = false
    @spot.freed_at = Time.new
    # démarre le compteur temps
    @spot.save!
    head :no_content
  end

  def destroy_cloud
    @spot_search = SpotSearch.find(session[:spot_search_id])
    @cloud = Spot.near([params[:spot][:lat], params[:spot][:lng]], 0.02, units: :km)
    @spot_search.update(spot_id: nil)
    @cloud.each &:destroy
    @spot = Spot.new
    @spot.lng = params[:spot][:lng]
    @spot.lat = params[:spot][:lat]
    @spot.used = true
    @spot.taken_at = Time.new
    @spot.save!
    @spot_search.spot = @spot
    @spot_search.save
    render json: { html: render_to_string(partial: 'spots/edit', locals: { spot: @spot }) }
  end

  def around
    @spots = Spot.gathered_spots.near([params[:spot][:lat], params[:spot][:lng]], 1, units: :km).limit(3)
    @waypoints = @spots.map do |spot|
      {
        lat: spot.lat,
        lng: spot.lng
      }
    end
    render json: @waypoints
  end
end
