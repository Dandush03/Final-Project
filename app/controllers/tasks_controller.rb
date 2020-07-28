class TasksController < ApiController
  respond_to :json, :xml

  def index
    tasks = Task.order('start DESC').all
    remove_values = %i[created_at updated_at user_id]
    respond_with(tasks.as_json(except: remove_values))
  end

  def create
    task = current_user.tasks.new(permitted_create_params)
    task.save
  end

  def update
    task = Task.find(params[:id])
    # unless permitted_update_params[:start]
    task.end = Time.at(permitted_update_params[:end] / 1000)
    task.save
    # end
  end

  def search_by_category
    tasks = current_user.tasks.where(permitted_search_params)
    remove_values = %i[created_at updated_at user_id]
    respond_with(tasks.as_json(except: remove_values))
  end

  def searcher
    tasks = current_user.tasks.where(end: nil).first
    respond_with(tasks)
  end

  private

  def permitted_update_params
    att_update = %i[end]
    params.require(:task).permit(att_update)
  end

  def permitted_search_params
    search_date = Time.at(params[:start].to_i / 1000).strftime("%d/%m/%Y")
    search_date = Date.strptime(search_date, '%d/%m/%Y').all_day
    newParams = {:start => search_date, :category_id => params[:category_id] }
  end

  def permitted_create_params
    att_create = %i[name description category_id]
    params.require(:tasks).permit(att_create)
  end
end
