class Api::FavoritesController < ApplicationController
  helper_method :current_user
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user_id = current_user.id
    if @favorite.save
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger
    @favorite = Favorite.where(user_id: current_user.id, pin_id: favorite_params)
    @favorite.destroy
  end

  private
  def favorite_params
    params.require(:pin_id)
  end

end
