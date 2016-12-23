json.extract! user, :id, :FirstName, :LastName, :role, :email, :created_at, :updated_at
json.url user_url(user, format: :json)