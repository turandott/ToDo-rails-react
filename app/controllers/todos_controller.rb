class TodosController < ApplicationController
  before_action :authenticate_user!, :only => [:index, :create, :update, :destroy]
  # before_action :find_todo, :only => [:show, :update, :destroy]
  # before_action :correct_user, only: [:edit, :update, :destroy]
  def index
    # user = User.find_by_id(params[:user_id])
    # todos = user.todos
      if user_signed_in?
        render json: current_user.todos
      else
        render json: {}, status: 401
      end

    #    todos = Todo.all
    # render json: todos
  end

  def create
    # @todo=Todo.create(todo_params)
    # @todo.user=current_user

    if user_signed_in?
      if todo = current_user.todos.create(todo_params)
        render json: todo, status: :created
      else
        render json: todo.errors, status: 400
      end
    else
      render json: {}, status: 401
    end

    # todo = Todo.create(todo_params)
    # render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(todo_params)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    head :no_content, status: :ok
  end

  private
   def find_todo
    @todo=Todo.find(params[:id])
  end
  def todo_params
    params.require(:todo).permit(:id, :title, :description, :status, :created_at, :updated_at, :user_id)
  end
end