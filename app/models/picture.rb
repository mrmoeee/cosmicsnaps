class Picture < ApplicationRecord

  validates :title, :user_id, :description, presence: true

  validate :ensure_photo

  has_one_attached :photo

  belongs_to :user 

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

  # add belongs to association for user_id
end
