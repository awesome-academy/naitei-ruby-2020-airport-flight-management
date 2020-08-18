class Schedule < ApplicationRecord
  belongs_to :runway
  belongs_to :plane
  belongs_to :user
  has_many :logs, dependent: :nullify
  class << self
    def import_file file
      spreadsheet = Roo::Spreadsheet.open file
      header = spreadsheet.row 1
      (2..spreadsheet.last_row).each do |i|
        row = [header, spreadsheet.row(i)].transpose.to_h
        create! row unless Schedule.where(time: row["time"]).exists?
      end
    end
  end
end
