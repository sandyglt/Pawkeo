class AddressesController < ApplicationController
  def create
    @address = current_user.addresses.build(address_params)
    @spot_search = SpotSearch.find(session[:spot_search_id])
    if @address.save
      redirect_to spot_search_path(@spot_search)
    else
      render :new
    end
  end

  private

  def address_params
    params.require(:address).permit(:name, :address, :user_id)
  end
end
