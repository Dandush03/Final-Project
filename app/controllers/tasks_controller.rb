class TasksController < ApiController
  respond_to :json, :xml

  def index
    tasks = current_user.tasks.order('start DESC').all
    remove_values = %i[created_at updated_at user_id]
    respond_with(tasks.as_json(except: remove_values))
  end

  def create
    search_active = current_user.tasks.where(end: nil).first
    task = current_user.tasks.new(permitted_create_params)
    task.save if search_active.nil?
  end

  def update
    task = current_user.tasks.find(params[:id])
    # unless params[:start]
    task.end = Time.at(permitted_update_params[:end] / 1000)
    task.save
    # end
  end

  def search_by_category
    tasks = current_user.tasks.where(search_params_scope)
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

  def search_params_scope
    range = case params[:range]
            when 7 then Time.now.all_week
            when 30 then Time.now.all_month
            else Time.now.all_day
            end
    { start: range, category_id: params[:category_id] }
  end

  def permitted_create_params
    att_create = %i[name description category_id]
    params.require(:tasks).permit(att_create)
  end
end
