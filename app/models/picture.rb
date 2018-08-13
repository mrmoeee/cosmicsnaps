class Picture < ApplicationRecord

  validates :title, :user_id, :description, presence: true

  has_one_attached :photo

  # add belongs to association for user_id
end
