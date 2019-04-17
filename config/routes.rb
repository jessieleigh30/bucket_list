Rails.application.routes.draw do
  
  namespace :api do
    resources :challenges
  end
end
