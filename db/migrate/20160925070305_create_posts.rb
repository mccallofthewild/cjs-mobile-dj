class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :title
      t.text :subtitle
      t.text :author
      t.text :body
      t.string :pathname

      t.timestamps null: false
    end
  end
end
