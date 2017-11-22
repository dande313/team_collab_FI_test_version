class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.string :title
      t.string :info
      t.string :repo_url
      t.string :user_email
      t.boolean :assistance_needed, :default => false
      t.timestamps
    end
  end
end
