json.extract! post, :id, :title, :subtitle, :author, :body, :pathname, :created_at, :updated_at
json.url post_url(post, format: :json)