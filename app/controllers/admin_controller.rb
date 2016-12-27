class AdminController < ApplicationController
  def home
    check_if_current_user_is_clancy
    @posts = Post.all
  end
  
  private
    def check_if_current_user_is_clancy
      if current_user.email.downcase != "clancy@cjyourdj.com"
        redirect_to "/"
      end
    end
end
