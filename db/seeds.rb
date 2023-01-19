# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# 20.times do |i|``
#   Todo.create(title: "Task ##{i}", description: "Today that date", status: "active", user_id:1)
# end
user = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')
todos = [
  {
    title: 'My first post',
    description: 'The start of something special',
    status: 'active'
  },
  {
    title: 'My second post',
    description: 'The start of something special',
    status: 'active'  },
  {
    title: 'Oh my god, Yeah!!!',
    description: 'The start of something special',
    status: 'active'  }
]
todos.each do |todo_hash|
  user.todos.create(todo_hash)
end
