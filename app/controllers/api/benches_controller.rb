class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      @errors = @bench.errors
      render :json => @errors, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :long)
  end
end
