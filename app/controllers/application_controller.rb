class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, unless: -> { request.format.json? }
  before_action :authenticate_user!

  def after_sign_in_path_for(resource)
    @spot_search = SpotSearch.new
    @spot_search[:start_time] = Time.new
    @spot_search[:orig_lng] = 48
    @spot_search[:orig_lat] = 2
    @spot_search[:user_id] = current_user[:id]
    @spot_search.save
    spot_search_path(@spot_search)
  end

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end
end
