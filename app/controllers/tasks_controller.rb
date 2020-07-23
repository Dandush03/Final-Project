class TasksController < ApiController
  respond_to :json, :xml

  def index
    @tasks = Task.all
    respond_with(@tasks)
  end
end