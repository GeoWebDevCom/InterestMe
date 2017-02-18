class Api::SinglePinShowsController < ApplicationController

  helper_method :current_user

  def show
    @pin = Pin.find(params[:id])
    @current_user = current_user
    pin_query = current_user.favorites.where(:pin_id => @pin.id)
    if pin_query.length > 0
      @isFavorited = true
    else
      @isFavorited = false
    end
    render :show
  end

end
