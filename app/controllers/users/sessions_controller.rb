class Users::SessionsController < Devise::SessionsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    render json: {
      status: {code: 200, message: "User signed",
               data: current_user},
      status: :ok
    }
  end
  def respond_to_on_destroy
    render json: { message: "Logged out." }
  end
end