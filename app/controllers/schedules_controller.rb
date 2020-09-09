class SchedulesController < ApplicationController
  before_action :check_air_traffic_officer_and_admin, :find_schedule, only: %i(edit update)
  before_action :list_schedules, only: :index

  def index; end

  def show
    request_schedule = Schedule.find_by id: params[:id]
    authorize! :read, request_schedule
    render json: {request_schedule: request_schedule}
  end

  def edit; end

  def update
    respond_to do |format|
      if Schedule.checkrunway? params.require(:schedule)
        @schedule.update schedule_params
        format.html{redirect_to schedules_url}
      else
        @runway_able = Schedule.find_runwayable params.require(:schedule)[:time]
        format.js {}
        format.json{render :edit, location: @runway_able}
      end
    end
  end

  private

  def schedule_params
    params.require(:schedule).permit Schedule::SCHEDULES_PARAMS
  end

  def check_air_traffic_officer_and_admin
    redirect_to root_url unless current_user.air_traffic_officer? || current_user.admin?
  end

  def find_schedule
    @schedule = Schedule.find_by id: params[:id]
    flash[:danger] = t ".noId" if @schedule.nil?
  end

  def list_schedules
    @q = if current_user.admin?
           Schedule.list_all_schedule_now.ransack params[:q]
         else
           current_user.schedules.ransack params[:q]
         end
    @schedules = @q.result.page(params[:page]).per Settings.pagination.page
  end
end
