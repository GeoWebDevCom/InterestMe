class Api::FavoritesController < ApplicationController
  helper_method :current_user
  def create
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
    @favorite.pin_id = favorite_params[:pin_id].to_i
    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.where(user_id: current_user.id).where(pin_id: favorite_params[:pin_id])
    if @favorite
      @favorite.destroy_all
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def show
    @pins = current_user.favorites
    pin_json = @pins.as_json
    i = 0
    while i < pin_json.length
      pins_json[i]["username"] = @pins[i].user.username
      pins_json[i]["profile_picture"] = @pins[i].user.profile_picture
      i += 1
    end
    @pins = pins_json
    render :show
  end
  private
  def favorite_params
    params.require(:pin).permit(:pin_id)
  end

end
