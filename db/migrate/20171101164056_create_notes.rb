class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.belongs_to :user
      t.belongs_to :campground
      t.string :text, null: false

      t.timestamps
    end
  end
end
