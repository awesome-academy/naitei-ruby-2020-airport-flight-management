class ImportSchedulesController < ApplicationController
  def create
    Schedule.import_file params[:file]
    redirect_to root_url
  end
end
