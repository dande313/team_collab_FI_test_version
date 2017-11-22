class AddClicksToReports < ActiveRecord::Migration[5.1]
  def change
    add_column :reports, :clicks, :integer
  end
end