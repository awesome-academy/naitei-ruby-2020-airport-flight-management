class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  VALID_EMAIL_REGEX = Settings.user.email_regex

  USERS_PARAMS = %i(name staff_code email).freeze

  enum type_account: {admin: 0, air_traffic_officer: 1, pilot: 2}

  has_many :schedules, dependent: :nullify

  before_save :downcase_email

  scope :all_pilots, ->(type_account){where("users.type_account = ?", type_account)}
  scope :all_air_officers, ->(type_account){where("users.type_account = ?", type_account)}

  class << self
    def check_data_validate? data
      return true unless User.where(email: data["email"]).exists?

      false
    end

    def import_file file
      spreadsheet = Roo::Spreadsheet.open file
      row_errors = Array.new
      header = spreadsheet.row Settings.import_file.default_header
      (2..spreadsheet.last_row).each do |i|
        row = [header, spreadsheet.row(i)].transpose.to_h
        if check_data_validate? row
          create! row
        else
          row_errors << i
        end
      end
      row_errors
    end
  end

  def downcase_email
    email.downcase!
  end
end
