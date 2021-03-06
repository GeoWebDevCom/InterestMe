class Api::PinsController < ApplicationController
  helper_method :current_user, :pin_sets

  def index
    pins = Pin.where.not(user_id: current_user.id).includes(:user).shuffle
    pin_batches = pin_sets(pins)
    @pins = pin_batches[0]
    @pin_set_count = pin_batches[1]
    render :index
  end

  def new
    @pin = Pin.new()
    user_id = current_user.id
    @boards = User.find(user_id).boards
    render '/api/boards/show'
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
    @board = Board.find(params[:pin][:board_id].to_i)
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
      render :show
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
    params.require(:pin).permit(:board_id, :image_url, :title, :body, :title, :id)
  end
end
