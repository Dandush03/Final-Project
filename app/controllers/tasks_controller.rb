class TasksController < ApiController
  respond_to :json, :xml

  def index
    tasks = Task.all
    respond_with(tasks)
  end

  def create; end

  def update
    task = Task.find(params[:id])
    unless permitted_update_params[:start] 
      task.end = Time.at(permitted_update_params[:end]/1000)
      return task.save
    end
  end

  def searcher
    tasks = current_user.tasks.where(end: nil).first
    respond_with(tasks)
  end

  private 

  def permitted_update_params
    att_create = %i[end]
    params.require(:task).permit(att_create)
  end
end