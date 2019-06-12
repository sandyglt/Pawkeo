class User < ApplicationRecord
  has_many :addresses
  has_many :cars
  has_many :spot_searches
  has_many :spots, through: :spot_searches
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
