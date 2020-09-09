class UsersController < ApplicationController
  before_action :check_admin, only: %i(edit update)

  def show
    @user = User.find_by id: params[:id]
    return if @user

    redirect_to root_url
  end

  def edit
    @user = User.find_by id: params[:id]
  end

  def update
    @user = User.find_by id: params[:id]
    if @user.update user_params
      flash[:success] = t ".updated"
      if @user.type_account == Settings.user.default_pilot
        redirect_to pilots_path
      else
        redirect_to air_officers_path
      end
    else
      flash[:success] = t ".update_fail"
      render :edit
    end
  end

  private

  def check_admin
    redirect_to root_url unless  current_user.admin?
  end

  def user_params
    params.require(:user).permit User::USERS_PARAMS
  end
end
