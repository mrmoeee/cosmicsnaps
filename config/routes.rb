Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :pictures, only: [:create, :index, :destroy, :show, :update]
    resource :session, only: [:create, :destroy, :show]
  end
end
