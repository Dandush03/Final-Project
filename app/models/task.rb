class Task < ApplicationRecord
  validates :name, presence: true, length: { maximum: 30 }
  validates :description, length: { maximum: 255 }

  before_save :task_create
  before_update :task_close

  def task_create
    self.start = Time.now if start.nil?
  end

  def task_close
    return if start.nil? || self.end.nil?

    total = self.end - start
    self.minutes = (total / 60).floor % 60
    self.seconds = total.to_i % 60
    self.hours = ((total / 60).floor / 60)
  end

  belongs_to :category
  belongs_to :user
end

# task = Task.new(name: 'test', description: 'test', user_id: 1, category_id: 1)
# task.valid?
# task.save
# task.errors.full_messages

# task = Task.first && task.end = Time.now() && task.save
