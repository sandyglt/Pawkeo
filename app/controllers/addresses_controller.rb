class AddressesController < ApplicationController
  def create
    Address.last.destroy if Address.last
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

  def destroy
    @address = Address.find(params[:id])
    @spot_search = SpotSearch.find(session[:spot_search_id])
    @address.destroy
    @last_address = Address.last
    respond_to do |format|
      format.html do
        redirect_to spot_search_path(@spot_search)
      end
      format.js
    end
end

  private

  def address_params
    params.require(:address).permit(:name, :address, :user_id)
  end
end
