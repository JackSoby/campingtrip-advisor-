class Campground < ApplicationRecord
   has_many :favorites
   has_many :notes
   has_many :users, through: :favorites
end
