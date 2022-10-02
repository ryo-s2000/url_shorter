Rails.application.routes.draw do
  namespace :api do
    post '/url/shorten', to: 'events#shorten'
    # except api
    get '/:uniqueHash', to: 'events#show'
  end
end
