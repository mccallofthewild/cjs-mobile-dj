class Post < ActiveRecord::Base
    validates :pathname, uniqueness: true
    def to_param
        pathname
    end
end
