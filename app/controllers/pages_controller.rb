class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :designhome]

  def home
    redirect_to user_session_path
  end

  def designhome
  end
end
