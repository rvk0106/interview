Rails.application.routes.draw do
  resources :users
  root to: "users#hide_show_roles_users"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
