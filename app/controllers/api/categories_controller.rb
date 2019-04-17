class Api::CategoriesController < ApplicationController

  def index 
    render json: Category.all
  end

  def create
  end

  def update
  end

  def delete
  end

    private

    def set_category
      @category = Category.find(params[:id])
    end

    def category_params
      params.require(:categories).permit(:name, :total_challenges, :complete_challenges)
    end
end
