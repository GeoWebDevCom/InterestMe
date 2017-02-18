class AddIndexToFavorites < ActiveRecord::Migration
  def change
    add_index :favorites, :user_id
    add_index :favorites, :pin_id
  end
end
