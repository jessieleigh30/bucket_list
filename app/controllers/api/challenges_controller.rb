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


end
