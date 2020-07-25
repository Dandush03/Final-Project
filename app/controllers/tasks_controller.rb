class TasksController < ApiController
  respond_to :json, :xml

  def index
    tasks = Task.all
    respond_with(tasks)
  end

  def searcher
    tasks = current_user.tasks.where(end: nil).first
    respond_with(tasks)
  end
end