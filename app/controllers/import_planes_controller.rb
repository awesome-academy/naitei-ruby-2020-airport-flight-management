class ImportPlanesController < ApplicationController
  def create
    Plane.import_file params[:file]
    redirect_to root_url
  end
end
