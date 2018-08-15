class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    render :index
  end

  def show

  end

  def create
    @picture = Picture.new(picture_params)
    @picture.user_id = current_user.id
    if @picture.save!
      render :show
    else
      render json: @picture.errors.full_messages
    end
  end

  def destroy

  end

  private

  def picture_params
    params.require(:picture).permit(:title, :description, :photo)
  end
end
