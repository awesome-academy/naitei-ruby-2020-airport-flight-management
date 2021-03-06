require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module NaiteiRuby2020AirportFlightManagement
  class Application < Rails::Application
    config.load_defaults 6.0
    config.i18n.load_path += Dir[Rails.root.join("config", "locales", "**", "*.{rb,yml}")]
    config.i18n.available_locales = [:ja, :vi]
    config.i18n.default_locale = :vi
    config.time_zone = "Asia/Ho_Chi_Minh"

    config.paths.add File.join("app", "api"), glob: File.join("**", "*.rb")
    config.autoload_paths += Dir[Rails.root.join("app", "api", "*")]
  end
end
