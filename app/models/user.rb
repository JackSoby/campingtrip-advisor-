class User < ApplicationRecord
  has_many :favorites
  has_many :notes

  has_many :campgrounds, through: :favorites



  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
