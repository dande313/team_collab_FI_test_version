class ReportSerializer < ActiveModel::Serializer
	attributes :id, :title, :info, :repo_url, :assistance_needed, :user_email, :created_at
end