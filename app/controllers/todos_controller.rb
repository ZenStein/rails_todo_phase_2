class TodosController < ApplicationController

  def index
    @todos_list = List.all
  end
  def show
    @list = List.find(params['id'])
    @tasks = @list.tasks
  end
  def create

  end
  def lists_json
    @todos_list = List.all
    render json: @todos_list
  end

  def lists_todos_json(options = {})
    option = options.fetch(options, params['id'])
p option
    #@list = List.find(params['id'])
    @list = List.find(option['id'])
    @tasks = @list.tasks
      render json: @tasks
  end

    def new_list
    list = {name: params['name'], todos_count: 0}
    @list = List.new(list)
    @list.save
    render json: @list
    end
  def new
     @list = List.find(params['list'])
     @todo = Task.new(name: params['name'])
     @todo.save
     @list.tasks << @todo
    render json: @todo
  end
  def destroy
    @tasks = lists_todos_json(Task.where(params['id'].list))
    Task.delete(params['id'])

    render json: @tasks
  end
end
