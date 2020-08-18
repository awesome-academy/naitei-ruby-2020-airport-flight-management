class ChangeType < ActiveRecord::Migration[6.0]
  def change
  	rename_column :users, :type, :type_account
  end
end
