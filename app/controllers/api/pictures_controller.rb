class Api::PicturesController < ApplicationController
  def index
    @pictures = Picture.all
    render :index
  end

  def show

  end

  def create
  end

  def destroy
  end

  private

  def post_params
    params.require(:picture).permit(:title, :description)
  end
end
