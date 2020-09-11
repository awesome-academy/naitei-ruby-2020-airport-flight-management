class ImportUsersController < ApplicationController
  before_action :check_admin, only: :create

  def create
    row_errors = User.import_file params[:file]
    if row_errors.empty?
      flash[:success] = t ".success"
      redirect_to pilots_path
    else
      @row_errors = row_errors.to_a
    end
  end
end
