class AddressesController < ApplicationController
  def create
    @address = current_user.addresses.build(address_params)
    @spot_search = SpotSearch.find(session[:spot_search_id])
    if @address.save
      respond_to do |format|
        format.html { redirect_to spot_search_path(@spot_search) }
        format.js
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.js
      end
    end
  end

  private

  def address_params
    params.require(:address).permit(:name, :address, :user_id)
  end
end
