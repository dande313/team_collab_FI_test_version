class Api::ReportsController < ApplicationController
  def index
    @reports = Report.order("created_at DESC").all
    render json: @reports
  end

  def show
    @report = Report.find_by(id: params[:id])
    render json: @report
  end

  def create
    @report = Report.new(report_params)
    if @report.save
      render json: @report
    else
      render json: { errors: { message: "Report failed to save." } }
    end
  end

  def update
    @report = Report.find_by(id: params[:id])
    if @report.update(report_params)
      render json: Report.all, status:201
    else
      render json: { message: @report.errors }, status: 400
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
      params.require(:report).permit(:title, :info, :repo_url, :assistance_needed, :user_email, :clicks)
    end
end
