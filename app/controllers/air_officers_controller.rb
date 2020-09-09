class AirOfficersController < ApplicationController
  def index
    @air_officers = User.all_air_officers Settings.user.default_enum_air_officer
  end
end
