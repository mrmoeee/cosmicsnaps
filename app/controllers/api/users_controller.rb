class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    @user.profile_pic.attach(io: File.open("./app/assets/images/star2.jpg"), filename: "star2.jpg")
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :profile_pic)
  end
end
