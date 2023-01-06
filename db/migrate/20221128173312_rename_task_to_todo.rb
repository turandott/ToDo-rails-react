class RenameTaskToTodo < ActiveRecord::Migration[7.0]
  def change
    rename_table :tasks,:todos
  end
end
