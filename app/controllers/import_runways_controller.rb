class ImportRunwaysController < ApplicationController
  def create
    Runway.import_file params[:file]
    redirect_to root_url
  end
end
