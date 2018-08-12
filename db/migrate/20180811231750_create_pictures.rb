class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :pictures, :user_id
  end
end
