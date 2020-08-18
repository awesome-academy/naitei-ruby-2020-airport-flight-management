class Plane < ApplicationRecord
  has_many :schedules, dependent: :nullify
  class << self
    def import_file file
      spreadsheet = Roo::Spreadsheet.open file
      header = spreadsheet.row 1
      (2..spreadsheet.last_row).each do |i|
        row = [header, spreadsheet.row(i)].transpose.to_h
        create! row unless Plane.where(name: row["name"]).exists?
      end
    end
  end
end
