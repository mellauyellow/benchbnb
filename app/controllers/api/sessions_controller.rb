class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render :show
    else
      @errors = ["Invalid credentials"]
      render :json => @errors, status: 422
    end
  end

  def destroy
    if current_user
      logout
      render :json => {}
    else
      @errors = ["404 error"]
      render :json => @errors, status: 404
    end
  end
end
