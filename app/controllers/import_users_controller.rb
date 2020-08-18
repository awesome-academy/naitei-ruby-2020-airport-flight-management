class ImportUsersController < ApplicationController
  def create
    User.import_file params[:file]
    redirect_to root_url
  end
end
