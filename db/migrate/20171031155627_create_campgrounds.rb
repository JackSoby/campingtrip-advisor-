class CreateCampgrounds < ActiveRecord::Migration[5.1]
  def change
    create_table :campgrounds do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :rating
      t.string :country
      t.string :state
      t.string :city
      t.string :zip
      t.string :phone
      t.string :yelp_id
      t.float :lat
      t.float :lng


     t.timestamps
    end
  end
end
