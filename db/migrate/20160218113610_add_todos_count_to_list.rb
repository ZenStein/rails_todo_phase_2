class AddTodosCountToList < ActiveRecord::Migration
  def change
    add_column :lists, :todos_count, :integer
  end
end
