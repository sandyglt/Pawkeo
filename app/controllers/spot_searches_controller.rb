class SpotSearchesController < ApplicationController
  def show
    @spot_search = SpotSearch.find(params[:id])
    @address = Address.new
    session[:spot_search_id] = @spot_search.id
    @myaddresses = Address.where(user: current_user)
    @spots = Spot.where.not(lat: nil, lng: nil, used: true)
    @markers = @spots.map do |spot|
      {
        lat: spot.lat,
        lng: spot.lng
      }
    end
  end

  def create
  end
end
