class SpotSearchesController < ApplicationController
  def show
    @spot_search = SpotSearch.find(params[:id])
    @address = Address.new
    session[:spot_search_id] = @spot_search.id
    @myaddresses = Address.where(user: current_user).last(3).reverse
    @spots = Spot.where.not(lat: nil, lng: nil, used: true)
    @markers = @spots.map do |spot|
      {
        lat: spot.lat,
        lng: spot.lng
      }
    end
  end

  def create
    @spot_search = SpotSearch.new(spot_search_params)
    raise
  end

  def update
    update_by_search
  end

  private

  def search_params
    params.require(:spot_search).permit(:dest_lat, :dest_lng)
  end

  def update_by_search
    @spot_search = SpotSearch.find(params[:id])
    search_address = params[:spot_search].values.last
    results = Geocoder.search(search_address)
    search_coordinates = results.first.coordinates
    @spot_search.dest_lat = search_coordinates.first
    @spot_search.dest_lng = search_coordinates.last
    if @spot_search.update(search_params)
      redirect_to spot_search_path(@spot_search)
    else
      render :show
    end
  end
end
