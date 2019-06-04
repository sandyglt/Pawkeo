class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :designhome]

  def home
  end

  def designhome
  end
end
