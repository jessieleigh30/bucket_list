class Api::ChallengesController < ApplicationController

  def index
    render json: Challenge.all
  end

  def create

  end
  
  def update
  end

  def destroy
  end

  private

  def challenge_params
    params.require(:challenge).permit(:name, :complete)
  end

end
