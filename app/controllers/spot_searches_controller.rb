class SpotSearchesController < ApplicationController
  def show
    @spot_search = SpotSearch.find(params[:id])
    @address = Address.new
    session[:spot_search_id] = @spot_search.id
    @myaddresses = Address.where(user: current_user)
  end

  def create
  end
end
