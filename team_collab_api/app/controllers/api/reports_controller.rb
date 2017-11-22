class Api::ReportsController < ApplicationController
  def index
    @reports = Report.order("created_at DESC").all
    render json: @reports
  end

  def create
    @report = Report.new(report_params)
    if @report.save
      render json: @report
    else
      render json: { errors: { message: "Report failed to save." } }
    end
  end

  def destroy
    id = (params[:id])
    @report = Report.find(id)
    if @report
      @report.destroy
    else
      render json: { errors: { message: "Report not found." } }
    end
  end

  private
    def report_params
      params.require(:report).permit(:title, :info, :repo_url, :assistance_needed, :user_email)
    end
end
