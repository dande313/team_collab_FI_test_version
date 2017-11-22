class Report < ApplicationRecord
	validates_presence_of :title, :info, :user_email
end