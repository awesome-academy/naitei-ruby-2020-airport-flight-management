Rails.application.routes.draw do
  scope "(:locale)", locale: /ja|vi/ do
    root "static_pages#home"
    get "users/new"
    get "/login", to: "sessions#new"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    resources :users, only: :show
    resources :import_users, only: :create
    resources :import_planes, only: :create
    resources :import_runways, only: :create
    resources :import_schedules, only: :create
  end
end
