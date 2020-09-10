class ApplicationController < ActionController::Base
  before_action :set_locale
  before_action :authenticate_user!

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def self.default_url_options
    {locale: I18n.locale}
  end

  private

  def check_admin
    redirect_to root_url unless current_user.admin?
  end
end
