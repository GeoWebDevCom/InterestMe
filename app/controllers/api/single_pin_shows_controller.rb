class Api::SinglePinShowsController < ApplicationController

  helper_method :current_user

  def show
    @pin = Pin.find(params[:id])
    @current_user = current_user
    debugger
    @is_favorited = current_user.favorites.include?(@pin)
    render :show
  end

end
