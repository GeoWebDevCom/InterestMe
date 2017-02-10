class Api::PinsController < ApplicationController
  helper_method :current_user

  def index
    pins = Pin.where.not(user_id: current_user.id.to_s).shuffle
    if (pins.length > 40)
      @pins = pins[0..39]
    else
      @pins = pins
    end
    render :index
  end

  def new
    @pin = Pin.new()
    user_id = current_user.id
    @boards = User.find(user_id).boards
    render '/api/boards/show'
  end

  def create
    # debugger
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
    if @pin.save
      @pins = Pin.where(:board_id => @pin.board_id)
      render "/api/boards/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update_attributes(pin_params)
      render "/api/boards/show"
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    @current_user = current_user
    @board_pins = @board.pins.order(:created_at)
    render :show
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin
      @pin.destroy
      render :index
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:board_id, :image_url, :title, :body, :title)
  end
end
